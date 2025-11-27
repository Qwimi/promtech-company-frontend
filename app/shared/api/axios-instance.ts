import axios, { type AxiosInstance } from 'axios';


const createAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Accept: 'application/json',
        },
    });

    // Настройка интерсепторов
    instance.interceptors.request.use(
        (config) => {
            // проверка на наличие токена
            // if (token) {
            //   config.headers.Authorization = `Bearer ${token}`;
            // }
            return config;
        },
    );

    instance.interceptors.response.use(
        (response) => {
            return response.data;
        },

        async (error) => {
            // Тут можно добавить обработчик ошибок

            const originalRequest = error.config;

            // на случай, если в будущем понадобится авторизация
            if (error.response.status === 401 && !originalRequest.isRetry) {
                originalRequest.isRetry = true;
                try {
                    // получить новый токен
                    return instance(originalRequest);
                } catch (e) {
                    // logout
                    return Promise.reject(e);
                }
            }
            return Promise.reject(error);
        },
    );

    return instance;
};

export const axiosInstance = createAxiosInstance();