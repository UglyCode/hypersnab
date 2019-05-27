const goods = [
    {
        description: 'Наконечник штыревой НШвИ 0,75-8 изолированный упаковка 100шт',
        price:111,
        quantity:10000,
        code:'11AA-01',
        img: 'https://robohash.org/1?size=50x50',
        spec: true,
        folder: 'Папка 3'
    },
    {
        description: 'Наконечник штыревой НШвИ 2,5-8 изолированный упаковка 100шт',
        price:111,
        quantity:10000,
        code:'11AA-02',
        img: 'https://robohash.org/23?size=50x50',
        spec: true,
        folder: 'Папка 3'
    },
    {
        description: 'Наконечник штыревой НШвИ 16-12 изолированный упаковка 100шт',
        price:111,
        quantity:10000,
        code:'11AA-03',
        img: 'https://robohash.org/22?size=50x50',
        spec: true,
        folder: 'Папка 3'
    },
    {
        description: 'Фонарь аккумуляторный "Прожектор" 19 светодиодов',
        price:111,
        quantity:10000,
        code:'11AA-04',
        img: 'https://robohash.org/21?size=50x50',
        spec: true,
        folder: 'Папка 3'
    },
    {
        description: 'Прожектор светодиодный 150W',
        price:111,
        quantity:10000,
        code:'11AA-05',
        img: 'https://robohash.org/20?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Светильник светодиодный 595х595 36Вт 6500К (для накладного и встраиваемого монтажа)',
        price:111,
        quantity:10000,
        code:'11AA-06',
        img: 'https://robohash.org/19?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Светильник светодиодный 18 Вт 600 мм IP40 (аналог ЛПО)',
        price:111,
        quantity:10000,
        code:'11AA-07',
        img: 'https://robohash.org/18?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Рассеиватель к ЛПО 2х40 (прямоугольное сечение)',
        price:111,
        quantity:10000,
        code:'11AA-08',
        img: 'https://robohash.org/17?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Фотореле ФРЛ-11 2-100Лк 20А DIN-рейка (с датчиком IP65)',
        price:111,
        quantity:10000,
        code:'11AA-09',
        img: 'https://robohash.org/16?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Фотореле ФРЛ-01 10Лк 6А',
        price:111,
        quantity:10000,
        code:'11AA-10',
        img: 'https://robohash.org/15?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Датчик движения ДДП-03 1200Вт, 10-420с, 6м , 3+Лк, 120(сбоку)+360(сверху)гр IP33',
        price:111,
        quantity:10000,
        code:'11AA-11',
        img: 'https://robohash.org/14?size=50x50',
        spec: true,
        folder: 'Папка 2'
    },
    {
        description: 'cool brand new gadget',
        price:111,
        quantity:10000,
        code:'11AA-12',
        img: 'https://robohash.org/13?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'ЭПРА 1х18',
        price:111,
        quantity:10000,
        code:'11AA-13',
        img: 'https://robohash.org/12?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Дроссель для люминесцентных ламп АВТ 1И36/40 (для ЛБ-40/36)',
        price:111,
        quantity:10000,
        code:'11AA-14',
        img: 'https://robohash.org/11?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Стартер S10 4-65Вт 220-240В Китай',
        price:111,
        quantity:10000,
        code:'11AA-15',
        img: 'https://robohash.org/10?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Дроссель c патроном G23 для PL-11',
        price:111,
        quantity:10000,
        code:'11AA-16',
        img: 'https://robohash.org/9?size=50x50',
        spec: false,
        folder: 'Папка 2'
    },
    {
        description: 'Лампа люминесцентная Philips TL-D 18W/54-765 G13',
        price:111,
        quantity:10000,
        code:'11AA-17',
        img: 'https://robohash.org/8?size=50x50',
        spec: true,
        folder: 'Папка 1'
    },
    {
        description: 'Лампа люминесцентная ЛД-40(36) Вт T8/G13, 6500 К',
        price:111,
        quantity:10000,
        code:'11AA-18',
        img: 'https://robohash.org/7?size=50x50',
        spec: false,
        folder: 'Папка 1'
    },
    {
        description: 'Лампа люминесцентная компактная OSRAM DULUX S 11W/21-840 G23',
        price:111,
        quantity:10000,
        code:'11AA-19',
        img: 'https://robohash.org/6?size=50x50',
        spec: false,
        folder: 'Папка 1'
    },
    {
        description: 'cool brand new gadget',
        price:111,
        quantity:10000,
        code:'11AA-20',
        img: 'https://robohash.org/5?size=50x50',
        spec: true,
        folder: 'Папка 1'
    },
    {
        description: 'Лампа накаливания ЛОН-95 95Вт 220В Е27',
        price:111,
        quantity:10000,
        code:'11AA-21',
        img: 'https://robohash.org/4?size=50x50',
        spec: false,
        folder: 'Папка 1'
    },
    {
        description: 'Лампа накаливания ЛОН-200 200Вт 220В Е27',
        price:111,
        quantity:10000,
        code:'11AA-22',
        img: 'https://robohash.org/3?size=50x50',
        spec: false,
        folder: 'Папка 1'
    },
    {
        description: 'Лампа накаливания ЛОН-500 500Вт 220В Е40',
        price:111,
        quantity:10000,
        code:'11AA-23',
        img: 'https://robohash.org/2?size=50x50',
        spec: false,
        folder: 'Папка 1'
    }
];

export default goods;