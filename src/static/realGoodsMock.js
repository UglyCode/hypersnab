const goods = [
    {
        folder: 'Приборы учета электроэнергии',
        code: 13,
        description: '230AM-01 Счетчик эл.энергии Меркурий 3ф 1т 5-60А',
        price: 2304.12,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 14,
        description: '230AM-03 Счетчик эл.энергии Меркурий 3ф 1т 5-7,5А',
        price: 2282.52,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Расходные материалы',
        code: 43,
        description: 'Круг 230x2,5x22мм отрезной по металлу  (25шт./упак.)',
        price: 74,
        measure: 'шт',
        spec: false,
        quantity: 124
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 126,
        description: 'S10 Стартер 4-65W 220-240V Philips 25 шт.уп.',
        price: 21.12,
        measure: 'шт',
        spec: false,
        quantity: 714
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 127,
        description: 'S2 Стартер 4-22W 127-240V Philips 25 шт.уп.',
        price: 21.12,
        measure: 'шт',
        spec: false,
        quantity: 1454
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 129,
        description: 'SH201L C16 Автоматический выключатель ABB 1п 16А 4,5кА   (10шт./упак.)',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 65
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 132,
        description: 'SH203L C25 Автоматический выключатель ABB 3п 25А 4,5кА',
        price: 644.88,
        measure: 'шт',
        spec: false,
        quantity: 29
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 159,
        description: 'ВВГнг-LS 5х 10 Кабель ГОСТ   (100м./бух.)',
        price: 305.52,
        measure: 'м',
        spec: false,
        quantity: 659
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 160,
        description: 'ВВГнг-LS 5х  6 Кабель (есть 50м ГОСТ)',
        price: 183.12,
        measure: 'м',
        spec: false,
        quantity: 1101
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 161,
        description: 'ВВГнг-LS 5х 25 Кабель ГОСТ',
        price: 785.7,
        measure: 'м',
        spec: false,
        quantity: 380
    },
    {
        folder: 'Розетки и вилки',
        code: 163,
        description: 'Вилка евро прямая   (25шт./упак.)',
        price: 35.4,
        measure: 'шт',
        spec: false,
        quantity: 339
    },
    {
        folder: 'Лампы галогеновые',
        code: 180,
        description: 'КГ-1000 R7s L=189мм Россия (лампа галогеновая)  (20шт/упак.)',
        price: 200.52,
        measure: 'шт',
        spec: false,
        quantity: 114
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 184,
        description: 'Клипса 16 д/трубы (№50)   (50шт./упак.)',
        price: 0.78,
        measure: 'шт',
        spec: false,
        quantity: 9850
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 185,
        description: 'Клипса 20 д/трубы (№50)   (50шт./упак.)',
        price: 0.96,
        measure: 'шт',
        spec: false,
        quantity: 10752
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 187,
        description: 'Коробка 150х110х70 распределительная IP55   (30шт./в кор.)',
        price: 89.16,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Лампы накаливания',
        code: 204,
        description: 'ЛОН-500 220В Е40 (48шт)',
        price: 72.66,
        measure: 'шт',
        spec: false,
        quantity: 182
    },
    {
        folder: 'Лампы накаливания',
        code: 214,
        description: 'МО 36В 60Вт E27 (100 шт./кор.)',
        price: 13.56,
        measure: 'шт',
        spec: false,
        quantity: 935
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 226,
        description: 'ПВ3  10 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 220
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 227,
        description: 'ПВ3   6 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 716
    },
    {
        folder: 'Провод ПВС',
        code: 228,
        description: 'ПВС 3х  0,75   (200м.)',
        price: 17.82,
        measure: 'м',
        spec: false,
        quantity: 413
    },
    {
        folder: 'Провод ПВС',
        code: 229,
        description: 'ПВС 3х  1,5   (100м.)',
        price: 29.64,
        measure: 'м',
        spec: false,
        quantity: 1506
    },
    {
        folder: 'Провод ПВС',
        code: 230,
        description: 'ПВС 3х  2,5   (100м.)',
        price: 46.98,
        measure: 'м',
        spec: false,
        quantity: 2392
    },
    {
        folder: 'Провод ПВС',
        code: 231,
        description: 'ПВС 4х  1,5   (100м.)',
        price: 38.34,
        measure: 'м',
        spec: false,
        quantity: 361
    },
    {
        folder: 'Провод ПВС',
        code: 232,
        description: 'ПВС 4х  2,5   (100м.)',
        price: 61.44,
        measure: 'м',
        spec: false,
        quantity: 610
    },
    {
        folder: 'Провод ПВС',
        code: 233,
        description: 'ПВС 4х  4   (100м.)',
        price: 103.14,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Провод ПВС',
        code: 234,
        description: 'ПВС 4х  6   (100м.)',
        price: 150.24,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Средства защиты',
        code: 236,
        description: 'Перчатки Х/Б с ПВХ точки 4-нитка',
        price: 13.08,
        measure: 'пар',
        spec: false,
        quantity: 1202
    },
    {
        folder: 'Трубы для электропроводки',
        code: 298,
        description: 'Труба 16 гофр ПВХ (100м)',
        price: 4.14,
        measure: 'м',
        spec: false,
        quantity: 7600
    },
    {
        folder: 'Трубы для электропроводки',
        code: 299,
        description: 'Труба 16 жесткая ПВХ (по 3м)',
        price: 9.06,
        measure: 'м',
        spec: false,
        quantity: 1714
    },
    {
        folder: 'Трубы для электропроводки',
        code: 300,
        description: 'Труба 20 гофр ПВХ (100м)',
        price: 5.52,
        measure: 'м',
        spec: false,
        quantity: 9100
    },
    {
        folder: 'Трубы для электропроводки',
        code: 301,
        description: 'Труба 20 ПНД гофрированная с протяжкой   (100м./бух.)',
        price: 11.34,
        measure: 'м',
        spec: false,
        quantity: 4100
    },
    {
        folder: 'Трубы для электропроводки',
        code: 317,
        description: 'Труба 20 жесткая ПВХ (по 3м)',
        price: 11.94,
        measure: 'м',
        spec: false,
        quantity: 1518
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 340,
        description: 'Хомут  200х2,5-3 нейл. бел. (100шт.)',
        price: 50.4,
        measure: 'упак',
        spec: false,
        quantity: 146
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 342,
        description: 'Хомут  400х5 нейл. бел. (100шт.)',
        price: 218.16,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 532,
        description: 'S201  C10 Автоматический выключатель ABB 1п 10А 6кА   (10шт./упак.)',
        price: 343.68,
        measure: 'шт',
        spec: false,
        quantity: 73
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 533,
        description: 'S201  C16 Автоматический выключатель ABB 1п 16А 6кА  (10шт./упак.)',
        price: 313.8,
        measure: 'шт',
        spec: false,
        quantity: 203
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 534,
        description: 'S201  C20 Автоматический выключатель ABB 1п 20А 6кА',
        price: 388.5,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 535,
        description: 'S201  C25 Автоматический выключатель ABB 1п 25А 6кА   (10шт./упак.)',
        price: 375.66,
        measure: 'шт',
        spec: false,
        quantity: 65
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 536,
        description: 'S201  C32 Автоматический выключатель ABB 1п 32А 6кА   (10шт./упак.)',
        price: 433.32,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 537,
        description: 'S201   C6 Автоматический выключатель ABB 1п 6A 6кА  (10шт./упак.)',
        price: 431.16,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 539,
        description: 'S203 C10 Автоматический выключатель ABB 3п 10А 6кА',
        price: 1248.72,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 540,
        description: 'S203 C16 Автоматический выключатель ABB 3п 16А 6кА',
        price: 1163.34,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 541,
        description: 'S203 C25 Автоматический выключатель ABB 3п 25А 6кА',
        price: 1408.86,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 542,
        description: 'S203 C32 Автоматический выключатель ABB 3п 32А 6кА',
        price: 1536.9,
        measure: 'шт',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 543,
        description: 'S203 C40 Автоматический выключатель ABB 3п 40А 6кА',
        price: 1665,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 545,
        description: 'S203 C63 Автоматический выключатель ABB 3п 63А 6кА',
        price: 2251.98,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 583,
        description: 'ВА47-63 1п C 16А 4,5кА (12 шт.)',
        price: 60.48,
        measure: 'шт',
        spec: false,
        quantity: 1321
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 584,
        description: 'ВА47-63 1п C 25А 4,5кА (12 шт.)',
        price: 61.08,
        measure: 'шт',
        spec: false,
        quantity: 925
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 585,
        description: 'ВА47-63 2п C 40А 4,5кА (6 шт.)',
        price: 134.82,
        measure: 'шт',
        spec: false,
        quantity: 337
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 592,
        description: 'АВДТ-32 2P 25А/30мА диф.авт.',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 348
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 622,
        description: 'R20 BL-2 Элемент питания (2шт./упак.)',
        price: 69.9,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Кабель NYM',
        code: 626,
        description: 'NYM 3х  2,5 Кабель (100м.)',
        price: 50.1,
        measure: 'м',
        spec: false,
        quantity: 406
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 641,
        description: 'ВВГнг-LS 3х  1,5 ГОСТ Кабель   (бухта 100м.)',
        price: 32.52,
        measure: 'м',
        spec: false,
        quantity: 5339
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 642,
        description: 'ВВГнг-LS 3х  2,5 ГОСТ Кабель   (бухта 100м.)',
        price: 50.28,
        measure: 'м',
        spec: false,
        quantity: 4143
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 643,
        description: 'ВВГнг-LS 5х 16 Кабель ГОСТ',
        price: 499.62,
        measure: 'м',
        spec: false,
        quantity: 1996
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 644,
        description: 'ВВГнг-LS 5х  4 Кабель ГОСТ',
        price: 125.16,
        measure: 'м',
        spec: false,
        quantity: 1316
    },
    {
        folder: 'Кабель КГ',
        code: 647,
        description: 'КГ 3х  1,5 Кабель  (100м./бух.)',
        price: 33.42,
        measure: 'м',
        spec: false,
        quantity: 348
    },
    {
        folder: 'Кабель КГ',
        code: 648,
        description: 'КГ 3х  2,5 Кабель  (на барабане)',
        price: 51.12,
        measure: 'м',
        spec: false,
        quantity: 615
    },
    {
        folder: 'Кабель КГ',
        code: 649,
        description: 'КГ 4х  4 Кабель  ',
        price: 101.52,
        measure: 'м',
        spec: false,
        quantity: 350
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 657,
        description: 'ПВ1  4 Белый  (200м./бух.)',
        price: 21.66,
        measure: 'м',
        spec: false,
        quantity: 863
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 658,
        description: 'ПВ1  4 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 853
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 660,
        description: 'ПВ1  4 Синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 593
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 663,
        description: 'ПВ3  16 Белый   (150м./бух.)',
        price: 91.56,
        measure: 'м',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 664,
        description: 'ПВ3  16 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 148
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 668,
        description: 'ПВ3   4 Синий ',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 2155
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 669,
        description: 'ПВ3   6 Белый',
        price: 31.92,
        measure: 'м',
        spec: false,
        quantity: 64
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 673,
        description: 'ПВ3   6 Черный',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Провод ПВС',
        code: 674,
        description: 'ПВС 2х  2,5   (100м.)',
        price: 33.96,
        measure: 'м',
        spec: false,
        quantity: 2664
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 675,
        description: 'ПУНП 2х  1,5   (100м./бух.)',
        price: 18.6,
        measure: 'м',
        spec: false,
        quantity: 220
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 676,
        description: 'ПУНП 2х  2,5  (100м./бух.)',
        price: 28.5,
        measure: 'м',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 677,
        description: 'ШВВП 2х  0,75',
        price: 9.48,
        measure: 'м',
        spec: false,
        quantity: 1185
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 699,
        description: 'ST-111 Стартер 4-65W 220V OSRAM   (25шт.уп)',
        price: 17.1,
        measure: 'шт',
        spec: false,
        quantity: 975
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 700,
        description: 'ST-151 Стартер 4-22W 127V OSRAM   (25шт.уп)',
        price: 17.94,
        measure: 'шт',
        spec: false,
        quantity: 984
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 702,
        description: 'TL-D 18W/54-765 G13 Philips (25шт)',
        price: 46.02,
        measure: 'шт',
        spec: false,
        quantity: 559
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 703,
        description: 'TL-D 36W/54-765 G13 Philips (25шт)',
        price: 57.72,
        measure: 'шт',
        spec: false,
        quantity: 259
    },
    {
        folder: 'Лампы газоразрядные',
        code: 713,
        description: 'ДНаТ-250 Е40   (30шт.)',
        price: 258.42,
        measure: 'шт',
        spec: false,
        quantity: 99
    },
    {
        folder: 'Лампы газоразрядные',
        code: 714,
        description: 'ДРЛ-125 Е27 (25шт.)',
        price: 128.28,
        measure: 'шт',
        spec: false,
        quantity: 615
    },
    {
        folder: 'Лампы газоразрядные',
        code: 715,
        description: 'ДРЛ-250 Е40   (20шт)',
        price: 158.4,
        measure: 'шт',
        spec: false,
        quantity: 470
    },
    {
        folder: 'Лампы газоразрядные',
        code: 716,
        description: 'ДРЛ-400 Е40   (15шт)',
        price: 220.02,
        measure: 'шт',
        spec: false,
        quantity: 93
    },
    {
        folder: 'Лампы накаливания',
        code: 717,
        description: 'ДС-60 220В Е14',
        price: 12.3,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 719,
        description: 'ЛБ-20 (18) G13 (25шт/упак) строго кратно упаковке (!!! пока их нет продаём ЛД)',
        price: 40.74,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Лампы накаливания',
        code: 720,
        description: 'ЛОН- 40 220В Е27 (100шт.)',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 15516
    },
    {
        folder: 'Лампы накаливания',
        code: 721,
        description: 'ЛОН- 60 220В Е27 (100шт.)',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 22130
    },
    {
        folder: 'Лампы накаливания',
        code: 722,
        description: 'ЛОН- 75 220В Е27 (154шт.)',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 2778
    },
    {
        folder: 'Лампы накаливания',
        code: 723,
        description: 'ЛОН- 95 220В Е27 (154шт.)',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 4387
    },
    {
        folder: 'Лампы накаливания',
        code: 724,
        description: 'ЛОН-200 220В Е27 (90шт)',
        price: 17.76,
        measure: 'шт',
        spec: false,
        quantity: 304
    },
    {
        folder: 'Лампы накаливания',
        code: 725,
        description: 'МО 24В 60Вт E27   (100шт./кор.)',
        price: 14.22,
        measure: 'шт',
        spec: false,
        quantity: 230
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 728,
        description: 'SPC 11W E14 2700K  (100шт./кор.)',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 117
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 736,
        description: 'АЕ2056М-100 100А Автоматический выключатель',
        price: 1878.84,
        measure: 'шт',
        spec: false,
        quantity: 32
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 737,
        description: 'АЕ2056М-100  80А Автоматический выключатель',
        price: 1878.84,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 746,
        description: 'ПН-2 100 А Плавкая вставка  (20шт./в кор.)',
        price: 56.04,
        measure: 'шт',
        spec: false,
        quantity: 143
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 747,
        description: 'ПН-2 250 А Плавкая вставка   (20шт./в кор.)',
        price: 74.22,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 748,
        description: 'ПН-2 400 А Плавкая вставка  (8шт./в кор.)',
        price: 137.58,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Светильники люминесцентные',
        code: 762,
        description: 'ЛПБ-31-11-006 Светильник антивандальный G23   (10шт./упак.)',
        price: 310.32,
        measure: 'шт',
        spec: false,
        quantity: 2051
    },
    {
        folder: 'Светильники люминесцентные',
        code: 763,
        description: 'ЛПО 1х20 Светильник   8шт/упак. (!!! стартер код 794 выставляется отдельно кратно упаковкам)',
        price: 332.64,
        measure: 'шт',
        spec: false,
        quantity: 260
    },
    {
        folder: 'Светильники люминесцентные',
        code: 764,
        description: 'ЛПО 1х40 Светильник   4шт/упак. (!!! стартер код 795 выставляется отдельно кратно упаковкам)',
        price: 402.54,
        measure: 'шт',
        spec: false,
        quantity: 351
    },
    {
        folder: 'Светильники люминесцентные',
        code: 765,
        description: 'ЛПО 2х40 Светильник   2шт/упак.(!!! стартер код 795 выставляется отдельно кратно упаковкам)',
        price: 577.74,
        measure: 'шт',
        spec: false,
        quantity: 486
    },
    {
        folder: 'Светильники люминесцентные',
        code: 767,
        description: 'ЛПО 01 Светильник 2х36-012 с ЭПРА',
        price: 602.82,
        measure: 'шт',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 768,
        description: 'НББ-64-60 Арматура светильника (основание косое) (100 шт. в упак.)',
        price: 20.34,
        measure: 'шт',
        spec: false,
        quantity: 226
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 769,
        description: 'НББ-64-60 Арматура светильника (основание прямое) (100 шт. в упак.)',
        price: 20.34,
        measure: 'шт',
        spec: false,
        quantity: 1390
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 770,
        description: 'НББ-64-60 Рассеиватель (шар пластиковый)  (50шт/упак.)',
        price: 27.84,
        measure: 'шт',
        spec: false,
        quantity: 784
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 771,
        description: 'НББ-64-60 Рассеиватель (шар стеклянный)  (4шт/упак.)',
        price: 48.54,
        measure: 'шт',
        spec: false,
        quantity: 972
    },
    {
        folder: 'Светильники подвесные',
        code: 773,
        description: 'НСП02-100-003 Светильник с решеткой  (10шт/упак.)',
        price: 258.9,
        measure: 'шт',
        spec: false,
        quantity: 337
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 780,
        description: '1И18/20 Дроссель для люм.ламп АВТ    (40-30шт./упак.)',
        price: 152.58,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 782,
        description: '1И36/40 Дроссель для люм.ламп АВТ   (30шт./упак.)',
        price: 152.58,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 794,
        description: 'СК-127 Стартер д/ламп 18-20Вт   (25шт./упак.)',
        price: 5.4,
        measure: 'шт',
        spec: false,
        quantity: 15998
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 795,
        description: 'СК-220 Стартер д/ламп 36-40Вт    (25шт./упак.)',
        price: 4.98,
        measure: 'шт',
        spec: false,
        quantity: 16607
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 805,
        description: 'DIN-рейка 2 м',
        price: 110.64,
        measure: 'шт',
        spec: false,
        quantity: 177
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 806,
        description: 'DIN-рейка  60 см',
        price: 39.12,
        measure: 'шт',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Шкафы пустые',
        code: 815,
        description: 'ЩРН-П-12 Бокс, пластик IP40   (10шт./упак.)',
        price: 358.98,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Шкафы пустые',
        code: 816,
        description: 'ЩРН-П-24 Бокс, пластик IP40   (10шт./упак.)',
        price: 747.36,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Шкафы пустые',
        code: 817,
        description: 'ЩРН-П-36 Бокс, пластик IP40  (5шт./упак.)',
        price: 1293.54,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Изолента',
        code: 822,
        description: 'Изолента ХБ 19мм х 30м 300г (50шт/уп)',
        price: 97.56,
        measure: 'шт',
        spec: false,
        quantity: 192
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 825,
        description: 'ЗВИ- 60 зажим винтовой 25 кв.мм 12 пар',
        price: 85.98,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 827,
        description: 'Короб 100х60 ПВХ (12м в упаковке)',
        price: 133.44,
        measure: 'м',
        spec: false,
        quantity: 532
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 828,
        description: 'Короб  16х16 ПВХ (140м в упаковке)',
        price: 11.22,
        measure: 'м',
        spec: false,
        quantity: 6102
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 829,
        description: 'Короб  25х25 ПВХ (80м в упаковке)',
        price: 22.92,
        measure: 'м',
        spec: false,
        quantity: 3568
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 830,
        description: 'Короб  40х16 ПВХ (48м/40м в упаковке)',
        price: 27.24,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 831,
        description: 'Короб  40х40 ПВХ (30м в упаковке)',
        price: 42.48,
        measure: 'м',
        spec: false,
        quantity: 1870
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 832,
        description: 'Короб  60х60 ПВХ (18м. в упаковке)',
        price: 82.62,
        measure: 'м',
        spec: false,
        quantity: 126
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 833,
        description: 'Короб  80х60 ПВХ (24м в упаковке)',
        price: 126.66,
        measure: 'м',
        spec: false,
        quantity: 104
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 835,
        description: 'Коробка 100х100х50 распределительная о/у IP54   (60шт./в кор.)',
        price: 39.18,
        measure: 'шт',
        spec: false,
        quantity: 748
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 837,
        description: 'Коробка  70х70х40 распределительная о/у IP54   (150шт./в кор.)',
        price: 21.66,
        measure: 'шт',
        spec: false,
        quantity: 786
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 843,
        description: 'ТМЛ- 16-8-6 Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 12.78,
        measure: 'шт',
        spec: false,
        quantity: 295
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 844,
        description: 'ТМЛ- 25-8-7 Наконечник мед.луж.опрес.    (100шт./упак.)',
        price: 18.18,
        measure: 'шт',
        spec: false,
        quantity: 255
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 845,
        description: 'ТМЛ- 35-8-10  Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 22.44,
        measure: 'шт',
        spec: false,
        quantity: 128
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 846,
        description: 'ТМЛ- 50-10-11 Наконечник мед.луж.опрес.    (100шт./упак.)',
        price: 30.42,
        measure: 'шт',
        spec: false,
        quantity: 206
    },
    {
        folder: 'Сжимы ответвительные',
        code: 848,
        description: 'У-731 Сжим ответвительный (12шт/уп.)',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 720
    },
    {
        folder: 'Розетки и вилки',
        code: 853,
        description: 'Вилка евро боковая бел. MAKEL   (125шт./упак.)',
        price: 41.22,
        measure: 'шт',
        spec: false,
        quantity: 126
    },
    {
        folder: 'Розетки и вилки',
        code: 854,
        description: 'Вилка евро прямая бел. MAKEL  (100шт./упак.)',
        price: 46.38,
        measure: 'шт',
        spec: false,
        quantity: 199
    },
    {
        folder: 'Патроны',
        code: 863,
        description: 'Е27 Патрон подвесной карболитовый   (200шт./кор./20шт./упак.)',
        price: 15.36,
        measure: 'шт',
        spec: false,
        quantity: 21969
    },
    {
        folder: 'Патроны',
        code: 864,
        description: 'Е27 Патрон подвесной керамический   (400шт/.упак.200шт./упак.)',
        price: 8.34,
        measure: 'шт',
        spec: false,
        quantity: 1607
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 866,
        description: 'Вилка евро каучук   (24шт/упак.)',
        price: 60.6,
        measure: 'шт',
        spec: false,
        quantity: 228
    },
    {
        folder: 'Выключатели',
        code: 867,
        description: 'Выкл.1ОП     120шт/кор.',
        price: 34.32,
        measure: 'шт',
        spec: false,
        quantity: 1648
    },
    {
        folder: 'Выключатели',
        code: 868,
        description: 'Выкл.2ОП    80шт/кор.',
        price: 35.94,
        measure: 'шт',
        spec: false,
        quantity: 1011
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 869,
        description: 'Колодка 3я с/з каучук IP44   9шт/уп.',
        price: 231.36,
        measure: 'шт',
        spec: false,
        quantity: 438
    },
    {
        folder: 'Розетки и вилки',
        code: 870,
        description: 'Роз.1ОП с/з     60шт/кор.',
        price: 39.54,
        measure: 'шт',
        spec: false,
        quantity: 238
    },
    {
        folder: 'Розетки и вилки',
        code: 872,
        description: 'Роз.2ОП с/з с крышкой бр/защ полугерметичная (30шт в коробке)',
        price: 173.82,
        measure: 'шт',
        spec: false,
        quantity: 251
    },
    {
        folder: 'Розетки и вилки',
        code: 873,
        description: 'Роз.2СП с/з 22шт/кор.  (50шт./упак./10шт.упак.)',
        price: 71.58,
        measure: 'шт',
        spec: false,
        quantity: 159
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 888,
        description: 'ТА- 95-12-13 Наконечник алюмин.опрес.   (25шт./упак.)',
        price: 20.04,
        measure: 'шт',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Светильники люминесцентные',
        code: 922,
        description: 'ЛВО  4х18 Светильник встраиваемый зерк. 595х595 с ЭПРА  (2шт/упак.)',
        price: 708.54,
        measure: 'шт',
        spec: false,
        quantity: 71
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 941,
        description: 'Контакт основания (держатель) 250А для ПН-2',
        price: 47.34,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 967,
        description: 'Шина N-PE 10 на DIN-рейку  (10шт.уп.)',
        price: 45.9,
        measure: 'шт',
        spec: false,
        quantity: 154
    },
    {
        folder: 'Провода и кабели связи',
        code: 974,
        description: 'UTP 4х  2х0,52 кат.5   (305м./бухта)',
        price: 8.1,
        measure: 'м',
        spec: false,
        quantity: 3250
    },
    {
        folder: 'Светильники люминесцентные',
        code: 1002,
        description: 'ЛПО 418 Светильник накладной зерк. с ЭПРА',
        price: 1196.04,
        measure: 'шт',
        spec: false,
        quantity: 74
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1004,
        description: 'ВВГнг-LS 3х  4 Кабель   100м./бухта',
        price: 72.78,
        measure: 'м',
        spec: false,
        quantity: 1444
    },
    {
        folder: 'Кабель NYM',
        code: 1005,
        description: 'NYM 3х  1,5 Кабель (100м.)',
        price: 32.76,
        measure: 'м',
        spec: false,
        quantity: 1468
    },
    {
        folder: 'Клеммники WAGO',
        code: 1012,
        description: '222-413 Клеммник 3х(0,08-2,5-4,0) для многожильн.проводов (50шт.уп.)',
        price: 22.38,
        measure: 'шт',
        spec: false,
        quantity: 1200
    },
    {
        folder: 'Клеммники WAGO',
        code: 1013,
        description: '222-415 Клеммник 5х(0,08-2,5-4,0) для многожильн.проводов (40шт. в упак.)',
        price: 35.82,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1014,
        description: '230ART-02 CN Счетчик эл. энергии Меркурий 3ф 2т 10-100А',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1022,
        description: 'АПВ  10 Белый    (200м./300м. бухта) ',
        price: 10.2,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1044,
        description: 'ВА47-63 1п C 40А 4,5кА (!!! продаём 47-29) (12 шт.)',
        price: 65.7,
        measure: 'шт',
        spec: false,
        quantity: 331
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1045,
        description: 'ВА47-63 2п C 16А 4,5кА (6 шт.)',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 1522
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1046,
        description: 'ВА47-63 2п C 25А 4,5кА (6 шт.) (!!! продаём 14810)',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 244
    },
    {
        folder: 'Сжимы ответвительные',
        code: 1047,
        description: 'У-859 Сжим ответвительный   (6шт./уп)',
        price: 71.58,
        measure: 'шт',
        spec: false,
        quantity: 115
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 1053,
        description: 'ПУНП 3х  2,5   (100м./бух.)',
        price: 42,
        measure: 'м',
        spec: false,
        quantity: 290
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 1057,
        description: 'Короб  20х10 ПВХ (100м в упаковке)',
        price: 11.52,
        measure: 'м',
        spec: false,
        quantity: 1640
    },
    {
        folder: 'Провод ПВС',
        code: 1063,
        description: 'ПВС 2х  0,75   (200м.)',
        price: 12.66,
        measure: 'м',
        spec: false,
        quantity: 600
    },
    {
        folder: 'Шкафы пустые',
        code: 1070,
        description: 'ЩРН-24з Корпус щита навесной металлический IP54',
        price: 1494.84,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Лампы накаливания',
        code: 1071,
        description: 'МО 36В 40Вт E27 (100 шт./кор.)',
        price: 13.56,
        measure: 'шт',
        spec: false,
        quantity: 352
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 1085,
        description: 'ТМЛ-150-14-17 Наконечник мед.луж.опрес.',
        price: 135.06,
        measure: 'шт',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 1086,
        description: 'ТМЛ- 10-6-6 Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 11.64,
        measure: 'шт',
        spec: false,
        quantity: 618
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 1088,
        description: 'Клипса 25 д/трубы   (№50)   (50шт./упак.)',
        price: 1.2,
        measure: 'шт',
        spec: false,
        quantity: 2190
    },
    {
        folder: 'Кабель КГ',
        code: 1102,
        description: 'КГ 4х  6 Кабель',
        price: 152.82,
        measure: 'м',
        spec: false,
        quantity: 334
    },
    {
        folder: 'Лампы газоразрядные',
        code: 1107,
        description: 'ДРВ-250 Е40 Лампа ртутная бездроссельная   (20шт.)',
        price: 193.98,
        measure: 'шт',
        spec: false,
        quantity: 55
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1113,
        description: 'S203 C50 Автоматический выключатель ABB 3п 50А 6кА',
        price: 2155.92,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Средства защиты',
        code: 1124,
        description: 'Перчатки латексные диэлектрические',
        price: 353.58,
        measure: 'пар',
        spec: false,
        quantity: 254
    },
    {
        folder: 'Средства защиты',
        code: 1127,
        description: 'Коврик диэлектрический  500х500',
        price: 259.2,
        measure: 'шт',
        spec: false,
        quantity: 58
    },
    {
        folder: 'Средства защиты',
        code: 1128,
        description: 'Коврик диэлектрический  750х750',
        price: 472.86,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 1152,
        description: 'Фонарь налобный светод. аккум.',
        price: 289.62,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Расходные материалы',
        code: 1162,
        description: 'Дюбель 6х40   (1000шт/уп.)',
        price: 0.3,
        measure: 'шт',
        spec: false,
        quantity: 32800
    },
    {
        folder: 'Розетки и вилки',
        code: 1164,
        description: 'Роз.1ОП с/з с крышкой  бр/защ полугерметичная 50шт/кор.',
        price: 84.78,
        measure: 'шт',
        spec: false,
        quantity: 191
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1168,
        description: 'ВВГнг-LS 4х  2,5 Кабель   (100м./бухта)',
        price: 63.24,
        measure: 'м',
        spec: false,
        quantity: 301
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1182,
        description: 'АППВ 2х  2,5     (200м. бухта)',
        price: 6.96,
        measure: 'м',
        spec: false,
        quantity: 1535
    },
    {
        folder: 'Выключатели',
        code: 1225,
        description: 'Выкл.1ОП IP44    50шт/кор.',
        price: 71.4,
        measure: 'шт',
        spec: false,
        quantity: 175
    },
    {
        folder: 'Сжимы ответвительные',
        code: 1227,
        description: 'У-733 Сжим ответвительный (12шт/уп.)',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1228,
        description: 'ПВ3   4 Белый   (400м./бух.)',
        price: 21.6,
        measure: 'м',
        spec: false,
        quantity: 308
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1229,
        description: 'ПВ3   4 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 430
    },
    {
        folder: 'Трубы для электропроводки',
        code: 1231,
        description: 'Труба 32 гофр ПВХ (25м)',
        price: 12.72,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Средства защиты',
        code: 1234,
        description: 'Очки защитные  (50шт./в кор.)',
        price: 66.88,
        measure: 'шт',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 1235,
        description: 'Клипса 32 д/трубы   (№50)',
        price: 2.1,
        measure: 'шт',
        spec: false,
        quantity: 362
    },
    {
        folder: 'Расходные материалы',
        code: 1236,
        description: 'Саморез 3,5х35',
        price: 0.68,
        measure: 'шт',
        spec: false,
        quantity: 4680
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1244,
        description: 'ПВ1 10 Белый',
        price: 53.94,
        measure: 'м',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 1254,
        description: 'Колодка 2я с/з каучук IP44',
        price: 193.44,
        measure: 'шт',
        spec: false,
        quantity: 19
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 1272,
        description: 'SPC 15W Е27 2700К   (60шт.кор/50шт.кор)',
        price: 78,
        measure: 'шт',
        spec: false,
        quantity: 88
    },
    {
        folder: 'Кабель NYM',
        code: 1384,
        description: 'NYM 3х  4 Кабель',
        price: 76.02,
        measure: 'м',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 1433,
        description: 'АВДТ-32 2P 16А 30мА диф.авт.',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 199
    },
    {
        folder: 'Шкафы пустые',
        code: 1435,
        description: 'ЩРН-П-18 Бокс, пластик IP40  (10шт.уп.)',
        price: 561.66,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1436,
        description: 'ПВ3  10 Белый   (200м./бух.)',
        price: 54.36,
        measure: 'м',
        spec: false,
        quantity: 701
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1437,
        description: 'ПВ3  10 Синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1461,
        description: 'ВА47-63 1п C 10А 4,5кА (12 шт.)',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1462,
        description: 'ВА47-63 1п C 32А 4,5кА (!!! продаём 47-29) (12 шт.)',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трансформаторы',
        code: 1489,
        description: 'ЯТП-0,25-220-36 Ящик 250А IP31 с понижающим трансформатором',
        price: 1534.8,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1525,
        description: 'SH201L C25 Автоматический выключатель ABB 1п 25А 4,5кА   (10шт./упак.)',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1529,
        description: 'SH201L C10 Автоматический выключатель ABB 1п 10А 4,5кА   (10шт./упак.)',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 1549,
        description: 'ПУгНП 3х  2,5   (200м./бух)',
        price: 41.88,
        measure: 'м',
        spec: false,
        quantity: 2420
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1559,
        description: 'ПВ3  70 Белый',
        price: 402.6,
        measure: 'м',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Кабель КГ',
        code: 1560,
        description: 'КГ 4х  2,5 Кабель',
        price: 66.42,
        measure: 'м',
        spec: false,
        quantity: 105
    },
    {
        folder: 'Промышленные разъемы',
        code: 1563,
        description: '024 Вилка переносная 3P+PE 32А 380В IP44  (10шт./упак.)',
        price: 194.16,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Промышленные разъемы',
        code: 1564,
        description: '124 Розетка стационарная 3Р+PE 32А 380В IP44  (10шт./упак.)',
        price: 256.2,
        measure: 'шт',
        spec: false,
        quantity: 18
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1565,
        description: 'ВА47-100 1п  C 100А 10кА Автоматический выключатель',
        price: 396,
        measure: 'шт',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1584,
        description: 'ВА47-100 3п  C  63А 10кА Автоматический выключатель (4 шт.)',
        price: 1102.8,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1585,
        description: 'ВА47-100 3п  C  80А 10кА Автоматический выключатель (4 шт.)',
        price: 1063.08,
        measure: 'шт',
        spec: false,
        quantity: 53
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1603,
        description: '230ART-01 CN Счетчик эл.энергии Меркурий 3ф 2т 5-60А',
        price: 4942.62,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1617,
        description: 'НШвИ  2,5- 8 Наконечник штыр.изол. (уп.100шт)',
        price: 38.94,
        measure: 'упак',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1619,
        description: 'НШвИ  6-12 Наконечник штыр.изол. (уп.100шт)',
        price: 84,
        measure: 'упак',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 1628,
        description: 'ЗВИ-  5 зажим винтовой 6 кв.мм 12 пар(10шт./упак)',
        price: 21.06,
        measure: 'шт',
        spec: false,
        quantity: 237
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 1629,
        description: 'ЗВИ- 20 зажим винтовой 14 кв.мм 12 пар   (10шт./упак.)',
        price: 41.22,
        measure: 'шт',
        spec: false,
        quantity: 235
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1636,
        description: 'ВВГнг-LS 5х  2,5 Кабель   (бухта 100м.)',
        price: 80.16,
        measure: 'м',
        spec: false,
        quantity: 290
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1642,
        description: 'ПВ1 16 Белый  ',
        price: 89.52,
        measure: 'м',
        spec: false,
        quantity: 175
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1649,
        description: 'S201  C40 Автоматический выключатель ABB 1п 40А 6кА',
        price: 468.54,
        measure: 'шт',
        spec: false,
        quantity: 29
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1650,
        description: 'S201  C63 Автоматический выключатель ABB 1п 63А 6кА',
        price: 715.08,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 1659,
        description: 'Хомут  150х2,5 нейл. бел. (100шт.)',
        price: 39.06,
        measure: 'упак',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 1660,
        description: 'Хомут  300х3,6 нейл. бел. (100шт.)',
        price: 127.92,
        measure: 'упак',
        spec: false,
        quantity: 174
    },
    {
        folder: 'Промышленные разъемы',
        code: 1731,
        description: '025 Вилка переносная 3P+E+N 32А 380В IP44  (10шт./упак.)',
        price: 230.16,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Промышленные разъемы',
        code: 1732,
        description: '225 Розетка переносная 3P+E+N 32А 380В IP44   (10шт./упак.)',
        price: 261.18,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Изолента',
        code: 1751,
        description: 'Изолента черная ПВХ  (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Изолента',
        code: 1752,
        description: 'Изолента красная ПВХ   (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 3532
    },
    {
        folder: 'Изолента',
        code: 1753,
        description: 'Изолента зеленая ПВХ  (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 3551
    },
    {
        folder: 'Изолента',
        code: 1754,
        description: 'Изолента белая ПВХ  (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 214
    },
    {
        folder: 'Изолента',
        code: 1755,
        description: 'Изолента желтая ПВХ  (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 2888
    },
    {
        folder: 'Розетки и вилки',
        code: 1756,
        description: 'Роз.4ОП с/з   (25шт./упак./6шт./упак.)',
        price: 198.48,
        measure: 'шт',
        spec: false,
        quantity: 182
    },
    {
        folder: 'Розетки и вилки',
        code: 1757,
        description: 'Роз.2ОП с/з     60шт/кор. (10шт./упак.)',
        price: 59.76,
        measure: 'шт',
        spec: false,
        quantity: 365
    },
    {
        folder: 'Светильники подвесные',
        code: 1775,
        description: 'НСП 03-60 (НСП 01-60-001) Арматура светильника (90 шт. в упак.)',
        price: 42.78,
        measure: 'шт',
        spec: false,
        quantity: 626
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1799,
        description: 'НШвИ 25-16 Наконечник штыр.изол. (уп.100шт)',
        price: 259.38,
        measure: 'упак',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1800,
        description: 'НШвИ 16-12 Наконечник штыр.изол. (уп.100шт)',
        price: 142.62,
        measure: 'упак',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 1820,
        description: 'Короб  60х40 ПВХ (40м в упаковке)',
        price: 61.8,
        measure: 'м',
        spec: false,
        quantity: 2770
    },
    {
        folder: 'Промышленные разъемы',
        code: 1838,
        description: '224 Розетка переносная 3P+PE 32А 380В IP44 (10шт.упак.)',
        price: 211.68,
        measure: 'шт',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1864,
        description: 'ВВГнг-LS 4х  6 Кабель',
        price: 147.6,
        measure: 'м',
        spec: false,
        quantity: 96
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1898,
        description: 'ВА47-63 1п C  6А 4,5кА (12 шт.)',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 51
    },
    {
        folder: 'Розетки и вилки',
        code: 1907,
        description: 'Роз.1СП с/з  70шт/кор. (10шт./упак.)',
        price: 58.74,
        measure: 'шт',
        spec: false,
        quantity: 155
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1916,
        description: 'ВА47-100 3п  C 100А 10кА Автоматический выключатель (4 шт.)',
        price: 1035.06,
        measure: 'шт',
        spec: false,
        quantity: 78
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1938,
        description: 'АПВ   6 Белый  (300м.) ',
        price: 6.18,
        measure: 'м',
        spec: false,
        quantity: 410
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1948,
        description: '200.02 Счетчик эл.энергии Меркурий 1ф 2т 5-60А',
        price: 1854.66,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Трубы для электропроводки',
        code: 2017,
        description: 'Труба 40 гофр ПВХ (20м) ',
        price: 19.32,
        measure: 'м',
        spec: false,
        quantity: 220
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 2018,
        description: 'SPC 11W E27 2700K  (50шт./кор)',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 2121,
        description: 'ВВГнг-LS 4х  4 Кабель   (бухта 100м.)',
        price: 101.04,
        measure: 'м',
        spec: false,
        quantity: 727
    },
    {
        folder: 'Провод ПВС',
        code: 2179,
        description: 'ПВС 4х 10',
        price: 233.4,
        measure: 'м',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 2196,
        description: 'ПУНП 3х  1,5  (100м./бух.)',
        price: 27.24,
        measure: 'м',
        spec: false,
        quantity: 70
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 2197,
        description: 'ЛБ-40 (36) G13 (25 шт/упак) (!!! если их нет продаём ЛД)  кратно упаковке.',
        price: 53.1,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Розетки и вилки',
        code: 2216,
        description: 'Роз.2ОП б/з    90шт/кор.  (20шт./упак.)',
        price: 52.98,
        measure: 'шт',
        spec: false,
        quantity: 96
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2219,
        description: 'АВВГ 2х  2,5 Кабель   (200м./бух.)',
        price: 8.46,
        measure: 'м',
        spec: false,
        quantity: 1705
    },
    {
        folder: 'Сжимы ответвительные',
        code: 2266,
        description: 'У-734 Сжим ответвительный (12шт/уп.)',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 38
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2267,
        description: 'АПВ   2,5 Белый   (500м./бух.)',
        price: 3.06,
        measure: 'м',
        spec: false,
        quantity: 3650
    },
    {
        folder: 'Светильники подвесные',
        code: 2272,
        description: 'НСП02-100-001 Светильник без решетки  (10шт/упак.)',
        price: 233.88,
        measure: 'шт',
        spec: false,
        quantity: 491
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 2312,
        description: 'Короб  40х25 ПВХ (40м в упаковке)',
        price: 31.98,
        measure: 'м',
        spec: false,
        quantity: 7402
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 2342,
        description: 'ПВ3   2,5 Белый   (400м./бух.)',
        price: 13.56,
        measure: 'м',
        spec: false,
        quantity: 410
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2353,
        description: 'ТУТ 30/15 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Лампы накаливания',
        code: 2364,
        description: 'ЛОН-150 220В Е27   (100шт)',
        price: 16.14,
        measure: 'шт',
        spec: false,
        quantity: 149
    },
    {
        folder: 'Лампы галогеновые',
        code: 2391,
        description: 'КГ-500 R7s L=117мм Китай (лампа галогеновая)  (50шт/упак.)',
        price: 29.94,
        measure: 'шт',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 2406,
        description: 'Хомут  300х3,6-4 нейл. черн. (100шт)',
        price: 129.9,
        measure: 'упак',
        spec: false,
        quantity: 139
    },
    {
        folder: 'Изолента',
        code: 2409,
        description: 'Изолента синяя ПВХ  (200шт./в кор.)',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 17085
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 2455,
        description: 'ПВ1  2,5 Белый  (200м./бух.)',
        price: 13.8,
        measure: 'м',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Провод ПВС',
        code: 2458,
        description: 'ПВС 3х  4',
        price: 74.82,
        measure: 'м',
        spec: false,
        quantity: 860
    },
    {
        folder: 'Промышленные разъемы',
        code: 2494,
        description: '214 Розетка переносная 3Р+PE 16А 380B IP44   (10шт./упак.)',
        price: 153.9,
        measure: 'шт',
        spec: false,
        quantity: 90
    },
    {
        folder: 'Промышленные разъемы',
        code: 2495,
        description: '014 Вилка переносная 3Р+PE 16А 380В IP44   (10шт./упак.)',
        price: 130.02,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Выключатели',
        code: 2564,
        description: 'Выкл.1СП    70шт/кор.',
        price: 45.78,
        measure: 'шт',
        spec: false,
        quantity: 387
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 2611,
        description: 'ОП-1 Отвертка-пробник   (10шт./упак.)',
        price: 86.52,
        measure: 'шт',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2626,
        description: 'ТУТ 30/15 Трубка термоусаживаемая черная',
        price: 78.18,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2627,
        description: 'ТУТ 20/10 Трубка термоусаживаемая синяя',
        price: 50.34,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 2647,
        description: 'НШвИ  0,5-8 Наконечник штыр.изол. (уп.100шт)',
        price: 24.3,
        measure: 'упак',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Розетки и вилки',
        code: 2655,
        description: 'Роз.1ОП б/з    120шт/кор. (10шт./упак.)',
        price: 32.16,
        measure: 'шт',
        spec: false,
        quantity: 75
    },
    {
        folder: 'Бирки кабельные',
        code: 2656,
        description: 'У-136 Бирка кабельная треугольная',
        price: 2.46,
        measure: 'шт',
        spec: false,
        quantity: 508
    },
    {
        folder: 'Трансформаторы',
        code: 2657,
        description: 'ЯТП-0,25-220-24 Ящик 250А IP31 с понижающим трансформатором ',
        price: 1466.94,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 2659,
        description: 'ЩРН-П- 4 Бокс, пластик IP40',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 2664,
        description: 'Клипса 16 д/трубы Черная   (50шт./уп)',
        price: 1.38,
        measure: 'шт',
        spec: false,
        quantity: 850
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 2665,
        description: 'Муфта 16 соединительная ПВХ',
        price: 2.7,
        measure: 'шт',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 2708,
        description: 'ТА- 16-8-5,4 Наконечник алюмин.   (100шт./упак.)',
        price: 6.72,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Выключатели',
        code: 2714,
        description: 'Выкл.2СП     ',
        price: 51.36,
        measure: 'шт',
        spec: false,
        quantity: 286
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 2715,
        description: 'ЗВИ- 30 зажим винтовой 16 кв.мм 12 пар   (10шт./упак.)',
        price: 52.02,
        measure: 'шт',
        spec: false,
        quantity: 350
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 2737,
        description: 'НШвИ  1,5- 8 Наконечник штыр.изол. (уп.100шт)',
        price: 32.64,
        measure: 'упак',
        spec: false,
        quantity: 34
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 2801,
        description: 'ПУгНП 3х  1,5  (100м./бух.)',
        price: 26.28,
        measure: 'м',
        spec: false,
        quantity: 1167
    },
    {
        folder: 'Сжимы ответвительные',
        code: 2806,
        description: 'У-871 Сжим ответвительный   (4шт./упак.)',
        price: 180.54,
        measure: 'шт',
        spec: false,
        quantity: 162
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 2808,
        description: 'Короб  15х10 ПВХ (200м в упаковке)',
        price: 8.94,
        measure: 'м',
        spec: false,
        quantity: 1058
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 2826,
        description: 'S201  C50 Автоматический выключатель ABB 1п 50А 6кА',
        price: 715.08,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2828,
        description: 'DSH941R AC-C16/0,03 16A/30mA диф.авт. ABB',
        price: 2699.82,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2830,
        description: 'DSH941R AC-C25/0,03 25A/30mA диф.авт. ABB',
        price: 2699.82,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2846,
        description: 'АВДТ-32 2P 32А/30мА диф.авт.',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 51
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2848,
        description: 'АПВ   4 Белый  (400м.)',
        price: 4.5,
        measure: 'м',
        spec: false,
        quantity: 895
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 2851,
        description: 'Хомут  250х2,5-3 нейл. (100шт.)',
        price: 87.6,
        measure: 'упак',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 2854,
        description: 'ВВГнг-FRLS 5х  6 Кабель   (200м./бух.)',
        price: 234.6,
        measure: 'м',
        spec: false,
        quantity: 355
    },
    {
        folder: 'Расходные материалы',
        code: 2874,
        description: 'Дюбель-гвоздь 6х40   (200шт/уп.)',
        price: 0.74,
        measure: 'шт',
        spec: false,
        quantity: 51528
    },
    {
        folder: 'Трубы для электропроводки',
        code: 2905,
        description: 'Труба 25 гофр ПВХ (50м)',
        price: 8.88,
        measure: 'м',
        spec: false,
        quantity: 1250
    },
    {
        folder: 'Лампы накаливания',
        code: 3038,
        description: 'R63 40W E27 Лампа зеркальная  (25шт./кор.)',
        price: 30.6,
        measure: 'шт',
        spec: false,
        quantity: 120
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 3041,
        description: 'FA19M Фонарь (аккум.прожектор, 19 LED)',
        price: 1375.02,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Провод ПВС',
        code: 3044,
        description: 'ПВС 5х  2,5   (100м.)',
        price: 78.66,
        measure: 'м',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Изолента',
        code: 3049,
        description: 'Изолента желто-зеленая ПВХ  (200шт./в кор.)',
        price: 34.38,
        measure: 'шт',
        spec: false,
        quantity: 1953
    },
    {
        folder: 'Промышленные разъемы',
        code: 3063,
        description: '023 Вилка переносная 2P+E 32А 220В IP44   (10шт./упак.)',
        price: 179.58,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 3079,
        description: 'Хомут  500х5,0 нейл. бел. (100шт)',
        price: 325.14,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Розетки и вилки',
        code: 3083,
        description: 'Вилка б/з  (20шт./упак.)',
        price: 20.52,
        measure: 'шт',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Изолента',
        code: 3090,
        description: 'Изолента ХБ 600г  (25шт.уп)',
        price: 199.8,
        measure: 'шт',
        spec: false,
        quantity: 112
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 3125,
        description: 'Хомут  100х2,5 нейл. бел. (100шт.)',
        price: 27.9,
        measure: 'упак',
        spec: false,
        quantity: 57
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 3129,
        description: 'ПУгНП 2х  1,5   (200м./бухта)',
        price: 18.06,
        measure: 'м',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3130,
        description: 'Короб  12х12 ПВХ (200м в упаковке)',
        price: 8.64,
        measure: 'м',
        spec: false,
        quantity: 646
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3132,
        description: 'Короб  25х16 ПВХ (80м в упаковке)',
        price: 18.42,
        measure: 'м',
        spec: false,
        quantity: 8150
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3184,
        description: 'ТУТ  1,5/0,75 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3185,
        description: 'ТУТ  1,5/0,75 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3186,
        description: 'ТУТ  1,5/0,75 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3187,
        description: 'ТУТ  1,5/0,75 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3188,
        description: 'ТУТ  1,5/0,75 Трубка термоусаживаемая желтая',
        price: 4.5,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Провод ПВС',
        code: 3203,
        description: 'ПВС 2х  1,5   (100м.)',
        price: 21.84,
        measure: 'м',
        spec: false,
        quantity: 4221
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3258,
        description: 'Короб 100х40 ПВХ    (12м/уп.)',
        price: 120.42,
        measure: 'м',
        spec: false,
        quantity: 513
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 3312,
        description: 'Муфта 20 соединительная ПВХ',
        price: 3.18,
        measure: 'шт',
        spec: false,
        quantity: 2040
    },
    {
        folder: 'Кабель КГ',
        code: 3317,
        description: 'КГ 4х 10 Кабель',
        price: 250.86,
        measure: 'м',
        spec: false,
        quantity: 140
    },
    {
        folder: 'Промышленные разъемы',
        code: 3329,
        description: '213 Розетка переносная 2Р+E 16А 220B IP44   (10шт./упак.)',
        price: 141.06,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 3339,
        description: 'Контакт 55 ЭМ (звук) Указатель напряжения',
        price: 388.98,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Средства защиты',
        code: 3342,
        description: 'Боты диэлектрические (4 пары/упак.)',
        price: 722.16,
        measure: 'пар',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 3345,
        description: 'М266 Клещи токоизмерительные',
        price: 449.64,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 3346,
        description: 'DIN-рейка 125 см',
        price: 90.9,
        measure: 'шт',
        spec: false,
        quantity: 202
    },
    {
        folder: 'Знаки электробезопасности',
        code: 3379,
        description: 'Знак треугольник "молния" 100мм самоклеящаяся пленка',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 1535
    },
    {
        folder: 'Трубы для электропроводки',
        code: 3388,
        description: 'Труба 50 гофр ПВХ (15м)',
        price: 23.22,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 3389,
        description: 'Клипса 50 д/трубы   (25шт./уп)',
        price: 9.84,
        measure: 'шт',
        spec: false,
        quantity: 170
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 3399,
        description: 'НШвИ 10-12 Наконечник штыр.изол. (уп.100шт)',
        price: 113.64,
        measure: 'упак',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3401,
        description: 'ГМЛ  35-9 Гильза медная луженая',
        price: 35.04,
        measure: 'шт',
        spec: false,
        quantity: 84
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3402,
        description: 'ГМЛ  25-8 Гильза медная луженая',
        price: 25.32,
        measure: 'шт',
        spec: false,
        quantity: 92
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3403,
        description: 'ГМЛ  16-6 Гильза медная луженая',
        price: 15.6,
        measure: 'шт',
        spec: false,
        quantity: 270
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3404,
        description: 'ГМЛ  10-5 Гильза медная луженая',
        price: 13.44,
        measure: 'шт',
        spec: false,
        quantity: 194
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3405,
        description: 'ГМЛ   6-4 Гильза медная луженая',
        price: 8.04,
        measure: 'шт',
        spec: false,
        quantity: 81
    },
    {
        folder: 'Светильники люминесцентные',
        code: 3422,
        description: 'ЛПО 2х20 Светильник    4шт/упак.',
        price: 401.76,
        measure: 'шт',
        spec: false,
        quantity: 237
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 3438,
        description: 'ТМЛ-  6-6-4 Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 6.54,
        measure: 'шт',
        spec: false,
        quantity: 3514
    },
    {
        folder: 'Трубы для электропроводки',
        code: 3463,
        description: 'Труба 16 ПНД гофрированная с протяжкой (100м)',
        price: 8.52,
        measure: 'м',
        spec: false,
        quantity: 2700
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 3480,
        description: '230AM-02 Счетчик эл.энергии Меркурий 3ф 1т 10-100А',
        price: 2282.52,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Шкафы пустые',
        code: 3485,
        description: 'ЩРН-12з Корпус щита навесной металлический IP54',
        price: 1340.04,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Розетки и вилки',
        code: 3492,
        description: 'Роз.3ОП с/з     35шт/кор.',
        price: 146.04,
        measure: 'шт',
        spec: false,
        quantity: 63
    },
    {
        folder: 'Трансформаторы',
        code: 3502,
        description: 'Т-0,66 150/5 кл. 0,5 5ВА Трансформатор тока',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трансформаторы',
        code: 3504,
        description: 'Т-0,66 200/5 кл. 0,5 5ВА Трансформатор тока   2018г.',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трансформаторы',
        code: 3505,
        description: 'Т-0,66 300/5 кл. 0,5 5ВА Трансформатор тока ',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трансформаторы',
        code: 3506,
        description: 'Т-0,66  75/5 кл. 0,5 5ВА Трансформатор тока   2017г.',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Трансформаторы',
        code: 3507,
        description: 'Т-0,66 100/5 кл. 0,5 5ВА Трансформатор тока   2018г.',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Патроны',
        code: 3555,
        description: 'Е40 Патрон подвесной керамический',
        price: 47.22,
        measure: 'шт',
        spec: false,
        quantity: 106
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 3663,
        description: 'Хомут  350х4,8-5 нейл. бел. (100шт.)',
        price: 189.42,
        measure: 'упак',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 3735,
        description: 'L 7/9/11W Дроссель для PL-11  (50шт./упак.)',
        price: 144.48,
        measure: 'шт',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Расходные материалы',
        code: 3761,
        description: 'WD-40, 200 мл Универсальная смазка',
        price: 250,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 3835,
        description: 'ВР32-35В31250 Рубильник 250А УХЛ3',
        price: 1196.94,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 3840,
        description: 'SPC 20W E27 2700K   (50шт./кор.)',
        price: 83.16,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 3841,
        description: 'ВВГнг-LS 5х  1,5 Кабель   (200м./бух.)',
        price: 51.3,
        measure: 'м',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3885,
        description: 'ТУТ 40/20 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Светильники люминесцентные',
        code: 3899,
        description: 'ЛСП 2х36 IP65 светильник с ЭПРА (6шт/упак.)',
        price: 862.08,
        measure: 'шт',
        spec: false,
        quantity: 205
    },
    {
        folder: 'Бирки кабельные',
        code: 3918,
        description: 'У-134 Бирка кабельная квадратная  (100шт./упак.)',
        price: 2.76,
        measure: 'шт',
        spec: false,
        quantity: 8270
    },
    {
        folder: 'Лампы галогеновые',
        code: 3929,
        description: 'HCS CL 220V 40W G9 FOTON   (10шт/упак)',
        price: 32.1,
        measure: 'шт',
        spec: false,
        quantity: 87
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 3988,
        description: 'НШвИ  4-10 Наконечник штыр.изол. (уп.100шт)',
        price: 61.08,
        measure: 'упак',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 3995,
        description: 'АЕ2066-100 160А Автоматический выключатель',
        price: 4060.86,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 3997,
        description: 'ПВ1  1,5 Белый   (300м./бухта)',
        price: 8.16,
        measure: 'м',
        spec: false,
        quantity: 400
    },
    {
        folder: 'Расходные материалы',
        code: 4000,
        description: 'СИЗ-1 Соед. изолир. зажим (от 1,0 до 3,0 кв. мм) уп. 100 шт.',
        price: 62.64,
        measure: 'упак',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Расходные материалы',
        code: 4001,
        description: 'СИЗ-3 Соед. изолир. зажим от (2,5 до 5,5 кв мм) уп. 100 шт.',
        price: 134.04,
        measure: 'упак',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Расходные материалы',
        code: 4003,
        description: 'СИЗ-4 Соед. изолир. зажим (от 3,5 до 11 кв мм) уп. 100 шт.',
        price: 178.86,
        measure: 'упак',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 4028,
        description: '230ART-03 CN (!!! см. описание) Счетчик эл.энергии Меркурий 3ф 2т 5-7,5А',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 4061,
        description: 'ВА47-63 2п C 32А 4,5кА (!!! продаём 47-29) (6 шт.)',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 268
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 4070,
        description: 'MN 1500 Элемент питания (АА) Duracell (бл.18 шт)',
        price: 48.6,
        measure: 'шт',
        spec: false,
        quantity: 144
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 4071,
        description: 'MN 2400 Элемент питания (ААА) Duracell (бл.18 шт)',
        price: 48.6,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Трубы для электропроводки',
        code: 4105,
        description: 'Труба 40 жесткая ПВХ (по 3м)',
        price: 34.32,
        measure: 'м',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 4141,
        description: 'Короб  80х40 ПВХ (30м в упаковке)',
        price: 104.88,
        measure: 'м',
        spec: false,
        quantity: 192
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 4195,
        description: 'DIN-рейка  30 см',
        price: 19.92,
        measure: 'шт',
        spec: false,
        quantity: 130
    },
    {
        folder: 'Лампы газоразрядные',
        code: 4257,
        description: 'ДНаТ-150 Е40',
        price: 256.38,
        measure: 'шт',
        spec: false,
        quantity: 76
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 4308,
        description: 'ВР32-37В71250 Переключатель 400А',
        price: 2504.58,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 4317,
        description: 'ВВГнг-LS 2x  1,5 Кабель   (100м./бух.)',
        price: 18.84,
        measure: 'м',
        spec: false,
        quantity: 3849.5
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 4319,
        description: 'Коробка  68х45 СП синяя (подрозет. для бетон. стен) для соед.в ряд испол. код 15456  (200шт./упак.)',
        price: 5.64,
        measure: 'шт',
        spec: false,
        quantity: 1334
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 4321,
        description: 'ПУгНП 2х  2,5   (200м./бух.)',
        price: 28.5,
        measure: 'м',
        spec: false,
        quantity: 471
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 4377,
        description: 'ПВ3  35 Белый',
        price: 194.76,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 4513,
        description: 'ТМЛ-  4-5-3 Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 5.88,
        measure: 'шт',
        spec: false,
        quantity: 1197
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 4530,
        description: 'Клипса 40 д/трубы   (25шт./уп и 30шт.упак',
        price: 3.48,
        measure: 'шт',
        spec: false,
        quantity: 335
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 4712,
        description: 'ТА- 25-8-7 Наконечник алюмин. опрес.   (100шт./упак.)',
        price: 9.78,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 4745,
        description: 'НШвИ  0,75-8 Наконечник штыр.изол. (уп.100шт)',
        price: 24.24,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубы для электропроводки',
        code: 4786,
        description: 'Труба 32 жесткая ПВХ (по 3м)',
        price: 40.5,
        measure: 'м',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Выключатели',
        code: 4789,
        description: 'Выкл.1ОП с подсв.  (10шт./упак.)',
        price: 39.6,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Контакторы',
        code: 4824,
        description: 'КМН-10910 Контактор 9А 230В/АС3 1НО ТДМ',
        price: 294.18,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Шкафы пустые',
        code: 4881,
        description: 'КМПн 1/2 Бокс для нар.установки 1 р / 2 мод. ИЭК',
        price: 19.26,
        measure: 'шт',
        spec: false,
        quantity: 36
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4888,
        description: 'ТУТ 40/20 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4889,
        description: 'ТУТ 40/20 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4890,
        description: 'ТУТ 40/20 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4891,
        description: 'ТУТ 40/20 Трубка термоусаживаемая синяя',
        price: 111.72,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4892,
        description: 'ТУТ 40/20 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4994,
        description: 'ТУТ 80/40 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5006,
        description: 'ТУТ  4/2 Трубка термоусаживаемая черная',
        price: 7.32,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5007,
        description: 'ТУТ  6/3 Трубка термоусаживаемая желтая',
        price: 13.02,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5008,
        description: 'ТУТ  8/4 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5009,
        description: 'ТУТ 10/5 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Выключатели',
        code: 5042,
        description: 'Выкл.1ОП IP54   30шт/кор.',
        price: 117.3,
        measure: 'шт',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5061,
        description: 'ТУТ 16/8 Трубка термоусаживаемая зеленая',
        price: 26.7,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5062,
        description: 'ТУТ 20/10 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5063,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5064,
        description: 'ТУТ  4/2 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Промышленные разъемы',
        code: 5066,
        description: '125 Розетка стационарная 32А 3Р+N+E IР44 380В  (10шт./упак.)',
        price: 273.6,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5075,
        description: 'ТУТ  8/4 Трубка термоусаживаемая красная',
        price: 10.2,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5076,
        description: 'ТУТ 10/5 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Клеммники WAGO',
        code: 5152,
        description: '222-412 Клеммник 2х(0,08-2,5-4,0) для многожильн.проводов (50шт.уп.)',
        price: 17.94,
        measure: 'шт',
        spec: false,
        quantity: 456
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 5176,
        description: 'РАр10-3-ОП Розетка с зазем. контактом на DIN-рейку  (5шт.уп.)',
        price: 124.32,
        measure: 'шт',
        spec: false,
        quantity: 143
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 5181,
        description: 'DIN-рейка 120см',
        price: 76.98,
        measure: 'шт',
        spec: false,
        quantity: 207
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5196,
        description: 'ВА47-100 3п  C  32А 10кА Автоматический выключатель   (4шт./упак.)',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5197,
        description: 'ВА47-100 3п  C  40А 10кА Автоматический выключатель   (4шт./упак.)',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5237,
        description: 'ТУТ 10/5 Трубка термоусаживаемая желтая',
        price: 13.38,
        measure: 'м',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5238,
        description: 'ТУТ 10/5 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5239,
        description: 'ТУТ 10/5 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5240,
        description: 'ТУТ 20/10 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5241,
        description: 'ТУТ 20/10 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5242,
        description: 'ТУТ 20/10 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5243,
        description: 'ТУТ 20/10 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5244,
        description: 'ТУТ 30/15 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5245,
        description: 'ТУТ 30/15 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5246,
        description: 'ТУТ 30/15 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5247,
        description: 'ТУТ 30/15 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 5351,
        description: 'ВР32-35В71250 Рубильник 250А УХЛ3',
        price: 1976.22,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5366,
        description: 'ПВ3  50 Белый',
        price: 288.3,
        measure: 'м',
        spec: false,
        quantity: 81
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5398,
        description: 'ТУТ  6/3 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5399,
        description: 'ТУТ  6/3 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Шкафы пустые',
        code: 5487,
        description: 'ЩРН-12з Корпус щита навесной металлический IP31',
        price: 714.78,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Шкафы пустые',
        code: 5488,
        description: 'ЩРН-18з Корпус щита навесной металлический IP31',
        price: 938.76,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5494,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая черная',
        price: 5.52,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Расходные материалы',
        code: 5519,
        description: 'Саморез 3,5х41  (1000 шт./уп.)',
        price: 0.84,
        measure: 'шт',
        spec: false,
        quantity: 32300
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5693,
        description: 'ПВ1  6 Белый  (100м./бух.)',
        price: 35.52,
        measure: 'м',
        spec: false,
        quantity: 793
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5694,
        description: 'ПВ1  6 Синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 305
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5763,
        description: 'Знак "220В" 15х50мм ТДМ',
        price: 1.98,
        measure: 'шт',
        spec: false,
        quantity: 135
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5764,
        description: 'Знак "380В" 15х50мм ТДМ',
        price: 1.98,
        measure: 'шт',
        spec: false,
        quantity: 55
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5765,
        description: 'Знак "Молния" (треугольник)  50х50х50мм ТДМ',
        price: 3.42,
        measure: 'шт',
        spec: false,
        quantity: 1053
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5782,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5783,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5784,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5785,
        description: 'ТУТ  4/2 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5786,
        description: 'ТУТ  4/2 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5787,
        description: 'ТУТ  4/2 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5788,
        description: 'ТУТ  3/1,5 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 5821,
        description: 'Коробка испытательная д/счетчиков КИП прозрачная крышка',
        price: 205.68,
        measure: 'шт',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Лампы накаливания',
        code: 5822,
        description: 'R63 60W E27 Лампа зеркальная   (50шт./кор.)',
        price: 30.6,
        measure: 'шт',
        spec: false,
        quantity: 144
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 5843,
        description: 'СИП-4 2х 16   (400м./бухта)',
        price: 35.16,
        measure: 'м',
        spec: false,
        quantity: 1270
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5876,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая желтая',
        price: 67.2,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5877,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5878,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5879,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5880,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5883,
        description: 'ТУТ 16/8 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5884,
        description: 'ТУТ 16/8 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5885,
        description: 'ТУТ 16/8 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5886,
        description: 'ТУТ 16/8 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5889,
        description: 'ВА47-63 3п C 25А 4,5кА  (4шт./упак.)',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Расходные материалы',
        code: 5961,
        description: 'Круг 115х1,2х22мм отрезной по металлу (50/уп., 200-400/кор.)',
        price: 36.6,
        measure: 'шт',
        spec: false,
        quantity: 182
    },
    {
        folder: 'Бирки кабельные',
        code: 6057,
        description: 'У-135 Бирка кабельная круглая   (100шт./упак.)',
        price: 1.92,
        measure: 'шт',
        spec: false,
        quantity: 1540
    },
    {
        folder: 'Патроны',
        code: 6130,
        description: 'Е14 Патрон подвесной керамический   (400шт./упак.)',
        price: 9.6,
        measure: 'шт',
        spec: false,
        quantity: 699
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 6137,
        description: '201.5 Счетчик эл.энергии Меркурий 1ф 1т 5-60А',
        price: 673.02,
        measure: 'шт',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 6170,
        description: 'ПН-2 100/80А Плавкая вставка ',
        price: 55.92,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 6183,
        description: 'TL-D 36W/33-640 G13 Philips (25шт)',
        price: 57.72,
        measure: 'шт',
        spec: false,
        quantity: 533
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 6184,
        description: 'TL-D 18W/33-640 G13 Philips (25шт)',
        price: 46.02,
        measure: 'шт',
        spec: false,
        quantity: 1102
    },
    {
        folder: 'Лампы газоразрядные',
        code: 6263,
        description: 'ДРИ 400 E40',
        price: 389.64,
        measure: 'шт',
        spec: false,
        quantity: 170
    },
    {
        folder: 'Лампы накаливания',
        code: 6264,
        description: 'ДС-40 220В Е14   (100 шт./кор)',
        price: 12.3,
        measure: 'шт',
        spec: false,
        quantity: 305
    },
    {
        folder: 'Лампы накаливания',
        code: 6269,
        description: 'МО 12В 60Вт E27   (100шт./кор.)',
        price: 14.34,
        measure: 'шт',
        spec: false,
        quantity: 213
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 6435,
        description: 'НШвИ  1,0- 8 Наконечник штыр.изол. (уп.100шт)',
        price: 28.62,
        measure: 'упак',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Шкафы пустые',
        code: 6450,
        description: 'ЩРН-П- 6 Бокс, пластик IP40',
        price: 232.38,
        measure: 'шт',
        spec: false,
        quantity: 39
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 6473,
        description: '231AM-01 Счетчик эл.энергии Меркурий 3ф 5(60)A/380В (ДИН/din)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 6480,
        description: 'ЩМП-09 Щит навесной с монтажной панелью 800х600х250 IP54',
        price: 3412.26,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 6504,
        description: 'ПН-2 250/160А Плавкая вставка',
        price: 74.88,
        measure: 'шт',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 6554,
        description: 'ЗВИ-  3 зажим винтовой 4 кв.мм 12 пар.(10шт./упак.)',
        price: 19.44,
        measure: 'шт',
        spec: false,
        quantity: 226
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 6675,
        description: 'ССА 1001 "ВЫХОД-EXIT" светильник одностор. светодиод. IP20 20шт.кор.',
        price: 453.48,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Инструмент ручной',
        code: 6702,
        description: 'Набор отверток диэл. 7шт. в коробке',
        price: 419.82,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Инструмент ручной',
        code: 6758,
        description: 'Бокорезы 160мм диэлектрические',
        price: 312,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Инструмент ручной',
        code: 6760,
        description: 'Пассатижи диэлектрические 160мм  (6шт.в кор.)',
        price: 514.08,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Выключатели',
        code: 6956,
        description: 'Выкл.1ОП ПРОХОДНОЙ (переключатель)  (10шт./упак.)',
        price: 46.38,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6995,
        description: 'LR6 Элемент питания АА (блист.4шт)',
        price: 15.6,
        measure: 'шт',
        spec: false,
        quantity: 825
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6996,
        description: 'LR03 Элемент питания ААА (блист.4шт)',
        price: 12.54,
        measure: 'шт',
        spec: false,
        quantity: 320
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6997,
        description: '6LF22 BL-1 Элемент питания "Крона"',
        price: 76.5,
        measure: 'шт',
        spec: false,
        quantity: 56
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 7019,
        description: 'ПВ3   0,75 Белый',
        price: 5.58,
        measure: 'м',
        spec: false,
        quantity: 1000
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 7054,
        description: 'СИП-4 4х 16   (200м./бухта)+ БАРАБАН',
        price: 70.56,
        measure: 'м',
        spec: false,
        quantity: 3705
    },
    {
        folder: 'Светильники светодиодные',
        code: 7119,
        description: 'LED 36Вт Светильник 595х595 4000К  (2шт./упак./4шт./упак.)',
        price: 526.08,
        measure: 'шт',
        spec: false,
        quantity: 250
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 7165,
        description: 'ВВГнг 3x  6 Кабель (когда закончится продаём LS)   (100м./бух.)',
        price: 86.16,
        measure: 'м',
        spec: false,
        quantity: 1435
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 7171,
        description: 'НПП-03-100 Светильник IP65   (5шт./кор.)',
        price: 156.54,
        measure: 'шт',
        spec: false,
        quantity: 52
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 7225,
        description: 'ПВ3   1,5 Белый   (500м./бух.)',
        price: 8.34,
        measure: 'м',
        spec: false,
        quantity: 1120
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 7418,
        description: 'Колодка 1я с/з каучук IP44',
        price: 128.4,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 7641,
        description: 'DULUX S 11W/21-840 G23 OSRAM',
        price: 101.76,
        measure: 'шт',
        spec: false,
        quantity: 1390
    },
    {
        folder: 'Гильзы медные луженые',
        code: 7824,
        description: 'ГМЛ  50-11 Гильза медная луженая',
        price: 42.24,
        measure: 'шт',
        spec: false,
        quantity: 95
    },
    {
        folder: 'Лампы накаливания',
        code: 8132,
        description: 'R50 60W E14 Лампа зеркальная   (50шт./кор.)',
        price: 28.2,
        measure: 'шт',
        spec: false,
        quantity: 317
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 8149,
        description: 'ТУТ 60/30 Трубка термоусаживаемая черная',
        price: 178.08,
        measure: 'м',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8202,
        description: 'ВВГнг-LS 4х  1,5 Кабель   (100м./бухта)',
        price: 40.92,
        measure: 'м',
        spec: false,
        quantity: 301
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8203,
        description: 'ВВГнг-FRLS 3х  2,5 Кабель   (100м./бух.)',
        price: 65.82,
        measure: 'м',
        spec: false,
        quantity: 900
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 8208,
        description: 'ПВ3  25 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 154
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8310,
        description: 'ВВГнг-LS 2x  2,5 Кабель   (100м./бух.)',
        price: 28.98,
        measure: 'м',
        spec: false,
        quantity: 2103
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8322,
        description: 'ВВГнг-FRLS 5х  4 Кабель',
        price: 165,
        measure: 'м',
        spec: false,
        quantity: 570
    },
    {
        folder: 'Лампы галогеновые',
        code: 8439,
        description: 'КГ-1000 R7s L=189мм Китай (лампа галогеновая)  (50шт/упак.)',
        price: 42.9,
        measure: 'шт',
        spec: false,
        quantity: 454
    },
    {
        folder: 'Лампы галогеновые',
        code: 8440,
        description: 'КГ-150 R7s L= 78мм Китай (лампа галогеновая)  (50шт/упак.)',
        price: 26.46,
        measure: 'шт',
        spec: false,
        quantity: 113
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 8520,
        description: 'ВР32-37В31250 Рубильник 400А',
        price: 1658.28,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 8557,
        description: 'ТУТ 12/6 Трубка термоусаживаемая черная',
        price: 18.48,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Патроны',
        code: 8894,
        description: 'Е14 Патрон подвесной карболитовый  (50шт./упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8897,
        description: 'ВВГнг-LS 3х  6 Кабель (!!! продаём -нг без LS)   (100м./бух.)',
        price: 106.62,
        measure: 'м',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 8926,
        description: 'ВД1-63 2P  32А/30мА УЗО (ТДМ) (под склад берём только ВД63 электронные)   (6шт./упак.)',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 521
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 8927,
        description: 'ВД1-63 2P  40А/30мА УЗО (ТДМ) (под склад берём только ВД63 электронные)  (6.шт.уп)',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 92
    },
    {
        folder: 'Лампы накаливания',
        code: 9006,
        description: 'R50 40W E14 Лампа зеркальная',
        price: 28.2,
        measure: 'шт',
        spec: false,
        quantity: 224
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 9065,
        description: 'ТУТ 25/12,5 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 9253,
        description: 'КОПП-1500 Комплект промежуточной подвески   (20шт./в кор.)',
        price: 276.3,
        measure: 'шт',
        spec: false,
        quantity: 89
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9309,
        description: 'Изолятор угловой для нулевой шины синий  (100шт.уп.)',
        price: 2.04,
        measure: 'шт',
        spec: false,
        quantity: 74
    },
    {
        folder: 'Шкафы пустые',
        code: 9326,
        description: 'ЩМП-06-2 Щит навесной с монтажной панелью 500х400х220 IP54',
        price: 1731.66,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Сжимы ответвительные',
        code: 9392,
        description: 'У-739 Сжим ответвительный (12шт/уп.)',
        price: 19.26,
        measure: 'шт',
        spec: false,
        quantity: 292
    },
    {
        folder: 'Промышленные разъемы',
        code: 9410,
        description: '113 Розетка стационарная 2Р+PE 16А 220В IP44 ИЭК  (10шт./упак.)',
        price: 187.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Промышленные разъемы',
        code: 9411,
        description: '013 Вилка переносная 2Р+РE 16А 220В IP44  (10шт./упак.)',
        price: 115.74,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Промышленные разъемы',
        code: 9412,
        description: '115 Розетка стационарная 3Р+PE+N 16А 380В IP44   (10шт./упак.)',
        price: 212.82,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Промышленные разъемы',
        code: 9413,
        description: '015 Вилка переносная 3Р+PE+N 16А 380В IP44  (10шт./упак.)',
        price: 155.52,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Шкафы пустые',
        code: 9475,
        description: 'ЩМП-08 Щит с монтажной панелью 650х500х220 IP54',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 9549,
        description: 'SPC 15W Е27 4200К (50шт./кор.)',
        price: 78,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9556,
        description: 'ВА47-63 2п C 63А 4,5кА (6шт.)',
        price: 171.06,
        measure: 'шт',
        spec: false,
        quantity: 84
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9605,
        description: 'ВА47-63 2п C 50А 4,5кА (6 шт.)',
        price: 171.06,
        measure: 'шт',
        spec: false,
        quantity: 54
    },
    {
        folder: 'Розетки и вилки',
        code: 9652,
        description: 'Вилка евро боковая  (50шт./упак.)',
        price: 22.44,
        measure: 'шт',
        spec: false,
        quantity: 314
    },
    {
        folder: 'Лампы галогеновые',
        code: 9731,
        description: 'КГ-300  R7s L=117мм Китай (лампа галогеновая)  (50шт/упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9781,
        description: 'Прожектор светодиодный  10W   20шт/кор',
        price: 143.76,
        measure: 'шт',
        spec: false,
        quantity: 310
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9782,
        description: 'Прожектор светодиодный  20W   (40шт/кор.)',
        price: 210.36,
        measure: 'шт',
        spec: false,
        quantity: 320
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9783,
        description: 'Прожектор светодиодный  50W',
        price: 436.26,
        measure: 'шт',
        spec: false,
        quantity: 72
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9784,
        description: 'Прожектор светодиодный  70W',
        price: 782.52,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Клеммники WAGO',
        code: 9799,
        description: '2273-204 Клеммник 4х(0,5-2,5) для распред. кор. (100шт)',
        price: 8.94,
        measure: 'шт',
        spec: false,
        quantity: 224
    },
    {
        folder: 'Клеммники WAGO',
        code: 9802,
        description: '2273-205 Клеммник 5х(0,5-2,5) для распред. кор.',
        price: 9.84,
        measure: 'шт',
        spec: false,
        quantity: 230
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9808,
        description: 'Прожектор светодиодный  30W   (20шт/кор.)',
        price: 312.42,
        measure: 'шт',
        spec: false,
        quantity: 250
    },
    {
        folder: 'Шкафы пустые',
        code: 9836,
        description: 'ЩРН-П- 8 Бокс, пластик IP40   (30шт./упак.)',
        price: 285.06,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9918,
        description: 'AD22DS Арматура светосигнальная 230В зеленая  (10шт./упак.)',
        price: 46.8,
        measure: 'шт',
        spec: false,
        quantity: 19
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9919,
        description: 'AD22DS Арматура светосигнальная 230В красная  (10шт.упак.)',
        price: 46.8,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9968,
        description: 'Ограничитель на Din-рейку металл.',
        price: 7.86,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 9984,
        description: 'ВД1-63 2P  25А/30мА УЗО (ТДМ) (под склад берём только ВД63 электронные)  (6шт./упак.)',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 1031
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 9985,
        description: 'Колодка 1я с/з каучук ПЕРЕНОСНАЯ IP44 (см. картинку)  (15шт./упак.)',
        price: 96.72,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Шкафы пустые',
        code: 9986,
        description: 'ЩРН-П-10 Бокс, пластик IP40  (20шт./упак.)',
        price: 342.72,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Клеммники из PRC',
        code: 9991,
        description: '222-412 (TDM СК-412) Клеммник 2х(0,2-4мм) для многожильн.проводов (50шт.уп.)',
        price: 10.2,
        measure: 'шт',
        spec: false,
        quantity: 8893
    },
    {
        folder: 'Клеммники из PRC',
        code: 9992,
        description: '222-413 (TDM СК-413) Клеммник 3х(0,2-4мм) для многожильн.проводов (20шт.уп.)',
        price: 13.86,
        measure: 'шт',
        spec: false,
        quantity: 9028
    },
    {
        folder: 'Клеммники из PRC',
        code: 9993,
        description: '222-415 (TDM СК-415) Клеммник 5х(0,2-4мм) для многожильн.проводов (50шт./15шт. в упак.)',
        price: 22.32,
        measure: 'шт',
        spec: false,
        quantity: 3048
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9994,
        description: 'ВА47-63 1п C 20А 4,5кА (12 шт.)',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 63
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9995,
        description: 'ВА47-63 1п C 50А 4,5кА (12 шт.)',
        price: 80.88,
        measure: 'шт',
        spec: false,
        quantity: 552
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9996,
        description: 'ВА47-63 2п C 10А 4,5кА (6 шт.)',
        price: 135,
        measure: 'шт',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9997,
        description: 'ВА47-63 3п C  6А 4,5кА (4 шт.)',
        price: 209.46,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9998,
        description: 'ВА47-63 3п C 16А 4,5кА (4шт.)',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 781
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9999,
        description: 'ВА47-63 3п C 20А 4,5кА (4шт.)',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 151
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10000,
        description: 'ВА47-63 3п C 32А 4,5кА  (4шт./упак.)',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 262
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10001,
        description: 'ВА47-63 3п C 40А 4,5кА (4шт.)',
        price: 210.9,
        measure: 'шт',
        spec: false,
        quantity: 86
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10002,
        description: 'ВА47-63 3п C 63А 4,5кА  (4шт.)',
        price: 250.2,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубы для электропроводки',
        code: 10020,
        description: 'Труба 25 жесткая ПВХ (по 3м)',
        price: 15.78,
        measure: 'м',
        spec: false,
        quantity: 339
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 10209,
        description: '231AТ-01 Счетчик эл.энергии Меркурий IrDA 2т 5(60)А/380В',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 10355,
        description: 'SPC 11W E14 4200K  (100шт./кор)',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 202
    },
    {
        folder: 'Знаки электробезопасности',
        code: 10609,
        description: 'Знак "Заземление" 30х30мм ИЭК',
        price: 1.8,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 10824,
        description: 'ЗНИ-4мм2 Зажим наборный (JXB35А) серый ИЭК  (50шт.уп)',
        price: 12.18,
        measure: 'шт',
        spec: false,
        quantity: 74
    },
    {
        folder: 'Трансформаторы',
        code: 10913,
        description: 'Т-0,66 400/5 кл. 0,5 5ВА Трансформатор тока',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 10923,
        description: 'ВВГнг-FRLS 3х  1,5 Кабель  ГОСТ 100м.бухта',
        price: 45.54,
        measure: 'м',
        spec: false,
        quantity: 2850
    },
    {
        folder: 'Патроны',
        code: 11060,
        description: 'Е27 Патрон настенный карболитовый',
        price: 22.98,
        measure: 'шт',
        spec: false,
        quantity: 94
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 11076,
        description: 'Контакт основания (держатель) 400А для ПН-2',
        price: 70.86,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Промышленные разъемы',
        code: 11132,
        description: '114 Розетка стационарная 3Р+PE 16А 380В IP44  (10шт./упак.)',
        price: 199.8,
        measure: 'шт',
        spec: false,
        quantity: 27
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 11136,
        description: 'ЗАБ 4/16-35 (SO 158.1) Зажим анкерный ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11182,
        description: 'ТУТ  8/4 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11183,
        description: 'ТУТ  8/4 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11184,
        description: 'ТУТ  8/4 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11245,
        description: 'PL-11 11W G23 4000К 50шт',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 11692
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11378,
        description: 'SM40K Изолятор с крепежом',
        price: 43.38,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11379,
        description: 'SM25K Изолятор с крепежом',
        price: 25.2,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11381,
        description: 'SM35K Изолятор с крепежом',
        price: 40.68,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11422,
        description: 'PL-11 11W G23 6500К   (200шт./кор.)',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 155
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11423,
        description: 'PL-9 9W G23 6500К  (200шт./кор.)',
        price: 54.42,
        measure: 'шт',
        spec: false,
        quantity: 6880
    },
    {
        folder: 'Шкафы пустые',
        code: 11575,
        description: 'ЩРН-24з Корпус щита навесной металлический IР31',
        price: 758.7,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11586,
        description: 'Шина "N" нулевая 8х12мм 22/2 "UNIVERSAL"  (10шт.уп.)',
        price: 173.82,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 11602,
        description: 'ЗВИ- 15 зажим винтовой 12 кв.мм 12 пар   (10шт./упак.)',
        price: 33.78,
        measure: 'шт',
        spec: false,
        quantity: 310
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 11698,
        description: 'ВА47-63 3п C 50А 4,5кА  (4шт.)',
        price: 250.2,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Трансформаторы',
        code: 11699,
        description: 'ЯТП-0,25-220-12 Ящик 250А IP31 с понижающим трансформатором',
        price: 1534.8,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Трубы для электропроводки',
        code: 11977,
        description: 'Труба 25 ПНД гофрированная с протяжкой (50м)',
        price: 15.12,
        measure: 'м',
        spec: false,
        quantity: 400
    },
    {
        folder: 'Шкафы пустые',
        code: 12006,
        description: 'ЩМП-04-2 Щит навесной с монтажной панелью 400х300х220 IP31',
        price: 944.22,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 12085,
        description: 'SPC 11W E27 4200K   (50шт./кор.)',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Лампы газоразрядные',
        code: 12112,
        description: 'ДРВ-160 Е27 Лампа ртутная бездроссельная   (40шт.)',
        price: 111.12,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 12127,
        description: 'ВД1-63 2P  16А/30мА УЗО (под склад берём только ВД63 электронные)  (6шт./упак.)',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 179
    },
    {
        folder: 'Трубы для электропроводки',
        code: 12261,
        description: 'Труба 50 жесткая ПВХ (по 3м)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 12325,
        description: 'ТМЛ- 70-12-13 Наконечник мед.луж.опрес.   (100шт./упак.)',
        price: 38.94,
        measure: 'шт',
        spec: false,
        quantity: 185
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 12326,
        description: 'ТМЛ- 95-12-15 Наконечник мед.луж.опрес.   (25шт./упак.)',
        price: 68.88,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Управление освещением',
        code: 12361,
        description: 'ДДП-03 Датчик движения 1200Вт, 10-420с, 6м, 3+Лк, 120(сбоку)+360(сверху)гр IP33',
        price: 329.88,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12366,
        description: 'ЭПРА 2х36 EB-T8-236-EA3 нар.   (50шт/упак.)',
        price: 188.04,
        measure: 'шт',
        spec: false,
        quantity: 259
    },
    {
        folder: 'Шкафы пустые',
        code: 12377,
        description: 'ЩРН-П- 8 Бокс, пластик IP65',
        price: 481.98,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Клеммники WAGO',
        code: 12407,
        description: '2273-203 Клеммник 3х(0,5-2,5) для распред. кор. (100шт/уп,)',
        price: 7.08,
        measure: 'шт',
        spec: false,
        quantity: 1400
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12444,
        description: 'ЭПРА 2х18 EB-T8-218-EA3 нар.   (50шт./упак./30шт./упак.)',
        price: 161.34,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12445,
        description: 'ЭПРА 4х18 EB-T8-418-EA3 нар.   (50шт./упак.100шт./упак.)',
        price: 242.7,
        measure: 'шт',
        spec: false,
        quantity: 1785
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 12516,
        description: 'Коробка  68х45 установочная для Г/К стен   (200шт./упак.)',
        price: 7.86,
        measure: 'шт',
        spec: false,
        quantity: 259
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12531,
        description: 'ТУТ  8/4 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Шкафы пустые',
        code: 12589,
        description: 'КМПн 1/4 Бокс пластик IP30 ИЭК',
        price: 26.4,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Управление освещением',
        code: 12703,
        description: 'ФРЛ-03 Фотореле 5-50Лк 25А   (50шт./кор.)',
        price: 249.54,
        measure: 'шт',
        spec: false,
        quantity: 84
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12802,
        description: 'ТУТ  6/3 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12803,
        description: 'ТУТ  6/3 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12804,
        description: 'ТУТ 60/30 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12805,
        description: 'ТУТ 60/30 Трубка термоусаживаемая зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12806,
        description: 'ТУТ 60/30 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12807,
        description: 'ТУТ 60/30 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12808,
        description: 'ТУТ 80/40 Трубка термоусаживаемая желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12809,
        description: 'ТУТ 80/40 Трубка термоусаживаемая зеленая',
        price: 277.92,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12810,
        description: 'ТУТ 80/40 Трубка термоусаживаемая красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12811,
        description: 'ТУТ 80/40 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Контакторы',
        code: 12829,
        description: 'КМН-22511 Контактор 25А 230В/АС3 1НЗ ТДМ',
        price: 511.92,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 12878,
        description: 'Коробка  80х80х50 распределительная о/у IP54   (100шт./в кор.)',
        price: 27.72,
        measure: 'шт',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Контакторы',
        code: 12898,
        description: 'КМН-11210 Контактор 12А 230В/АС3 1НО ТДМ',
        price: 303.06,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Контакторы',
        code: 12899,
        description: 'КМН-11810 Контактор 18А 230В/АС3 1НО ТДМ',
        price: 345.78,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Контакторы',
        code: 12900,
        description: 'КМН-22510 Контактор 25А 230В/АС3 1НО ТДМ',
        price: 466.68,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Контакторы',
        code: 12901,
        description: 'КМН-23210 Контактор 32А 230В/АС3 1НО ТДМ',
        price: 532.56,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Контакторы',
        code: 12902,
        description: 'КМН-34012 Контактор 40А 230В/АС3 1НО 1НЗ ТДМ',
        price: 1183.44,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Контакторы',
        code: 12904,
        description: 'КМН-46512 Контактор 65А 230В/АС3 1НО 1НЗ ТДМ',
        price: 1253.04,
        measure: 'шт',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 12991,
        description: 'ПВ3  25 Белый',
        price: 139.62,
        measure: 'м',
        spec: false,
        quantity: 315
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 12992,
        description: 'ПВ3  25 Синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 435
    },
    {
        folder: 'Розетки и вилки',
        code: 13052,
        description: 'Роз.1ОП с/з IP54',
        price: 117.48,
        measure: 'шт',
        spec: false,
        quantity: 289
    },
    {
        folder: 'Светодиодные лампы',
        code: 13158,
        description: 'LED  10Вт Е27 4000К Лампа светодиодная A60',
        price: 58.5,
        measure: 'шт',
        spec: false,
        quantity: 657
    },
    {
        folder: 'Управление освещением',
        code: 13207,
        description: 'ФРЛ-02 Фотореле 5-50Лк 10А   (100шт./кор.)',
        price: 178.62,
        measure: 'шт',
        spec: false,
        quantity: 164
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13209,
        description: 'ТА- 35-10-8 Наконечник алюмин. опрес.   (50шт./упак.)',
        price: 10.68,
        measure: 'шт',
        spec: false,
        quantity: 64
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13210,
        description: 'ТА- 50-10-9 Наконечник алюмин. опрес.   (50шт./упак.)',
        price: 13.38,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13211,
        description: 'ТА-120-12-14 Наконечник алюмин.опрес.   (25шт./упак.)',
        price: 27.6,
        measure: 'шт',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 13214,
        description: 'ТМЛ-120-14-17 Наконечник мед.луж.опрес.   (25шт./упак.)',
        price: 94.44,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Светодиодные лампы',
        code: 13225,
        description: 'LED   7Вт Е27 4000К Лампа светодиодная A60   (100шт/кор.)',
        price: 54.84,
        measure: 'шт',
        spec: false,
        quantity: 1892
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 13261,
        description: 'ЛД-20 (18) G13 (25 шт/упак) кратно упаковке',
        price: 40.74,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 13262,
        description: 'ЛД-40 (36) G13 (30 шт/упак) кратно упаковке',
        price: 53.1,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13295,
        description: 'ВА47-100 3п  C  25А 10кА Автоматический выключатель  (4шт./упак.)',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13296,
        description: 'ВА47-100 1п  C  16А 10кА Автоматический выключатель   (12шт./упак.)',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13297,
        description: 'ВА47-100 1п  C  25А 10кА Автоматический выключатель   (12шт./упак.)',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 18
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 13308,
        description: 'ЭПРА 1х18 EB-T8-118-EA3 нар.   (100шт/упак.)',
        price: 129.78,
        measure: 'шт',
        spec: false,
        quantity: 136
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 13309,
        description: 'ЭПРА 1х36 EB-T8-136-EA3 нар.   (100шт/упак.)',
        price: 136.56,
        measure: 'шт',
        spec: false,
        quantity: 562
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13731,
        description: 'ВА47-63 1п C 63А 4,5кА (12 шт.)',
        price: 80.88,
        measure: 'шт',
        spec: false,
        quantity: 119
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 13911,
        description: 'ВВГнг-LS 4х 10 Кабель ГОСТ   БАРАБАН',
        price: 244.5,
        measure: 'м',
        spec: false,
        quantity: 420
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 13914,
        description: 'ПВ1  6 Желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 270
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 14034,
        description: 'Контакт основания (держатель) 100А для ПН-2',
        price: 20.52,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Розетки и вилки',
        code: 14106,
        description: 'Роз.1СП с/з со шторками  (10шт./упак.)',
        price: 66.24,
        measure: 'шт',
        spec: false,
        quantity: 391
    },
    {
        folder: 'Розетки и вилки',
        code: 14107,
        description: 'Роз.2СП с/з со шторками   (10шт./упак.)',
        price: 88.26,
        measure: 'шт',
        spec: false,
        quantity: 49
    },
    {
        folder: 'Трансформаторы',
        code: 14147,
        description: 'Т-0,66  30/5 кл. 0,5 5ВА Трансформатор тока   2018-11шт',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 14243,
        description: 'Шина 2ф гребёнка 63А',
        price: 429.54,
        measure: 'м',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 14382,
        description: 'ВА47-63 3п C 10А 4,5кА (4шт.)',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 14396,
        description: 'ЗВИ- 10 зажим винтовой 10 кв.мм 12 пар  (10шт./упак.)',
        price: 32.4,
        measure: 'шт',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Светильники светодиодные',
        code: 14411,
        description: 'LED 18Вт Cветильник (аналог ЛПО 2х18 узкий) IP40 600х22х75  (20шт./кор.)',
        price: 224.46,
        measure: 'шт',
        spec: false,
        quantity: 512
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14465,
        description: 'ТУТ  6/3 Трубка термоусаживаемая желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14466,
        description: 'ТУТ 10/5 Трубка термоусаживаемая белая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14467,
        description: 'ТУТ 10/5 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 14569,
        description: 'ВА47-100 1п  C  10А 10кА Автоматический выключатель',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 14601,
        description: 'Коробка  68х42 СП красная (подрозетник для бетон стен)стыковочные узлы   (300шт./упак.)',
        price: 6.66,
        measure: 'шт',
        spec: false,
        quantity: 263
    },
    {
        folder: 'Управление освещением',
        code: 14605,
        description: 'ФРЛ-11 Фотореле 2-100Лк 20А DIN-рейка (с датчиком IP65)',
        price: 533.04,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14608,
        description: 'ТУТ 16/8 Трубка термоусаживаемая черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Бирки кабельные',
        code: 14907,
        description: 'У-153 Бирка кабельная квадратная',
        price: 1.32,
        measure: 'шт',
        spec: false,
        quantity: 5650
    },
    {
        folder: 'Трансформаторы',
        code: 14940,
        description: 'Т-0,66  20/5 кл. 0,5 5ВА Трансформатор тока   2011г.',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трансформаторы',
        code: 14942,
        description: 'Т-0,66  50/5 кл. 0,5 5ВА Трансформатор тока   2017г-7шт,2011г.-6шт.',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 27
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15301,
        description: 'Шина 3ф гребёнка  63А',
        price: 647.46,
        measure: 'м',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15319,
        description: 'Шина N-PE  8 на DIN-рейку  (20шт.уп.)',
        price: 43.02,
        measure: 'шт',
        spec: false,
        quantity: 817
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15337,
        description: 'DIN-рейка 140 см',
        price: 85.92,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 15456,
        description: 'Канал соединительный для установочных коробок (код 4319)  (100шт./упак.)',
        price: 1.38,
        measure: 'шт',
        spec: false,
        quantity: 1137
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15506,
        description: 'Ограничитель на DIN-рейку (пластик)',
        price: 9.24,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15509,
        description: 'ЗНИ-2,5мм2 Зажим наборный (JXB25А) серый  (50шт.уп.)',
        price: 10.92,
        measure: 'шт',
        spec: false,
        quantity: 80
    },
    {
        folder: 'Шкафы пустые',
        code: 15678,
        description: 'ЩУ-3ф/1-1-6 Щит учета электроэнергии 445х400х150 2 двери IP66',
        price: 2201.22,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15717,
        description: 'Шина "N" нулевая на DIN-рейку в корпусе 4х7 групп ТДМ',
        price: 450.66,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Знаки электробезопасности',
        code: 15762,
        description: 'Знак "молния" (треугольник) 160х160х160мм',
        price: 39.48,
        measure: 'шт',
        spec: false,
        quantity: 75
    },
    {
        folder: 'Шкафы пустые',
        code: 15827,
        description: 'ЩУ-1ф/1-1-6 Щит учета электроэнергии 310х300х150 2 двери IP66',
        price: 1533.96,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15834,
        description: 'Шина "N" нулевая на DIN-рейку в корпусе 4х11 групп ТДМ',
        price: 575.28,
        measure: 'шт',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 15856,
        description: 'ВВГнг-LS 3х  1,5 Кабель   (бухта 200м.)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 16727
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 15857,
        description: 'ВВГнг-LS 3х  2,5 Кабель   (бухта 200м.)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8844
    },
    {
        folder: 'Трубы для электропроводки',
        code: 15859,
        description: 'Труба 32 ПНД гофрированная с протяжкой (25м)',
        price: 19.2,
        measure: 'м',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 15976,
        description: 'ВР32-37А70220-00 Рубильник УХЛ3 400А',
        price: 2276.16,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Промышленные разъемы',
        code: 16136,
        description: '123 Розетка стационарная 2Р+PE 32А 220В IP44  (10шт./упак.)',
        price: 237.84,
        measure: 'шт',
        spec: false,
        quantity: 44
    },
    {
        folder: 'Патроны',
        code: 16264,
        description: 'G23 Патрон пластиковый   (250шт./упак.)',
        price: 39.24,
        measure: 'шт',
        spec: false,
        quantity: 500
    },
    {
        folder: 'Клеммники из PRC',
        code: 16620,
        description: '2273-244 Клеммник 4х(0,5-2,5) для распред. кор. ТДМ (130шт/уп.)',
        price: 5.22,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Клеммники из PRC',
        code: 16621,
        description: '2273-246 Клеммник 6х(0,5-2,5) С ПАСТОЙ для распред. кор. ТДМ (90шт/уп.)',
        price: 7.8,
        measure: 'шт',
        spec: false,
        quantity: 555
    },
    {
        folder: 'Клеммники из PRC',
        code: 16622,
        description: '2273-232 Клеммник 2х(0,5-2,5) С ПАСТОЙ для распред. кор. ТДМ (250шт/уп.)',
        price: 4.2,
        measure: 'шт',
        spec: false,
        quantity: 1296
    },
    {
        folder: 'Клеммники из PRC',
        code: 16623,
        description: '2273-233 Клеммник 3х(0,5-2,5) С ПАСТОЙ для распред. кор. ТДМ (180шт/уп.)',
        price: 5.46,
        measure: 'шт',
        spec: false,
        quantity: 785
    },
    {
        folder: 'Клеммники из PRC',
        code: 16624,
        description: '2273-235 Клеммник 5х(0,5-2,5) С ПАСТОЙ для распред. кор. ТДМ (100шт/уп.)',
        price: 7.56,
        measure: 'шт',
        spec: false,
        quantity: 250
    },
    {
        folder: 'Клеммники из PRC',
        code: 16625,
        description: '2273-248 Клеммник 8х(0,5-2,5) С ПАСТОЙ для распред. кор. ТДМ (70шт/уп.)',
        price: 9.54,
        measure: 'шт',
        spec: false,
        quantity: 134
    },
    {
        folder: 'Светодиодные лампы',
        code: 16629,
        description: 'LED   9Вт T8 G13 4500K l=600mm (аналог ЛБ-20) (не включать с ЭПРА и ЭмПРА) (30шт/упак.)',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 3823
    },
    {
        folder: 'Светодиодные лампы',
        code: 16630,
        description: 'LED  18Вт T8 G13 4500K l=1200mm лампа (аналог ЛБ-40) (не включать с ЭПРА и ЭмПРА)  (25шт/упак.)',
        price: 100.2,
        measure: 'шт',
        spec: false,
        quantity: 1530
    },
    {
        folder: 'Патроны',
        code: 16701,
        description: 'Е14 Патрон пластиковый с кольцом белый  (50шт./упак.)',
        price: 12.54,
        measure: 'шт',
        spec: false,
        quantity: 430
    },
    {
        folder: 'Патроны',
        code: 16702,
        description: 'Е27 Патрон подвесной пластиковый белый (50шт./упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 16774,
        description: 'ВР32-35А70220-00 Рубильник 250А УХЛ3',
        price: 1729.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 16875,
        description: 'ВА47-100 3п  C  50А 10кА Автоматический выключатель  (4шт./упак.)',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Управление освещением',
        code: 16883,
        description: 'ФРЛ-01 Фотореле 10Лк 6А',
        price: 138.48,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Светильники светодиодные',
        code: 16972,
        description: 'СПП 2301 Светильник светодиодный 12Вт  (40шт./упак.)(на складе есть медуза 10вт IP65 код 20 540)',
        price: 166.74,
        measure: 'шт',
        spec: false,
        quantity: 3038
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 16999,
        description: 'Клипса 20 д/трубы Черная   (50шт./уп)',
        price: 1.62,
        measure: 'шт',
        spec: false,
        quantity: 500
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 17000,
        description: 'Клипса 25 д/трубы Черная   (50шт./уп)',
        price: 2.52,
        measure: 'шт',
        spec: false,
        quantity: 1450
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17005,
        description: 'Шина 1ф гребёнка  63А',
        price: 227.94,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 17044,
        description: 'ТМЛ-  2,5-6-2,6 Наконечник мед.луж.опрес.',
        price: 5.46,
        measure: 'шт',
        spec: false,
        quantity: 765
    },
    {
        folder: 'Шкафы пустые',
        code: 17048,
        description: 'КМПн 1/2 Бокс для нар.установки с крышкой',
        price: 115.68,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Шкафы пустые',
        code: 17050,
        description: 'КМПн 2/4 Бокс для нар.установки с крышкой',
        price: 144.78,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17062,
        description: 'ЗГОП 16- 95/2,5-35 Зажим герметичный ответвительный прокалывающий   (8шт./упак.)',
        price: 115.02,
        measure: 'шт',
        spec: false,
        quantity: 306
    },
    {
        folder: 'Патроны',
        code: 17066,
        description: 'Е27 Патрон потолочный карболитовый прямой   (50шт./упак.)',
        price: 22.98,
        measure: 'шт',
        spec: false,
        quantity: 173
    },
    {
        folder: 'Шкафы пустые',
        code: 17093,
        description: 'ЩРН-П-12 Бокс, пластик IP40 сосна',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 17095,
        description: 'ЩРН-П-24 Бокс, пластик IP40 сосна',
        price: 1296.84,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Изолента',
        code: 17144,
        description: 'Изолента ХБ 19мм х  7м 100г',
        price: 31.56,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Промышленные разъемы',
        code: 17171,
        description: 'РШ-ВШ 32А (3 штырьк.) 220В о/у белый',
        price: 118.74,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Розетки и вилки',
        code: 17229,
        description: 'Вилка евро боковая с ушком черная   (35шт./упак.)',
        price: 36.36,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Патроны',
        code: 17261,
        description: 'Е27 Патрон карболитовый с кольцом   (50шт./упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17271,
        description: 'ЗАБ 16-25 М Зажим анкерный',
        price: 59.04,
        measure: 'шт',
        spec: false,
        quantity: 199
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17288,
        description: 'Шина N-PE 12 на DIN-рейку  (20шт.уп.)',
        price: 54.36,
        measure: 'шт',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Светильники светодиодные',
        code: 17292,
        description: 'СПП 2101 Светильник светодиодный 8Вт  (40шт./упак.)  ',
        price: 145.38,
        measure: 'шт',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17307,
        description: 'ЗАК 50-70/1500 Зажим анкерный клиновой',
        price: 272.7,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Шкафы пустые',
        code: 17329,
        description: 'ЩУ-3ф/1-0-3 Щит учета электроэнергии 310х300х150 1 дверь IP66',
        price: 1837.98,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Розетки и вилки',
        code: 17534,
        description: 'Колодка 3я с/з   (40шт./упак.)',
        price: 81.18,
        measure: 'шт',
        spec: false,
        quantity: 73
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17557,
        description: 'DIN-рейка   7,5 cм',
        price: 6.48,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17622,
        description: 'СУ-20 Скрепа-бугель усиленная (100шт/уп)',
        price: 1101,
        measure: 'упак',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 17629,
        description: 'ТА 70-10-12 Наконечник алюмин. опрес.',
        price: 17.76,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Клеммники WAGO',
        code: 17636,
        description: '2273-202 Клеммник 2х(0,5-2,5) для распред. кор. (100шт/уп.)',
        price: 6.6,
        measure: 'шт',
        spec: false,
        quantity: 616
    },
    {
        folder: 'Розетки и вилки',
        code: 17798,
        description: 'Вилка евро боковая с ушком   (35шт./упак.)',
        price: 36.36,
        measure: 'шт',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Контакторы',
        code: 17857,
        description: 'КМН-22510 Контактор 25А 400В/АС3 1НО ТДМ',
        price: 518.4,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Светодиодные лампы',
        code: 17864,
        description: 'LED  12Вт Е27 3000К Лампа светодиодная А60  (100шт/кор.)',
        price: 63.36,
        measure: 'шт',
        spec: false,
        quantity: 320
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 18110,
        description: 'Угол 20 соединительный 90гр. ПВХ',
        price: 7.98,
        measure: 'шт',
        spec: false,
        quantity: 859
    },
    {
        folder: 'Светодиодные лампы',
        code: 18319,
        description: 'LED  12Вт Е27 4000К Лампа светодиодная A60   (100шт./кор.)',
        price: 63.36,
        measure: 'шт',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Розетки и вилки',
        code: 18387,
        description: 'Колодка 4я с/з   (24шт./упак.)',
        price: 113.94,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Розетки и вилки',
        code: 18388,
        description: 'Колодка 2я с/з   (50шт./упак.)',
        price: 70.56,
        measure: 'шт',
        spec: false,
        quantity: 39
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 18525,
        description: 'ЗГОП 16- 95/1,5-10 Зажим герметичный ответвительный прокалывающий   (20шт./упак.)',
        price: 78.18,
        measure: 'шт',
        spec: false,
        quantity: 389
    },
    {
        folder: 'Провод ПВС',
        code: 18627,
        description: 'ПВС 3х  1,5   (100м.) ГОСТ (для удлинителей)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 740
    },
    {
        folder: 'Провод ПВС',
        code: 18628,
        description: 'ПВС 3х  2,5   (100м.) ГОСТ (для удлинителей)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 2320
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 18664,
        description: 'ВН-32 2P  25A Выключатель нагрузки ТДМ   (6шт./упак.)',
        price: 173.58,
        measure: 'шт',
        spec: false,
        quantity: 76
    },
    {
        folder: 'Светодиодные лампы',
        code: 18665,
        description: 'LED   5Вт Е14 4000К Лампа светодиодная свеча   (100шт/кор.)',
        price: 53.52,
        measure: 'шт',
        spec: false,
        quantity: 95
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 18683,
        description: 'ТУТ  4/2 Трубка термоусаживаемая синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 18691,
        description: 'Шина нулевая  8/1 6х9мм',
        price: 34.26,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Шкафы пустые',
        code: 18743,
        description: 'ЩРН-36з Корпус щита навесной металлический IP31',
        price: 1170.06,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Клеммники из PRC',
        code: 18840,
        description: 'Клеммник для распаячных и установочных коробок с шагом 60мм IP20 ТДМ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светильники светодиодные',
        code: 18915,
        description: 'LED 36Вт Светильник (аналог ЛСП 2х36 широкий) IP65   (12шт./упак.)',
        price: 920.7,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Светильники светодиодные',
        code: 18916,
        description: 'LED 36Вт светильник (аналог ЛСП 2х36 узкий) IP65  (30шт./упак.)',
        price: 549.84,
        measure: 'шт',
        spec: false,
        quantity: 978
    },
    {
        folder: 'Удлинители',
        code: 18988,
        description: 'Удлинитель 4х30м на кат. т/защ. ПВС3х2,5 IP44',
        price: 2906.25,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19252,
        description: 'Удлинитель 4х30м на кат. т/защ. ПВС3х1,5 IP44',
        price: 2199.35,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19253,
        description: 'Удлинитель 4х50м на кат. т/защ. ПВС3х1,5 IP44',
        price: 3029.06,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19254,
        description: 'Удлинитель 4х50м на кат. т/защ. ПВС3х2,5 IP44',
        price: 3866.4,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Расходные материалы',
        code: 19456,
        description: 'СИЗ-2 Соед. изолир. зажим (от 2,5 до 4,5 кв. мм) синий уп. 100 шт.',
        price: 96.18,
        measure: 'упак',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 19498,
        description: 'Шина N-PE  6 на DIN-рейку   (20шт.уп.)',
        price: 37.44,
        measure: 'шт',
        spec: false,
        quantity: 111
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 19548,
        description: 'ЗГОП 25-150/25-95 Зажим герметичный ответвительный прокалывающий',
        price: 140.34,
        measure: 'шт',
        spec: false,
        quantity: 54
    },
    {
        folder: 'Светодиодные лампы',
        code: 19605,
        description: 'LED   7Вт Е14 2700К Лампа светодиодная свеча  (100шт/кор.)',
        price: 44.34,
        measure: 'шт',
        spec: false,
        quantity: 545
    },
    {
        folder: 'Светодиодные лампы',
        code: 19606,
        description: 'LED  11Вт Е27 4000К Лампа светодиодная A60  (100шт/кор.)',
        price: 60.18,
        measure: 'шт',
        spec: false,
        quantity: 119
    },
    {
        folder: 'Светильники светодиодные',
        code: 19792,
        description: 'ДПБ 01-2х6-001 Светильник 12Вт светодиодный Led',
        price: 465,
        measure: 'шт',
        spec: false,
        quantity: 2634
    },
    {
        folder: 'Светодиодные лампы',
        code: 19903,
        description: 'LED   9Вт Е27 2700К Лампа светодиодная A60   (100шт./кор.)',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Светодиодные лампы',
        code: 19948,
        description: 'LED   7Вт Е27 2700К Лампа светодиодная A60  (100шт/кор.)',
        price: 54.84,
        measure: 'шт',
        spec: false,
        quantity: 1743
    },
    {
        folder: 'Светодиодные лампы',
        code: 19950,
        description: 'LED   8Вт Е27 2700K Лампа светодиодная G45F (шар)',
        price: 56.2,
        measure: 'шт',
        spec: false,
        quantity: 162
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 19956,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 32А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 19957,
        description: 'ВА 4729 1Р (ВА 47-60 1P) 32А (C) 6кА',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20111,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 50А (С) 6кА',
        price: 348.9,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Светильники светодиодные',
        code: 20156,
        description: 'СПО 120х2 Светильник под LED лампу T8 ТДМ (!!! на складе по факту код 23849)   (10шт./упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Светильники светодиодные',
        code: 20157,
        description: 'СПО 120х1 Светильник под LED лампу T8 ТДМ  (4шт./упак.)',
        price: 339.48,
        measure: 'шт',
        spec: false,
        quantity: 120
    },
    {
        folder: 'Светильники светодиодные',
        code: 20158,
        description: 'СПО  60х2 Светильник под LED лампу T8 ТДМ    (4шт./упак.)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 77
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 20231,
        description: 'Хомут  200х2,5 нейл. черн. (100 шт.)',
        price: 55.98,
        measure: 'упак',
        spec: false,
        quantity: 104
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 20263,
        description: 'КАМ-1500 Кронштейн анкерный  (8шт./упак.)',
        price: 171.84,
        measure: 'шт',
        spec: false,
        quantity: 93
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 20362,
        description: 'Шина "N" нулевая в изоляторе на DIN-рейку 8x12мм 12 групп',
        price: 109.86,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Светильники светодиодные',
        code: 20459,
        description: 'LED 18Вт Светильник (аналог ЛСП 2х18 узкий) IP65   (10шт.кор.)',
        price: 351.96,
        measure: 'шт',
        spec: false,
        quantity: 44
    },
    {
        folder: 'Контакторы',
        code: 20537,
        description: 'КМН-34012 Контактор 40А 400В/АС3 1НО 1НЗ ТДМ',
        price: 1201.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Гильзы медные луженые',
        code: 20638,
        description: 'ГМЛ   4-3 Гильза медная луженая',
        price: 6.96,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Светодиодные лампы',
        code: 20682,
        description: 'LED   7Вт Е14 2700К Лампа светодиодная шар',
        price: 43.86,
        measure: 'шт',
        spec: false,
        quantity: 3464
    },
    {
        folder: 'Светодиодные лампы',
        code: 20685,
        description: 'LED   9Вт Е27 4500К Лампа светодиодная А60',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 344
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20755,
        description: 'ВА 4729 1P (ВА 47-60 1Р) 10А (С) 6кА',
        price: 87.12,
        measure: 'шт',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20756,
        description: 'ВА 4729 1P (ВА 47-60 1Р) 16А (С) 6кА',
        price: 78.54,
        measure: 'шт',
        spec: false,
        quantity: 229
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20758,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 16А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20759,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 40А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Прожектора светодиодные',
        code: 20801,
        description: 'Прожектор светодиодный 150W',
        price: 1387.86,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светильники светодиодные',
        code: 20904,
        description: 'LED 36Вт Светильник (аналог ЛПО 2х36 узкий) IP40  (30шт./упак.)',
        price: 331.5,
        measure: 'шт',
        spec: false,
        quantity: 5972
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21182,
        description: 'ВА 4729 1P (ВА 47-60 1Р) 25А (С) 6кА',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 253
    },
    {
        folder: 'Светильники светодиодные',
        code: 21189,
        description: 'СПО  60х1 Светильник под LED лампу T8 ТДМ',
        price: 305.04,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 21241,
        description: 'ЛМ-50 Лента бандажная   (3шт./в кор.)',
        price: 1874.28,
        measure: 'упак',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Прожектора светодиодные',
        code: 21280,
        description: 'Прожектор светодиодный 100W   (10шт/кор.)',
        price: 975,
        measure: 'шт',
        spec: false,
        quantity: 82
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 21363,
        description: '230ART-03 RN Счетчик эл.энергии Меркурий 3ф 2т 5-50А',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21414,
        description: 'ВА 4729 2Р (ВА 47-60 2Р) 32А (С) 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21415,
        description: 'ВА 4729 1P (ВА 47-60 1Р) 40А (С) 6кА',
        price: 86.58,
        measure: 'шт',
        spec: false,
        quantity: 121
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21416,
        description: 'ВА 4729 2Р (ВА 47-60 2Р) 40А (С) 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 21431,
        description: 'ШВВП 3х  0,75    (200м./бухта)',
        price: 14.28,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Светодиодные лампы',
        code: 21505,
        description: 'LED  18Вт T8 G13 6500K l=1200mm лампа (аналог ЛД-40) (не включать с ЭПРА и ЭмПРА)  (25шт/упак.)',
        price: 100.2,
        measure: 'шт',
        spec: false,
        quantity: 923
    },
    {
        folder: 'Светодиодные лампы',
        code: 21529,
        description: 'LED   8Вт Е27 4500K Лампа светодиодная G45F (шар)',
        price: 56.2,
        measure: 'шт',
        spec: false,
        quantity: 308
    },
    {
        folder: 'Светодиодные лампы',
        code: 21608,
        description: 'LED  30Вт E27 6500К Лампа светодиодная высокомощная ',
        price: 208.02,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21909,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 25А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 52
    },
    {
        folder: 'Светодиодные лампы',
        code: 21991,
        description: 'LED  40Вт Лампа светодиодная 6400К Е27',
        price: 325.02,
        measure: 'шт',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 22480,
        description: 'DIN-рейка 100см усиленная алюминиевая 1,5мм ТДМ',
        price: 152.1,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Светодиодные лампы',
        code: 22599,
        description: 'LED   9Вт T8 G13 6500K l=600mm (аналог ЛД-20) (не включать с ЭПРА и ЭмПРА)  (25шт/упак.)',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 3683
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 22625,
        description: 'ВА 4729 3P (ВА 47-60 3Р) 63А (C) 6кА',
        price: 279,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Светодиодные лампы',
        code: 22791,
        description: 'LED  20Вт Е27 4500K A60 Лампа светодиодная',
        price: 105.3,
        measure: 'шт',
        spec: false,
        quantity: 815
    },
    {
        folder: 'Светодиодные лампы',
        code: 22976,
        description: 'LED   5Вт Е27 4000К Лампа светодиодная A60',
        price: 53.52,
        measure: 'шт',
        spec: false,
        quantity: 900
    },
    {
        folder: 'Светодиодные лампы',
        code: 22979,
        description: 'LED  10Вт E27 3000К Лампа светодиодная A60',
        price: 58.5,
        measure: 'шт',
        spec: false,
        quantity: 750
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 23009,
        description: 'Шина "N" нулевая 6х9мм 24/1',
        price: 85.32,
        measure: 'шт',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Светильники светодиодные',
        code: 23128,
        description: 'LED 36Вт Светильник 595х595 6500К   (2шт.уп./4шт.упак.)',
        price: 526.08,
        measure: 'шт',
        spec: false,
        quantity: 198
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 23331,
        description: 'Хомут  150х2,5 нейл. черн. (100шт.)',
        price: 41.76,
        measure: 'упак',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Светодиодные лампы',
        code: 23562,
        description: 'LED  15Вт Е27 4000К Лампа светодиодная A60',
        price: 80.7,
        measure: 'шт',
        spec: false,
        quantity: 845
    },
    {
        folder: 'Светильники светодиодные',
        code: 23849,
        description: 'СПО 120х2 Светильник под LED лампу T8 (поликарбонат) ТДМ',
        price: 378,
        measure: 'шт',
        spec: false,
        quantity: 61
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 24180,
        description: 'ВА 4729 2Р (ВА 47-60 2Р) 25А (С) 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 59
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24265,
        description: 'ВА87-33 3п  80А 18кА Автоматический выключатель',
        price: 1683.48,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24483,
        description: 'ВА87-35 3п 250А 25кА Автоматический выключатель  (8шт./упак.)',
        price: 2620.86,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24562,
        description: 'ВА87-33 3п 100А 18кА Автоматический выключатель',
        price: 1667.46,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Светильники светодиодные',
        code: 24747,
        description: 'СПО  60х2 Светильник под LED лампу T8 (поликарбонат) ТДМ',
        price: 334.44,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24986,
        description: 'ВА87-35 3п 200А 25кА Автоматический выключатель',
        price: 2620.86,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 25061,
        description: 'ВА87-33 3п 160А 18кА Автоматический выключатель',
        price: 1750.44,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 25457,
        description: 'Площадка 20х20 самоклеющаяся под хомут белая (100шт)',
        price: 115.98,
        measure: 'упак',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 25650,
        description: 'ВА87-33 3п 125А 18кА Автоматический выключатель',
        price: 1683.48,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Светильники светодиодные',
        code: 25866,
        description: 'ДКУ29-40-501 Светильник светодиодный уличный 40 Вт',
        price: 2376.9,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Светильники светодиодные',
        code: 25867,
        description: 'ДКУ29-80-501 Светильник светодиодный уличный 80 Вт',
        price: 4255.08,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: '',
        code: 26190,
        description: 'СКЛАД',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26435,
        description: 'Лампы накаливания',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26436,
        description: 'Компактные люминесцентные лампы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26437,
        description: 'Линейные люминесцентные лампы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26438,
        description: 'Светодиодные лампы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26439,
        description: 'Лампы галогеновые',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26440,
        description: 'Лампы газоразрядные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26441,
        description: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26442,
        description: 'Управление освещением',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26443,
        description: 'Патроны',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26444,
        description: 'Светильники люминесцентные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26445,
        description: 'Светильники подвесные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26446,
        description: 'Светильники настенно-потолочные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26447,
        description: 'Светильники светодиодные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26448,
        description: 'Прожектора светодиодные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26449,
        description: 'Светодиодные фонари и аварийные указатели',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26450,
        description: 'Элементы питания и аккумуляторы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26451,
        description: 'Коробки установочные (подрозетники)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26452,
        description: 'Розетки и вилки',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26453,
        description: 'Удлинители',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26454,
        description: 'Выключатели',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26455,
        description: 'Электроустановочные изделия из каучука',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26456,
        description: 'Промышленные разъемы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26457,
        description: 'Провода и кабели с алюминиевой жилой',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26458,
        description: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26459,
        description: 'Кабель КГ',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26460,
        description: 'Кабель NYM',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26461,
        description: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26462,
        description: 'Провод ПВС',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26463,
        description: 'Провода ПУНП, ПУгНП и ШВВП',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26464,
        description: 'Провода и кабели связи',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26465,
        description: 'Трубы для электропроводки',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26467,
        description: 'Клипсы для труб ПВХ и ПНД',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26468,
        description: 'Кабельные каналы (короба)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26469,
        description: 'Коробки распределительные (распаячные)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26470,
        description: 'Сжимы ответвительные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26471,
        description: 'Провода СИП и арматура к ним',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26472,
        description: 'Клеммники WAGO',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26473,
        description: 'Клеммники из PRC',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26474,
        description: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26475,
        description: 'Наконечники алюминиевые под опрессовку',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26476,
        description: 'Наконечники медные луженые под опрессовку',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26477,
        description: 'Гильзы медные луженые',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26478,
        description: 'Наконечники НШвИ (штыревые)',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26479,
        description: 'Шкафы пустые',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26480,
        description: 'Аксессуары для шкафов и щитов',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26481,
        description: 'Автоматические выключатели на DIN-рейку',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26482,
        description: 'Автоматические выключатели на монтажную панель',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26484,
        description: 'Автоматические выключатели ABB на DIN-рейку',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26485,
        description: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26486,
        description: 'Выключатели дифференциального тока (УЗО) 2п',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26487,
        description: 'Контакторы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26488,
        description: 'Выключатели нагрузки (рубильники) и переключатели',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26489,
        description: 'Плавкие вставки и держатели к ним',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26490,
        description: 'Трансформаторы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26491,
        description: 'Приборы учета электроэнергии',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26492,
        description: 'Знаки электробезопасности',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26493,
        description: 'Средства защиты',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26494,
        description: 'Электроизмерительные приборы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26495,
        description: 'Изолента',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26496,
        description: 'Трубка термоусаживаемая ТУТ',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26497,
        description: 'Бирки кабельные',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26498,
        description: 'Хомуты нейлоновые',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26499,
        description: 'Инструмент ручной',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26500,
        description: 'Расходные материалы',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 26648,
        description: 'НШвИ 16-12 Наконечник штыр.изол. GLW (уп.100шт)',
        price: 0,
        measure: 'упак',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провод ПВС',
        code: 26733,
        description: 'ПВС 2х  1,5 ГОСТ',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 26805,
        description: 'ПУгНП 3х  4',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 26806,
        description: 'ПУНП 3х  4',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 26851,
        description: 'НШвИ 16-12 Наконечник штыр.изол. (уп.50шт) EKF PROxima',
        price: 0,
        measure: 'упак',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светильники светодиодные',
        code: 27008,
        description: 'Светильник IP65 120х2 под LED лампу T8 G13',
        price: 376.44,
        measure: 'шт',
        spec: false,
        quantity: 56
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 27150,
        description: 'ПВ1 16 Красный',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27248,
        description: 'Светотехника',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27249,
        description: 'Кабель и провод',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27250,
        description: 'Низковольтная автоматика',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27251,
        description: 'Электроустановочные изделия',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27252,
        description: 'Электромонтажные изделия',
        price: 0,
        measure: '',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 27322,
        description: 'АПВ   6 Синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    }
];

const folders = [
    {
        name: 'СКЛАД',
        children: [
            {
                name: 'Кабель и провод',
                children: [
                    {
                        name: 'Кабели ВВГнг, ВВГнг-LS и -FRLS'
                    },
                    {
                        name: 'Кабель NYM'
                    },
                    {
                        name: 'Кабель КГ'
                    },
                    {
                        name: 'Провод ПВС'
                    },
                    {
                        name: 'Провода и кабели с алюминиевой жилой'
                    },
                    {
                        name: 'Провода и кабели связи'
                    },
                    {
                        name: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)'
                    },
                    {
                        name: 'Провода ПУНП, ПУгНП и ШВВП'
                    },
                    {
                        name: 'Провода СИП и арматура к ним'
                    }
                ]
            },
            {
                name: 'Низковольтная автоматика',
                children: [
                    {
                        name: 'Автоматические выключатели ABB на DIN-рейку'
                    },
                    {
                        name: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п'
                    },
                    {
                        name: 'Автоматические выключатели на DIN-рейку'
                    },
                    {
                        name: 'Автоматические выключатели на монтажную панель'
                    },
                    {
                        name: 'Выключатели дифференциального тока (УЗО) 2п'
                    },
                    {
                        name: 'Выключатели нагрузки (рубильники) и переключатели'
                    },
                    {
                        name: 'Контакторы'
                    },
                    {
                        name: 'Плавкие вставки и держатели к ним'
                    },
                    {
                        name: 'Приборы учета электроэнергии'
                    },
                    {
                        name: 'Трансформаторы'
                    }
                ]
            },
            {
                name: 'Светотехника',
                children: [
                    {
                        name: 'Компактные люминесцентные лампы'
                    },
                    {
                        name: 'Лампы газоразрядные'
                    },
                    {
                        name: 'Лампы галогеновые'
                    },
                    {
                        name: 'Лампы накаливания'
                    },
                    {
                        name: 'Линейные люминесцентные лампы'
                    },
                    {
                        name: 'Прожектора светодиодные'
                    },
                    {
                        name: 'Пускорегулирующая аппаратура для люминесцентных ламп'
                    },
                    {
                        name: 'Светильники люминесцентные'
                    },
                    {
                        name: 'Светильники настенно-потолочные'
                    },
                    {
                        name: 'Светильники подвесные'
                    },
                    {
                        name: 'Светильники светодиодные'
                    },
                    {
                        name: 'Светодиодные лампы'
                    },
                    {
                        name: 'Светодиодные фонари и аварийные указатели'
                    },
                    {
                        name: 'Управление освещением'
                    }
                ]
            },
            {
                name: 'Электромонтажные изделия',
                children: [
                    {
                        name: 'Аксессуары для шкафов и щитов'
                    },
                    {
                        name: 'Бирки кабельные'
                    },
                    {
                        name: 'Гильзы медные луженые'
                    },
                    {
                        name: 'Зажимы винтовые ЗВИ (клеммные колодки)'
                    },
                    {
                        name: 'Знаки электробезопасности'
                    },
                    {
                        name: 'Изолента'
                    },
                    {
                        name: 'Инструмент ручной'
                    },
                    {
                        name: 'Кабельные каналы (короба)'
                    },
                    {
                        name: 'Клеммники WAGO'
                    },
                    {
                        name: 'Клеммники из PRC'
                    },
                    {
                        name: 'Клипсы для труб ПВХ и ПНД'
                    },
                    {
                        name: 'Коробки распределительные (распаячные)'
                    },
                    {
                        name: 'Коробки установочные (подрозетники)'
                    },
                    {
                        name: 'Наконечники алюминиевые под опрессовку'
                    },
                    {
                        name: 'Наконечники медные луженые под опрессовку'
                    },
                    {
                        name: 'Наконечники НШвИ (штыревые)'
                    },
                    {
                        name: 'Расходные материалы'
                    },
                    {
                        name: 'Сжимы ответвительные'
                    },
                    {
                        name: 'Средства защиты'
                    },
                    {
                        name: 'Трубка термоусаживаемая ТУТ'
                    },
                    {
                        name: 'Трубы для электропроводки'
                    },
                    {
                        name: 'Хомуты нейлоновые'
                    },
                    {
                        name: 'Шкафы пустые'
                    },
                    {
                        name: 'Электроизмерительные приборы'
                    },
                    {
                        name: 'Элементы питания и аккумуляторы'
                    }
                ]
            },
            {
                name: 'Электроустановочные изделия',
                children: [
                    {
                        name: 'Выключатели'
                    },
                    {
                        name: 'Патроны'
                    },
                    {
                        name: 'Промышленные разъемы'
                    },
                    {
                        name: 'Розетки и вилки'
                    },
                    {
                        name: 'Удлинители'
                    },
                    {
                        name: 'Электроустановочные изделия из каучука'
                    }
                ]
            }
        ]
    }
];

export {goods, folders};