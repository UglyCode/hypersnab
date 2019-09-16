const goods = [
    {
        folder: 'Приборы учета электроэнергии',
        code: 13,
        description: 'Счетчик электроэнергии Меркурий 230AM-01 3ф 1т 5-60А',
        price: 2304.12,
        measure: 'шт',
        spec: true,
        quantity: 3
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 14,
        description: 'Счетчик электроэнергии Меркурий 230AM-03 3ф 1т 5-7,5А',
        price: 2282.52,
        measure: 'шт',
        spec: true,
        quantity: 4
    },
    {
        folder: 'Расходные материалы',
        code: 43,
        description: 'Круг отрезной по металлу 230x2,5x22,2мм',
        price: 74,
        measure: 'шт',
        spec: true,
        quantity: 124
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 126,
        description: 'Стартер Philips S10 4-65W 220-240V',
        price: 21.12,
        measure: 'шт',
        spec: true,
        quantity: 714
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 127,
        description: 'Стартер Philips S2 4-22W 127-240V',
        price: 21.12,
        measure: 'шт',
        spec: true,
        quantity: 1454
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 129,
        description: '2CDS241001R0164 ABB Автоматический выключатель 1п SH201L C16 16А 4,5кА ',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 65
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 132,
        description: '2CDS243001R0254 ABB Автоматический выключатель 3п SH203L C25 25А 4,5кА',
        price: 644.88,
        measure: 'шт',
        spec: false,
        quantity: 29
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 159,
        description: 'Кабель ВВГнг-LS 5х10',
        price: 305.52,
        measure: 'м',
        spec: false,
        quantity: 589
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 160,
        description: 'Кабель ВВГнг-LS 5х6',
        price: 183.12,
        measure: 'м',
        spec: false,
        quantity: 1101
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 161,
        description: 'Кабель ВВГнг-LS 5х25',
        price: 785.7,
        measure: 'м',
        spec: false,
        quantity: 380
    },
    {
        folder: 'Розетки и вилки',
        code: 163,
        description: 'Вилка евро прямая',
        price: 35.4,
        measure: 'шт',
        spec: false,
        quantity: 339
    },
    {
        folder: 'Лампы галогеновые',
        code: 180,
        description: 'Лампа кварцевая галогеновая КГ-1000 R7s L=189мм',
        price: 200.52,
        measure: 'шт',
        spec: false,
        quantity: 114
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 184,
        description: 'Клипса 16 для трубы',
        price: 0.78,
        measure: 'шт',
        spec: false,
        quantity: 9850
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 185,
        description: 'Клипса 20 для трубы',
        price: 0.96,
        measure: 'шт',
        spec: false,
        quantity: 10752
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 187,
        description: 'Коробка распределительная 150х110х70 открытой установки IP55 ',
        price: 89.16,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Лампы накаливания',
        code: 204,
        description: 'Лампа накаливания ЛОН-500 500Вт 220В Е40',
        price: 72.66,
        measure: 'шт',
        spec: false,
        quantity: 182
    },
    {
        folder: 'Лампы накаливания',
        code: 214,
        description: 'Лампа накаливания МО 36В 60Вт E27',
        price: 13.56,
        measure: 'шт',
        spec: false,
        quantity: 935
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 226,
        description: 'Провод ПВ-3 10 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 190
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 227,
        description: 'Провод ПВ-3 6 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 716
    },
    {
        folder: 'Провод ПВС',
        code: 228,
        description: 'Провод ПВС 3х0,75',
        price: 17.82,
        measure: 'м',
        spec: false,
        quantity: 413
    },
    {
        folder: 'Провод ПВС',
        code: 229,
        description: 'Провод ПВС 3х1,5',
        price: 29.64,
        measure: 'м',
        spec: false,
        quantity: 3506
    },
    {
        folder: 'Провод ПВС',
        code: 230,
        description: 'Провод ПВС 3х2,5',
        price: 46.98,
        measure: 'м',
        spec: false,
        quantity: 6392
    },
    {
        folder: 'Провод ПВС',
        code: 231,
        description: 'Провод ПВС 4х1,5',
        price: 38.34,
        measure: 'м',
        spec: false,
        quantity: 761
    },
    {
        folder: 'Провод ПВС',
        code: 232,
        description: 'Провод ПВС 4х2,5',
        price: 61.44,
        measure: 'м',
        spec: false,
        quantity: 610
    },
    {
        folder: 'Провод ПВС',
        code: 233,
        description: 'Провод ПВС 4х4',
        price: 103.14,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Провод ПВС',
        code: 234,
        description: 'Провод ПВС 4х6',
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
        quantity: 1052
    },
    {
        folder: 'Трубы для электропроводки',
        code: 298,
        description: 'Труба гофрированная ПВХ d16мм (100м)',
        price: 4.14,
        measure: 'м',
        spec: false,
        quantity: 7500
    },
    {
        folder: 'Трубы для электропроводки',
        code: 299,
        description: 'Труба жесткая гладкая ПВХ d16мм (3м)',
        price: 9.06,
        measure: 'м',
        spec: false,
        quantity: 1714
    },
    {
        folder: 'Трубы для электропроводки',
        code: 300,
        description: 'Труба гофрированная ПВХ d20мм (100м)',
        price: 5.52,
        measure: 'м',
        spec: false,
        quantity: 9100
    },
    {
        folder: 'Трубы для электропроводки',
        code: 301,
        description: 'Труба гофрированная с протяжкой ПНД d20мм (100м)',
        price: 11.34,
        measure: 'м',
        spec: false,
        quantity: 4100
    },
    {
        folder: 'Трубы для электропроводки',
        code: 317,
        description: 'Труба жесткая гладкая ПВХ d20мм (3м)',
        price: 11.94,
        measure: 'м',
        spec: false,
        quantity: 1518
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 340,
        description: 'Хомут нейлоновый белый 200х2,5-3 (100шт.)',
        price: 50.4,
        measure: 'упак',
        spec: false,
        quantity: 121
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 342,
        description: 'Хомут нейлоновый белый 400х5 (100шт.)',
        price: 218.16,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 532,
        description: '2CDS251001R0104 ABB Автоматический выключатель 1п S201 C10 10А 6кА',
        price: 343.68,
        measure: 'шт',
        spec: false,
        quantity: 53
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 533,
        description: '2CDS251001R0164 ABB Автоматический выключатель 1п S201 C16 16А 6кА',
        price: 313.8,
        measure: 'шт',
        spec: false,
        quantity: 202
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 534,
        description: '2CDS251001R0204 ABB Автоматический выключатель 1п S201 C20 20А 6кА',
        price: 388.5,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 535,
        description: '2CDS251001R0254 ABB Автоматический выключатель 1п S201 C25 25А 6кА',
        price: 375.66,
        measure: 'шт',
        spec: false,
        quantity: 65
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 536,
        description: '2CDS251001R0324 ABB Автоматический выключатель 1п S201 C32 32А 6кА',
        price: 433.32,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 537,
        description: '2CDS251001R0064 ABB Автоматический выключатель 1п S201 C6 6А 6кА',
        price: 431.16,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 539,
        description: '2CDS253001R0104 ABB Автоматический выключатель 3п S203 C10 10А 6кА',
        price: 1248.72,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 540,
        description: '2CDS253001R0164 ABB Автоматический выключатель 3п S203 C16 16А 6кА',
        price: 1163.34,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 541,
        description: '2CDS253001R0254 ABB Автоматический выключатель 3п S203 C25 25А 6кА',
        price: 1408.86,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 542,
        description: '2CDS253001R0324 ABB Автоматический выключатель 3п S203 C32 32А 6кА',
        price: 1536.9,
        measure: 'шт',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 543,
        description: '2CDS253001R0404 ABB Автоматический выключатель 3п S203 C40 40А 6кА',
        price: 1665,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 545,
        description: '2CDS253001R0634 ABB Автоматический выключатель 3п S203 C63 63А 6кА',
        price: 2251.98,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 583,
        description: 'Автоматический выключатель ВА47-63 1п C 16А 4,5кА',
        price: 60.48,
        measure: 'шт',
        spec: false,
        quantity: 1285
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 584,
        description: 'Автоматический выключатель ВА47-63 1п C 25А 4,5кА',
        price: 61.08,
        measure: 'шт',
        spec: false,
        quantity: 925
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 585,
        description: 'Автоматический выключатель ВА47-63 2п C 40А 4,5кА',
        price: 134.82,
        measure: 'шт',
        spec: false,
        quantity: 337
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 592,
        description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P C 25А/30мА',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 348
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 622,
        description: 'Элемент питания R20',
        price: 69.9,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Кабель NYM',
        code: 626,
        description: 'Кабель NYM 3х2,5',
        price: 50.1,
        measure: 'м',
        spec: false,
        quantity: 706
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 641,
        description: 'Кабель ВВГнг-LS 3х1,5',
        price: 32.52,
        measure: 'м',
        spec: false,
        quantity: 5139
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 642,
        description: 'Кабель ВВГнг-LS 3х2,5',
        price: 50.28,
        measure: 'м',
        spec: false,
        quantity: 3843
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 643,
        description: 'Кабель ВВГнг-LS 5х16',
        price: 499.62,
        measure: 'м',
        spec: false,
        quantity: 1996
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 644,
        description: 'Кабель ВВГнг-LS 5х4',
        price: 125.16,
        measure: 'м',
        spec: false,
        quantity: 1316
    },
    {
        folder: 'Кабель КГ',
        code: 647,
        description: 'Кабель КГ 3х1,5',
        price: 33.42,
        measure: 'м',
        spec: false,
        quantity: 348
    },
    {
        folder: 'Кабель КГ',
        code: 648,
        description: 'Кабель КГ 3х2,5',
        price: 51.12,
        measure: 'м',
        spec: false,
        quantity: 615
    },
    {
        folder: 'Кабель КГ',
        code: 649,
        description: 'Кабель КГ 4х4',
        price: 101.52,
        measure: 'м',
        spec: false,
        quantity: 350
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 657,
        description: 'Провод ПВ1 4 белый',
        price: 21.66,
        measure: 'м',
        spec: false,
        quantity: 863
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 658,
        description: 'Провод ПВ1 4 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 1153
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 660,
        description: 'Провод ПВ1 4 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 543
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 663,
        description: 'Провод ПВ-3 16 белый',
        price: 91.56,
        measure: 'м',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 664,
        description: 'Провод ПВ-3 16 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 148
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 668,
        description: 'Провод ПВ-3 4 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 2395
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 669,
        description: 'Провод ПВ-3 6 белый',
        price: 31.92,
        measure: 'м',
        spec: false,
        quantity: 64
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 673,
        description: 'Провод ПВ-3 6 черный',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Провод ПВС',
        code: 674,
        description: 'Провод ПВС 2х2,5',
        price: 33.96,
        measure: 'м',
        spec: false,
        quantity: 2664
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 675,
        description: 'Провод ПУНП 2х1,5',
        price: 18.6,
        measure: 'м',
        spec: false,
        quantity: 220
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 676,
        description: 'Провод ПУНП 2х2,5',
        price: 28.5,
        measure: 'м',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 677,
        description: 'Провод ШВВП 2х0,75',
        price: 9.48,
        measure: 'м',
        spec: false,
        quantity: 1185
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 699,
        description: '4008321364876 Стартер OSRAM ST-111 4-65W',
        price: 17.1,
        measure: 'шт',
        spec: false,
        quantity: 975
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 700,
        description: '4008321364920 Стартер OSRAM ST-151 4-22W',
        price: 17.94,
        measure: 'шт',
        spec: false,
        quantity: 984
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 702,
        description: 'Лампа люминесцентная Philips TL-D 18W/54-765 G13 ',
        price: 46.02,
        measure: 'шт',
        spec: false,
        quantity: 604
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 703,
        description: 'Лампа люминесцентная Philips TL-D 36W/54-765 G13 ',
        price: 57.72,
        measure: 'шт',
        spec: false,
        quantity: 228
    },
    {
        folder: 'Лампы газоразрядные',
        code: 713,
        description: 'Лампа натриевая ДНаТ-250 250Вт Е40',
        price: 258.42,
        measure: 'шт',
        spec: false,
        quantity: 99
    },
    {
        folder: 'Лампы газоразрядные',
        code: 714,
        description: 'Лампа ртутная ДРЛ-125 125Вт Е27',
        price: 128.28,
        measure: 'шт',
        spec: false,
        quantity: 615
    },
    {
        folder: 'Лампы газоразрядные',
        code: 715,
        description: 'Лампа ртутная ДРЛ-250 250Вт Е40',
        price: 158.4,
        measure: 'шт',
        spec: false,
        quantity: 470
    },
    {
        folder: 'Лампы газоразрядные',
        code: 716,
        description: 'Лампа ртутная ДРЛ-400 400Вт Е40',
        price: 220.02,
        measure: 'шт',
        spec: false,
        quantity: 93
    },
    {
        folder: 'Лампы накаливания',
        code: 717,
        description: 'Лампа накаливания ДС-60 60Вт 220В Е14',
        price: 12.3,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 719,
        description: 'Лампа люминесцентная ЛБ-20 (18) G13',
        price: 40.74,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Лампы накаливания',
        code: 720,
        description: 'Лампа накаливания ЛОН-40 40Вт 220В Е27',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 14516
    },
    {
        folder: 'Лампы накаливания',
        code: 721,
        description: 'Лампа накаливания ЛОН-60 60Вт 220В Е27',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 21630
    },
    {
        folder: 'Лампы накаливания',
        code: 722,
        description: 'Лампа накаливания ЛОН-75 75Вт 220В Е27',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 2778
    },
    {
        folder: 'Лампы накаливания',
        code: 723,
        description: 'Лампа накаливания ЛОН-95 95Вт 220В Е27',
        price: 10.86,
        measure: 'шт',
        spec: false,
        quantity: 4387
    },
    {
        folder: 'Лампы накаливания',
        code: 724,
        description: 'Лампа накаливания ЛОН-200 200Вт 220В Е27',
        price: 17.76,
        measure: 'шт',
        spec: false,
        quantity: 304
    },
    {
        folder: 'Лампы накаливания',
        code: 725,
        description: 'Лампа накаливания МО 24В 60Вт E27',
        price: 14.22,
        measure: 'шт',
        spec: false,
        quantity: 230
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 728,
        description: 'Лампа люминесцентная компактная SPC 11W E14 2700K',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 117
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 736,
        description: 'Автоматический выключатель АЕ2056М-100 100А',
        price: 1878.84,
        measure: 'шт',
        spec: false,
        quantity: 32
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 737,
        description: 'Автоматический выключатель АЕ2056М-100 80А',
        price: 1878.84,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 746,
        description: 'Плавкая вставка ПН-2 100А',
        price: 56.04,
        measure: 'шт',
        spec: false,
        quantity: 143
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 747,
        description: 'Плавкая вставка ПН-2 250А',
        price: 74.22,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 748,
        description: 'Плавкая вставка ПН-2 400А',
        price: 137.58,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Светильники люминесцентные',
        code: 762,
        description: 'Светильник ЛПБ-31-11-006 G23 антивандальный',
        price: 310.32,
        measure: 'шт',
        spec: false,
        quantity: 2051
    },
    {
        folder: 'Светильники люминесцентные',
        code: 763,
        description: 'Светильник ЛПО 1х20(18)',
        price: 332.64,
        measure: 'шт',
        spec: false,
        quantity: 260
    },
    {
        folder: 'Светильники люминесцентные',
        code: 764,
        description: 'Светильник ЛПО 1х40(36)',
        price: 402.54,
        measure: 'шт',
        spec: false,
        quantity: 351
    },
    {
        folder: 'Светильники люминесцентные',
        code: 765,
        description: 'Светильник ЛПО 2х40(36)',
        price: 577.74,
        measure: 'шт',
        spec: false,
        quantity: 472
    },
    {
        folder: 'Светильники люминесцентные',
        code: 767,
        description: 'Светильник ЛПО 01 2х36-012 с ЭПРА',
        price: 602.82,
        measure: 'шт',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 768,
        description: 'Арматура светильника НББ-64-60 (основание косое)',
        price: 20.34,
        measure: 'шт',
        spec: false,
        quantity: 226
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 769,
        description: 'Арматура светильника НББ-64-60 (основание прямое)',
        price: 20.34,
        measure: 'шт',
        spec: false,
        quantity: 1390
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 770,
        description: 'Рассеиватель НББ-64-60 (шар пластиковый)',
        price: 27.84,
        measure: 'шт',
        spec: false,
        quantity: 784
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 771,
        description: 'Рассеиватель НББ-64-60 (шар стеклянный)',
        price: 48.54,
        measure: 'шт',
        spec: false,
        quantity: 972
    },
    {
        folder: 'Светильники подвесные',
        code: 773,
        description: 'Светильник НСП 02-100-003 с решеткой',
        price: 258.9,
        measure: 'шт',
        spec: false,
        quantity: 337
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 780,
        description: 'Дроссель для люминесцентных ламп АВТ 1И18/20',
        price: 152.58,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 782,
        description: 'Дроссель для люминесцентных ламп АВТ 1И36/40',
        price: 152.58,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 794,
        description: 'Стартер СК-127 для ламп 18-20Вт',
        price: 5.4,
        measure: 'шт',
        spec: false,
        quantity: 15998
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 795,
        description: 'Стартер СК-220 для ламп 36-40Вт',
        price: 4.98,
        measure: 'шт',
        spec: false,
        quantity: 16607
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 805,
        description: 'DIN-рейка L=2м',
        price: 110.64,
        measure: 'шт',
        spec: false,
        quantity: 177
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 806,
        description: 'DIN-рейка L=60см',
        price: 39.12,
        measure: 'шт',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Шкафы пустые',
        code: 815,
        description: 'Бокс ЩРН-П-12 модулей пластик IP40',
        price: 358.98,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Шкафы пустые',
        code: 816,
        description: 'Бокс ЩРН-П-24 модуля пластик IP40',
        price: 747.36,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Шкафы пустые',
        code: 817,
        description: 'Бокс ЩРН-П-36 модулей пластик IP40',
        price: 1293.54,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Изолента',
        code: 822,
        description: 'Изолента ХБ 19мм х 30м 300г',
        price: 97.56,
        measure: 'шт',
        spec: false,
        quantity: 78
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 825,
        description: 'Зажим винтовой ЗВИ-60 25 кв.мм 12пар',
        price: 85.98,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 827,
        description: 'Кабель-канал ПВХ 100х60',
        price: 133.44,
        measure: 'м',
        spec: false,
        quantity: 532
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 828,
        description: 'Кабель-канал ПВХ 16х16',
        price: 11.22,
        measure: 'м',
        spec: false,
        quantity: 5912
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 829,
        description: 'Кабель-канал ПВХ 25х25',
        price: 22.92,
        measure: 'м',
        spec: false,
        quantity: 3518
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 830,
        description: 'Кабель-канал ПВХ 40х16',
        price: 27.24,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 831,
        description: 'Кабель-канал ПВХ 40х40',
        price: 42.48,
        measure: 'м',
        spec: false,
        quantity: 1870
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 832,
        description: 'Кабель-канал ПВХ 60х60',
        price: 82.62,
        measure: 'м',
        spec: false,
        quantity: 126
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 833,
        description: 'Кабель-канал ПВХ 80х60',
        price: 126.66,
        measure: 'м',
        spec: false,
        quantity: 104
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 835,
        description: 'Коробка распределительная 100х100х50 открытой установки IP54',
        price: 39.18,
        measure: 'шт',
        spec: false,
        quantity: 748
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 837,
        description: 'Коробка распределительная 70х70х40 открытой установки IP54',
        price: 21.66,
        measure: 'шт',
        spec: false,
        quantity: 786
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 843,
        description: 'Наконечник кабельный ТМЛ-16-8-6 медный луженый под опрессовку',
        price: 12.78,
        measure: 'шт',
        spec: false,
        quantity: 195
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 844,
        description: 'Наконечник кабельный ТМЛ-25-8-7 медный луженый под опрессовку',
        price: 18.18,
        measure: 'шт',
        spec: false,
        quantity: 255
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 845,
        description: 'Наконечник кабельный ТМЛ-35-8-10 медный луженый под опрессовку',
        price: 22.44,
        measure: 'шт',
        spec: false,
        quantity: 128
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 846,
        description: 'Наконечник кабельный ТМЛ-50-10-11 медный луженый под опрессовку',
        price: 30.42,
        measure: 'шт',
        spec: false,
        quantity: 206
    },
    {
        folder: 'Сжимы ответвительные',
        code: 848,
        description: 'Сжим ответвительный У-731',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 720
    },
    {
        folder: 'Розетки и вилки',
        code: 853,
        description: '10027 Вилка MAKEL евро боковая белая',
        price: 41.22,
        measure: 'шт',
        spec: false,
        quantity: 126
    },
    {
        folder: 'Розетки и вилки',
        code: 854,
        description: '10002 Вилка MAKEL евро прямая белая',
        price: 46.38,
        measure: 'шт',
        spec: false,
        quantity: 99
    },
    {
        folder: 'Патроны',
        code: 863,
        description: 'Патрон Е27 подвесной карболитовый',
        price: 15.36,
        measure: 'шт',
        spec: false,
        quantity: 21969
    },
    {
        folder: 'Патроны',
        code: 864,
        description: 'Патрон Е27 подвесной керамический ',
        price: 8.34,
        measure: 'шт',
        spec: false,
        quantity: 1607
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 866,
        description: 'Вилка евро каучуковая',
        price: 60.6,
        measure: 'шт',
        spec: false,
        quantity: 721
    },
    {
        folder: 'Выключатели',
        code: 867,
        description: 'Выключатель 1-клавишный открытой проводки',
        price: 34.32,
        measure: 'шт',
        spec: false,
        quantity: 1648
    },
    {
        folder: 'Выключатели',
        code: 868,
        description: 'Выключатель 2-клавишный открытой проводки',
        price: 35.94,
        measure: 'шт',
        spec: false,
        quantity: 1011
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 869,
        description: 'Колодка каучуковая на 3 розетки IP44',
        price: 231.36,
        measure: 'шт',
        spec: false,
        quantity: 437
    },
    {
        folder: 'Розетки и вилки',
        code: 870,
        description: 'Розетка 1-я открытой проводки с заземлением',
        price: 39.54,
        measure: 'шт',
        spec: false,
        quantity: 238
    },
    {
        folder: 'Розетки и вилки',
        code: 872,
        description: 'Розетка 2-я открытой проводки с заземлением брызгозащищенная полугерметичная с крышкой',
        price: 173.82,
        measure: 'шт',
        spec: false,
        quantity: 251
    },
    {
        folder: 'Розетки и вилки',
        code: 873,
        description: 'Розетка 2-я скрытой проводки с заземлением',
        price: 71.58,
        measure: 'шт',
        spec: false,
        quantity: 159
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 888,
        description: 'Наконечник кабельный ТА-95-12-13 алюминиевый под опрессовку',
        price: 20.04,
        measure: 'шт',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Светильники люминесцентные',
        code: 922,
        description: 'Светильник встраиваемый ЛВО 13-4х18-772/F Милано (экстра) ЭПРА',
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
        quantity: 39
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 967,
        description: 'Шина N-PE 10 на DIN-рейку',
        price: 45.9,
        measure: 'шт',
        spec: false,
        quantity: 151
    },
    {
        folder: 'Провода и кабели связи',
        code: 974,
        description: 'Кабель информационный UTP 4х2х0,52 Категория 5',
        price: 8.1,
        measure: 'м',
        spec: false,
        quantity: 3250
    },
    {
        folder: 'Светильники люминесцентные',
        code: 1002,
        description: 'Светильник ЛПО 418 635 NC м.свет ЭПРА/Мистраль 418 А34HF ECO (накладной зеркальный)',
        price: 1196.04,
        measure: 'шт',
        spec: false,
        quantity: 70
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1004,
        description: 'Кабель ВВГнг-LS 3x4',
        price: 72.78,
        measure: 'м',
        spec: false,
        quantity: 1444
    },
    {
        folder: 'Кабель NYM',
        code: 1005,
        description: 'Кабель NYM 3х1,5 ',
        price: 32.76,
        measure: 'м',
        spec: false,
        quantity: 1468
    },
    {
        folder: 'Клеммники WAGO',
        code: 1012,
        description: '222-413 WAGO Клеммник 3х(0,08-2,5) для медных многожильных проводов',
        price: 22.38,
        measure: 'шт',
        spec: false,
        quantity: 1200
    },
    {
        folder: 'Клеммники WAGO',
        code: 1013,
        description: '222-415 WAGO Клеммник 5х(0,08-2,5) для медных многожильных проводов',
        price: 35.82,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1014,
        description: 'Счетчик электроэнергии Меркурий 230ART-02 CN 3ф 2т 10-100А',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1022,
        description: 'Провод АПВ 10 белый',
        price: 10.2,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1044,
        description: 'Автоматический выключатель ВА47-63 1п C 40А 4,5кА',
        price: 65.7,
        measure: 'шт',
        spec: false,
        quantity: 331
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1045,
        description: 'Автоматический выключатель ВА47-63 2п C 16А 4,5кА',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 1522
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1046,
        description: 'Автоматический выключатель ВА47-63 2п C 25А 4,5кА',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 244
    },
    {
        folder: 'Сжимы ответвительные',
        code: 1047,
        description: 'Сжим ответвительный У-859',
        price: 71.58,
        measure: 'шт',
        spec: false,
        quantity: 115
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 1053,
        description: 'Провод ПУНП 3х2,5',
        price: 42,
        measure: 'м',
        spec: false,
        quantity: 290
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 1057,
        description: 'Кабель-канал ПВХ 20х10',
        price: 11.52,
        measure: 'м',
        spec: false,
        quantity: 1640
    },
    {
        folder: 'Провод ПВС',
        code: 1063,
        description: 'Провод ПВС 2х0,75',
        price: 12.66,
        measure: 'м',
        spec: false,
        quantity: 600
    },
    {
        folder: 'Шкафы пустые',
        code: 1070,
        description: 'Корпус щита навесной металлический ЩРН-24з IP54',
        price: 1494.84,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Лампы накаливания',
        code: 1071,
        description: 'Лампа накаливания МО 36В 40Вт E27',
        price: 13.56,
        measure: 'шт',
        spec: false,
        quantity: 352
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 1085,
        description: 'Наконечник кабельный ТМЛ-150-14-17 медный луженый под опрессовку',
        price: 135.06,
        measure: 'шт',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 1086,
        description: 'Наконечник кабельный ТМЛ-10-6-6 медный луженый под опрессовку',
        price: 11.64,
        measure: 'шт',
        spec: false,
        quantity: 568
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 1088,
        description: 'Клипса 25 для трубы',
        price: 1.2,
        measure: 'шт',
        spec: false,
        quantity: 2190
    },
    {
        folder: 'Кабель КГ',
        code: 1102,
        description: 'Кабель КГ 4х6',
        price: 152.82,
        measure: 'м',
        spec: false,
        quantity: 334
    },
    {
        folder: 'Лампы газоразрядные',
        code: 1107,
        description: 'Лампа ртутная бездроссельная ДРВ-250 Е40',
        price: 193.98,
        measure: 'шт',
        spec: false,
        quantity: 55
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1113,
        description: '2CDS253001R0504 ABB Автоматический выключатель 3п S203 C50 50А 6кА',
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
        description: 'Коврик диэлектрический 500х500',
        price: 259.2,
        measure: 'шт',
        spec: false,
        quantity: 58
    },
    {
        folder: 'Средства защиты',
        code: 1128,
        description: 'Коврик диэлектрический 750х750',
        price: 472.86,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 1152,
        description: 'Фонарь светодиодный аккумуляторный налобный',
        price: 289.62,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Расходные материалы',
        code: 1162,
        description: 'Дюбель 6х40 ',
        price: 0.3,
        measure: 'шт',
        spec: false,
        quantity: 32800
    },
    {
        folder: 'Розетки и вилки',
        code: 1164,
        description: 'Розетка 1-я открытой проводки с/з брызгозащищенная полугерметичная с крышкой',
        price: 84.78,
        measure: 'шт',
        spec: false,
        quantity: 191
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1168,
        description: 'Кабель ВВГнг-LS 4х2,5',
        price: 63.24,
        measure: 'м',
        spec: false,
        quantity: 301
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1182,
        description: 'Провод АППВ 2х2,5',
        price: 6.96,
        measure: 'м',
        spec: false,
        quantity: 4535
    },
    {
        folder: 'Выключатели',
        code: 1225,
        description: 'Выключатель 1-клавишный открытой проводки IP44',
        price: 71.4,
        measure: 'шт',
        spec: false,
        quantity: 175
    },
    {
        folder: 'Сжимы ответвительные',
        code: 1227,
        description: 'Сжим ответвительный У-733',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1228,
        description: 'Провод ПВ-3 4 белый',
        price: 21.6,
        measure: 'м',
        spec: false,
        quantity: 208
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1229,
        description: 'Провод ПВ-3 4 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 430
    },
    {
        folder: 'Трубы для электропроводки',
        code: 1231,
        description: 'Труба гофрированная ПВХ d32мм (50м)',
        price: 12.72,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Средства защиты',
        code: 1234,
        description: 'Очки защитные',
        price: 66.88,
        measure: 'шт',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 1235,
        description: 'Клипса 32 для трубы',
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
        description: 'Провод ПВ1 10 белый',
        price: 53.94,
        measure: 'м',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 1254,
        description: 'Колодка каучуковая на 2 розетки 16A 2P+E IP44',
        price: 193.44,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 1272,
        description: 'Лампа люминесцентная компактная SPC 15W Е27 2700К',
        price: 78,
        measure: 'шт',
        spec: false,
        quantity: 88
    },
    {
        folder: 'Кабель NYM',
        code: 1384,
        description: 'Кабель NYM 3х4',
        price: 76.02,
        measure: 'м',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 1433,
        description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P C 16А/30мА',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 197
    },
    {
        folder: 'Шкафы пустые',
        code: 1435,
        description: 'Бокс ЩРН-П-18 модулей пластик IP40',
        price: 561.66,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1436,
        description: 'Провод ПВ-3 10 белый',
        price: 54.36,
        measure: 'м',
        spec: false,
        quantity: 701
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1437,
        description: 'Провод ПВ-3 10 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1461,
        description: 'Автоматический выключатель ВА47-63 1п C 10А 4,5кА',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1462,
        description: 'Автоматический выключатель ВА47-63 1п C 32А 4,5кА',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 242
    },
    {
        folder: 'Трансформаторы',
        code: 1489,
        description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-36 250А IP31',
        price: 1534.8,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1525,
        description: '2CDS241001R0254 ABB Автоматический выключатель 1п SH201L C25 25А 4,5кА',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1529,
        description: '2CDS241001R0104 ABB Автоматический выключатель 1п SH201L C10 10А 4,5кА',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 1549,
        description: 'Провод ПУгНП 3х2,5',
        price: 41.88,
        measure: 'м',
        spec: false,
        quantity: 2420
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1559,
        description: 'Провод ПВ-3 70 белый',
        price: 402.6,
        measure: 'м',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Кабель КГ',
        code: 1560,
        description: 'Кабель КГ 4х2,5',
        price: 66.42,
        measure: 'м',
        spec: false,
        quantity: 105
    },
    {
        folder: 'Промышленные разъемы',
        code: 1563,
        description: 'Вилка переносная 024 3P+PE 32А 380В IP44',
        price: 194.16,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Промышленные разъемы',
        code: 1564,
        description: 'Розетка стационарная 124 3Р+PE 32А 380В IP44',
        price: 256.2,
        measure: 'шт',
        spec: false,
        quantity: 18
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1565,
        description: 'Автоматический выключатель модульный ВА47-100 1п C 100А 10кА',
        price: 396,
        measure: 'шт',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1584,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 63А 10кА',
        price: 1102.8,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1585,
        description: 'Автоматический выключатель модульный ВА47-100 3п С 80А 10кА',
        price: 1063.08,
        measure: 'шт',
        spec: false,
        quantity: 53
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1603,
        description: 'Счетчик электроэнергии Меркурий 230ART-01 CN 3ф 2т 5-60А',
        price: 4942.62,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1617,
        description: 'Наконечник штыревой НШвИ 2,5-8 изолированный упаковка 100шт.',
        price: 38.94,
        measure: 'упак',
        spec: false,
        quantity: 32
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1619,
        description: 'Наконечник штыревой НШвИ 6-12 изолированный упаковка 100шт.',
        price: 84,
        measure: 'упак',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 1628,
        description: 'Зажим винтовой ЗВИ-5 6 кв.мм 12пар',
        price: 21.06,
        measure: 'шт',
        spec: false,
        quantity: 237
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 1629,
        description: 'Зажим винтовой ЗВИ-20 14 кв.мм 12пар',
        price: 41.22,
        measure: 'шт',
        spec: false,
        quantity: 235
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1636,
        description: 'Кабель ВВГнг-LS 5х2,5',
        price: 80.16,
        measure: 'м',
        spec: false,
        quantity: 290
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 1642,
        description: 'Провод ПВ1 16 белый',
        price: 89.52,
        measure: 'м',
        spec: false,
        quantity: 175
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1649,
        description: '2CDS251001R0404 ABB Автоматический выключатель 1п S201 C40 40А 6кА',
        price: 468.54,
        measure: 'шт',
        spec: false,
        quantity: 19
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 1650,
        description: '2CDS251001R0634 ABB Автоматический выключатель 1п S201 C63 63А 6кА',
        price: 715.08,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 1659,
        description: 'Хомут нейлоновый белый 150х2,5 (100шт.)',
        price: 39.06,
        measure: 'упак',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 1660,
        description: 'Хомут нейлоновый белый 300х3,6 (100шт.)',
        price: 127.92,
        measure: 'упак',
        spec: false,
        quantity: 164
    },
    {
        folder: 'Промышленные разъемы',
        code: 1731,
        description: 'Вилка переносная 025 3P+E+N 32А 380В IP44',
        price: 230.16,
        measure: 'шт',
        spec: false,
        quantity: 52
    },
    {
        folder: 'Промышленные разъемы',
        code: 1732,
        description: 'Розетка переносная 225 3P+E+N 32А 380В IP44',
        price: 261.18,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Изолента',
        code: 1751,
        description: 'Изолента ПВХ черная',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Изолента',
        code: 1752,
        description: 'Изолента ПВХ красная',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 3522
    },
    {
        folder: 'Изолента',
        code: 1753,
        description: 'Изолента ПВХ зеленая',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 3541
    },
    {
        folder: 'Изолента',
        code: 1754,
        description: 'Изолента ПВХ белая',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 170
    },
    {
        folder: 'Изолента',
        code: 1755,
        description: 'Изолента ПВХ желтая',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 2878
    },
    {
        folder: 'Розетки и вилки',
        code: 1756,
        description: 'Розетка 4-я открытой проводки с заземлением',
        price: 198.48,
        measure: 'шт',
        spec: false,
        quantity: 181
    },
    {
        folder: 'Розетки и вилки',
        code: 1757,
        description: 'Розетка 2-я открытой проводки с заземлением',
        price: 59.76,
        measure: 'шт',
        spec: false,
        quantity: 365
    },
    {
        folder: 'Светильники подвесные',
        code: 1775,
        description: 'Арматура светильника НСП 03-60 (НСП 01-60-001)',
        price: 42.78,
        measure: 'шт',
        spec: false,
        quantity: 626
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1799,
        description: 'Наконечник штыревой НШвИ 25-16 изолированный упаковка 100шт.',
        price: 259.38,
        measure: 'упак',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 1800,
        description: 'Наконечник штыревой НШвИ 16-12 изолированный упаковка 100шт.',
        price: 142.62,
        measure: 'упак',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 1820,
        description: 'Кабель-канал ПВХ 60х40',
        price: 61.8,
        measure: 'м',
        spec: false,
        quantity: 2770
    },
    {
        folder: 'Промышленные разъемы',
        code: 1838,
        description: 'Розетка переносная 224 3P+PE 32А 380В IP44',
        price: 211.68,
        measure: 'шт',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 1864,
        description: 'Кабель ВВГнг-LS 4х6',
        price: 147.6,
        measure: 'м',
        spec: false,
        quantity: 96
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1898,
        description: 'Автоматический выключатель ВА47-63 1п C 6А 4,5кА',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Розетки и вилки',
        code: 1907,
        description: 'Розетка 1-я скрытой проводки с заземлением',
        price: 58.74,
        measure: 'шт',
        spec: false,
        quantity: 155
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 1916,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 100А 10кА',
        price: 1035.06,
        measure: 'шт',
        spec: false,
        quantity: 78
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 1938,
        description: 'Провод АПВ 6 белый',
        price: 6.18,
        measure: 'м',
        spec: false,
        quantity: 410
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 1948,
        description: 'Счетчик электроэнергии Меркурий 200.02 1ф 2т 5-60А',
        price: 1854.66,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Трубы для электропроводки',
        code: 2017,
        description: 'Труба гофрированная ПВХ d40мм',
        price: 19.32,
        measure: 'м',
        spec: false,
        quantity: 220
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 2018,
        description: 'Лампа люминесцентная компактная SPC 11W E27 2700K',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 2121,
        description: 'Кабель ВВГнг-LS 4х4',
        price: 101.04,
        measure: 'м',
        spec: false,
        quantity: 727
    },
    {
        folder: 'Провод ПВС',
        code: 2179,
        description: 'Провод ПВС 4х10',
        price: 233.4,
        measure: 'м',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 2196,
        description: 'Провод ПУНП 3х1,5 ',
        price: 27.24,
        measure: 'м',
        spec: false,
        quantity: 70
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 2197,
        description: 'Лампа люминесцентная ЛБ-40 (36) G13',
        price: 53.1,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Розетки и вилки',
        code: 2216,
        description: 'Розетка 2-я открытой проводки без заземления',
        price: 52.98,
        measure: 'шт',
        spec: false,
        quantity: 96
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2219,
        description: 'Кабель АВВГ 2х2,5',
        price: 8.46,
        measure: 'м',
        spec: false,
        quantity: 1705
    },
    {
        folder: 'Сжимы ответвительные',
        code: 2266,
        description: 'Сжим ответвительный У-734',
        price: 19.8,
        measure: 'шт',
        spec: false,
        quantity: 38
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2267,
        description: 'Провод АПВ 2,5 белый',
        price: 3.06,
        measure: 'м',
        spec: false,
        quantity: 3650
    },
    {
        folder: 'Светильники подвесные',
        code: 2272,
        description: 'Светильник НСП 02-100-001 без решетки',
        price: 233.88,
        measure: 'шт',
        spec: false,
        quantity: 489
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 2312,
        description: 'Кабель-канал ПВХ 40х25',
        price: 31.98,
        measure: 'м',
        spec: false,
        quantity: 7402
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 2342,
        description: 'Провод ПВ3 2,5 белый',
        price: 13.56,
        measure: 'м',
        spec: false,
        quantity: 410
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2353,
        description: 'Трубка термоусаживаемая ТУТ 30/15 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Лампы накаливания',
        code: 2364,
        description: 'Лампа накаливания ЛОН-150 150Вт 220В Е27',
        price: 16.14,
        measure: 'шт',
        spec: false,
        quantity: 149
    },
    {
        folder: 'Лампы галогеновые',
        code: 2391,
        description: 'Лампа кварцевая галогеновая КГ-500 R7s L=117мм',
        price: 29.94,
        measure: 'шт',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 2406,
        description: 'Хомут нейлоновый черный 300х3,6-4 (100шт)',
        price: 129.9,
        measure: 'упак',
        spec: false,
        quantity: 139
    },
    {
        folder: 'Изолента',
        code: 2409,
        description: 'Изолента ПВХ синяя',
        price: 30.06,
        measure: 'шт',
        spec: false,
        quantity: 17075
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 2455,
        description: 'Провод ПВ1 2,5 белый',
        price: 13.8,
        measure: 'м',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Провод ПВС',
        code: 2458,
        description: 'Провод ПВС 3х4',
        price: 74.82,
        measure: 'м',
        spec: false,
        quantity: 860
    },
    {
        folder: 'Промышленные разъемы',
        code: 2494,
        description: 'Розетка переносная 214 3Р+PE 16А 380B IP44',
        price: 153.9,
        measure: 'шт',
        spec: false,
        quantity: 90
    },
    {
        folder: 'Промышленные разъемы',
        code: 2495,
        description: 'Вилка переносная 014 3Р+PE 16А 380В IP44',
        price: 130.02,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Выключатели',
        code: 2564,
        description: 'Выключатель 1-клавишный скрытой проводки',
        price: 45.78,
        measure: 'шт',
        spec: false,
        quantity: 385
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 2611,
        description: 'Отвертка-пробник ОП-1 ',
        price: 86.52,
        measure: 'шт',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2626,
        description: 'Трубка термоусаживаемая ТУТ 30/15 черная',
        price: 78.18,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 2627,
        description: 'Трубка термоусаживаемая ТУТ 20/10 синяя',
        price: 50.34,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 2647,
        description: 'Наконечник штыревой НШвИ 0,5-8 изолированный упаковка 100шт.',
        price: 24.3,
        measure: 'упак',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Розетки и вилки',
        code: 2655,
        description: 'Розетка 1-я открытой проводки без заземления',
        price: 32.16,
        measure: 'шт',
        spec: false,
        quantity: 75
    },
    {
        folder: 'Бирки кабельные',
        code: 2656,
        description: 'Бирка кабельная У-136 треугольная',
        price: 2.46,
        measure: 'шт',
        spec: false,
        quantity: 508
    },
    {
        folder: 'Трансформаторы',
        code: 2657,
        description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-24 250А IP31',
        price: 1466.94,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 2659,
        description: 'Бокс ЩРН-П-4 модуля пластик IP40',
        price: 188.16,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 2664,
        description: 'Клипса 16 для трубы черная',
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
        description: 'Наконечник кабельный ТА-16-8-5,4 алюминиевый под опрессовку',
        price: 6.72,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Выключатели',
        code: 2714,
        description: 'Выключатель 2-клавишный скрытой проводки',
        price: 51.36,
        measure: 'шт',
        spec: false,
        quantity: 286
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 2715,
        description: 'Зажим винтовой ЗВИ-30 16 кв.мм 12пар',
        price: 52.02,
        measure: 'шт',
        spec: false,
        quantity: 350
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 2737,
        description: 'Наконечник штыревой НШвИ 1,5-8 изолированный упаковка 100шт.',
        price: 32.64,
        measure: 'упак',
        spec: false,
        quantity: 34
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 2801,
        description: 'Провод ПУгНП 3х1,5',
        price: 26.28,
        measure: 'м',
        spec: false,
        quantity: 1167
    },
    {
        folder: 'Сжимы ответвительные',
        code: 2806,
        description: 'Сжим ответвительный У-871',
        price: 180.54,
        measure: 'шт',
        spec: false,
        quantity: 162
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 2808,
        description: 'Кабель-канал ПВХ 15х10',
        price: 8.94,
        measure: 'м',
        spec: false,
        quantity: 1058
    },
    {
        folder: 'Автоматические выключатели ABB на DIN-рейку',
        code: 2826,
        description: '2CDS251001R0504 ABB Автоматический выключатель 1п S201 C50 50А 6кА',
        price: 715.08,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2828,
        description: '2CSR145001R1164 ABB Автоматический выключатель дифференциального тока DSH941R AC-C16/0,03 16A/30mA',
        price: 2699.82,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2830,
        description: '2CSR145001R1254 ABB Автоматический выключатель дифференциального тока DSH941R AC-C25/0,03 25A/30mA',
        price: 2699.82,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        code: 2846,
        description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P C 32А/30мА',
        price: 595.32,
        measure: 'шт',
        spec: false,
        quantity: 51
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 2848,
        description: 'Провод АПВ 4 белый',
        price: 4.5,
        measure: 'м',
        spec: false,
        quantity: 895
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 2851,
        description: 'Хомут нейлоновый белый 250х2,5-3 (100шт.)',
        price: 87.6,
        measure: 'упак',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 2854,
        description: 'Кабель ВВГнг-FRLS 5х6 ',
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
        quantity: 51028
    },
    {
        folder: 'Трубы для электропроводки',
        code: 2905,
        description: 'Труба гофрированная ПВХ d25мм (50м)',
        price: 8.88,
        measure: 'м',
        spec: false,
        quantity: 1250
    },
    {
        folder: 'Лампы накаливания',
        code: 3038,
        description: 'Лампа накаливания зеркальная R63 40W E27',
        price: 30.6,
        measure: 'шт',
        spec: false,
        quantity: 120
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 3041,
        description: 'Фонарь FA19M аккумуляторный прожектор 19 LED',
        price: 1375.02,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Провод ПВС',
        code: 3044,
        description: 'Провод ПВС 5х2,5',
        price: 78.66,
        measure: 'м',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Изолента',
        code: 3049,
        description: 'Изолента ПВХ желто-зеленая',
        price: 34.38,
        measure: 'шт',
        spec: false,
        quantity: 1943
    },
    {
        folder: 'Промышленные разъемы',
        code: 3063,
        description: 'Вилка переносная 023 2P+E 32А 220В IP44 ',
        price: 179.58,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 3079,
        description: 'Хомут нейлоновый белый 500х5,0 (100шт.)',
        price: 325.14,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Розетки и вилки',
        code: 3083,
        description: 'Вилка без заземления',
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
        description: 'Хомут нейлоновый белый 100х2,5 (100шт.)',
        price: 27.9,
        measure: 'упак',
        spec: false,
        quantity: 47
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 3129,
        description: 'Провод ПУгНП 2х1,5',
        price: 18.06,
        measure: 'м',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3130,
        description: 'Кабель-канал ПВХ 12х12',
        price: 8.64,
        measure: 'м',
        spec: false,
        quantity: 646
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3132,
        description: 'Кабель-канал ПВХ 25х16',
        price: 18.42,
        measure: 'м',
        spec: false,
        quantity: 8170
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3184,
        description: 'Трубка термоусаживаемая ТУТ 1,5/0,75 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3185,
        description: 'Трубка термоусаживаемая ТУТ 1,5/0,75 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3186,
        description: 'Трубка термоусаживаемая ТУТ 1,5/0,75 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3187,
        description: 'Трубка термоусаживаемая ТУТ 1,5/0,75 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3188,
        description: 'Трубка термоусаживаемая ТУТ 1,5/0,75 желтая',
        price: 4.5,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Провод ПВС',
        code: 3203,
        description: 'Провод ПВС 2х1,5',
        price: 21.84,
        measure: 'м',
        spec: false,
        quantity: 4221
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 3258,
        description: 'Кабель-канал ПВХ 100х40',
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
        description: 'Кабель КГ 4х10',
        price: 250.86,
        measure: 'м',
        spec: false,
        quantity: 110
    },
    {
        folder: 'Промышленные разъемы',
        code: 3329,
        description: 'Розетка переносная 213 2Р+E 16А 220B IP44',
        price: 141.06,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 3339,
        description: 'Указатель напряжения Контакт 55 ЭМ (звук)',
        price: 388.98,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Средства защиты',
        code: 3342,
        description: 'Боты диэлектрические  ',
        price: 722.16,
        measure: 'пар',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Электроизмерительные приборы',
        code: 3345,
        description: 'Клещи токоизмерительные М266',
        price: 449.64,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 3346,
        description: 'DIN-рейка L=125см',
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
        description: 'Труба гофрированная ПВХ d50мм (15м)',
        price: 23.22,
        measure: 'м',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 3389,
        description: 'Клипса 50 для трубы',
        price: 9.84,
        measure: 'шт',
        spec: false,
        quantity: 170
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 3399,
        description: 'Наконечник штыревой НШвИ 10-12 изолированный упаковка 100шт.',
        price: 113.64,
        measure: 'упак',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3401,
        description: 'Гильза медная ГМЛ 35-9 луженая',
        price: 35.04,
        measure: 'шт',
        spec: false,
        quantity: 84
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3402,
        description: 'Гильза медная  ГМЛ 25-8 луженая',
        price: 25.32,
        measure: 'шт',
        spec: false,
        quantity: 92
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3403,
        description: 'Гильза медная  ГМЛ 16-6 луженая',
        price: 15.6,
        measure: 'шт',
        spec: false,
        quantity: 270
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3404,
        description: 'Гильза медная  ГМЛ 10-5 луженая',
        price: 13.44,
        measure: 'шт',
        spec: false,
        quantity: 194
    },
    {
        folder: 'Гильзы медные луженые',
        code: 3405,
        description: 'Гильза медная ГМЛ 6-4 луженая',
        price: 8.04,
        measure: 'шт',
        spec: false,
        quantity: 81
    },
    {
        folder: 'Светильники люминесцентные',
        code: 3422,
        description: 'Светильник ЛПО 2х20(18)',
        price: 401.76,
        measure: 'шт',
        spec: false,
        quantity: 233
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 3438,
        description: 'Наконечник кабельный ТМЛ-6-6-4 медный луженый под опрессовку',
        price: 6.54,
        measure: 'шт',
        spec: false,
        quantity: 3514
    },
    {
        folder: 'Трубы для электропроводки',
        code: 3463,
        description: 'Труба гофрированная с протяжкой ПНД d16мм (100м)',
        price: 8.52,
        measure: 'м',
        spec: false,
        quantity: 2700
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 3480,
        description: 'Счетчик электроэнергии Меркурий 230AM-02 3ф 1т10-100А',
        price: 2282.52,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 3485,
        description: 'Корпус щита навесной металлический ЩРН-12з IP54',
        price: 1340.04,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Розетки и вилки',
        code: 3492,
        description: 'Розетка 3-я открытой проводки с заземлением',
        price: 146.04,
        measure: 'шт',
        spec: false,
        quantity: 63
    },
    {
        folder: 'Трансформаторы',
        code: 3502,
        description: 'Трансформатор тока Т-0,66 150/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трансформаторы',
        code: 3504,
        description: 'Трансформатор тока Т-0,66 200/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трансформаторы',
        code: 3505,
        description: 'Трансформатор тока Т-0,66 300/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трансформаторы',
        code: 3506,
        description: 'Трансформатор тока Т-0,66 75/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Трансформаторы',
        code: 3507,
        description: 'Трансформатор тока Т-0,66 100/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Патроны',
        code: 3555,
        description: 'Патрон Е40 подвесной керамический ',
        price: 47.22,
        measure: 'шт',
        spec: false,
        quantity: 106
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 3663,
        description: 'Хомут нейлоновый белый 350х4,8-5 (100шт.)',
        price: 189.42,
        measure: 'упак',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 3735,
        description: 'Дроссель L 7/9/11W для PL-11',
        price: 144.48,
        measure: 'шт',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Расходные материалы',
        code: 3761,
        description: 'Универсальная смазка WD-40, 200 мл',
        price: 250,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 3835,
        description: 'Рубильник ВР32-35 В31250 250А УХЛ3',
        price: 1196.94,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 3840,
        description: 'Лампа люминесцентная компактная SPC 20W E27 2700K',
        price: 83.16,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 3841,
        description: 'Кабель ВВГнг-LS 5х1,5',
        price: 51.3,
        measure: 'м',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 3885,
        description: 'Трубка термоусаживаемая ТУТ 40/20 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Светильники люминесцентные',
        code: 3899,
        description: 'Светильник ЛСП 2х36 IP65 с ЭПРА',
        price: 862.08,
        measure: 'шт',
        spec: false,
        quantity: 195
    },
    {
        folder: 'Бирки кабельные',
        code: 3918,
        description: 'Бирка кабельная У-134 квадратная',
        price: 2.76,
        measure: 'шт',
        spec: false,
        quantity: 8270
    },
    {
        folder: 'Лампы галогеновые',
        code: 3929,
        description: 'Лампа галогенная капсульная HCS CL 220V 40W G9 FOTON',
        price: 32.1,
        measure: 'шт',
        spec: false,
        quantity: 87
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 3988,
        description: 'Наконечник штыревой НШвИ 4-10 изолированный упаковка 100шт.',
        price: 61.08,
        measure: 'упак',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 3995,
        description: 'Автоматический выключатель АЕ2066-100 160А',
        price: 4060.86,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 3997,
        description: 'Провод ПВ1 1,5 белый',
        price: 8.16,
        measure: 'м',
        spec: false,
        quantity: 400
    },
    {
        folder: 'Расходные материалы',
        code: 4000,
        description: 'Соединительный изолирующий зажим СИЗ-1 (от 1,0 до 3,0 кв. мм) уп. 100 шт.',
        price: 62.64,
        measure: 'упак',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Расходные материалы',
        code: 4001,
        description: 'Соединительный изолирующий зажим СИЗ-3 (от 2,5 до 5,5 кв мм) уп. 100 шт.',
        price: 134.04,
        measure: 'упак',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Расходные материалы',
        code: 4003,
        description: 'Соединительный изолирующий зажим СИЗ-4 (от 3,5 до 11 кв мм) уп. 100 шт.',
        price: 178.86,
        measure: 'упак',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 4028,
        description: 'Счетчик электроэнергии Меркурий 230ART-03 CN 3ф 2т 5-7,5А',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 4061,
        description: 'Автоматический выключатель ВА47-63 2п C 32А 4,5кА',
        price: 129,
        measure: 'шт',
        spec: false,
        quantity: 268
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 4070,
        description: 'Элемент питания Duracell MN 1500 (блок 18 шт)',
        price: 48.6,
        measure: 'шт',
        spec: false,
        quantity: 144
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 4071,
        description: 'Элемент питания Duracell MN 2400 (блок 18 шт)',
        price: 48.6,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Трубы для электропроводки',
        code: 4105,
        description: 'Труба жесткая гладкая ПВХ d40мм (3м)',
        price: 34.32,
        measure: 'м',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Кабельные каналы (короба)',
        code: 4141,
        description: 'Кабель-канал ПВХ 80х40',
        price: 104.88,
        measure: 'м',
        spec: false,
        quantity: 192
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 4195,
        description: 'DIN-рейка L=30см',
        price: 19.92,
        measure: 'шт',
        spec: false,
        quantity: 130
    },
    {
        folder: 'Лампы газоразрядные',
        code: 4257,
        description: 'Лампа натриевая ДНаТ-150 150Вт Е40',
        price: 256.38,
        measure: 'шт',
        spec: false,
        quantity: 76
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 4308,
        description: 'Переключатель ВР32-37В71250 400А',
        price: 2504.58,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 4317,
        description: 'Кабель ВВГнг-LS 2х1,5',
        price: 18.84,
        measure: 'м',
        spec: false,
        quantity: 7849.5
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 4319,
        description: 'Коробка 68х45 скрытой проводки (для бетонных стен)',
        price: 5.64,
        measure: 'шт',
        spec: false,
        quantity: 1334
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 4321,
        description: 'Провод ПУгНП 2х2,5',
        price: 28.5,
        measure: 'м',
        spec: false,
        quantity: 471
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 4377,
        description: 'Провод ПВ-3 35 белый',
        price: 194.76,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 4513,
        description: 'Наконечник кабельный ТМЛ-4-5-3 медный луженый под опрессовку',
        price: 5.88,
        measure: 'шт',
        spec: false,
        quantity: 1197
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 4530,
        description: 'Клипса 40 для трубы',
        price: 3.48,
        measure: 'шт',
        spec: false,
        quantity: 335
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 4712,
        description: 'Наконечник кабельный ТА-25-8-7 алюминиевый под опрессовку',
        price: 9.78,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 4745,
        description: 'Наконечник штыревой НШвИ 0,75-8 изолированный упаковка 100шт.',
        price: 24.24,
        measure: 'упак',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубы для электропроводки',
        code: 4786,
        description: 'Труба жесткая гладкая ПВХ d32мм (3м)',
        price: 40.5,
        measure: 'м',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Выключатели',
        code: 4789,
        description: 'Выключатель 1-клавишный открытой проводки с подсветкой',
        price: 39.6,
        measure: 'шт',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Контакторы',
        code: 4824,
        description: 'Контактор КМН-10910 9А 230В/АС3 1НО ТДМ',
        price: 294.18,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Шкафы пустые',
        code: 4881,
        description: 'Бокс для наружной установки КМПн 1/2 1 р / 2 мод.',
        price: 19.26,
        measure: 'шт',
        spec: false,
        quantity: 36
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4888,
        description: 'Трубка термоусаживаемая ТУТ 40/20 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4889,
        description: 'Трубка термоусаживаемая ТУТ 40/20 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4890,
        description: 'Трубка термоусаживаемая ТУТ 40/20 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4891,
        description: 'Трубка термоусаживаемая ТУТ 40/20 синяя',
        price: 111.72,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4892,
        description: 'Трубка термоусаживаемая ТУТ 40/20 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 4994,
        description: 'Трубка термоусаживаемая ТУТ 80/40 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5006,
        description: 'Трубка термоусаживаемая ТУТ 4/2 черная',
        price: 7.32,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5007,
        description: 'Трубка термоусаживаемая ТУТ 6/3 желтая',
        price: 13.02,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5008,
        description: 'Трубка термоусаживаемая ТУТ 8/4 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5009,
        description: 'Трубка термоусаживаемая ТУТ 10/5 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Выключатели',
        code: 5042,
        description: 'Выключатель 1-клавишный открытой проводки IP54',
        price: 117.3,
        measure: 'шт',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5061,
        description: 'Трубка термоусаживаемая ТУТ 16/8 зеленая',
        price: 26.7,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5062,
        description: 'Трубка термоусаживаемая ТУТ 20/10 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5063,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5064,
        description: 'Трубка термоусаживаемая ТУТ 4/2 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Промышленные разъемы',
        code: 5066,
        description: 'Розетка стационарная 125 32А 3Р+N+E 380В IР44',
        price: 273.6,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5075,
        description: 'Трубка термоусаживаемая ТУТ 8/4 красная',
        price: 10.2,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5076,
        description: 'Трубка термоусаживаемая ТУТ 10/5 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Клеммники WAGO',
        code: 5152,
        description: '222-412 WAGO Клеммник 2х(0,08-2,5) для медных многожильных проводов',
        price: 17.94,
        measure: 'шт',
        spec: false,
        quantity: 456
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 5176,
        description: 'Розетка с заземляющим контактом РАр10-3-ОП на DIN-рейку',
        price: 124.32,
        measure: 'шт',
        spec: false,
        quantity: 143
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 5181,
        description: 'DIN-рейка L=120см',
        price: 76.98,
        measure: 'шт',
        spec: false,
        quantity: 207
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5196,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 32А 10кА ',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5197,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 40А 10кА',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5237,
        description: 'Трубка термоусаживаемая ТУТ 10/5 желтая',
        price: 13.38,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5238,
        description: 'Трубка термоусаживаемая ТУТ 10/5 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5239,
        description: 'Трубка термоусаживаемая ТУТ 10/5 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5240,
        description: 'Трубка термоусаживаемая ТУТ 20/10 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5241,
        description: 'Трубка термоусаживаемая ТУТ 20/10 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5242,
        description: 'Трубка термоусаживаемая ТУТ 20/10 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5243,
        description: 'Трубка термоусаживаемая ТУТ 20/10 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5244,
        description: 'Трубка термоусаживаемая ТУТ 30/15 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5245,
        description: 'Трубка термоусаживаемая ТУТ 30/15 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5246,
        description: 'Трубка термоусаживаемая ТУТ 30/15 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5247,
        description: 'Трубка термоусаживаемая ТУТ 30/15 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 5351,
        description: 'Рубильник ВР32-35 В71250 250А УХЛ3',
        price: 1976.22,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5366,
        description: 'Провод ПВ-3 50 белый',
        price: 288.3,
        measure: 'м',
        spec: false,
        quantity: 81
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5398,
        description: 'Трубка термоусаживаемая ТУТ 6/3 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5399,
        description: 'Трубка термоусаживаемая ТУТ 6/3 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Шкафы пустые',
        code: 5487,
        description: 'Корпус щита навесной металлический ЩРН-12з IP31',
        price: 714.78,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Шкафы пустые',
        code: 5488,
        description: 'Корпус щита навесной металлический ЩРН-18з IP31',
        price: 938.76,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5494,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 черная',
        price: 5.52,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Расходные материалы',
        code: 5519,
        description: 'Саморез 3,5х41',
        price: 0.84,
        measure: 'шт',
        spec: false,
        quantity: 32300
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5693,
        description: 'Провод ПВ1 6 белый',
        price: 35.52,
        measure: 'м',
        spec: false,
        quantity: 793
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 5694,
        description: 'Провод ПВ1 6 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 305
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5763,
        description: 'Знак "220В" 15х50мм',
        price: 1.98,
        measure: 'шт',
        spec: false,
        quantity: 135
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5764,
        description: 'Знак "380В" 15х50мм',
        price: 1.98,
        measure: 'шт',
        spec: false,
        quantity: 55
    },
    {
        folder: 'Знаки электробезопасности',
        code: 5765,
        description: 'Знак "Молния" (треугольник) 50х50х50мм',
        price: 3.42,
        measure: 'шт',
        spec: false,
        quantity: 1053
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5782,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5783,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5784,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5785,
        description: 'Трубка термоусаживаемая ТУТ 4/2 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5786,
        description: 'Трубка термоусаживаемая ТУТ 4/2 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5787,
        description: 'Трубка термоусаживаемая ТУТ 4/2 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5788,
        description: 'Трубка термоусаживаемая ТУТ 3/1,5 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 5821,
        description: 'Коробка испытательная для счетчиков КИП прозрачная крышка',
        price: 205.68,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Лампы накаливания',
        code: 5822,
        description: 'Лампа накаливания зеркальная R63 60W E27',
        price: 30.6,
        measure: 'шт',
        spec: false,
        quantity: 144
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 5843,
        description: 'Провод СИП-4 2х16',
        price: 35.16,
        measure: 'м',
        spec: false,
        quantity: 1270
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5876,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 желтая',
        price: 67.2,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5877,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5878,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5879,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5880,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 48
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5883,
        description: 'Трубка термоусаживаемая ТУТ 16/8 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5884,
        description: 'Трубка термоусаживаемая ТУТ 16/8 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5885,
        description: 'Трубка термоусаживаемая ТУТ 16/8 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 5886,
        description: 'Трубка термоусаживаемая ТУТ 16/8 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 5889,
        description: 'Автоматический выключатель ВА47-63 3п C 25А 4,5кА',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Расходные материалы',
        code: 5961,
        description: 'Круг отрезной по металлу 115х1,2х22мм ',
        price: 36.6,
        measure: 'шт',
        spec: false,
        quantity: 182
    },
    {
        folder: 'Бирки кабельные',
        code: 6057,
        description: 'Бирка кабельная У-135 круглая',
        price: 1.92,
        measure: 'шт',
        spec: false,
        quantity: 1040
    },
    {
        folder: 'Патроны',
        code: 6130,
        description: 'Патрон E14 подвесной керамический',
        price: 9.6,
        measure: 'шт',
        spec: false,
        quantity: 699
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 6137,
        description: 'Счетчик электроэнергии Меркурий 201.5 1ф 1т 5-60А',
        price: 673.02,
        measure: 'шт',
        spec: false,
        quantity: 29
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 6170,
        description: 'Плавкая вставка ПН-2 100/80А',
        price: 55.92,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 6183,
        description: 'Лампа люминесцентная Philips TL-D 36W/33-640 G13',
        price: 57.72,
        measure: 'шт',
        spec: false,
        quantity: 539
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 6184,
        description: 'Лампа люминесцентная Philips TL-D 18W/33-640 G13 ',
        price: 46.02,
        measure: 'шт',
        spec: false,
        quantity: 1116
    },
    {
        folder: 'Лампы газоразрядные',
        code: 6263,
        description: 'Лампа металлогалогеновая ДРИ 400 E40',
        price: 389.64,
        measure: 'шт',
        spec: false,
        quantity: 170
    },
    {
        folder: 'Лампы накаливания',
        code: 6264,
        description: 'Лампа накаливания ДС-40 40Вт 220В Е14',
        price: 12.3,
        measure: 'шт',
        spec: false,
        quantity: 305
    },
    {
        folder: 'Лампы накаливания',
        code: 6269,
        description: 'Лампа накаливания МО 12В 60Вт E27',
        price: 14.34,
        measure: 'шт',
        spec: false,
        quantity: 213
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 6435,
        description: 'Наконечник штыревой НШвИ 1,0-8 изолированный упаковка 100шт',
        price: 28.62,
        measure: 'упак',
        spec: false,
        quantity: 35
    },
    {
        folder: 'Шкафы пустые',
        code: 6450,
        description: 'Бокс ЩРН-П-6 модулей пластик IP40',
        price: 232.38,
        measure: 'шт',
        spec: false,
        quantity: 39
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 6473,
        description: 'Счетчик электроэнергии Меркурий 231AM-01 3ф 1т 5(60)A/380В (ДИН)',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 6480,
        description: 'Щит навесной с монтажной панелью ЩМП-09 (800х600х250мм) IP54',
        price: 3412.26,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Плавкие вставки и держатели к ним',
        code: 6504,
        description: 'Плавкая вставка ПН-2 250/160А',
        price: 74.88,
        measure: 'шт',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 6554,
        description: 'Зажим винтовой ЗВИ-3 4кв.мм 12пар',
        price: 19.44,
        measure: 'шт',
        spec: false,
        quantity: 226
    },
    {
        folder: 'Светодиодные фонари и аварийные указатели',
        code: 6675,
        description: 'Светильник ССА 1001 "ВЫХОД-EXIT" односторонний светодиодный IP20',
        price: 453.48,
        measure: 'шт',
        spec: false,
        quantity: 40
    },
    {
        folder: 'Инструмент ручной',
        code: 6702,
        description: 'Набор отверток диэлектрических 7шт. в коробке',
        price: 419.82,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Инструмент ручной',
        code: 6758,
        description: 'Бокорезы диэлектрические 160мм',
        price: 312,
        measure: 'шт',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Инструмент ручной',
        code: 6760,
        description: 'Пассатижи диэлектрические 160мм  (6шт.в кор.)',
        price: 514.08,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Выключатели',
        code: 6956,
        description: 'Выключатель 1-клавишный открытой проводки, проходной (переключатель)',
        price: 46.38,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6995,
        description: 'Элемент питания LR6 АА',
        price: 15.6,
        measure: 'шт',
        spec: false,
        quantity: 825
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6996,
        description: 'Элемент питания LR03 ААА',
        price: 12.54,
        measure: 'шт',
        spec: false,
        quantity: 320
    },
    {
        folder: 'Элементы питания и аккумуляторы',
        code: 6997,
        description: 'Элемент питания 6LF22 BL-1 "Крона"',
        price: 76.5,
        measure: 'шт',
        spec: false,
        quantity: 56
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 7019,
        description: 'Провод ПВ-3 0,75 белый',
        price: 5.58,
        measure: 'м',
        spec: false,
        quantity: 1000
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 7054,
        description: 'Провод СИП-4 4х16',
        price: 70.56,
        measure: 'м',
        spec: false,
        quantity: 3705
    },
    {
        folder: 'Светильники светодиодные',
        code: 7119,
        description: 'Светильник светодиодный 595х595 4000К',
        price: 526.08,
        measure: 'шт',
        spec: false,
        quantity: 198
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 7165,
        description: 'Кабель ВВГнг 3x6',
        price: 86.16,
        measure: 'м',
        spec: false,
        quantity: 1435
    },
    {
        folder: 'Светильники настенно-потолочные',
        code: 7171,
        description: 'Светильник НПП 03-100 IP65',
        price: 156.54,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 7225,
        description: 'Провод ПВ3 1,5 белый',
        price: 8.34,
        measure: 'м',
        spec: false,
        quantity: 1120
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 7418,
        description: 'Колодка каучуковая на 1 розетку 16A 2P+E IP44',
        price: 128.4,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 7641,
        description: '4050300010618 Лампа люминесцентная компактная OSRAM DULUX S 11W/21-840 G23',
        price: 101.76,
        measure: 'шт',
        spec: false,
        quantity: 1390
    },
    {
        folder: 'Гильзы медные луженые',
        code: 7824,
        description: 'Гильза медная ГМЛ 50-11 луженая',
        price: 42.24,
        measure: 'шт',
        spec: false,
        quantity: 95
    },
    {
        folder: 'Лампы накаливания',
        code: 8132,
        description: 'Лампа накаливания зеркальная R50 60W E14',
        price: 28.2,
        measure: 'шт',
        spec: false,
        quantity: 317
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 8149,
        description: 'Трубка термоусаживаемая ТУТ 60/30 черная',
        price: 178.08,
        measure: 'м',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8202,
        description: 'Кабель ВВГнг-LS 4х1,5',
        price: 40.92,
        measure: 'м',
        spec: false,
        quantity: 301
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8203,
        description: 'Кабель ВВГнг-FRLS 3х2,5',
        price: 65.82,
        measure: 'м',
        spec: false,
        quantity: 2200
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 8208,
        description: 'Провод ПВ-3 25 желто-зеленый',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 154
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8310,
        description: 'Кабель ВВГнг-LS 2х2,5',
        price: 28.98,
        measure: 'м',
        spec: false,
        quantity: 2103
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8322,
        description: 'Кабель ВВГнг-FRLS 5х4',
        price: 165,
        measure: 'м',
        spec: false,
        quantity: 570
    },
    {
        folder: 'Лампы галогеновые',
        code: 8439,
        description: 'Лампа кварцевая галогеновая КГ-1000 R7s L=189мм',
        price: 42.9,
        measure: 'шт',
        spec: false,
        quantity: 454
    },
    {
        folder: 'Лампы галогеновые',
        code: 8440,
        description: 'Лампа кварцевая галогеновая КГ-150 R7s L=78мм',
        price: 26.46,
        measure: 'шт',
        spec: false,
        quantity: 113
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 8520,
        description: 'Рубильник ВР32-37В31250 400А',
        price: 1658.28,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 8557,
        description: 'Трубка термоусаживаемая ТУТ 12/6 черная',
        price: 18.48,
        measure: 'м',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Патроны',
        code: 8894,
        description: 'Патрон Е14 подвесной карболитовый',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 8897,
        description: 'Кабель ВВГнг-LS 3x6',
        price: 106.62,
        measure: 'м',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 8926,
        description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 32А/30мА',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 521
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 8927,
        description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 40А/30мА ',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 92
    },
    {
        folder: 'Лампы накаливания',
        code: 9006,
        description: 'Лампа накаливания зеркальная R50 40W E14',
        price: 28.2,
        measure: 'шт',
        spec: false,
        quantity: 224
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 9065,
        description: 'Трубка термоусаживаемая ТУТ 25/12,5 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 9253,
        description: 'Комплект промежуточной подвески КОПП-1500',
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
        description: 'Щит навесной с монтажной панелью ЩМП-06-2 500х400х220 IP54',
        price: 1731.66,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Сжимы ответвительные',
        code: 9392,
        description: 'Сжим ответвительный У-739',
        price: 19.26,
        measure: 'шт',
        spec: false,
        quantity: 292
    },
    {
        folder: 'Промышленные разъемы',
        code: 9410,
        description: 'Розетка стационарная 113 2Р+PE 16А 220В IP44',
        price: 187.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Промышленные разъемы',
        code: 9411,
        description: 'Вилка переносная 013 2Р+РE 16А 220В IP44',
        price: 115.74,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Промышленные разъемы',
        code: 9412,
        description: 'Розетка стационарная 115 3Р+PE+N 16А 380В IP44',
        price: 212.82,
        measure: 'шт',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Промышленные разъемы',
        code: 9413,
        description: 'Вилка переносная 015 3Р+PE+N 16А 380В IP44',
        price: 155.52,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Шкафы пустые',
        code: 9475,
        description: 'Щит с монтажной панелью ЩМП-08 (650х500х220мм) IP54',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 9549,
        description: 'Лампа люминесцентная компактная SPC 15W Е27 4200К ',
        price: 78,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9556,
        description: 'Автоматический выключатель ВА47-63 2п C 63А 4,5кА',
        price: 171.06,
        measure: 'шт',
        spec: false,
        quantity: 84
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9605,
        description: 'Автоматический выключатель ВА47-63 2п C 50А 4,5кА',
        price: 171.06,
        measure: 'шт',
        spec: false,
        quantity: 52
    },
    {
        folder: 'Розетки и вилки',
        code: 9652,
        description: 'Вилка евро боковая',
        price: 22.44,
        measure: 'шт',
        spec: false,
        quantity: 314
    },
    {
        folder: 'Лампы галогеновые',
        code: 9731,
        description: 'Лампа кварцевая галогеновая КГ-300 R7s L=117мм',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9781,
        description: 'Прожектор светодиодный 10W',
        price: 143.76,
        measure: 'шт',
        spec: false,
        quantity: 310
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9782,
        description: 'Прожектор светодиодный 20W',
        price: 210.36,
        measure: 'шт',
        spec: false,
        quantity: 320
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9783,
        description: 'Прожектор светодиодный 50W',
        price: 436.26,
        measure: 'шт',
        spec: false,
        quantity: 70
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9784,
        description: 'Прожектор светодиодный 70W',
        price: 782.52,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Клеммники WAGO',
        code: 9799,
        description: '2273-204 WAGO Клеммник 4х(0,5-2,5) для распределительных коробок',
        price: 8.94,
        measure: 'шт',
        spec: false,
        quantity: 224
    },
    {
        folder: 'Клеммники WAGO',
        code: 9802,
        description: '2273-205 WAGO Клеммник 5х(0,5-2,5) для распределительных коробок',
        price: 9.84,
        measure: 'шт',
        spec: false,
        quantity: 230
    },
    {
        folder: 'Прожектора светодиодные',
        code: 9808,
        description: 'Прожектор светодиодный 30W',
        price: 312.42,
        measure: 'шт',
        spec: false,
        quantity: 240
    },
    {
        folder: 'Шкафы пустые',
        code: 9836,
        description: 'Бокс ЩРН-П-8 модулей пластик IP40',
        price: 285.06,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9918,
        description: 'Арматура светосигнальная AD22DS 230В зеленая',
        price: 46.8,
        measure: 'шт',
        spec: false,
        quantity: 19
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9919,
        description: 'Арматура светосигнальная AD22DS 230В красная',
        price: 46.8,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 9968,
        description: 'Ограничитель на Din-рейку металлический',
        price: 7.86,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 9984,
        description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 25А/30мА',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 1031
    },
    {
        folder: 'Электроустановочные изделия из каучука',
        code: 9985,
        description: 'Колодка каучуковая переносная на 1 розетку 16A 2P+E IP44',
        price: 96.72,
        measure: 'шт',
        spec: false,
        quantity: 26
    },
    {
        folder: 'Шкафы пустые',
        code: 9986,
        description: 'Бокс ЩРН-П-10 модулей пластик IP40',
        price: 342.72,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Клеммники из PRC',
        code: 9991,
        description: 'СК-412 Клеммник 2х(0,08-2,5) для медных многожильных проводов',
        price: 10.2,
        measure: 'шт',
        spec: false,
        quantity: 8893
    },
    {
        folder: 'Клеммники из PRC',
        code: 9992,
        description: 'СК-413 Клеммник 3х(0,08-2,5) для медных многожильных проводов',
        price: 13.86,
        measure: 'шт',
        spec: false,
        quantity: 9028
    },
    {
        folder: 'Клеммники из PRC',
        code: 9993,
        description: 'СК-415 Клеммник 5х(0,08-2,5) для медных многожильных проводов',
        price: 22.32,
        measure: 'шт',
        spec: false,
        quantity: 3048
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9994,
        description: 'Автоматический выключатель ВА47-63 1п C 20А 4,5кА',
        price: 64.5,
        measure: 'шт',
        spec: false,
        quantity: 63
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9995,
        description: 'Автоматический выключатель ВА47-63 1п C 50А 4,5кА',
        price: 80.88,
        measure: 'шт',
        spec: false,
        quantity: 552
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9996,
        description: 'Автоматический выключатель ВА47-63 2п C 10А 4,5кА',
        price: 135,
        measure: 'шт',
        spec: false,
        quantity: 31
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9997,
        description: 'Автоматический выключатель ВА47-63 3п C 6А 4,5кА',
        price: 209.46,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9998,
        description: 'Автоматический выключатель ВА47-63 3п C 16А 4,5кА',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 781
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 9999,
        description: 'Автоматический выключатель ВА47-63 3п C 20А 4,5кА',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 151
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10000,
        description: 'Автоматический выключатель ВА47-63 3п C 32А 4,5кА',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 262
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10001,
        description: 'Автоматический выключатель ВА47-63 3п C 40А 4,5кА',
        price: 210.9,
        measure: 'шт',
        spec: false,
        quantity: 83
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 10002,
        description: 'Автоматический выключатель ВА47-63 3п C 63А 4,5кА',
        price: 250.2,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубы для электропроводки',
        code: 10020,
        description: 'Труба жесткая гладкая ПВХ d25мм (3м)',
        price: 15.78,
        measure: 'м',
        spec: false,
        quantity: 339
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 10209,
        description: 'Счетчик электроэнергии Меркурий 231AТ-01 IrDa 2т 5(60)A/380В ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 10355,
        description: 'Лампа люминесцентная компактная SPC 11W E14 4200K',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 202
    },
    {
        folder: 'Знаки электробезопасности',
        code: 10609,
        description: 'Знак "Заземление" 30х30мм',
        price: 1.8,
        measure: 'шт',
        spec: false,
        quantity: 96
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 10824,
        description: 'Зажим наборный ЗНИ-4мм2 (JXB35А) серый',
        price: 12.18,
        measure: 'шт',
        spec: false,
        quantity: 74
    },
    {
        folder: 'Трансформаторы',
        code: 10913,
        description: 'Трансформатор тока Т-0,66 400/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 10923,
        description: 'Кабель ВВГнг-FRLS 3х1,5',
        price: 45.54,
        measure: 'м',
        spec: false,
        quantity: 2850
    },
    {
        folder: 'Патроны',
        code: 11060,
        description: 'Патрон Е27 настенный карболитовый',
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
        description: 'Розетка стационарная 114 3Р+PE 16А 380В IP44',
        price: 199.8,
        measure: 'шт',
        spec: false,
        quantity: 27
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 11136,
        description: 'Зажим анкерный ЗАБ 4/16-35 (SO 158.1) ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11182,
        description: 'Трубка термоусаживаемая ТУТ 8/4 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11183,
        description: 'Трубка термоусаживаемая ТУТ 8/4 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 11184,
        description: 'Трубка термоусаживаемая ТУТ 8/4 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11245,
        description: 'Лампа люминесцентная компактная PL-11 11W G23 4000К',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 11642
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11378,
        description: 'Изолятор SM40K с крепежом',
        price: 43.38,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11379,
        description: 'Изолятор SM25K с крепежом',
        price: 25.2,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 11381,
        description: 'Изолятор SM35K с крепежом',
        price: 40.68,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11422,
        description: 'Лампа люминесцентная компактная PL-11 11W G23 6500К',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 155
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 11423,
        description: 'Лампа люминесцентная компактная PL-9 9W G23 6500К',
        price: 54.42,
        measure: 'шт',
        spec: false,
        quantity: 6880
    },
    {
        folder: 'Шкафы пустые',
        code: 11575,
        description: 'Корпус щита навесной металлический ЩРН-24з IР31',
        price: 758.7,
        measure: 'шт',
        spec: false,
        quantity: 5
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
        description: 'Зажим винтовой ЗВИ-15 12 кв.мм 12пар',
        price: 33.78,
        measure: 'шт',
        spec: false,
        quantity: 310
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 11698,
        description: 'Автоматический выключатель ВА47-63 3п C 50А 4,5кА',
        price: 250.2,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Трансформаторы',
        code: 11699,
        description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-12 IP31',
        price: 1534.8,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Трубы для электропроводки',
        code: 11977,
        description: 'Труба гофрированная с протяжкой ПНД d25мм (50м)',
        price: 15.12,
        measure: 'м',
        spec: false,
        quantity: 400
    },
    {
        folder: 'Шкафы пустые',
        code: 12006,
        description: 'Щит навесной с монтажной панелью ЩМП-04-2 400х300х220 IP31',
        price: 944.22,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Компактные люминесцентные лампы',
        code: 12085,
        description: 'Лампа люминесцентная компактная SPC 11W E27 4200K',
        price: 72.24,
        measure: 'шт',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Лампы газоразрядные',
        code: 12112,
        description: 'Лампа ртутная бездроссельная ДРВ-160 Е27',
        price: 111.12,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Выключатели дифференциального тока (УЗО) 2п',
        code: 12127,
        description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 16А/30мА',
        price: 583.86,
        measure: 'шт',
        spec: false,
        quantity: 179
    },
    {
        folder: 'Трубы для электропроводки',
        code: 12261,
        description: 'Труба жесткая гладкая ПВХ d50мм (3м)',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 12325,
        description: 'Наконечник кабельный ТМЛ-70-12-13 медный луженый под опрессовку',
        price: 38.94,
        measure: 'шт',
        spec: false,
        quantity: 185
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 12326,
        description: 'Наконечник кабельный ТМЛ-95-12-15 медный луженый под опрессовку',
        price: 68.88,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Управление освещением',
        code: 12361,
        description: 'Датчик движения ДДП-03 1200Вт, 10-420с, 6м, 3+Лк, 120(сбоку)+360(сверху)гр IP33',
        price: 329.88,
        measure: 'шт',
        spec: false,
        quantity: 9
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12366,
        description: 'Электронный пускорегулирующий аппарат 2х36',
        price: 188.04,
        measure: 'шт',
        spec: false,
        quantity: 259
    },
    {
        folder: 'Шкафы пустые',
        code: 12377,
        description: 'Бокс ЩРН-П-8 модулей пластик IP65',
        price: 481.98,
        measure: 'шт',
        spec: false,
        quantity: 27
    },
    {
        folder: 'Клеммники WAGO',
        code: 12407,
        description: '2273-203 WAGO Клеммник 3х(0,5-2,5) для распределительных коробок',
        price: 7.08,
        measure: 'шт',
        spec: false,
        quantity: 1400
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12444,
        description: 'Электронный пускорегулирующий аппарат 2х18',
        price: 161.34,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 12445,
        description: 'Электронный пускорегулирующий аппарат 4х18',
        price: 242.7,
        measure: 'шт',
        spec: false,
        quantity: 1785
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 12516,
        description: 'Коробка 68х45 установочная для Г/К стен',
        price: 7.86,
        measure: 'шт',
        spec: false,
        quantity: 259
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12531,
        description: 'Трубка термоусаживаемая ТУТ 8/4 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Шкафы пустые',
        code: 12589,
        description: 'Бокс пластиковый КМПн 1/4 4 модуля IP30',
        price: 26.4,
        measure: 'шт',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Управление освещением',
        code: 12703,
        description: 'Фотореле ФРЛ-03 5-50Лк 25А',
        price: 249.54,
        measure: 'шт',
        spec: false,
        quantity: 82
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12802,
        description: 'Трубка термоусаживаемая ТУТ 6/3 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12803,
        description: 'Трубка термоусаживаемая ТУТ 6/3 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12804,
        description: 'Трубка термоусаживаемая ТУТ 60/30 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 15
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12805,
        description: 'Трубка термоусаживаемая ТУТ 60/30 зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 17
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12806,
        description: 'Трубка термоусаживаемая ТУТ 60/30 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12807,
        description: 'Трубка термоусаживаемая ТУТ 60/30 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 16
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12808,
        description: 'Трубка термоусаживаемая ТУТ 80/40 желтая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12809,
        description: 'Трубка термоусаживаемая ТУТ 80/40 зеленая',
        price: 277.92,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12810,
        description: 'Трубка термоусаживаемая ТУТ 80/40 красная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 12811,
        description: 'Трубка термоусаживаемая ТУТ 80/40 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Контакторы',
        code: 12829,
        description: 'Контактор КМН-22511 25А 230В/АС3 1НЗ ТДМ',
        price: 511.92,
        measure: 'шт',
        spec: false,
        quantity: 3
    },
    {
        folder: 'Коробки распределительные (распаячные)',
        code: 12878,
        description: 'Коробка распределительная 80х80х50 открытой установки IP54',
        price: 27.72,
        measure: 'шт',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Контакторы',
        code: 12898,
        description: 'Контактор КМН-11210 12А 230В/АС3 1НО ТДМ',
        price: 303.06,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Контакторы',
        code: 12899,
        description: 'Контактор КМН-11810 18А 230В/АС3 1НО ТДМ',
        price: 345.78,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Контакторы',
        code: 12900,
        description: 'Контактор КМН-22510 25А 230В/АС3 1НО ТДМ',
        price: 466.68,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Контакторы',
        code: 12901,
        description: 'Контактор КМН-23210 32А 230В/АС3 1НО ТДМ',
        price: 532.56,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Контакторы',
        code: 12902,
        description: 'Контактор КМН-34012 40А 230В/АС3 1НО 1НЗ ТДМ',
        price: 1183.44,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Контакторы',
        code: 12904,
        description: 'Контактор КМН-46512 65А 230В/АС3 1НО 1НЗ ТДМ',
        price: 1253.04,
        measure: 'шт',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 12991,
        description: 'Провод ПВ-3 25 белый',
        price: 139.62,
        measure: 'м',
        spec: false,
        quantity: 315
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 12992,
        description: 'Провод ПВ-3 25 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 435
    },
    {
        folder: 'Розетки и вилки',
        code: 13052,
        description: 'Розетка 1-я открытой проводки с заземлением IP54',
        price: 117.48,
        measure: 'шт',
        spec: false,
        quantity: 289
    },
    {
        folder: 'Светодиодные лампы',
        code: 13158,
        description: 'Лампа светодиодная 10Вт Е27 4000К',
        price: 58.5,
        measure: 'шт',
        spec: false,
        quantity: 650
    },
    {
        folder: 'Управление освещением',
        code: 13207,
        description: 'Фотореле ФРЛ-02 5-50Лк 10А',
        price: 178.62,
        measure: 'шт',
        spec: false,
        quantity: 164
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13209,
        description: 'Наконечник кабельный ТА-35-10-8 алюминиевый под опрессовку',
        price: 10.68,
        measure: 'шт',
        spec: false,
        quantity: 64
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13210,
        description: 'Наконечник кабельный ТА-50-10-9 алюминиевый под опрессовку',
        price: 13.38,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 13211,
        description: 'Наконечник кабельный ТА-120-12-14 алюминиевый под опрессовку',
        price: 27.6,
        measure: 'шт',
        spec: false,
        quantity: 69
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 13214,
        description: 'Наконечник кабельный ТМЛ-120-14-17 медный луженый под опрессовку',
        price: 94.44,
        measure: 'шт',
        spec: false,
        quantity: 50
    },
    {
        folder: 'Светодиодные лампы',
        code: 13225,
        description: 'Лампа светодиодная 7Вт Е27 4000К',
        price: 54.84,
        measure: 'шт',
        spec: false,
        quantity: 1856
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 13261,
        description: 'Лампа люминесцентная ЛД-20 (18) G13',
        price: 40.74,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Линейные люминесцентные лампы',
        code: 13262,
        description: 'Лампа люминесцентная ЛД-40 (36) G13',
        price: 53.1,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13295,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 25А 10кА',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13296,
        description: 'Автоматический выключатель модульный ВА47-100 1п C 16А 10кА',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13297,
        description: 'Автоматический выключатель модульный ВА47-100 1п C 25А 10кА',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 18
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 13308,
        description: 'Электронный пускорегулирующий аппарат 1х18',
        price: 129.78,
        measure: 'шт',
        spec: false,
        quantity: 136
    },
    {
        folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        code: 13309,
        description: 'Электронный пускорегулирующий аппарат 1х36',
        price: 136.56,
        measure: 'шт',
        spec: false,
        quantity: 562
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 13731,
        description: 'Автоматический выключатель ВА47-63 1п C 63А 4,5кА ',
        price: 80.88,
        measure: 'шт',
        spec: false,
        quantity: 119
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 13911,
        description: 'Кабель ВВГнг-LS 4х10',
        price: 244.5,
        measure: 'м',
        spec: false,
        quantity: 420
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 13914,
        description: 'Провод ПВ1 6 желто-зеленый',
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
        quantity: 54
    },
    {
        folder: 'Розетки и вилки',
        code: 14106,
        description: 'Розетка 1-я скрытой проводки с заземлением со шторками',
        price: 66.24,
        measure: 'шт',
        spec: false,
        quantity: 391
    },
    {
        folder: 'Розетки и вилки',
        code: 14107,
        description: 'Розетка 2-я скрытой проводки с заземлением со шторками',
        price: 88.26,
        measure: 'шт',
        spec: false,
        quantity: 49
    },
    {
        folder: 'Трансформаторы',
        code: 14147,
        description: 'Трансформатор тока Т-0,66 30/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
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
        description: 'Автоматический выключатель ВА47-63 3п C 10А 4,5кА',
        price: 200.7,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        code: 14396,
        description: 'Зажим винтовой ЗВИ-10 10 кв.мм 12пар',
        price: 32.4,
        measure: 'шт',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Светильники светодиодные',
        code: 14411,
        description: 'Светильник светодиодный 18 Вт 600 мм IP40',
        price: 224.46,
        measure: 'шт',
        spec: false,
        quantity: 512
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14465,
        description: 'Трубка термоусаживаемая ТУТ 6/3 желто-зеленая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14466,
        description: 'Трубка термоусаживаемая ТУТ 10/5 белая',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14467,
        description: 'Трубка термоусаживаемая ТУТ 10/5 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 14569,
        description: 'Автоматический выключатель модульный ВА47-100 1п C 10А 10кА',
        price: 393.3,
        measure: 'шт',
        spec: false,
        quantity: 42
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 14601,
        description: 'Коробка 68х42 установочная скрытой проводки красная (подрозетник стыковочный для бетонных стен)',
        price: 6.66,
        measure: 'шт',
        spec: false,
        quantity: 263
    },
    {
        folder: 'Управление освещением',
        code: 14605,
        description: 'Фотореле ФРЛ-11 2-100Лк 20А DIN-рейка (с датчиком IP65)',
        price: 533.04,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 14608,
        description: 'Трубка термоусаживаемая ТУТ 16/8 черная',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Бирки кабельные',
        code: 14907,
        description: 'Бирка кабельная У-153 квадратная',
        price: 1.32,
        measure: 'шт',
        spec: false,
        quantity: 5650
    },
    {
        folder: 'Трансформаторы',
        code: 14940,
        description: 'Трансформатор тока Т-0,66 20/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Трансформаторы',
        code: 14942,
        description: 'Трансформатор тока Т-0,66 50/5, класс точности 0,5, номинальная вторичная нагрузка 5 ВА',
        price: 485.7,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15301,
        description: 'Шина 3ф гребёнка 63А',
        price: 647.46,
        measure: 'м',
        spec: false,
        quantity: 24
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15319,
        description: 'Шина N-PE 8 на DIN-рейку',
        price: 43.02,
        measure: 'шт',
        spec: false,
        quantity: 817
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15337,
        description: 'DIN-рейка L=140см',
        price: 85.92,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Коробки установочные (подрозетники)',
        code: 15456,
        description: 'Канал соединительный для установочных коробок ',
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
        description: 'Зажим наборный ЗНИ-2,5мм2 (JXB25А) серый',
        price: 10.92,
        measure: 'шт',
        spec: false,
        quantity: 80
    },
    {
        folder: 'Шкафы пустые',
        code: 15678,
        description: 'Щит учета электроэнергии ЩУ-3ф/1-1-6 445х400х150 2 двери IP66',
        price: 2201.22,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15717,
        description: 'Шина нулевая N на DIN-рейку в корпусе 4х7 групп ',
        price: 450.66,
        measure: 'шт',
        spec: false,
        quantity: 12
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
        description: 'Щит учета электроэнергии ЩУ-1ф/1-1-6 310х300х150 2 двери IP66',
        price: 1533.96,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 15834,
        description: 'Шина нулевая N на DIN-рейку в корпусе 4х11 групп ',
        price: 575.28,
        measure: 'шт',
        spec: false,
        quantity: 25
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 15856,
        description: 'Кабель ВВГнг-LS 3х1,5',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 17227
    },
    {
        folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        code: 15857,
        description: 'Кабель ВВГнг-LS 3х2,5',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 8844
    },
    {
        folder: 'Трубы для электропроводки',
        code: 15859,
        description: 'Труба гофрированная с протяжкой ПНД d32мм (25м)',
        price: 19.2,
        measure: 'м',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 15976,
        description: 'Рубильник ВР32-37А70220-00 УХЛ3 400А',
        price: 2276.16,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Промышленные разъемы',
        code: 16136,
        description: 'Розетка стационарная 123 2Р+PE 32А 220В IP44',
        price: 237.84,
        measure: 'шт',
        spec: false,
        quantity: 44
    },
    {
        folder: 'Патроны',
        code: 16264,
        description: 'Патрон G23 пластиковый',
        price: 39.24,
        measure: 'шт',
        spec: false,
        quantity: 500
    },
    {
        folder: 'Клеммники из PRC',
        code: 16620,
        description: '2273-244 Клеммник 4х(0,5-2,5) для распределительных коробок',
        price: 5.22,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Клеммники из PRC',
        code: 16621,
        description: '2273-246 Клеммник 6х(0,5-2,5) для распределительных коробок',
        price: 7.8,
        measure: 'шт',
        spec: false,
        quantity: 555
    },
    {
        folder: 'Клеммники из PRC',
        code: 16622,
        description: '2273-232 Клеммник 2х(0,5-2,5) для распределительных коробок',
        price: 4.2,
        measure: 'шт',
        spec: false,
        quantity: 1296
    },
    {
        folder: 'Клеммники из PRC',
        code: 16623,
        description: '2273-233 Клеммник 3х(0,5-2,5) для распределительных коробок',
        price: 5.46,
        measure: 'шт',
        spec: false,
        quantity: 785
    },
    {
        folder: 'Клеммники из PRC',
        code: 16624,
        description: '2273-235 Клеммник 5х(0,5-2,5) для распределительных коробок',
        price: 7.56,
        measure: 'шт',
        spec: false,
        quantity: 250
    },
    {
        folder: 'Клеммники из PRC',
        code: 16625,
        description: '2273-248 Клеммник 8х(0,5-2,5) для распределительных коробок',
        price: 9.54,
        measure: 'шт',
        spec: false,
        quantity: 134
    },
    {
        folder: 'Светодиодные лампы',
        code: 16629,
        description: 'Лампа светодиодная 9Вт T8 G13 4500K',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 3809
    },
    {
        folder: 'Светодиодные лампы',
        code: 16630,
        description: 'Лампа светодиодная 18Вт T8 G13 4500K',
        price: 100.2,
        measure: 'шт',
        spec: false,
        quantity: 1530
    },
    {
        folder: 'Патроны',
        code: 16701,
        description: 'Патрон E14 пластиковый с кольцом белый',
        price: 12.54,
        measure: 'шт',
        spec: false,
        quantity: 430
    },
    {
        folder: 'Патроны',
        code: 16702,
        description: 'Патрон Е27 подвесной пластиковый белый',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 16774,
        description: 'Рубильник ВР32-35А70220-00 250А УХЛ3',
        price: 1729.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 16875,
        description: 'Автоматический выключатель модульный ВА47-100 3п C 50А 10кА',
        price: 1158.18,
        measure: 'шт',
        spec: false,
        quantity: 19
    },
    {
        folder: 'Управление освещением',
        code: 16883,
        description: 'Фотореле ФРЛ-01 10Лк 6А',
        price: 138.48,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Светильники светодиодные',
        code: 16972,
        description: 'Светильник светодиодный СПП 2301 12Вт IP65',
        price: 166.74,
        measure: 'шт',
        spec: false,
        quantity: 3038
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 16999,
        description: 'Клипса 20 для трубы черная',
        price: 1.62,
        measure: 'шт',
        spec: false,
        quantity: 500
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 17000,
        description: 'Клипса 25 для трубы черная',
        price: 2.52,
        measure: 'шт',
        spec: false,
        quantity: 1450
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17005,
        description: 'Шина 1ф гребёнка 63А',
        price: 227.94,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Наконечники медные луженые под опрессовку',
        code: 17044,
        description: 'Наконечник кабельный ТМЛ-2,5-6-2,6 медный луженый под опрессовку',
        price: 5.46,
        measure: 'шт',
        spec: false,
        quantity: 765
    },
    {
        folder: 'Шкафы пустые',
        code: 17048,
        description: 'Бокс для наружной установки КМПн 1/2 с крышкой',
        price: 115.68,
        measure: 'шт',
        spec: false,
        quantity: 10
    },
    {
        folder: 'Шкафы пустые',
        code: 17050,
        description: 'Бокс для наружной установки КМПн 2/4 с крышкой',
        price: 144.78,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17062,
        description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 16-95/2,5-35',
        price: 115.02,
        measure: 'шт',
        spec: false,
        quantity: 306
    },
    {
        folder: 'Патроны',
        code: 17066,
        description: 'Патрон Е27 потолочный карболитовый прямой',
        price: 22.98,
        measure: 'шт',
        spec: false,
        quantity: 172
    },
    {
        folder: 'Шкафы пустые',
        code: 17093,
        description: 'Бокс ЩРН-П-12 модулей пластик IP40 сосна',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Шкафы пустые',
        code: 17095,
        description: 'Бокс ЩРН-П-24 модуля пластик IP40 сосна',
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
        description: 'Соединительный элемент РШ-ВШ 32А 3-штырьковый 220В открытой установки белый',
        price: 118.74,
        measure: 'шт',
        spec: false,
        quantity: 8
    },
    {
        folder: 'Розетки и вилки',
        code: 17229,
        description: 'Вилка евро боковая с ушком черная',
        price: 36.36,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Патроны',
        code: 17261,
        description: 'Патрон E27 карболитовый с кольцом',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17271,
        description: 'Зажим анкерный ЗАБ 16-25 М',
        price: 59.04,
        measure: 'шт',
        spec: false,
        quantity: 199
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17288,
        description: 'Шина N-PE 12 на DIN-рейку',
        price: 54.36,
        measure: 'шт',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Светильники светодиодные',
        code: 17292,
        description: 'Светильник светодиодный СПП 2101 8Вт IP65',
        price: 145.38,
        measure: 'шт',
        spec: false,
        quantity: 700
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17307,
        description: 'Зажим анкерный клиновой ЗАК 50-70/1500',
        price: 272.7,
        measure: 'шт',
        spec: false,
        quantity: 97
    },
    {
        folder: 'Шкафы пустые',
        code: 17329,
        description: 'Щит учета электроэнергии ЩУ-3ф/1-0-3 310х300х150 1 дверь IP66',
        price: 1837.98,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Розетки и вилки',
        code: 17534,
        description: 'Колодка удлинителя 3-м с заземлением',
        price: 81.18,
        measure: 'шт',
        spec: false,
        quantity: 73
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 17557,
        description: 'DIN-рейка L=7,5см',
        price: 6.48,
        measure: 'шт',
        spec: false,
        quantity: 28
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 17622,
        description: 'Скрепа-бугель усиленная СУ-20 (100 шт./уп.)',
        price: 1101,
        measure: 'упак',
        spec: false,
        quantity: 1
    },
    {
        folder: 'Наконечники алюминиевые под опрессовку',
        code: 17629,
        description: 'Наконечник кабельный ТА 70-10-12 алюминиевый под опрессовку ',
        price: 17.76,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Клеммники WAGO',
        code: 17636,
        description: '2273-202 WAGO Клеммник 2х(0,5-2,5) для распределительных коробок',
        price: 6.6,
        measure: 'шт',
        spec: false,
        quantity: 616
    },
    {
        folder: 'Розетки и вилки',
        code: 17798,
        description: 'Вилка евро боковая с ушком',
        price: 36.36,
        measure: 'шт',
        spec: false,
        quantity: 37
    },
    {
        folder: 'Контакторы',
        code: 17857,
        description: 'Контактор КМН-22510 25А 400В/АС3 1НО ТДМ',
        price: 518.4,
        measure: 'шт',
        spec: false,
        quantity: 5
    },
    {
        folder: 'Светодиодные лампы',
        code: 17864,
        description: 'Лампа светодиодная 12Вт Е27 3000К',
        price: 63.36,
        measure: 'шт',
        spec: false,
        quantity: 319
    },
    {
        folder: 'Клипсы для труб ПВХ и ПНД',
        code: 18110,
        description: 'Угол 20 соединительный 90 градусов ПВХ ',
        price: 7.98,
        measure: 'шт',
        spec: false,
        quantity: 859
    },
    {
        folder: 'Светодиодные лампы',
        code: 18319,
        description: 'Лампа светодиодная 12Вт Е27 4000К',
        price: 63.36,
        measure: 'шт',
        spec: false,
        quantity: 300
    },
    {
        folder: 'Розетки и вилки',
        code: 18387,
        description: 'Колодка удлинителя 4-м с заземлением',
        price: 113.94,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Розетки и вилки',
        code: 18388,
        description: 'Колодка удлинителя 2-м с заземлением',
        price: 70.56,
        measure: 'шт',
        spec: false,
        quantity: 39
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 18525,
        description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 16-95/1,5-10',
        price: 78.18,
        measure: 'шт',
        spec: false,
        quantity: 389
    },
    {
        folder: 'Провод ПВС',
        code: 18627,
        description: 'Провод ПВС 3х1,5',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 1740
    },
    {
        folder: 'Провод ПВС',
        code: 18628,
        description: 'Провод ПВС 3х2,5',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 2320
    },
    {
        folder: 'Выключатели нагрузки (рубильники) и переключатели',
        code: 18664,
        description: 'Выключатель нагрузки ВН-32 2P 25A',
        price: 173.58,
        measure: 'шт',
        spec: false,
        quantity: 76
    },
    {
        folder: 'Светодиодные лампы',
        code: 18665,
        description: 'Лампа светодиодная 5Вт Е14 свеча 4000К',
        price: 53.52,
        measure: 'шт',
        spec: false,
        quantity: 92
    },
    {
        folder: 'Трубка термоусаживаемая ТУТ',
        code: 18683,
        description: 'Трубка термоусаживаемая ТУТ 4/2 синяя',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 18691,
        description: 'Шина нулевая 8/1 6х9мм',
        price: 34.26,
        measure: 'шт',
        spec: false,
        quantity: 14
    },
    {
        folder: 'Шкафы пустые',
        code: 18743,
        description: 'Корпус щита навесной металлический ЩРН-36з IP31',
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
        description: 'Светильник светодиодный 36 Вт 1200 мм IP65',
        price: 920.7,
        measure: 'шт',
        spec: false,
        quantity: 6
    },
    {
        folder: 'Светильники светодиодные',
        code: 18916,
        description: 'Светильник светодиодный 36 Вт 1200 мм IP65',
        price: 549.84,
        measure: 'шт',
        spec: false,
        quantity: 978
    },
    {
        folder: 'Удлинители',
        code: 18988,
        description: 'Удлинитель 4х30м ПВС3х2,5 на пластиковой катушке т/защ. IP44',
        price: 2906.25,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19252,
        description: 'Удлинитель 4х30м ПВС 3х1,5 на пластиковой катушке т/защ. IP44',
        price: 2199.35,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19253,
        description: 'Удлинитель 4х50м ПВС3х1,5 на пластиковой катушке т/защ. IP44',
        price: 3029.06,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Удлинители',
        code: 19254,
        description: 'Удлинитель 4х50м ПВС3х2,5 на пластиковой катушке т/защ. IP44',
        price: 3866.4,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Расходные материалы',
        code: 19456,
        description: 'Соединительный изолирующий зажим СИЗ-2 (от 2,5 до 4,5 кв. мм) синий уп. 100 шт.',
        price: 96.18,
        measure: 'упак',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 19498,
        description: 'Шина N-PE 6 на DIN-рейку',
        price: 37.44,
        measure: 'шт',
        spec: false,
        quantity: 111
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 19548,
        description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 25-150/25-95',
        price: 140.34,
        measure: 'шт',
        spec: false,
        quantity: 54
    },
    {
        folder: 'Светодиодные лампы',
        code: 19605,
        description: 'Лампа светодиодная 7Вт E14 свеча 2700К',
        price: 44.34,
        measure: 'шт',
        spec: false,
        quantity: 548
    },
    {
        folder: 'Светодиодные лампы',
        code: 19606,
        description: 'Лампа светодиодная 11Вт E27 A60 4000К',
        price: 60.18,
        measure: 'шт',
        spec: false,
        quantity: 119
    },
    {
        folder: 'Светильники светодиодные',
        code: 19792,
        description: 'Светильник ДПБ 12Вт светодиодный Led',
        price: 465,
        measure: 'шт',
        spec: false,
        quantity: 2634
    },
    {
        folder: 'Светодиодные лампы',
        code: 19903,
        description: 'Лампа светодиодная 9Вт Е27 A60 2700К',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 100
    },
    {
        folder: 'Светодиодные лампы',
        code: 19948,
        description: 'Лампа светодиодная 7Вт Е27 2700К',
        price: 54.84,
        measure: 'шт',
        spec: false,
        quantity: 1743
    },
    {
        folder: 'Светодиодные лампы',
        code: 19950,
        description: 'Лампа светодиодная 8Вт E27 G45F (шар) 2700K',
        price: 56.2,
        measure: 'шт',
        spec: false,
        quantity: 162
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 19956,
        description: 'Автоматический выключатель ВА 4729 3P 32А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 13
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 19957,
        description: 'Автоматический выключатель ВА 4729 1P 32А (C) 6кА',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 46
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20111,
        description: 'Автоматический выключатель ВА 4729 3P 50А (С) 6кА',
        price: 348.9,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Светильники светодиодные',
        code: 20156,
        description: 'Светильник СПО 120х2 под LED лампу T8 ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 21
    },
    {
        folder: 'Светильники светодиодные',
        code: 20157,
        description: 'Светильник СПО 120х1 под LED лампу T8 ТДМ',
        price: 339.48,
        measure: 'шт',
        spec: false,
        quantity: 120
    },
    {
        folder: 'Светильники светодиодные',
        code: 20158,
        description: 'Светильник СПО 60х2 под LED лампу T8 ТДМ',
        price: 0,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 20231,
        description: 'Хомут нейлоновый черный 200х2,5 (100 шт.)',
        price: 55.98,
        measure: 'упак',
        spec: false,
        quantity: 99
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 20263,
        description: 'Кронштейн анкерный КАМ-1500',
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
        description: 'Светильник светодиодный 18 Вт 600 мм IP65',
        price: 351.96,
        measure: 'шт',
        spec: false,
        quantity: 44
    },
    {
        folder: 'Контакторы',
        code: 20537,
        description: 'Контактор КМН-34012 40А 400В/АС3 1НО 1НЗ ТДМ',
        price: 1201.32,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Гильзы медные луженые',
        code: 20638,
        description: 'Гильза медная ГМЛ 4-3 луженая',
        price: 6.96,
        measure: 'шт',
        spec: false,
        quantity: 98
    },
    {
        folder: 'Светодиодные лампы',
        code: 20682,
        description: 'Лампа светодиодная 7Вт Е14 шар 2700К',
        price: 43.86,
        measure: 'шт',
        spec: false,
        quantity: 3464
    },
    {
        folder: 'Светодиодные лампы',
        code: 20685,
        description: 'Лампа светодиодная 9Вт Е27 А60 4500К',
        price: 57.84,
        measure: 'шт',
        spec: false,
        quantity: 344
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20755,
        description: 'Автоматический выключатель ВА 4729 1P 10А (С) 6кА',
        price: 87.12,
        measure: 'шт',
        spec: false,
        quantity: 30
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20756,
        description: 'Автоматический выключатель ВА 4729 1P 16А (С) 6кА',
        price: 78.54,
        measure: 'шт',
        spec: false,
        quantity: 229
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20758,
        description: 'Автоматический выключатель ВА 4729 3P 16А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 20759,
        description: 'Автоматический выключатель ВА 4729 3P 40А (С) 6кА',
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
        description: 'Светильник светодиодный 36 Вт 1200 мм IP40',
        price: 331.5,
        measure: 'шт',
        spec: false,
        quantity: 5956
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21182,
        description: 'Автоматический выключатель ВА 4729 1P 25А (С) 6кА',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 253
    },
    {
        folder: 'Светильники светодиодные',
        code: 21189,
        description: 'Светильник СПО 60х1 под LED лампу T8 ТДМ',
        price: 305.04,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Провода СИП и арматура к ним',
        code: 21241,
        description: 'Лента бандажная ЛМ-50',
        price: 1874.28,
        measure: 'упак',
        spec: false,
        quantity: 11
    },
    {
        folder: 'Прожектора светодиодные',
        code: 21280,
        description: 'Прожектор светодиодный 100W',
        price: 975,
        measure: 'шт',
        spec: false,
        quantity: 82
    },
    {
        folder: 'Приборы учета электроэнергии',
        code: 21363,
        description: 'Счетчик эл.энергии Меркурий 230ART-03 RN 3ф 2т 5-50А  ',
        price: 5071.38,
        measure: 'шт',
        spec: false,
        quantity: 2
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21414,
        description: 'Автоматический выключатель ВА 4729 2Р 32А 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 23
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21415,
        description: 'Автоматический выключатель ВА 4729 1P 40А (С) 6кА',
        price: 86.58,
        measure: 'шт',
        spec: false,
        quantity: 121
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21416,
        description: 'Автоматический выключатель ВА 4729 2P 40А (С) 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 62
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 21431,
        description: 'Провод ШВВП 3х0,75',
        price: 14.28,
        measure: 'м',
        spec: false,
        quantity: 200
    },
    {
        folder: 'Светодиодные лампы',
        code: 21505,
        description: 'Лампа светодиодная 18Вт T8 G13 6500K',
        price: 100.2,
        measure: 'шт',
        spec: false,
        quantity: 923
    },
    {
        folder: 'Светодиодные лампы',
        code: 21529,
        description: 'Лампа светодиодная 8Вт E27 G45F (шар) 4500K',
        price: 56.2,
        measure: 'шт',
        spec: false,
        quantity: 308
    },
    {
        folder: 'Светодиодные лампы',
        code: 21608,
        description: 'Лампа светодиодная высокомощная 30Вт E27 6500К',
        price: 208.02,
        measure: 'шт',
        spec: false,
        quantity: 41
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 21909,
        description: 'Автоматический выключатель ВА 4729 3P 25А (С) 6кА',
        price: 256.62,
        measure: 'шт',
        spec: false,
        quantity: 52
    },
    {
        folder: 'Светодиодные лампы',
        code: 21991,
        description: 'Светодиодная лампа 40 Вт 6400 К Е27',
        price: 325.02,
        measure: 'шт',
        spec: false,
        quantity: 45
    },
    {
        folder: 'Аксессуары для шкафов и щитов',
        code: 22480,
        description: 'DIN-рейка L=100см усиленная алюминиевая 1,5мм ТДМ',
        price: 152.1,
        measure: 'шт',
        spec: false,
        quantity: 7
    },
    {
        folder: 'Светодиодные лампы',
        code: 22599,
        description: 'Лампа светодиодная 10Вт T8 G13 6500K',
        price: 83.76,
        measure: 'шт',
        spec: false,
        quantity: 3689
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 22625,
        description: 'Автоматический выключатель ВА 4729 3P 63А (C) 6кА',
        price: 279,
        measure: 'шт',
        spec: false,
        quantity: 33
    },
    {
        folder: 'Светодиодные лампы',
        code: 22791,
        description: 'Лампа светодиодная 20Вт Е27 4500K A60',
        price: 105.3,
        measure: 'шт',
        spec: false,
        quantity: 811
    },
    {
        folder: 'Светодиодные лампы',
        code: 22976,
        description: 'Лампа светодиодная 5Вт Е27 A60 4000К',
        price: 53.52,
        measure: 'шт',
        spec: false,
        quantity: 900
    },
    {
        folder: 'Светодиодные лампы',
        code: 22979,
        description: 'Лампа светодиодная 10Вт E27 А60 3000К',
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
        description: 'Светильник светодиодный 595х595 6500К',
        price: 526.08,
        measure: 'шт',
        spec: false,
        quantity: 187
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 23331,
        description: 'Хомут нейлоновый черный 150х2,5 (100шт.)',
        price: 41.76,
        measure: 'упак',
        spec: false,
        quantity: 20
    },
    {
        folder: 'Светодиодные лампы',
        code: 23562,
        description: 'Лампа светодиодная 15Вт Е27 4000К',
        price: 80.7,
        measure: 'шт',
        spec: false,
        quantity: 845
    },
    {
        folder: 'Светильники светодиодные',
        code: 23849,
        description: 'Светильник СПО 120х2 под LED лампу T8 (поликарбонат) ТДМ',
        price: 378,
        measure: 'шт',
        spec: false,
        quantity: 51
    },
    {
        folder: 'Автоматические выключатели на DIN-рейку',
        code: 24180,
        description: 'Автоматический выключатель ВА 4729 2P 25А (С) 6кА',
        price: 164.76,
        measure: 'шт',
        spec: false,
        quantity: 59
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24265,
        description: 'Автоматический выключатель ВА87-33 3п 80А 18кА',
        price: 1683.48,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24483,
        description: 'Автоматический выключатель ВА87-35 3п 250А 25кА ',
        price: 2620.86,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24562,
        description: 'Автоматический выключатель ВА87-33 3п 100А 18кА',
        price: 1667.46,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Светильники светодиодные',
        code: 24747,
        description: 'Светильник СПО 60х2 под LED лампу T8 (поликарбонат) ТДМ',
        price: 334.44,
        measure: 'шт',
        spec: false,
        quantity: 80
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 24986,
        description: 'Автоматический выключатель ВА87-35 3п 200А 25кА',
        price: 2620.86,
        measure: 'шт',
        spec: false,
        quantity: 4
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 25061,
        description: 'Автоматический выключатель ВА87-33 3п 160А 18кА',
        price: 1750.44,
        measure: 'шт',
        spec: false,
        quantity: 22
    },
    {
        folder: 'Хомуты нейлоновые',
        code: 25457,
        description: 'Площадка 20х20 самоклеющаяся под хомут белая',
        price: 115.98,
        measure: 'упак',
        spec: false,
        quantity: 36
    },
    {
        folder: 'Автоматические выключатели на монтажную панель',
        code: 25650,
        description: 'Автоматический выключатель ВА87-33 3п 125А 18кА',
        price: 1683.48,
        measure: 'шт',
        spec: false,
        quantity: 12
    },
    {
        folder: 'Светильники светодиодные',
        code: 25866,
        description: 'Светильник светодиодный уличный ДКУ29-40-501 40 Вт',
        price: 2376.9,
        measure: 'шт',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светильники светодиодные',
        code: 25867,
        description: 'Светильник светодиодный уличный ДКУ29-80-501 80 Вт',
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
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26435,
        description: 'Лампы накаливания',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26436,
        description: 'Компактные люминесцентные лампы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26437,
        description: 'Линейные люминесцентные лампы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26438,
        description: 'Светодиодные лампы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26439,
        description: 'Лампы галогеновые',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26440,
        description: 'Лампы газоразрядные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26441,
        description: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26442,
        description: 'Управление освещением',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26443,
        description: 'Патроны',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26444,
        description: 'Светильники люминесцентные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26445,
        description: 'Светильники подвесные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26446,
        description: 'Светильники настенно-потолочные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26447,
        description: 'Светильники светодиодные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26448,
        description: 'Прожектора светодиодные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Светотехника',
        code: 26449,
        description: 'Светодиодные фонари и аварийные указатели',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26450,
        description: 'Элементы питания и аккумуляторы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26451,
        description: 'Коробки установочные (подрозетники)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26452,
        description: 'Розетки и вилки',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26453,
        description: 'Удлинители',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26454,
        description: 'Выключатели',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26455,
        description: 'Электроустановочные изделия из каучука',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электроустановочные изделия',
        code: 26456,
        description: 'Промышленные разъемы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26457,
        description: 'Провода и кабели с алюминиевой жилой',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26458,
        description: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26459,
        description: 'Кабель КГ',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26460,
        description: 'Кабель NYM',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26461,
        description: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26462,
        description: 'Провод ПВС',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26463,
        description: 'Провода ПУНП, ПУгНП и ШВВП',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26464,
        description: 'Провода и кабели связи',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26465,
        description: 'Трубы для электропроводки',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26467,
        description: 'Клипсы для труб ПВХ и ПНД',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26468,
        description: 'Кабельные каналы (короба)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26469,
        description: 'Коробки распределительные (распаячные)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26470,
        description: 'Сжимы ответвительные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Кабель и провод',
        code: 26471,
        description: 'Провода СИП и арматура к ним',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26472,
        description: 'Клеммники WAGO',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26473,
        description: 'Клеммники из PRC',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26474,
        description: 'Зажимы винтовые ЗВИ (клеммные колодки)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26475,
        description: 'Наконечники алюминиевые под опрессовку',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26476,
        description: 'Наконечники медные луженые под опрессовку',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26477,
        description: 'Гильзы медные луженые',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26478,
        description: 'Наконечники НШвИ (штыревые)',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26479,
        description: 'Шкафы пустые',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26480,
        description: 'Аксессуары для шкафов и щитов',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26481,
        description: 'Автоматические выключатели на DIN-рейку',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26482,
        description: 'Автоматические выключатели на монтажную панель',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26484,
        description: 'Автоматические выключатели ABB на DIN-рейку',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26485,
        description: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26486,
        description: 'Выключатели дифференциального тока (УЗО) 2п',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26487,
        description: 'Контакторы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26488,
        description: 'Выключатели нагрузки (рубильники) и переключатели',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26489,
        description: 'Плавкие вставки и держатели к ним',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26490,
        description: 'Трансформаторы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Низковольтная автоматика',
        code: 26491,
        description: 'Приборы учета электроэнергии',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26492,
        description: 'Знаки электробезопасности',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26493,
        description: 'Средства защиты',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26494,
        description: 'Электроизмерительные приборы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26495,
        description: 'Изолента',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26496,
        description: 'Трубка термоусаживаемая ТУТ',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26497,
        description: 'Бирки кабельные',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26498,
        description: 'Хомуты нейлоновые',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26499,
        description: 'Инструмент ручной',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Электромонтажные изделия',
        code: 26500,
        description: 'Расходные материалы',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 26648,
        description: 'Наконечник штыревой GLW-НШвИ 16-12 изолированный упаковка 100шт.',
        price: 0,
        measure: 'упак',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провод ПВС',
        code: 26733,
        description: 'Провод ПВС 2х1,5',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 26805,
        description: 'Провод ПУгНП 3х4',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Провода ПУНП, ПУгНП и ШВВП',
        code: 26806,
        description: 'Провод ПУНП 3х4',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Наконечники НШвИ (штыревые)',
        code: 26851,
        description: 'Наконечник штыревой НШвИ 16-12 изолированный упаковка 50шт. EKF PROxima',
        price: 0,
        measure: 'упак',
        spec: false,
        quantity: 0
    },
    {
        folder: 'Светильники светодиодные',
        code: 27008,
        description: 'Светильник IP65 120х2 под LED лампу T8 G13',
        price: 434.34,
        measure: 'шт',
        spec: false,
        quantity: 56
    },
    {
        folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
        code: 27150,
        description: 'Провод ПВ1 16 Красный',
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
        spec: '',
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27249,
        description: 'Кабель и провод',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27250,
        description: 'Низковольтная автоматика',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27251,
        description: 'Электроустановочные изделия',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'СКЛАД',
        code: 27252,
        description: 'Электромонтажные изделия',
        price: 0,
        measure: '',
        spec: '',
        quantity: 0
    },
    {
        folder: 'Провода и кабели с алюминиевой жилой',
        code: 27322,
        description: 'Провод АПВ 6 синий',
        price: 0,
        measure: 'м',
        spec: false,
        quantity: 0
    }
];

const folders = [
            {
                name: 'Кабель и провод',
                children: [
                    {
                        name: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
                        children: []
                    },
                    {
                        name: 'Кабель NYM',
                        children: []
                    },
                    {
                        name: 'Кабель КГ',
                        children: []
                    },
                    {
                        name: 'Провод ПВС',
                        children: []
                    },
                    {
                        name: 'Провода и кабели с алюминиевой жилой',
                        children: []
                    },
                    {
                        name: 'Провода и кабели связи',
                        children: []
                    },
                    {
                        name: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
                        children: []
                    },
                    {
                        name: 'Провода ПУНП, ПУгНП и ШВВП',
                        children: []
                    },
                    {
                        name: 'Провода СИП и арматура к ним',
                        children: []
                    }
                ]
            },
            {
                name: 'Низковольтная автоматика',
                children: [
                    {
                        name: 'Автоматические выключатели ABB на DIN-рейку',
                        children: []
                    },
                    {
                        name: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
                        children: []
                    },
                    {
                        name: 'Автоматические выключатели на DIN-рейку',
                        children: []
                    },
                    {
                        name: 'Автоматические выключатели на монтажную панель',
                        children: []
                    },
                    {
                        name: 'Выключатели дифференциального тока (УЗО) 2п',
                        children: []
                    },
                    {
                        name: 'Выключатели нагрузки (рубильники) и переключатели',
                        children: []
                    },
                    {
                        name: 'Контакторы',
                        children: []
                    },
                    {
                        name: 'Плавкие вставки и держатели к ним',
                        children: []
                    },
                    {
                        name: 'Приборы учета электроэнергии',
                        children: []
                    },
                    {
                        name: 'Трансформаторы',
                        children: []
                    }
                ]
            },
            {
                name: 'Светотехника',
                children: [
                    {
                        name: 'Компактные люминесцентные лампы',
                        children: []
                    },
                    {
                        name: 'Лампы газоразрядные',
                        children: []
                    },
                    {
                        name: 'Лампы галогеновые',
                        children: []
                    },
                    {
                        name: 'Лампы накаливания',
                        children: []
                    },
                    {
                        name: 'Линейные люминесцентные лампы',
                        children: []
                    },
                    {
                        name: 'Прожектора светодиодные',
                        children: []
                    },
                    {
                        name: 'Пускорегулирующая аппаратура для люминесцентных ламп',
                        children: []
                    },
                    {
                        name: 'Светильники люминесцентные',
                        children: []
                    },
                    {
                        name: 'Светильники настенно-потолочные',
                        children: []
                    },
                    {
                        name: 'Светильники подвесные',
                        children: []
                    },
                    {
                        name: 'Светильники светодиодные',
                        children: []
                    },
                    {
                        name: 'Светодиодные лампы',
                        children: []
                    },
                    {
                        name: 'Светодиодные фонари и аварийные указатели',
                        children: []
                    },
                    {
                        name: 'Управление освещением',
                        children: []
                    }
                ]
            },
            {
                name: 'Электромонтажные изделия',
                children: [
                    {
                        name: 'Аксессуары для шкафов и щитов',
                        children: []
                    },
                    {
                        name: 'Бирки кабельные',
                        children: []
                    },
                    {
                        name: 'Гильзы медные луженые',
                        children: []
                    },
                    {
                        name: 'Зажимы винтовые ЗВИ (клеммные колодки)',
                        children: []
                    },
                    {
                        name: 'Знаки электробезопасности',
                        children: []
                    },
                    {
                        name: 'Изолента',
                        children: []
                    },
                    {
                        name: 'Инструмент ручной',
                        children: []
                    },
                    {
                        name: 'Кабельные каналы (короба)',
                        children: []
                    },
                    {
                        name: 'Клеммники WAGO',
                        children: []
                    },
                    {
                        name: 'Клеммники из PRC',
                        children: []
                    },
                    {
                        name: 'Клипсы для труб ПВХ и ПНД',
                        children: []
                    },
                    {
                        name: 'Коробки распределительные (распаячные)',
                        children: []
                    },
                    {
                        name: 'Коробки установочные (подрозетники)',
                        children: []
                    },
                    {
                        name: 'Наконечники алюминиевые под опрессовку',
                        children: []
                    },
                    {
                        name: 'Наконечники медные луженые под опрессовку',
                        children: []
                    },
                    {
                        name: 'Наконечники НШвИ (штыревые)',
                        children: []
                    },
                    {
                        name: 'Расходные материалы',
                        children: []
                    },
                    {
                        name: 'Сжимы ответвительные',
                        children: []
                    },
                    {
                        name: 'Средства защиты',
                        children: []
                    },
                    {
                        name: 'Трубка термоусаживаемая ТУТ',
                        children: []
                    },
                    {
                        name: 'Трубы для электропроводки',
                        children: []
                    },
                    {
                        name: 'Хомуты нейлоновые',
                        children: []
                    },
                    {
                        name: 'Шкафы пустые',
                        children: []
                    },
                    {
                        name: 'Электроизмерительные приборы',
                        children: []
                    },
                    {
                        name: 'Элементы питания и аккумуляторы',
                        children: []
                    }
                ]
            },
            {
                name: 'Электроустановочные изделия',
                children: [
                    {
                        name: 'Выключатели',
                        children: []
                    },
                    {
                        name: 'Патроны',
                        children: []
                    },
                    {
                        name: 'Промышленные разъемы',
                        children: []
                    },
                    {
                        name: 'Розетки и вилки',
                        children: []
                    },
                    {
                        name: 'Удлинители',
                        children: []
                    },
                    {
                        name: 'Электроустановочные изделия из каучука',
                        children: []
                    }
                ]
            }
];

export {goods, folders};