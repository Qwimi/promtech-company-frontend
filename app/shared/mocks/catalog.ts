import type { Category, MachineCard, MachineDetailCard, MachineFullCard } from '@/shared/types'

const catalogDetailsMock: MachineDetailCard[] = [
    { id: 'detail-bucket-pro', name: 'Усиленный ковш PRO', photo: '/images/details/bucket-pro.jpg' },
    { id: 'detail-hydraulic-max', name: 'Гидравлика MAX', photo: '/images/details/hydraulic-max.jpg' },
    { id: 'detail-cabin-comfort', name: 'Кабина Comfort+', photo: '/images/details/cabin-comfort.jpg' },
]

const bucketPro = catalogDetailsMock[0]!
const hydraulicMax = catalogDetailsMock[1]!
const cabinComfort = catalogDetailsMock[2]!

export const catalogCategoriesMock: Category[] =  [
    { id: '1', name: 'Машины специального назначения', photo: '/images/catalog-image-1.png', video: 'https://www.w3schools.com/tags/mov_bbb.mp4',},
    { id: '2', name: 'Подземные буровые установки', photo: '/images/catalog-image-2.png', video: '', },
    { id: '3', name: 'Доставка персонала', photo: '/images/catalog-image-3.png', video: '', },
    { id: '4', name: 'Доставка материала и оборудования', photo: '/images/catalog-image-4.png', video: '', },
    { id: '5', name: 'Погрузочно-доставочные машины (ПДМ)', photo: '/images/catalog-image-5.png', video: '', },
];

export const catalogCategoryMachinesMock: Record<string, MachineCard[]> = {
    excavators: [
        { id: 'machine-rx200', name: 'Promtech RX200', photo: '/images/machines/rx200/cover.jpg' },
        { id: 'machine-rx340', name: 'Promtech RX340', photo: '/images/machines/rx340/cover.jpg' },
    ],
    loaders: [{ id: 'machine-lm75', name: 'Promtech LM75', photo: '/images/machines/lm75/cover.jpg' }],
}

export const catalogMachinesMock: Record<number, MachineFullCard> = {
    0: {
        id: '0',
        name: 'Одностреловые проходческие самоходные буровые установки РС3-05, РС3-01, РС3-10',
        models: ['РС3-05', 'РС3-01', 'РС3-10'],
        applying: 'Бурение шпуров при проходческих работах осуществляемых буровзрывным способом,возведение анкерной крепи, геологоразведочное бурение.',
        description: [
            'Обуривание забоя с сечением до 40 м2',
            'Маневренное шасси с шарнирно-сочлененной рамой позволяет осуществлять перемещение в небольших туннелях',
            'Кабина оператора выполнена по стандартам FOPS/ROPS',
            'Дизельный двигатель с низким уровнем выбросов сочетает высокую мощность, незначительное воздействие на окружающую среду и низкий уровень шума',
            'Удобная для обслуживания конструкция, благодаря чему максимально снижается время простоя',
            'Гидростатическая трансмиссия обеспечивает плавность хода',
        ],
        photos: ['/images/machines/rx200/photo-1.jpg', '/images/machines/rx200/photo-2.jpg'],
        details: [bucketPro, hydraulicMax],
        table: {
            RX200: {
                'Эксплуатационная масса': '21 600 кг',
                'Мощность двигателя': '186 кВт',
                'Объём ковша': '1.25 м³',
            },
            RX200E: {
                'Эксплуатационная масса': '22 100 кг',
                'Мощность двигателя': '195 кВт',
                'Объём ковша': '1.35 м³',
            },
        },
    },
    1: {
        id: 'machine-rx200',
        name: 'Promtech RX200',
        models: ['RX200', 'RX200E'],
        applying: 'Карьерные работы, инфраструктурные проекты',
        description: [
            'Высокая производительность при низком расходе топлива',
            'Интеллектуальная система охлаждения',
        ],
        photos: ['/images/machines/rx200/photo-1.jpg', '/images/machines/rx200/photo-2.jpg'],
        details: [bucketPro, hydraulicMax],
        table: {
            RX200: {
                'Эксплуатационная масса': '21 600 кг',
                'Мощность двигателя': '186 кВт',
                'Объём ковша': '1.25 м³',
            },
            RX200E: {
                'Эксплуатационная масса': '22 100 кг',
                'Мощность двигателя': '195 кВт',
                'Объём ковша': '1.35 м³',
            },
        },
    },
    2: {
        id: 'machine-rx340',
        name: 'Promtech RX340',
        models: ['RX340'],
        applying: 'Горнодобыча, крупные стройки',
        description: [
            'Усиленная ходовая часть для тяжёлых условий',
            'Система мониторинга телеметрии в реальном времени',
        ],
        photos: ['/images/machines/rx340/photo-1.jpg'],
        details: [cabinComfort],
        table: {
            RX340: {
                'Эксплуатационная масса': '34 200 кг',
                'Мощность двигателя': '245 кВт',
                'Объём ковша': '1.6 м³',
            },
        },
    },
    3: {
        id: 'machine-lm75',
        name: 'Promtech LM75',
        models: ['LM75', 'LM75S'],
        applying: 'Логистика и складские комплексы',
        description: [
            'Компактные габариты для работы в ограниченных пространствах',
            'Система быстрой смены навесного оборудования',
        ],
        photos: ['/images/machines/lm75/photo-1.jpg'],
        details: [hydraulicMax],
        table: {
            LM75: {
                'Грузоподъёмность': '7 500 кг',
                'Высота подъёма': '4.5 м',
            },
            LM75S: {
                'Грузоподъёмность': '8 000 кг',
                'Высота подъёма': '5.2 м',
            },
        },
    },
}



