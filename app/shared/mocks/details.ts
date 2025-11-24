import type { DetailCard, DetailFull } from '@/shared/types'

export const detailsListMock: DetailCard[] = [
    { id: 'detail-bucket-pro', name: 'Усиленный ковш PRO', photo: '/images/details/bucket-pro.jpg' },
    { id: 'detail-hydraulic-max', name: 'Гидравлика MAX', photo: '/images/details/hydraulic-max.jpg' },
    { id: 'detail-cabin-comfort', name: 'Кабина Comfort+', photo: '/images/details/cabin-comfort.jpg' },
]

export const detailsFullMock: Record<string, DetailFull> = {
    'detail-bucket-pro': {
        id: 'detail-bucket-pro',
        name: 'Усиленный ковш PRO',
        models: ['RX200', 'RX340'],
        applying: 'Работа с тяжёлыми породами и мерзлыми грунтами',
        description: ['Износостойкая сталь HARDOX', 'Сменные зубья с индикаторами износа'],
        photos: ['/images/details/bucket-pro/photo-1.jpg'],
        table: {
            RX200: {
                'Ширина ковша': '1.4 м',
                'Объём': '1.35 м³',
            },
            RX340: {
                'Ширина ковша': '1.6 м',
                'Объём': '1.6 м³',
            },
        },
    },
    'detail-hydraulic-max': {
        id: 'detail-hydraulic-max',
        name: 'Гидравлика MAX',
        models: ['RX200', 'LM75'],
        applying: 'Повышенная точность и плавность движений рабочего оборудования',
        description: ['Мультисекционные распределители', 'Электронное управление под нагрузкой'],
        photos: ['/images/details/hydraulic-max/photo-1.jpg'],
        table: {
            RX200: {
                'Рабочее давление': '34.5 МПа',
                'Производительность насоса': '2x220 л/мин',
            },
            LM75: {
                'Рабочее давление': '30 МПа',
                'Производительность насоса': '180 л/мин',
            },
        },
    },
    'detail-cabin-comfort': {
        id: 'detail-cabin-comfort',
        name: 'Кабина Comfort+',
        models: ['RX200', 'RX340', 'LM75'],
        applying: 'Повышение комфорта оператора при длительных сменах',
        description: ['Пневмоподвеска кресла', 'Двойное остекление и климат-контроль'],
        photos: ['/images/details/cabin-comfort/photo-1.jpg'],
        table: {
            RX200: {
                'Уровень шума': '68 дБ',
                'Количество камер обзора': '4',
            },
            RX340: {
                'Уровень шума': '66 дБ',
                'Количество камер обзора': '6',
            },
            LM75: {
                'Уровень шума': '70 дБ',
                'Количество камер обзора': '3',
            },
        },
    },
}


