import type { Category, MachineCard, MachineDetailCard, MachineFullCard } from '@/shared/types'

const catalogDetailsMock: MachineDetailCard[] = [
    { id: 'detail-bucket-pro', name: 'Усиленный ковш PRO', photo: '/images/details/bucket-pro.jpg' },
    { id: 'detail-hydraulic-max', name: 'Гидравлика MAX', photo: '/images/details/hydraulic-max.jpg' },
    { id: 'detail-cabin-comfort', name: 'Кабина Comfort+', photo: '/images/details/cabin-comfort.jpg' },
]

const bucketPro = catalogDetailsMock[0]!
const hydraulicMax = catalogDetailsMock[1]!
const cabinComfort = catalogDetailsMock[2]!

export const catalogCategoriesMock: Category[] = [
    {
        id: 'excavators',
        name: 'Экскаваторы',
        photo: '/images/categories/excavators.jpg',
        video: 'https://example.com/videos/excavators.mp4',
    },
    {
        id: 'loaders',
        name: 'Погрузчики',
        photo: '/images/categories/loaders.jpg',
        video: 'https://example.com/videos/loaders.mp4',
    },
]

export const catalogCategoryMachinesMock: Record<string, MachineCard[]> = {
    excavators: [
        { id: 'machine-rx200', name: 'Promtech RX200', photo: '/images/machines/rx200/cover.jpg' },
        { id: 'machine-rx340', name: 'Promtech RX340', photo: '/images/machines/rx340/cover.jpg' },
    ],
    loaders: [{ id: 'machine-lm75', name: 'Promtech LM75', photo: '/images/machines/lm75/cover.jpg' }],
}

export const catalogMachinesMock: Record<string, MachineFullCard> = {
    'machine-rx200': {
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
    'machine-rx340': {
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
    'machine-lm75': {
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
