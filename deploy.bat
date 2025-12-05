@echo off
REM Включаем UTF-8 для корректного отображения
@chcp 65001 >nul
setlocal

REM ================= НАСТРОЙКИ =================
set REPO_NAME=promtech-company-frontend
REM =============================================

echo.
echo === СИСТЕМА СБОРКИ DOCKER ===
echo.

:ask_login
REM 1. Запрашиваем логин прямо в консоли
set /p DOCKER_USER="Введите ваш логин Docker Hub (на английском): "

REM Проверка, что логин не пустой
if "%DOCKER_USER%"=="" goto ask_login

REM Формируем имя образа
set IMAGE=%DOCKER_USER%/%REPO_NAME%

echo.
echo [1/4] Авторизация...
REM Если вы уже залогинены, он просто напишет "Succeeded".
REM Если нет — попросит пароль.
docker login
if %errorlevel% neq 0 (
    echo [ERROR] Ошибка входа в Docker Hub.
    pause
    exit /b 1
)

echo.
echo [2/4] Проверка версий для %IMAGE%...

REM === ПОЛУЧЕНИЕ ВЕРСИИ (PowerShell) ===
REM Ищет теги v*, находит максимальный, если нет — выдает 0
for /f "usebackq delims=" %%I in (`powershell -NoProfile -Command "$url = 'https://hub.docker.com/v2/repositories/%DOCKER_USER%/%REPO_NAME%/tags/?page_size=100'; try { $res = Invoke-RestMethod -Uri $url -ErrorAction Stop; $max = $res.results.name | Where-Object { $_ -match '^v\d+$' } | ForEach-Object { [int]($_ -replace 'v','') } | Measure-Object -Maximum; if ($max.Maximum) { Write-Output $max.Maximum } else { Write-Output 0 } } catch { Write-Output 0 }"`) do set CURRENT_NUM=%%I

set /a NEXT_NUM=%CURRENT_NUM%+1
set NEXT_VERSION=v%NEXT_NUM%

echo Текущая макс. версия: v%CURRENT_NUM%
echo Новая версия будет:   %NEXT_VERSION%

echo.
echo [3/4] Сборка образа %IMAGE%:%NEXT_VERSION% ...

docker build -t %IMAGE%:%NEXT_VERSION% .
if %errorlevel% neq 0 goto :error

echo.
echo [4/4] Публикация (Push) в Docker Hub...

REM Пушим конкретную версию
docker push %IMAGE%:%NEXT_VERSION%
if %errorlevel% neq 0 goto :error

REM Обновляем тег latest
docker tag %IMAGE%:%NEXT_VERSION% %IMAGE%:latest
docker push %IMAGE%:latest
if %errorlevel% neq 0 goto :error

echo.
echoString ==============================================
echo [УСПЕХ] Образ опубликован: %IMAGE%:%NEXT_VERSION%
echoString ==============================================
pause
exit /b 0

:error
echo.
echo [ОШИБКА] Что-то пошло не так. Смотри лог выше.
pause
exit /b 1