const goods = [
        {
            folder: 'Лампы накаливания',
            code: 720,
            description: 'Лампа накаливания ЛОН-40 40Вт 220В Е27',
            price: 7.34,
            measure: 'шт',
            spec:true,
            quantity: 10923
        },
        {
            folder: 'Лампы накаливания',
            code: 721,
            description: 'Лампа накаливания ЛОН-60 60Вт 220В Е27',
            price: 8.51,
            measure: 'шт',
            spec:true,
            quantity: 30816
        },
        {
            folder: 'Лампы накаливания',
            code: 722,
            description: 'Лампа накаливания ЛОН-75 75Вт 220В Е27',
            price: 8.51,
            measure: 'шт',
            spec:true,
            quantity: 3860
        },
        {
            folder: 'Лампы накаливания',
            code: 723,
            description: 'Лампа накаливания ЛОН-95 95Вт 220В Е27',
            price: 8.51,
            measure: 'шт',
            spec:false,
            quantity: 9163
        },
        {
            folder: 'Лампы накаливания',
            code: 2364,
            description: 'Лампа накаливания ЛОН-150 150Вт 220В Е27',
            price: 19.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 151
        },
        {
            folder: 'Лампы накаливания',
            code: 724,
            description: 'Лампа накаливания ЛОН-200 200Вт 220В Е27',
            price: 21.97,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 350
        },
        {
            folder: 'Лампы накаливания',
            code: 204,
            description: 'Лампа накаливания ЛОН-500 500Вт 220В Е40',
            price: 66.58,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 192
        },
        {
            folder: 'Лампы накаливания',
            code: 6269,
            description: 'Лампа накаливания МО 12В 60Вт',
            price: 13.74,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 183
        },
        {
            folder: 'Лампы накаливания',
            code: 725,
            description: 'Лампа накаливания МО 24В 60Вт',
            price: 13.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Лампы накаливания',
            code: 1071,
            description: 'Лампа накаливания МО 36В 40Вт',
            price: 13.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 562
        },
        {
            folder: 'Лампы накаливания',
            code: 214,
            description: 'Лампа накаливания МО 36В 60Вт',
            price: 13.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1135
        },
        {
            folder: 'Лампы накаливания',
            code: 6264,
            description: 'Лампа накаливания ДС-40 40Вт 220В Е14',
            price: 11.81,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 755
        },
        {
            folder: 'Лампы накаливания',
            code: 717,
            description: 'Лампа накаливания ДС-60 60Вт 220В Е14',
            price: 11.81,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Лампы накаливания',
            code: 9006,
            description: 'Лампа накаливания зеркальная R50 40W E14',
            price: 26.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 306
        },
        {
            folder: 'Лампы накаливания',
            code: 8132,
            description: 'Лампа накаливания зеркальная R50 60W E14',
            price: 26.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 143
        },
        {
            folder: 'Лампы накаливания',
            code: 3038,
            description: 'Лампа накаливания зеркальная R63 40W E27',
            price: 28.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Лампы накаливания',
            code: 5822,
            description: 'Лампа накаливания зеркальная R63 60W E27',
            price: 28.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 125
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 11423,
            description: 'Лампа люминесцентная компактная PL-9 9W G23 6500К',
            price: 38.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4850
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 11245,
            description: 'Лампа люминесцентная компактная PL-11 11W G23 4000К',
            price: 55.08,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 31758
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 11422,
            description: 'Лампа люминесцентная компактная PL-11 11W G23 6500К',
            price: 44.06,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 7641,
            description: 'Лампа люминесцентная компактная OSRAM DULUX S 11W/21-840 G23 ',
            price: 89.06,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1043
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 728,
            description: 'Лампа люминесцентная компактная SPC 11W E14 2700K',
            price: 48.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 117
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 10355,
            description: 'Лампа люминесцентная компактная SPC 11W E14 4200K',
            price: 48.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 932
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 2018,
            description: 'Лампа люминесцентная компактная SPC 11W E27 2700K',
            price: 48.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3471
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 12085,
            description: 'Лампа люминесцентная компактная SPC 11W E27 4200K',
            price: 48.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2457
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 10619,
            description: 'Лампа компактная люминесцентная SPC 15W Е14 2700К ',
            price: 54.11,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 409
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 1272,
            description: 'Лампа компактная люминесцентная SPC 15W Е27 2700К ',
            price: 56.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9451
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 9549,
            description: 'Лампа компактная люминесцентная SPC 15W Е27 4200К ',
            price: 56.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1396
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 19986,
            description: 'Лампа компактная люминесцентная SPC 15W Е27 6500К ',
            price: 56.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 565
        },
        {
            folder: 'Компактные люминесцентные лампы',
            code: 3840,
            description: 'Лампа люминесцентная компактная SPC 20W E27 2700K',
            price: 66.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1808
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 719,
            description: 'Лампа люминесцентная ЛБ-20(18) Вт T8/G13, 4000 К',
            price: 30.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 13261,
            description: 'Лампа люминесцентная ЛД-20(18) Вт T8/G13, 6500 К',
            price: 30.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 13819
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 2197,
            description: 'Лампа люминесцентная ЛБ-40(36) Вт T8/G13, 4000 К',
            price: 40.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11599
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 13262,
            description: 'Лампа люминесцентная ЛД-40(36) Вт T8/G13, 6500 К',
            price: 40.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1116
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 697,
            description: 'Лампа люминесцентная OSRAM L58W/640',
            price: 71.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 79
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 6184,
            description: 'Лампа люминесцентная Philips TL-D 18W/33-640 G13',
            price: 42.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1102
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 702,
            description: 'Лампа люминесцентная Philips TL-D 18W/54-765 G13',
            price: 42.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 452
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 6183,
            description: 'Лампа люминесцентная Philips TL-D 36W/33-640 G13 ',
            price: 52.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 550
        },
        {
            folder: 'Линейные люминесцентные лампы',
            code: 703,
            description: 'Лампа люминесцентная Philips TL-D 36W/54-765 G13',
            price: 52.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 121
        },
        {
            folder: 'Светодиодные лампы',
            code: 18665,
            description: 'Лампа светодиодная 5Вт Е14 4000К свеча',
            price: 45.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Светодиодные лампы',
            code: 19605,
            description: 'Лампа светодиодная 7Вт E14 3000К свеча',
            price: 46.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 103
        },
        {
            folder: 'Светодиодные лампы',
            code: 22976,
            description: 'Лампа светодиодная 5Вт Е27 4000К',
            price: 46.41,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2191
        },
        {
            folder: 'Светодиодные лампы',
            code: 20682,
            description: 'Лампа светодиодная 7Вт Е14 4000К',
            price: 46.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 67
        },
        {
            folder: 'Светодиодные лампы',
            code: 19948,
            description: 'Лампа светодиодная 7Вт Е27 3000К',
            price: 46.24,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3910
        },
        {
            folder: 'Светодиодные лампы',
            code: 13225,
            description: 'Лампа светодиодная 7Вт Е27 4000К',
            price: 46.24,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4416
        },
        {
            folder: 'Светодиодные лампы',
            code: 19950,
            description: 'Лампа светодиодная 8Вт Е27 3000К',
            price: 47.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 148
        },
        {
            folder: 'Светодиодные лампы',
            code: 21529,
            description: 'Лампа светодиодная 8Вт Е27 4000К',
            price: 47.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 194
        },
        {
            folder: 'Светодиодные лампы',
            code: 19903,
            description: 'Лампа светодиодная 9Вт Е27 3000К',
            price: 48.36,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 861
        },
        {
            folder: 'Светодиодные лампы',
            code: 20685,
            description: 'Лампа светодиодная 9Вт Е27 4000К',
            price: 48.36,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 71
        },
        {
            folder: 'Светодиодные лампы',
            code: 22979,
            description: 'Лампа светодиодная 10Вт Е27 3000К',
            price: 49.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 169
        },
        {
            folder: 'Светодиодные лампы',
            code: 13158,
            description: 'Лампа светодиодная 10Вт Е27 4000К',
            price: 49.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 399
        },
        {
            folder: 'Светодиодные лампы',
            code: 19606,
            description: 'Лампа светодиодная 11Вт Е27 4000К',
            price: 52.16,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3277
        },
        {
            folder: 'Светодиодные лампы',
            code: 17864,
            description: 'Лампа светодиодная 12Вт Е27 3000К',
            price: 53.43,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 794
        },
        {
            folder: 'Светодиодные лампы',
            code: 18319,
            description: 'Лампа светодиодная 12Вт Е27 4000К',
            price: 53.43,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 101
        },
        {
            folder: 'Светодиодные лампы',
            code: 23562,
            description: 'Лампа светодиодная 15Вт Е27 4000К',
            price: 75.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 87
        },
        {
            folder: 'Светодиодные лампы',
            code: 22791,
            description: 'Лампа светодиодная 20Вт Е27 4000K ',
            price: 90.29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 330
        },
        {
            folder: 'Светодиодные лампы',
            code: 21608,
            description: 'Лампа светодиодная 30Вт Е27 6500K ',
            price: 223.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 36
        },
        {
            folder: 'Светодиодные лампы',
            code: 21991,
            description: 'Лампа светодиодная 40Вт Е27 6500K ',
            price: 317.3,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Светодиодные лампы',
            code: 16629,
            description: 'Лампа светодиодная 9Вт T8 G13 4000К (аналог ЛБ-20)',
            price: 83.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 939
        },
        {
            folder: 'Светодиодные лампы',
            code: 22599,
            description: 'Лампа светодиодная 9Вт T8 G13 6500K (аналог ЛД-20)',
            price: 83.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 182
        },
        {
            folder: 'Светодиодные лампы',
            code: 16630,
            description: 'Лампа светодиодная 18Вт T8 G13 4000К (аналог ЛБ-40)',
            price: 100.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1449
        },
        {
            folder: 'Светодиодные лампы',
            code: 21505,
            description: 'Лампа светодиодная 18Вт T8 G13 6500K (аналог ЛД-40)',
            price: 100.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1117
        },
        {
            folder: 'Лампы галогеновые',
            code: 8440,
            description: 'Лампа кварцевая галогеновая КГ-150 R7s L=78мм (Китай)',
            price: 25.65,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 93
        },
        {
            folder: 'Лампы галогеновые',
            code: 9731,
            description: 'Лампа кварцевая галогеновая КГ-300 R7s L=117мм (Китай)',
            price: 28.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Лампы галогеновые',
            code: 2391,
            description: 'Лампа кварцевая галогеновая КГ-500 R7s L=117мм (Китай)',
            price: 28.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Лампы галогеновые',
            code: 8439,
            description: 'Лампа кварцевая галогеновая КГ-1000 R7s L=189мм (Китай)',
            price: 40.02,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 474
        },
        {
            folder: 'Лампы галогеновые',
            code: 180,
            description: 'Лампа кварцевая галогеновая КГ-1000 R7s L=189мм (Россия)',
            price: 200.49,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 114
        },
        {
            folder: 'Лампы галогеновые',
            code: 3929,
            description: 'Лампа галогенная капсульная HCS CL 220V 40W G9',
            price: 25.18,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 87
        },
        {
            folder: 'Лампы газоразрядные',
            code: 714,
            description: 'Лампа ртутная ДРЛ-125 125Вт Е27',
            price: 96.74,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 486
        },
        {
            folder: 'Лампы газоразрядные',
            code: 715,
            description: 'Лампа ртутная ДРЛ-250 250Вт Е40',
            price: 138.78,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1539
        },
        {
            folder: 'Лампы газоразрядные',
            code: 716,
            description: 'Лампа ртутная ДРЛ-400 400Вт Е40',
            price: 182.02,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 66
        },
        {
            folder: 'Лампы газоразрядные',
            code: 12112,
            description: 'Лампа ртутная бездроссельная ДРВ-160 Е27',
            price: 104.15,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 118
        },
        {
            folder: 'Лампы газоразрядные',
            code: 1107,
            description: 'Лампа ртутная бездроссельная ДРВ-250 Е40',
            price: 181.84,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 134
        },
        {
            folder: 'Лампы газоразрядные',
            code: 4257,
            description: 'Лампа натриевая ДНаТ-150 250Вт Е40',
            price: 239.3,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 19
        },
        {
            folder: 'Лампы газоразрядные',
            code: 713,
            description: 'Лампа натриевая ДНаТ-250 250Вт Е40',
            price: 241.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Лампы газоразрядные',
            code: 6263,
            description: 'Лампа металлогалогеновая ДРИ-400 400Вт Е40',
            price: 426.16,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 70
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 795,
            description: 'Стартер S10 4-65Вт 220-240В Китай',
            price: 4.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4769
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 794,
            description: 'Стартер S2 4-22Вт 127-240В Китай',
            price: 4.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10931
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 699,
            description: '4008321166333 Стартер OSRAM ST-111 4-65W ',
            price: 14.95,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 980
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 700,
            description: '4008321364920 Стартер OSRAM ST-151 4-22W',
            price: 15.69,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 996
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 126,
            description: 'Стартер Philips S10 4-65W 220-240V',
            price: 18.48,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 420
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 127,
            description: 'Стартер Philips S2 4-22W 127-240V',
            price: 18.48,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1156
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 780,
            description: 'Дроссель для люминесцентных ламп АВТ 1И18/20 (для ЛБ-20/18)',
            price: 164.33,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 585
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 782,
            description: 'Дроссель для люминесцентных ламп АВТ 1И36/40 (для ЛБ-40/36)',
            price: 164.33,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2314
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 3735,
            description: 'Дроссель c патроном G23 для PL-11',
            price: 101.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 13308,
            description: 'ЭПРА 1х18 ',
            price: 112.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 13309,
            description: 'ЭПРА 1х36',
            price: 118.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 632
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 12444,
            description: 'ЭПРА 2х18',
            price: 140.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 410
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 12366,
            description: 'ЭПРА 2х36',
            price: 163.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 350
        },
        {
            folder: 'Пускорегулирующая аппаратура для люминесцентных ламп',
            code: 12445,
            description: 'ЭПРА 4х18 ',
            price: 210.64,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1809
        },
        {
            folder: 'Управление освещением',
            code: 12361,
            description: 'Датчик движения ДДП-03 1200Вт, 10-420с, 6м , 3+Лк, 120(сбоку)+360(сверху)гр IP33',
            price: 297.03,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Управление освещением',
            code: 16883,
            description: 'Фотореле ФРЛ-01 10Лк 6А',
            price: 124.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Управление освещением',
            code: 13207,
            description: 'Фотореле ФРЛ-02 5-50Лк 10А',
            price: 162.47,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 61
        },
        {
            folder: 'Управление освещением',
            code: 12703,
            description: 'Фотореле ФРЛ-03 5-50Лк 25А',
            price: 224.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Управление освещением',
            code: 14605,
            description: 'Фотореле ФРЛ-11 2-100Лк 20А DIN-рейка (с датчиком IP65)',
            price: 467.05,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Патроны',
            code: 863,
            description: 'Патрон Е27 подвесной карболитовый ',
            price: 13.25,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 30857
        },
        {
            folder: 'Патроны',
            code: 17066,
            description: 'Патрон Е27 потолочный карболитовый прямой ',
            price: 20.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 295
        },
        {
            folder: 'Патроны',
            code: 11060,
            description: 'Патрон Е27 настенный карболитовый',
            price: 20.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 42
        },
        {
            folder: 'Патроны',
            code: 17261,
            description: 'Патрон Е27 карболитовый с кольцом',
            price: 27.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 169
        },
        {
            folder: 'Патроны',
            code: 864,
            description: 'Патрон Е27 подвесной керамический ',
            price: 7.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2151
        },
        {
            folder: 'Патроны',
            code: 16702,
            description: 'Патрон Е27 подвесной пластиковый',
            price: 11.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Патроны',
            code: 6130,
            description: 'Патрон E14 керамический',
            price: 8.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 590
        },
        {
            folder: 'Патроны',
            code: 8894,
            description: 'Патрон Е14 подвесной карболитовый',
            price: 14.63,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 185
        },
        {
            folder: 'Патроны',
            code: 16701,
            description: 'Патрон E14 пластиковый с кольцом',
            price: 10.1,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 440
        },
        {
            folder: 'Патроны',
            code: 3555,
            description: 'Патрон подвесной керамический Е40',
            price: 36.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 53
        },
        {
            folder: 'Патроны',
            code: 16264,
            description: 'Патрон G23',
            price: 21.48,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 769
        },
        {
            folder: 'Светильники люминесцентные',
            code: 762,
            description: 'Светильник антивандальный ЛПБ-31-11-006 G23',
            price: 263.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светильники люминесцентные',
            code: 763,
            description: 'Светильник ЛПО 1х20(18)',
            price: 268.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светильники люминесцентные',
            code: 764,
            description: 'Светильник ЛПО 1х40(36)',
            price: 321.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 400
        },
        {
            folder: 'Светильники люминесцентные',
            code: 3422,
            description: 'Светильник ЛПО 2х20(18)',
            price: 338.04,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 391
        },
        {
            folder: 'Светильники люминесцентные',
            code: 765,
            description: 'Светильник ЛПО 2х40(36)',
            price: 478.91,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 335
        },
        {
            folder: 'Светильники люминесцентные',
            code: 767,
            description: 'Светильник ЛПО 2х40(36) с ЭПРА',
            price: 501.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 37
        },
        {
            folder: 'Светильники люминесцентные',
            code: 1002,
            description: 'Светильник ЛПО 418 накладной зеркальный',
            price: 963.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 42
        },
        {
            folder: 'Светильники люминесцентные',
            code: 922,
            description: 'Светильник ЛВО 418 встраиваемый зеркальный',
            price: 650.72,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 102
        },
        {
            folder: 'Светильники люминесцентные',
            code: 3899,
            description: 'Светильник ЛСП 2х36 IP65 с ЭПРА',
            price: 663.64,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Светильники люминесцентные',
            code: 776,
            description: 'Рассеиватель к ЛПО 1х20 (прямоугольное сечение)',
            price: 157.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светильники люминесцентные',
            code: 9946,
            description: 'Рассеиватель к ЛПО 1х40 (прямоугольное сечение)',
            price: 192.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светильники люминесцентные',
            code: 10903,
            description: 'Рассеиватель к ЛПО 2х20 (прямоугольное сечение)',
            price: 163.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Светильники люминесцентные',
            code: 11158,
            description: 'Рассеиватель к ЛПО 2х40 (прямоугольное сечение)',
            price: 211.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светильники подвесные',
            code: 1775,
            description: 'Арматура НСП 03-60 (НСП 01-60-001)',
            price: 39.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 410
        },
        {
            folder: 'Светильники подвесные',
            code: 2272,
            description: 'Светильник НСП 02-100-001 без решетки',
            price: 199.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 387
        },
        {
            folder: 'Светильники подвесные',
            code: 773,
            description: 'Светильник НСП 02-100-003 с решеткой',
            price: 220.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 295
        },
        {
            folder: 'Светильники настенно-потолочные',
            code: 769,
            description: 'Арматура светильника НББ-64-60 (основание прямое)',
            price: 19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 832
        },
        {
            folder: 'Светильники настенно-потолочные',
            code: 768,
            description: 'Арматура светильника НББ-64-60 (основание косое)',
            price: 19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 657
        },
        {
            folder: 'Светильники настенно-потолочные',
            code: 771,
            description: 'Рассеиватель НББ-64-60 (шар стеклянный)',
            price: 52.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 763
        },
        {
            folder: 'Светильники настенно-потолочные',
            code: 770,
            description: 'Рассеиватель НББ-64-60 (шар пластиковый)',
            price: 26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 713
        },
        {
            folder: 'Светильники настенно-потолочные',
            code: 7171,
            description: 'Светильник НПП 03-100 IP65',
            price: 149.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 151
        },
        {
            folder: 'Светильники светодиодные',
            code: 20917,
            description: 'Светодиодный светильник 6 Вт IP40 круглый (таблетка)',
            price: 224.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 39
        },
        {
            folder: 'Светильники светодиодные',
            code: 17292,
            description: 'Светильник светодиодный 8 Вт IP65 круглый',
            price: 190.35,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 322
        },
        {
            folder: 'Светильники светодиодные',
            code: 16972,
            description: 'Светильник светодиодный 12 Вт IP65 круглый',
            price: 255.15,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 126
        },
        {
            folder: 'Светильники светодиодные',
            code: 19792,
            description: 'Светильник светодиодный ДПБ 01-2х6-001 12 Вт',
            price: 364,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3712
        },
        {
            folder: 'Светильники светодиодные',
            code: 21189,
            description: 'Светильник СПО 60х1 под LED лампу T8 G13',
            price: 261.3,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Светильники светодиодные',
            code: 20158,
            description: 'Светильник СПО 60х2 под LED лампу T8 G13',
            price: 305.87,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Светильники светодиодные',
            code: 20157,
            description: 'Светильник СПО 120х1 под LED лампу T8 G13',
            price: 290.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 29
        },
        {
            folder: 'Светильники светодиодные',
            code: 20156,
            description: 'Светильник СПО 120х2 под LED лампу T8 G13',
            price: 356.57,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Светильники светодиодные',
            code: 14411,
            description: 'Светильник светодиодный 18 Вт 600 мм IP40 (аналог ЛПО)',
            price: 206.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 826
        },
        {
            folder: 'Светильники светодиодные',
            code: 20904,
            description: 'Светильник светодиодный 36 Вт 1200 мм IP40 (аналог ЛПО)',
            price: 353.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1479
        },
        {
            folder: 'Светильники светодиодные',
            code: 20459,
            description: 'Светильник светодиодный 18 Вт 600 мм IP65 (аналог ЛСП узкий)',
            price: 346.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Светильники светодиодные',
            code: 18916,
            description: 'Светильник светодиодный 36 Вт 1200 мм IP65 (аналог ЛСП узкий)',
            price: 540.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 27
        },
        {
            folder: 'Светильники светодиодные',
            code: 18915,
            description: 'Светильник светодиодный 36 Вт 1200 мм IP65 (аналог ЛСП широкий)',
            price: 920.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Светильники светодиодные',
            code: 7119,
            description: 'Светильник светодиодный 595х595 36Вт 4000К (для накладного и встраиваемого монтажа)',
            price: 460.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 414
        },
        {
            folder: 'Светильники светодиодные',
            code: 23128,
            description: 'Светильник светодиодный 595х595 36Вт 6500К (для накладного и встраиваемого монтажа)',
            price: 460.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1458
        },
        {
            folder: 'Светильники светодиодные',
            code: 25866,
            description: 'Светильник светодиодный уличный ДКУ29-40-501 40 Вт',
            price: 2102.65,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Светильники светодиодные',
            code: 25867,
            description: 'Светильник светодиодный уличный ДКУ29-80-501 80 Вт',
            price: 3764.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Прожектора светодиодные',
            code: 9781,
            description: 'Прожектор светодиодный 10W',
            price: 136.66,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 111
        },
        {
            folder: 'Прожектора светодиодные',
            code: 9782,
            description: 'Прожектор светодиодный 20W',
            price: 199.96,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 163
        },
        {
            folder: 'Прожектора светодиодные',
            code: 9808,
            description: 'Прожектор светодиодный 30W',
            price: 279.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 37
        },
        {
            folder: 'Прожектора светодиодные',
            code: 9783,
            description: 'Прожектор светодиодный 50W',
            price: 414.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 63
        },
        {
            folder: 'Прожектора светодиодные',
            code: 9784,
            description: 'Прожектор светодиодный 70W',
            price: 641.38,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Прожектора светодиодные',
            code: 21280,
            description: 'Прожектор светодиодный 100W',
            price: 899.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 27
        },
        {
            folder: 'Прожектора светодиодные',
            code: 20801,
            description: 'Прожектор светодиодный 150W',
            price: 1462.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Светодиодные фонари и аварийные указатели',
            code: 3041,
            description: 'Фонарь аккумуляторный ',
            price: 1031.25,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Светодиодные фонари и аварийные указатели',
            code: 1152,
            description: 'Фонарь светодиодный аккумуляторный налобный',
            price: 280,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 26
        },
        {
            folder: 'Светодиодные фонари и аварийные указатели',
            code: 6675,
            description: 'Светильник ССА 1001 ',
            price: 425.15,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 56
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 4070,
            description: 'Элемент питания Duracell MN 1500 ',
            price: 41.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 177
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 4071,
            description: 'Элемент питания Duracell MN 2400 ',
            price: 41.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 235
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 6996,
            description: 'Элемент питания LR03AAA ',
            price: 9.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 420
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 6995,
            description: 'Элемент питания LR6AA ',
            price: 11.86,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 401
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 622,
            description: 'Элемент питания R20 (D)',
            price: 62.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Элементы питания и аккумуляторы',
            code: 6997,
            description: 'Элемент питания ',
            price: 60.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 58
        },
        {
            folder: 'Коробки установочные (подрозетники)',
            code: 15456,
            description: 'Канал соединительный для установочных коробок ',
            price: 0.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1162
        },
        {
            folder: 'Коробки установочные (подрозетники)',
            code: 4319,
            description: 'Коробка 68х45 скрытой проводки (для бетонных стен)',
            price: 4.69,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1780
        },
        {
            folder: 'Коробки установочные (подрозетники)',
            code: 14601,
            description: 'Коробка 68х42 скрытой проводки (подрозетник стыковочный для бетонных стен)',
            price: 4.84,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1750
        },
        {
            folder: 'Коробки установочные (подрозетники)',
            code: 12516,
            description: 'Коробка 68х45 установочная для Г/К стен',
            price: 6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 288
        },
        {
            folder: 'Розетки и вилки',
            code: 2655,
            description: 'Розетка 1-я открытой проводки б/з',
            price: 30.04,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 167
        },
        {
            folder: 'Розетки и вилки',
            code: 2216,
            description: 'Розетка 2-я открытой проводки б/з',
            price: 46.36,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 25
        },
        {
            folder: 'Розетки и вилки',
            code: 870,
            description: 'Розетка 1-я открытой проводки с/з',
            price: 36.92,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 284
        },
        {
            folder: 'Розетки и вилки',
            code: 1757,
            description: 'Розетка 2-я открытой проводки с/з',
            price: 55.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 374
        },
        {
            folder: 'Розетки и вилки',
            code: 3492,
            description: 'Розетка 3-я открытой проводки с/з',
            price: 111.27,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 190
        },
        {
            folder: 'Розетки и вилки',
            code: 1756,
            description: 'Розетка 4-я открытой проводки с/з',
            price: 151.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 280
        },
        {
            folder: 'Розетки и вилки',
            code: 18388,
            description: 'Колодка удлинителя 2-я с заземлением',
            price: 66.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 54
        },
        {
            folder: 'Розетки и вилки',
            code: 17534,
            description: 'Колодка удлинителя 3-я с заземлением',
            price: 86.29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 74
        },
        {
            folder: 'Розетки и вилки',
            code: 18387,
            description: 'Колодка удлинителя 4-я с заземлением',
            price: 104.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 34
        },
        {
            folder: 'Розетки и вилки',
            code: 1164,
            description: 'Розетка 1-я открытой проводки с/з брызгозащищенная полугерметичная с крышкой',
            price: 68.38,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 55
        },
        {
            folder: 'Розетки и вилки',
            code: 872,
            description: 'Розетка 2-я открытой проводки с/з брызгозащищенная полугерметичная с крышкой',
            price: 130.35,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 383
        },
        {
            folder: 'Розетки и вилки',
            code: 13052,
            description: 'Розетка 1-я открытой проводки с заземлением IP54',
            price: 110.14,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 313
        },
        {
            folder: 'Розетки и вилки',
            code: 1907,
            description: 'Розетка 1-я скрытой проводки с/з',
            price: 48.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 907
        },
        {
            folder: 'Розетки и вилки',
            code: 873,
            description: 'Розетка 2-я скрытой проводки с/з',
            price: 60.14,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 154
        },
        {
            folder: 'Розетки и вилки',
            code: 14106,
            description: 'Розетка 1-я скрытой проводки с заземлением со шторками',
            price: 53.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 339
        },
        {
            folder: 'Розетки и вилки',
            code: 14107,
            description: 'Розетка 2-я скрытой проводки с заземлением со шторками',
            price: 74.18,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 58
        },
        {
            folder: 'Розетки и вилки',
            code: 3083,
            description: 'Вилка без заземления',
            price: 16.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 129
        },
        {
            folder: 'Розетки и вилки',
            code: 9652,
            description: 'Вилка евро угловая',
            price: 21.81,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 192
        },
        {
            folder: 'Розетки и вилки',
            code: 163,
            description: 'Вилка евро прямая',
            price: 26.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 348
        },
        {
            folder: 'Розетки и вилки',
            code: 17798,
            description: 'Вилка евро боковая с ушком белая',
            price: 29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 66
        },
        {
            folder: 'Розетки и вилки',
            code: 17229,
            description: 'Вилка евро боковая с ушком черная',
            price: 29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 35
        },
        {
            folder: 'Розетки и вилки',
            code: 853,
            description: '10027 Вилка MAKEL евро боковая белая',
            price: 38.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 197
        },
        {
            folder: 'Розетки и вилки',
            code: 854,
            description: '10002 Вилка MAKEL евро прямая белая',
            price: 42.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 96
        },
        {
            folder: 'Удлинители',
            code: 19252,
            description: 'Удлинитель на катушке 4х30м ПВС 3х1,5',
            price: 1632.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Удлинители',
            code: 18988,
            description: 'Удлинитель на катушке 4х30м ПВС 3х2,5',
            price: 2262,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Удлинители',
            code: 19253,
            description: 'Удлинитель на катушке 4х50м ПВС 3х1,5',
            price: 2328,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Удлинители',
            code: 19254,
            description: 'Удлинитель на катушке 4х50м ПВС 3х2,5',
            price: 2898.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Выключатели',
            code: 867,
            description: 'Выключатель 1-клавишный открытой проводки',
            price: 28.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 649
        },
        {
            folder: 'Выключатели',
            code: 868,
            description: 'Выключатель 2-клавишный открытой проводки',
            price: 32.1,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 413
        },
        {
            folder: 'Выключатели',
            code: 6956,
            description: 'Выключатель 1-клавишный открытой проводки проходной (переключатель)',
            price: 38.63,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Выключатели',
            code: 4789,
            description: 'Выключатель 1-клавишный открытой проводки с подсветкой',
            price: 33,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 13
        },
        {
            folder: 'Выключатели',
            code: 1225,
            description: 'Выключатель 1-клавишный открытой проводки IP44',
            price: 63.02,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 169
        },
        {
            folder: 'Выключатели',
            code: 5042,
            description: 'Выключатель 1-клавишный открытой проводки IP54',
            price: 103.5,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 157
        },
        {
            folder: 'Выключатели',
            code: 2564,
            description: 'Выключатель 1-клавишный скрытой проводки',
            price: 41.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 403
        },
        {
            folder: 'Выключатели',
            code: 2714,
            description: 'Выключатель 2-клавишный скрытой проводки',
            price: 24.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 829
        },
        {
            folder: 'Электроустановочные изделия из каучука',
            code: 9985,
            description: 'Колодка каучуковая переносная на 1 розетку 16A 2P+E IP44',
            price: 248.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Электроустановочные изделия из каучука',
            code: 7418,
            description: 'Колодка каучуковая на 1 розетку 16A 2P+E IP44',
            price: 108.24,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Электроустановочные изделия из каучука',
            code: 1254,
            description: 'Колодка каучуковая на 2 розетки 16A 2P+E IP44',
            price: 81.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Электроустановочные изделия из каучука',
            code: 869,
            description: 'Колодка каучуковая на 3 розетки IP44',
            price: 172.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 365
        },
        {
            folder: 'Электроустановочные изделия из каучука',
            code: 866,
            description: 'Вилка евро каучуковая',
            price: 45.4,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 461
        },
        {
            folder: 'Промышленные разъемы',
            code: 17171,
            description: 'Соединительный элемент РШ-ВШ 32А 3-х штырьковый 220В белый',
            price: 99.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 13
        },
        {
            folder: 'Промышленные разъемы',
            code: 9411,
            description: 'Вилка переносная 013 2Р+PE 16А 220В IP44',
            price: 90.78,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 17
        },
        {
            folder: 'Промышленные разъемы',
            code: 2495,
            description: 'Вилка переносная 014 3Р+PE 16А 380В IP44\n',
            price: 101.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 102
        },
        {
            folder: 'Промышленные разъемы',
            code: 9413,
            description: 'Вилка переносная 015 3Р+PE+N 16А 380В IP44\n',
            price: 121.96,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Промышленные разъемы',
            code: 3063,
            description: 'Вилка переносная 023 2Р+PE 32А 220В IP44',
            price: 140.84,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 36
        },
        {
            folder: 'Промышленные разъемы',
            code: 1563,
            description: 'Вилка переносная 024 3P+E 32А 380В IP44',
            price: 152.28,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21
        },
        {
            folder: 'Промышленные разъемы',
            code: 1731,
            description: 'Вилка переносная 025 3P+E+N 32А 380В IP44',
            price: 180.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 29
        },
        {
            folder: 'Промышленные разъемы',
            code: 9410,
            description: 'Розетка стационарная 113 2Р+PE 16А 380В IP44',
            price: 146.91,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Промышленные разъемы',
            code: 11132,
            description: 'Розетка стационарная 114 3Р+PE 16А 380В IP44',
            price: 156.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 47
        },
        {
            folder: 'Промышленные разъемы',
            code: 9412,
            description: 'Розетка стационарная 115 3P+E+N 16А 380В IP44',
            price: 166.92,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Промышленные разъемы',
            code: 16136,
            description: 'Розетка стационарная 123 2Р+PE 32А 220В IP44',
            price: 186.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 47
        },
        {
            folder: 'Промышленные разъемы',
            code: 1564,
            description: 'Розетка стационарная 124 3Р+PE 32А 380В IP44',
            price: 200.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Промышленные разъемы',
            code: 5066,
            description: 'Розетка стационарная 125 32А 3Р+N+E 380В IР44',
            price: 214.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 32
        },
        {
            folder: 'Промышленные разъемы',
            code: 3329,
            description: 'Розетка переносная 213 2P+E 16А 220В IP44',
            price: 110.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Промышленные разъемы',
            code: 2494,
            description: 'Розетка переносная 214 3Р+PE 16А 380B IP44',
            price: 120.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Промышленные разъемы',
            code: 1838,
            description: 'Розетка переносная 224 3P+E 32А 380В IP44',
            price: 166.04,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 48
        },
        {
            folder: 'Промышленные разъемы',
            code: 1732,
            description: 'Розетка переносная 225 3P+E+N 32А 380В IP44',
            price: 204.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 117
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 2219,
            description: 'Кабель АВВГ 2х2,5',
            price: 6.94,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2425
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 1182,
            description: 'Провод АППВ 2х2,5',
            price: 6.55,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5035
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 2267,
            description: 'Провод АПВ 2,5',
            price: 2.78,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3450
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 2848,
            description: 'Провод АПВ 4',
            price: 4.07,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1645
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 1938,
            description: 'Провод АПВ 6',
            price: 5.61,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 610
        },
        {
            folder: 'Провода и кабели с алюминиевой жилой',
            code: 1022,
            description: 'Провод АПВ 10',
            price: 9.24,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 190
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 7165,
            description: 'Кабель ВВГнг 3x6 плоский',
            price: 88.78,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2335
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 4317,
            description: 'Кабель ВВГнг-LS 2х1,5 плоский',
            price: 18.45,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 158
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8310,
            description: 'Кабель ВВГнг-LS 2х2,5 плоский',
            price: 28.83,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 163
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 641,
            description: 'Кабель ВВГнг-LS 3х1,5 плоский',
            price: 28.61,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5131
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 642,
            description: 'Кабель ВВГнг-LS 3х2,5 плоский',
            price: 44.98,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2982
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 1004,
            description: 'Кабель ВВГнг-LS 3x4 плоский',
            price: 65.59,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8897,
            description: 'Кабель ВВГнг-LS 3x6 плоский',
            price: 95.14,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 95
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8945,
            description: 'Кабель ВВГнг-LS 3x10',
            price: 168.87,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 250
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8202,
            description: 'Кабель ВВГнг-LS 4х1,5',
            price: 35.26,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 366
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 1168,
            description: 'Кабель ВВГнг-LS 4х2,5',
            price: 55.57,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 176
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 2121,
            description: 'Кабель ВВГнг-LS 4х4',
            price: 87.26,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 130
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 1864,
            description: 'Кабель ВВГнг-LS 4х6',
            price: 127.1,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 565
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 13911,
            description: 'Кабель ВВГнг-LS 4х10',
            price: 198.27,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 886
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 3841,
            description: 'Кабель ВВГнг-LS 5х1,5',
            price: 44.34,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 1636,
            description: 'Кабель ВВГнг-LS 5х2,5',
            price: 68.49,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 659
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 644,
            description: 'Кабель ВВГнг-LS 5х4',
            price: 107.43,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 330
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 160,
            description: 'Кабель ВВГнг-LS 5х6',
            price: 156.9,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 738
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 159,
            description: 'Кабель ВВГнг-LS 5х10',
            price: 259.45,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 400
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 643,
            description: 'Кабель ВВГнг-LS 5х16',
            price: 399.47,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1020
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 161,
            description: 'Кабель ВВГнг-LS 5х25',
            price: 642.42,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 130
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 10923,
            description: 'Кабель ВВГнг-FRLS 3х1,5',
            price: 40.19,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6556
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8203,
            description: 'Кабель ВВГнг-FRLS 3х2,5',
            price: 58.13,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7701
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 8322,
            description: 'Кабель ВВГнг-FRLS 5х4',
            price: 146.22,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 600
        },
        {
            folder: 'Кабели ВВГнг, ВВГнг-LS и -FRLS',
            code: 2854,
            description: 'Кабель ВВГнг-FRLS 5х6',
            price: 197.55,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 505
        },
        {
            folder: 'Кабель КГ',
            code: 647,
            description: 'Кабель КГ 3х1,5',
            price: 32.03,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 400
        },
        {
            folder: 'Кабель КГ',
            code: 648,
            description: 'Кабель КГ 3х2,5',
            price: 49.19,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 980
        },
        {
            folder: 'Кабель КГ',
            code: 1560,
            description: 'Кабель КГ 4х2,5',
            price: 62.89,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 115
        },
        {
            folder: 'Кабель КГ',
            code: 649,
            description: 'Кабель КГ 4х4',
            price: 97.51,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 400
        },
        {
            folder: 'Кабель КГ',
            code: 1102,
            description: 'Кабель КГ 4х6',
            price: 143.64,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 240
        },
        {
            folder: 'Кабель КГ',
            code: 3317,
            description: 'Кабель КГ 4х10',
            price: 242.51,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 140
        },
        {
            folder: 'Кабель NYM',
            code: 1005,
            description: 'Кабель NYM 3х1,5',
            price: 30.95,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1318
        },
        {
            folder: 'Кабель NYM',
            code: 626,
            description: 'Кабель NYM 3х2,5',
            price: 47.34,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 800
        },
        {
            folder: 'Кабель NYM',
            code: 1384,
            description: 'Кабель NYM 3х4',
            price: 72.57,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 7019,
            description: 'Провод ПВ-3 0,75',
            price: 4.97,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 670
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 7225,
            description: 'Провод ПВ-3 1,5',
            price: 7.85,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 453
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 2342,
            description: 'Провод ПВ-3 2,5',
            price: 12.81,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 355
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 1228,
            description: 'Провод ПВ-3 4',
            price: 20.39,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 17
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 669,
            description: 'Провод ПВ-3 6 ',
            price: 30.17,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 124
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 1436,
            description: 'Провод ПВ-3 10',
            price: 51.31,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 588
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 663,
            description: 'Провод ПВ-3 16',
            price: 81.92,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 505
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 12991,
            description: 'Провод ПВ-3 25',
            price: 124.93,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 599
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 4377,
            description: 'Провод ПВ-3 35',
            price: 184.49,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 294
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 5366,
            description: 'Провод ПВ-3 50',
            price: 276.41,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 1559,
            description: 'Провод ПВ-3 70',
            price: 385.98,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 92
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 3997,
            description: 'Провод ПВ-1 1,5',
            price: 7.69,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 2455,
            description: 'Провод ПВ-1 2,5',
            price: 12.32,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 462
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 657,
            description: 'Провод ПВ-1 4',
            price: 20.54,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1339
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 5693,
            description: 'Провод ПВ-1 6',
            price: 30.43,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1185
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 1244,
            description: 'Провод ПВ-1 10',
            price: 51.09,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 540
        },
        {
            folder: 'Провода ПВ-3 (ПуГВ) и ПВ-1 (ПуВ)',
            code: 1642,
            description: 'Провод ПВ-1 16',
            price: 82.19,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 310
        },
        {
            folder: 'Провод ПВС',
            code: 1063,
            description: 'Провод ПВС 2х0,75',
            price: 12.18,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 350
        },
        {
            folder: 'Провод ПВС',
            code: 3203,
            description: 'Провод ПВС 2х1,5',
            price: 19.61,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2650
        },
        {
            folder: 'Провод ПВС',
            code: 674,
            description: 'Провод ПВС 2х2,5',
            price: 30.82,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 584
        },
        {
            folder: 'Провод ПВС',
            code: 228,
            description: 'Провод ПВС 3х0,75',
            price: 16.11,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 255
        },
        {
            folder: 'Провод ПВС',
            code: 229,
            description: 'Провод ПВС 3х1,5',
            price: 26.96,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3545
        },
        {
            folder: 'Провод ПВС',
            code: 230,
            description: 'Провод ПВС 3х2,5',
            price: 43.23,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5277
        },
        {
            folder: 'Провод ПВС',
            code: 2458,
            description: 'Провод ПВС 3х4',
            price: 67.01,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 675
        },
        {
            folder: 'Провод ПВС',
            code: 231,
            description: 'Провод ПВС 4х1,5',
            price: 34.68,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 361
        },
        {
            folder: 'Провод ПВС',
            code: 232,
            description: 'Провод ПВС 4х2,5',
            price: 55.69,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 860
        },
        {
            folder: 'Провод ПВС',
            code: 233,
            description: 'Провод ПВС 4х4',
            price: 92.04,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Провод ПВС',
            code: 234,
            description: 'Провод ПВС 4х6',
            price: 141.68,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 280
        },
        {
            folder: 'Провод ПВС',
            code: 2179,
            description: 'Провод ПВС 4х10',
            price: 237.26,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Провод ПВС',
            code: 3044,
            description: 'Провод ПВС 5х2,5',
            price: 77.17,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 410
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 677,
            description: 'Провод ШВВП 2х0,75',
            price: 9.23,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 945
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 3129,
            description: 'Провод ПУгНП 2х1,5',
            price: 15.88,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2070
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 4321,
            description: 'Провод ПУгНП 2х2,5',
            price: 24.56,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 811
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 21431,
            description: 'Провод ШВВП 3х0,75',
            price: 13.48,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 2801,
            description: 'Провод ПУгНП 3х1,5',
            price: 23.39,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1945
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 1549,
            description: 'Провод ПУгНП 3х2,5',
            price: 36.42,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 220
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 675,
            description: 'Провод ПУНП 2х1,5',
            price: 15.35,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 570
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 676,
            description: 'Провод ПУНП 2х2,5',
            price: 23.8,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 2196,
            description: 'Провод ПУНП 3х1,5 ',
            price: 22.64,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Провода ПУНП, ПУгНП и ШВВП',
            code: 1053,
            description: 'Провод ПУНП 3х2,5',
            price: 35.34,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 320
        },
        {
            folder: 'Провода и кабели связи',
            code: 16106,
            description: 'Кабель коаксиальный RG-6 (телевизионный)',
            price: 7.92,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 109
        },
        {
            folder: 'Провода и кабели связи',
            code: 974,
            description: 'Кабель информационный UTP 4х2х0,52 Категория 5 (Интернет)',
            price: 7.1,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2866
        },
        {
            folder: 'Трубы для электропроводки',
            code: 298,
            description: 'Труба гофрированная ПВХ d16мм (100м)',
            price: 3.38,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2200
        },
        {
            folder: 'Трубы для электропроводки',
            code: 300,
            description: 'Труба гофрированная ПВХ d20мм (100м)',
            price: 4.47,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3850
        },
        {
            folder: 'Трубы для электропроводки',
            code: 2905,
            description: 'Труба гофрированная ПВХ d25мм (50м)',
            price: 7.02,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1000
        },
        {
            folder: 'Трубы для электропроводки',
            code: 1231,
            description: 'Труба гофрированная ПВХ d32мм (50м)',
            price: 10.3,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 600
        },
        {
            folder: 'Трубы для электропроводки',
            code: 2017,
            description: 'Труба гофрированная ПВХ d40мм (20м)',
            price: 15.65,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 250
        },
        {
            folder: 'Трубы для электропроводки',
            code: 3388,
            description: 'Труба гофрированная ПВХ d50мм (20м)',
            price: 18.04,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 135
        },
        {
            folder: 'Трубы для электропроводки',
            code: 3463,
            description: 'Труба гофрированная ПНД d16мм (100м)',
            price: 6.19,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1600
        },
        {
            folder: 'Трубы для электропроводки',
            code: 301,
            description: 'Труба гофрированная ПНД d20мм (100м)',
            price: 8.68,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3500
        },
        {
            folder: 'Трубы для электропроводки',
            code: 11977,
            description: 'Труба гофрированная ПНД d25мм (100м)',
            price: 11.84,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 600
        },
        {
            folder: 'Трубы для электропроводки',
            code: 15859,
            description: 'Труба гофрированная ПНД d32мм (100м)',
            price: 19.6,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 650
        },
        {
            folder: 'Трубы для электропроводки',
            code: 299,
            description: 'Труба жесткая гладкая ПВХ d16мм (3м)',
            price: 6.98,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1322
        },
        {
            folder: 'Трубы для электропроводки',
            code: 317,
            description: 'Труба жесткая гладкая ПВХ d20мм (3м)',
            price: 9.22,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 885
        },
        {
            folder: 'Трубы для электропроводки',
            code: 10020,
            description: 'Труба жесткая гладкая ПВХ d25мм (3м)',
            price: 12.16,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 150
        },
        {
            folder: 'Трубы для электропроводки',
            code: 4786,
            description: 'Труба жесткая гладкая ПВХ d32мм (3м)',
            price: 29.34,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Трубы для электропроводки',
            code: 4105,
            description: 'Труба жесткая гладкая ПВХ d40мм (3м)',
            price: 26.46,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 174
        },
        {
            folder: 'Трубы для электропроводки',
            code: 12261,
            description: 'Труба жесткая гладкая ПВХ d50мм (3м)',
            price: 34.02,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Металлорукав',
            code: 3276,
            description: 'Металлорукав 12 РЗ-ЦХ',
            price: 18.52,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Металлорукав',
            code: 256,
            description: 'Металлорукав 15 РЗ-ЦХ',
            price: 21.47,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Металлорукав',
            code: 257,
            description: 'Металлорукав 20 РЗ-ЦХ',
            price: 29.66,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Металлорукав',
            code: 1876,
            description: 'Металлорукав 25 РЗ-ЦХ',
            price: 41.18,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 184,
            description: 'Клипса 16 для трубы',
            price: 0.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5506
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 185,
            description: 'Клипса 20 для трубы',
            price: 0.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14505
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 1088,
            description: 'Клипса 25 для трубы',
            price: 0.85,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1595
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 1235,
            description: 'Клипса 32 для трубы',
            price: 1.5,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 327
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 4530,
            description: 'Клипса 40 для трубы',
            price: 2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 550
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 3389,
            description: 'Клипса 50 для трубы',
            price: 5.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 170
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 2664,
            description: 'Клипса 16 для трубы черная',
            price: 0.81,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 950
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 16999,
            description: 'Клипса 20 для трубы черная',
            price: 0.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1550
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 17000,
            description: 'Клипса 25 для трубы черная',
            price: 1.1,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 18110,
            description: 'Угол 20 соединительный 90 градусов ПВХ ',
            price: 5.38,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1010
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 2665,
            description: 'Муфта 16 соединительная ПВХ',
            price: 2.16,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1145
        },
        {
            folder: 'Клипсы для труб ПВХ и ПНД',
            code: 3312,
            description: 'Муфта 20 соединительная ПВХ',
            price: 2.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 3130,
            description: 'Кабель-канал ПВХ 12х12',
            price: 5.89,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 550
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 2808,
            description: 'Кабель-канал ПВХ 15х10',
            price: 7.92,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 828,
            description: 'Кабель-канал ПВХ 16х16',
            price: 7.62,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 1057,
            description: 'Кабель-канал ПВХ 20х10',
            price: 10.21,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 560
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 3132,
            description: 'Кабель-канал ПВХ 25х16',
            price: 12.52,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3358
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 829,
            description: 'Кабель-канал ПВХ 25х25',
            price: 16.87,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 830,
            description: 'Кабель-канал ПВХ 40х16',
            price: 18.52,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 440
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 2312,
            description: 'Кабель-канал ПВХ 40х25',
            price: 23.56,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 278
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 831,
            description: 'Кабель-канал ПВХ 40х40',
            price: 31.31,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 844
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 1820,
            description: 'Кабель-канал ПВХ 60х40',
            price: 45.55,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2114
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 832,
            description: 'Кабель-канал ПВХ 60х60',
            price: 60.9,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 176
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 4141,
            description: 'Кабель-канал ПВХ 80х40',
            price: 66.58,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 156
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 833,
            description: 'Кабель-канал ПВХ 80х60',
            price: 80.42,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 144
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 3258,
            description: 'Кабель-канал ПВХ 100х40',
            price: 81.92,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Кабельные каналы (короба)',
            code: 827,
            description: 'Кабель-канал ПВХ 100х60',
            price: 98.34,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Коробки распределительные (распаячные)',
            code: 837,
            description: 'Коробка распределительная 70х70х40 открытой установки IP54',
            price: 16.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 399
        },
        {
            folder: 'Коробки распределительные (распаячные)',
            code: 12878,
            description: 'Коробка распределительная 80х80х50 открытой установки IP54',
            price: 20.43,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 125
        },
        {
            folder: 'Коробки распределительные (распаячные)',
            code: 835,
            description: 'Коробка распределительная 100х100х50 открытой установки IP54',
            price: 30.51,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 649
        },
        {
            folder: 'Коробки распределительные (распаячные)',
            code: 187,
            description: 'Коробка распределительная 150х110х70 открытой установки IP55',
            price: 76.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 22
        },
        {
            folder: 'Сжимы ответвительные',
            code: 848,
            description: 'Сжим ответвительный У-731',
            price: 17.45,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 760
        },
        {
            folder: 'Сжимы ответвительные',
            code: 1227,
            description: 'Сжим ответвительный У-733',
            price: 17.45,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1577
        },
        {
            folder: 'Сжимы ответвительные',
            code: 2266,
            description: 'Сжим ответвительный У-734',
            price: 17.45,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 594
        },
        {
            folder: 'Сжимы ответвительные',
            code: 9392,
            description: 'Сжим ответвительный У-739',
            price: 16.97,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Сжимы ответвительные',
            code: 1047,
            description: 'Сжим ответвительный У-859',
            price: 63.16,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 372
        },
        {
            folder: 'Сжимы ответвительные',
            code: 2806,
            description: 'Сжим ответвительный У-871',
            price: 159.29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 162
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 5843,
            description: 'Провод СИП-4 2х16',
            price: 28.36,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2140
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 7054,
            description: 'Провод СИП-4 4х16',
            price: 56.29,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5788
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 17271,
            description: 'Зажим анкерный ЗАБ 16-25 М',
            price: 49.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 197
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 17307,
            description: 'Зажим анкерный клиновой ЗАК 50-70/1500',
            price: 240.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 105
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 18525,
            description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 16-95/1,5-10',
            price: 68.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 516
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 17062,
            description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 16-95/2,5-35',
            price: 96.65,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 348
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 19548,
            description: 'Зажим герметичный ответвительный прокалывающий ЗГОП 25-150/25-95',
            price: 123.85,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 18
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 20263,
            description: 'Кронштейн анкерный КАМ-1500',
            price: 151.64,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 118
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 9253,
            description: 'Комплект промежуточной подвески КОПП-1500',
            price: 243.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 21241,
            description: 'Лента бандажная ЛМ-50',
            price: 1575,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Провода СИП и арматура к ним',
            code: 17622,
            description: 'Скрепа-бугель усиленная СУ-20 (100 шт/уп)',
            price: 971.48,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Клеммники WAGO',
            code: 5152,
            description: '222-412 WAGO Клеммник 2х(0,08-2,5) для медных многожильных проводов',
            price: 15.23,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 112
        },
        {
            folder: 'Клеммники WAGO',
            code: 1012,
            description: '222-413 WAGO Клеммник 3х(0,08-2,5) для медных многожильных проводов',
            price: 18.97,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 830
        },
        {
            folder: 'Клеммники WAGO',
            code: 1013,
            description: '222-415 WAGO Клеммник 5х(0,08-2,5) для медных многожильных проводов',
            price: 30.44,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 151
        },
        {
            folder: 'Клеммники WAGO',
            code: 17636,
            description: '2273-202 WAGO Клеммник 2х(0,5-2,5) без наполнителя',
            price: 5.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 460
        },
        {
            folder: 'Клеммники WAGO',
            code: 12407,
            description: '2273-203 WAGO Клеммник 3х(0,5-2,5) без наполнителя',
            price: 6.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 900
        },
        {
            folder: 'Клеммники WAGO',
            code: 9799,
            description: '2273-204 WAGO Клеммник 4х(0,5-2,5) без наполнителя',
            price: 7.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1108
        },
        {
            folder: 'Клеммники WAGO',
            code: 9802,
            description: '2273-205 WAGO Клеммник 5х(0,5-2,5) без наполнителя',
            price: 8.38,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 180
        },
        {
            folder: 'Клеммники из PRC',
            code: 9991,
            description: 'СК-412 Клеммник 2х(0,08-2,5) для медных многожильных проводов',
            price: 8.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7576
        },
        {
            folder: 'Клеммники из PRC',
            code: 9992,
            description: 'СК-413 Клеммник 3х(0,08-2,5) для медных многожильных проводов',
            price: 11.4,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4351
        },
        {
            folder: 'Клеммники из PRC',
            code: 9993,
            description: 'СК-415 Клеммник 5х(0,08-2,5) для медных многожильных проводов',
            price: 32.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1899
        },
        {
            folder: 'Клеммники из PRC',
            code: 16622,
            description: '2273-232 Клеммник 2х(0,5-2,5) для распределительных коробок',
            price: 3.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 444
        },
        {
            folder: 'Клеммники из PRC',
            code: 16623,
            description: '2273-233 Клеммник 3х(0,5-2,5) с наполнителем',
            price: 4.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 308
        },
        {
            folder: 'Клеммники из PRC',
            code: 16620,
            description: '2273-244 Клеммник 4х(0,5-2,5) с наполнителем',
            price: 4.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11613
        },
        {
            folder: 'Клеммники из PRC',
            code: 16624,
            description: '2273-235 Клеммник 5х(0,5-2,5) с наполнителем',
            price: 6.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 150
        },
        {
            folder: 'Клеммники из PRC',
            code: 16621,
            description: '2273-246 Клеммник 6х(0,5-2,5) с наполнителем',
            price: 6.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 935
        },
        {
            folder: 'Клеммники из PRC',
            code: 16625,
            description: '2273-248 Клеммник 8х(0,5-2,5) с наполнителем',
            price: 8.96,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 92
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 6554,
            description: 'Зажим винтовой ЗВИ-3     4 кв.мм 12пар',
            price: 16.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 300
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 1628,
            description: 'Зажим винтовой ЗВИ-5     6 кв.мм 12пар',
            price: 17.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 200
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 14396,
            description: 'Зажим винтовой ЗВИ-10 10 кв.мм 12пар',
            price: 29.02,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 65
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 11602,
            description: 'Зажим винтовой ЗВИ-15 12 кв.мм 12пар',
            price: 31.22,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 321
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 1629,
            description: 'Зажим винтовой ЗВИ-20 14 кв.мм 12пар',
            price: 35.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 235
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 2715,
            description: 'Зажим винтовой ЗВИ-30 16 кв.мм 12пар',
            price: 49.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 110
        },
        {
            folder: 'Зажимы винтовые ЗВИ (клеммные колодки)',
            code: 825,
            description: 'Зажим винтовой ЗВИ-60 25 кв.мм 12пар',
            price: 77.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 2708,
            description: 'Наконечник кабельный ТА-16 алюминиевый под опрессовку',
            price: 5.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 55
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 4712,
            description: 'Наконечник кабельный ТА-25 алюминиевый под опрессовку',
            price: 8.63,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 88
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 13209,
            description: 'Наконечник кабельный ТА-35 алюминиевый под опрессовку',
            price: 9.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 13210,
            description: 'Наконечник кабельный ТА-50 алюминиевый под опрессовку',
            price: 11.78,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 116
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 17629,
            description: 'Наконечник кабельный ТА-70 алюминиевый под опрессовку',
            price: 15.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 27
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 888,
            description: 'Наконечник кабельный ТА-95 алюминиевый под опрессовку',
            price: 17.69,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 39
        },
        {
            folder: 'Наконечники алюминиевые под опрессовку',
            code: 13211,
            description: 'Наконечник кабельный ТА-120 алюминиевый под опрессовку',
            price: 24.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 69
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 17044,
            description: 'Наконечник кабельный ТМЛ-2,5 медный луженый под опрессовку',
            price: 4.09,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1280
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 4513,
            description: 'Наконечник кабельный ТМЛ-4 медный луженый под опрессовку',
            price: 4.42,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 657
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 3438,
            description: 'Наконечник кабельный ТМЛ-6 медный луженый под опрессовку',
            price: 4.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4174
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 1086,
            description: 'Наконечник кабельный ТМЛ-10 медный луженый под опрессовку',
            price: 9.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1589
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 843,
            description: 'Наконечник кабельный ТМЛ-16 медный луженый под опрессовку',
            price: 10.65,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1558
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 844,
            description: 'Наконечник кабельный ТМЛ-25 медный луженый под опрессовку',
            price: 15.15,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 929
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 845,
            description: 'Наконечник кабельный ТМЛ-35 медный луженый под опрессовку',
            price: 19.8,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 349
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 846,
            description: 'Наконечник кабельный ТМЛ-50 медный луженый под опрессовку',
            price: 26.85,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 363
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 12325,
            description: 'Наконечник кабельный ТМЛ-70 медный луженый под опрессовку',
            price: 34.35,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 326
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 12326,
            description: 'Наконечник кабельный ТМЛ-95 медный луженый под опрессовку',
            price: 60.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 88
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 13214,
            description: 'Наконечник кабельный ТМЛ-120 медный луженый под опрессовку',
            price: 83.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 66
        },
        {
            folder: 'Наконечники медные луженые под опрессовку',
            code: 1085,
            description: 'Наконечник кабельный ТМЛ-150 медный луженый под опрессовку',
            price: 119.18,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 47
        },
        {
            folder: 'Гильзы медные луженые',
            code: 20638,
            description: 'Гильза медная луженая ГМЛ 4-3',
            price: 5.22,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 98
        },
        {
            folder: 'Гильзы медные луженые',
            code: 3405,
            description: 'Гильза медная луженая ГМЛ 6-4 ',
            price: 6.03,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 131
        },
        {
            folder: 'Гильзы медные луженые',
            code: 3404,
            description: 'Гильза медная луженая ГМЛ 10-5',
            price: 10.1,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 194
        },
        {
            folder: 'Гильзы медные луженые',
            code: 3403,
            description: 'Гильза медная луженая ГМЛ 16-6',
            price: 11.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 270
        },
        {
            folder: 'Гильзы медные луженые',
            code: 3402,
            description: 'Гильза медная луженая ГМЛ 25-8',
            price: 18.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 92
        },
        {
            folder: 'Гильзы медные луженые',
            code: 3401,
            description: 'Гильза медная луженая ГМЛ 35-9',
            price: 26.29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 84
        },
        {
            folder: 'Гильзы медные луженые',
            code: 7824,
            description: 'Гильза медная луженая ГМЛ 50-11',
            price: 31.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 95
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 2647,
            description: 'Наконечник штыревой НШвИ 0,5-8 изолированный упаковка 100шт',
            price: 22.14,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 24
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 4745,
            description: 'Наконечник штыревой НШвИ 0,75-8 изолированный упаковка 100шт',
            price: 23.25,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 6435,
            description: 'Наконечник штыревой НШвИ 1,0-8 изолированный упаковка 100шт',
            price: 25.3,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 2737,
            description: 'Наконечник штыревой НШвИ 1,5-8 изолированный упаковка 100шт',
            price: 28.89,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 1617,
            description: 'Наконечник штыревой НШвИ 2,5-8 изолированный упаковка 100шт',
            price: 37.38,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 39
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 3988,
            description: 'Наконечник штыревой НШвИ 4-10 изолированный упаковка 100шт',
            price: 55.27,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 1619,
            description: 'Наконечник штыревой НШвИ 6-12 изолированный упаковка 100шт',
            price: 74.3,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 3399,
            description: 'Наконечник штыревой НШвИ 10-12 изолированный упаковка 100шт',
            price: 100.5,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 1800,
            description: 'Наконечник штыревой НШвИ 16-12 изолированный упаковка 100шт',
            price: 131.28,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Наконечники НШвИ (штыревые)',
            code: 1799,
            description: 'Наконечник штыревой НШвИ 25-16 изолированный упаковка 100шт',
            price: 233.75,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Шкафы пустые',
            code: 12006,
            description: 'Корпус металлический ЩМП-04-2 400х300х220 IP31',
            price: 741.23,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Шкафы пустые',
            code: 9326,
            description: 'Корпус металлический ЩМП-06-2 500х400х220 IP54',
            price: 1464.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Шкафы пустые',
            code: 9475,
            description: 'Корпус металлический ЩМП-08    650х500х220 IP54',
            price: 1411.65,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Шкафы пустые',
            code: 6480,
            description: 'Корпус металлический ЩМП-09   800х600х250 IP54',
            price: 2840.09,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 17
        },
        {
            folder: 'Шкафы пустые',
            code: 5487,
            description: 'Щит навесной ЩРН-12 IP31',
            price: 618.34,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Шкафы пустые',
            code: 3485,
            description: 'Щит навесной ЩРН-12 IP54',
            price: 1182.36,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Шкафы пустые',
            code: 5488,
            description: 'Щит навесной ЩРН-18 IP31',
            price: 781.43,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Шкафы пустые',
            code: 11575,
            description: 'Щит навесной ЩРН-24 IР31',
            price: 781.43,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Шкафы пустые',
            code: 1070,
            description: 'Щит навесной ЩРН-24 IР54',
            price: 1318.97,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Шкафы пустые',
            code: 18743,
            description: 'Щит навесной ЩРН-36 IР31',
            price: 1032.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Шкафы пустые',
            code: 15827,
            description: 'Щит учета электроэнергии ЩУ-1ф/1-1-6 310х300х150 2 двери IP66',
            price: 1314.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 36
        },
        {
            folder: 'Шкафы пустые',
            code: 15678,
            description: 'Щит учета электроэнергии ЩУ-3ф/1-1-6 445х400х150 2 двери IP66',
            price: 1885.69,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21
        },
        {
            folder: 'Шкафы пустые',
            code: 17329,
            description: 'Щит учета электроэнергии ЩУ-3ф/1-0-3 310х300х150 1 дверь IP66',
            price: 1574.51,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 18
        },
        {
            folder: 'Шкафы пустые',
            code: 4881,
            description: 'Бокс КМПн 1/2 для наружной установки 1р/2мод.',
            price: 14.44,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 46
        },
        {
            folder: 'Шкафы пустые',
            code: 17048,
            description: 'Бокс КМПн 1/2 для наружной установки 1р/2мод. с крышкой',
            price: 86.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 19
        },
        {
            folder: 'Шкафы пустые',
            code: 12589,
            description: 'Бокс КМПн 1/4 для наружной установки 2/4мод.',
            price: 19.81,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 17
        },
        {
            folder: 'Шкафы пустые',
            code: 17050,
            description: 'Бокс КМПн 1/4 для наружной установки 2/4мод. с крышкой',
            price: 108.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Шкафы пустые',
            code: 2659,
            description: 'Бокс ЩРН-П-4 модуля пластик IP40',
            price: 166.02,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21
        },
        {
            folder: 'Шкафы пустые',
            code: 6450,
            description: 'Бокс ЩРН-П-6 модулей пластик IP40',
            price: 205.06,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Шкафы пустые',
            code: 9836,
            description: 'Бокс ЩРН-П-8 модулей пластик IP40',
            price: 251.5,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 19
        },
        {
            folder: 'Шкафы пустые',
            code: 9986,
            description: 'Бокс ЩРН-П-10 модулей пластик IP40',
            price: 302.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Шкафы пустые',
            code: 815,
            description: 'Бокс ЩРН-П-12 модулей пластик IP40',
            price: 316.72,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 18
        },
        {
            folder: 'Шкафы пустые',
            code: 1435,
            description: 'Бокс ЩРН-П-18 модулей пластик IP40',
            price: 495.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 34
        },
        {
            folder: 'Шкафы пустые',
            code: 816,
            description: 'Бокс ЩРН-П-24 модуля пластик IP40',
            price: 934.18,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Шкафы пустые',
            code: 817,
            description: 'Бокс ЩРН-П-36 модуля пластик IP40',
            price: 1141.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Шкафы пустые',
            code: 17093,
            description: 'Бокс ЩРН-П-12 модулей пластик IP40 сосна',
            price: 420.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Шкафы пустые',
            code: 17095,
            description: 'Бокс ЩРН-П-24 модуля пластик IP40 сосна',
            price: 1040.04,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Шкафы пустые',
            code: 12377,
            description: 'Бокс ЩРН-П-8 модулей пластик IP65',
            price: 425.25,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 55
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 17557,
            description: 'DIN-рейка L=7,5см',
            price: 4.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 4195,
            description: 'DIN-рейка L=30см',
            price: 14.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 207
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 806,
            description: 'DIN-рейка L=60см',
            price: 28.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 67
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 22480,
            description: 'DIN-рейка L=100см',
            price: 104.63,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 5181,
            description: 'DIN-рейка L=120см',
            price: 56.06,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 216
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 3346,
            description: 'DIN-рейка L=125см',
            price: 59.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 120
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15337,
            description: 'DIN-рейка L=140см',
            price: 75.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 58
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 805,
            description: 'DIN-рейка L=2м',
            price: 95.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 110
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 5176,
            description: 'Розетка с заземляющим контактом РАр10-3-ОП Shuko',
            price: 109.67,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 44
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 23009,
            description: 'Шина ',
            price: 71.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 40
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 11586,
            description: 'Шина ',
            price: 146.05,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 33
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 18691,
            description: 'Шина нулевая  8/1 6х9мм',
            price: 29.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 20362,
            description: 'Шина ',
            price: 96.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15717,
            description: 'Шина нулевая N на DIN-рейку в корпусе 4х7 групп',
            price: 370.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 38
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15834,
            description: 'Шина нулевая N на DIN-рейку в корпусе 4х11 групп',
            price: 471.6,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 38
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 19498,
            description: 'Шина N-PE 6 на DIN-рейку',
            price: 33.05,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 276
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15319,
            description: 'Шина N-PE 8 на DIN-рейку',
            price: 37.97,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 253
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 967,
            description: 'Шина N-PE 10 на DIN-рейку',
            price: 40.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 169
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 17288,
            description: 'Шина N-PE 12 на DIN-рейку',
            price: 47.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 190
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 17005,
            description: 'Шина 1ф гребёнка 63А',
            price: 192.11,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 14243,
            description: 'Шина 2ф гребёнка 63А',
            price: 379.03,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15301,
            description: 'Шина 3ф гребёнка 63А',
            price: 545.59,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 11379,
            description: 'Изолятор SM25K с крепежом',
            price: 19.28,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 11381,
            description: 'Изолятор SM35K с крепежом',
            price: 31.1,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 27
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 11378,
            description: 'Изолятор SM40K с крепежом',
            price: 33.17,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 56
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 9309,
            description: 'Изолятор угловой для нулевой шины синий',
            price: 1.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 116
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15506,
            description: 'Ограничитель клеммных зажимов на Din-рейку пластиковый',
            price: 6.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 79
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 9968,
            description: 'Ограничитель клеммных зажимов на Din-рейку металлический',
            price: 5.91,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 94
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 10824,
            description: 'Зажим наборный ЗНИ-4мм2 (JXB35А) серый',
            price: 10.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 15509,
            description: 'Зажим наборный ЗНИ-2,5мм2 (JXB25А) серый',
            price: 9.34,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 180
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 9918,
            description: 'Арматура светосигнальная AD22DS 230В зеленая',
            price: 41.28,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 29
        },
        {
            folder: 'Аксессуары для шкафов и щитов',
            code: 9919,
            description: 'Арматура светосигнальная AD22DS 230В красная',
            price: 41.28,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1898,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 6А (C)',
            price: 51.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 31
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1461,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 10А (C)',
            price: 51.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 208
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 583,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 16А (C)',
            price: 48.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2024
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9994,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 20А (C)',
            price: 51.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 497
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 584,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 25А (C)',
            price: 49.03,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1238
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1462,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 32А (C)',
            price: 51.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 653
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1044,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 40А (C)',
            price: 52.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 103
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9995,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 50А (C)',
            price: 64.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 570
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 13731,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 1P 63А (C)',
            price: 64.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 120
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9996,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 10А (C)',
            price: 108.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1045,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 16А (C)',
            price: 103.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1046,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 25А (C)',
            price: 103.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 4061,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 32А (C)',
            price: 103.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 195
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 585,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 40А (C)',
            price: 108.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 405
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9605,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 50А (C)',
            price: 137.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 172
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9556,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 2P 63А (C)',
            price: 137.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 182
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9997,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 6А (C)',
            price: 168.08,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 14382,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 10А (С)',
            price: 161.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9998,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 16А (C)',
            price: 161.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 226
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 9999,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 20А (C)',
            price: 161.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 233
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 5889,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 25А (C)',
            price: 161.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 110
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 10000,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 32А (C)',
            price: 161.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 109
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 10001,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 40А (C)',
            price: 169.25,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 133
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 11698,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 50А (C)',
            price: 200.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 61
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 10002,
            description: 'Автоматический выключатель ВА47-63 4,5кА, 3P 63А (C)',
            price: 200.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 21
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 20755,
            description: 'Автоматический выключатель ВА47-29 6кА, 1P 10А (C)',
            price: 77.06,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 18
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 20756,
            description: 'Автоматический выключатель ВА47-29 6кА, 1P 16А (C)',
            price: 72.27,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 249
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 21182,
            description: 'Автоматический выключатель ВА47-29 6кА, 1P 25А (C)',
            price: 78.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 120
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 19957,
            description: 'Автоматический выключатель ВА47-29 6кА, 1P 32А (C)',
            price: 75.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 24
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 21415,
            description: 'Автоматический выключатель ВА47-29 6кА, 1P 40А (C)',
            price: 79.64,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 24180,
            description: 'Автоматический выключатель ВА47-29 6кА, 2P 25А (C)',
            price: 151.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 120
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 21414,
            description: 'Автоматический выключатель ВА47-29 6кА, 2P 32А (C)',
            price: 151.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 24
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 21416,
            description: 'Автоматический выключатель ВА47-29 6кА, 2P 40А (C)',
            price: 151.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 20758,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 16А (C)',
            price: 236.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 22
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 21909,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 25А (C)',
            price: 236.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 40
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 19956,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 32А (C)',
            price: 236.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 13
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 20759,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 40А (C)',
            price: 236.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 29
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 20111,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 50А (C)',
            price: 320.99,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 22625,
            description: 'Автоматический выключатель ВА47-29 6кА, 3P 63А (C)',
            price: 256.66,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 14569,
            description: 'Автоматический выключатель ВА47-100 10кА, 1п 10А (С)',
            price: 330.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 43
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 13296,
            description: 'Автоматический выключатель ВА47-100 10кА, 1п 16А (С)',
            price: 330.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 13297,
            description: 'Автоматический выключатель ВА47-100 10кА, 1п 25А (С)',
            price: 330.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1565,
            description: 'Автоматический выключатель ВА47-100 10кА, 1п 100А (С)',
            price: 332.78,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 13295,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 25А (С)',
            price: 973.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 5196,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 32А (С)',
            price: 973.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 5197,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 40А (С)',
            price: 973.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 16875,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 50А (С)',
            price: 973.26,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1584,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 63А (С)',
            price: 926.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1585,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 80А (С)',
            price: 833.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 30
        },
        {
            folder: 'Автоматические выключатели на DIN-рейку',
            code: 1916,
            description: 'Автоматический выключатель ВА47-100 10кА, 3п 100А (С)',
            price: 811.83,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 61
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 737,
            description: 'Автоматический выключатель АЕ2056М-100 80А',
            price: 1722.27,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 736,
            description: 'Автоматический выключатель АЕ2056М-100 100А',
            price: 1722.27,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 3995,
            description: 'Автоматический выключатель АЕ2066М1-100 160А',
            price: 3736.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 16068,
            description: 'Автоматический выключатель ВА57Ф35-340010 63А',
            price: 1801.07,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 34
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 9147,
            description: 'Автоматический выключатель ВА57Ф35-340010 80А',
            price: 1868.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 24562,
            description: 'Автоматический выключатель ВА87-33 3п 100А 18кА ',
            price: 1250.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 27
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 17198,
            description: 'Автоматический выключатель ВА57Ф35-340010 125А',
            price: 2348.57,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 24482,
            description: 'Автоматический выключатель ВА87-35 3п 160А 25кА',
            price: 1962,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 25
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 24986,
            description: 'Автоматический выключатель ВА87-35 3п 200А 25кА',
            price: 1965.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Автоматические выключатели на монтажную панель',
            code: 24483,
            description: 'Автоматический выключатель ВА87-35 3п 250А 25кА',
            price: 1965.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Автоматические выключатели АП50',
            code: 1251,
            description: 'Автоматический выключатель АП50Б-3МТ-10КР 40А',
            price: 1081.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Автоматические выключатели АП51',
            code: 141,
            description: 'Автоматический выключатель АП50Б-3МТ-10КР 63А',
            price: 1081.2,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 1529,
            description: 'Автоматический выключатель ABB 1п SH201L C10 10А 4,5кА',
            price: 164.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 129,
            description: 'Автоматический выключатель ABB 1п SH201L C16 16А 4,5кА',
            price: 164.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 70
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 1525,
            description: 'Автоматический выключатель ABB 1п SH201L C25 25А 4,5кА',
            price: 164.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 132,
            description: 'Автоматический выключатель ABB 3п SH201L C25 25А 4,5кА',
            price: 564.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 537,
            description: 'Автоматический выключатель ABB 1п S201 C6     6А 6кА',
            price: 365.96,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 18
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 532,
            description: 'Автоматический выключатель ABB 1п S201 C10 10А 6кА',
            price: 291.69,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 64
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 533,
            description: 'Автоматический выключатель ABB 1п S201 C16 16А 6кА',
            price: 266.32,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 143
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 534,
            description: 'Автоматический выключатель ABB 1п S201 C20 20А 6кА',
            price: 303.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 19
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 535,
            description: 'Автоматический выключатель ABB 1п S201 C25 25А 6кА',
            price: 293.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 43
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 536,
            description: 'Автоматический выключатель ABB 1п S201 C32 32А 6кА',
            price: 338.74,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 19
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 1649,
            description: 'Автоматический выключатель ABB 1п S201 C40 40А 6кА',
            price: 366.27,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 2826,
            description: 'Автоматический выключатель ABB 1п S201 C50 50А 6кА',
            price: 559.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 1650,
            description: 'Автоматический выключатель ABB 1п S201 C63 63А 6кА',
            price: 559.01,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 539,
            description: 'Автоматический выключатель ABB 3п S203 C10 10А 6кА',
            price: 976.18,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 540,
            description: 'Автоматический выключатель ABB 3п S203 C16 16А 6кА',
            price: 909.44,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 541,
            description: 'Автоматический выключатель ABB 3п S203 C25 25А 6кА',
            price: 1195.74,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 542,
            description: 'Автоматический выключатель ABB 3п S203 C32 32А 6кА',
            price: 1201.46,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 543,
            description: 'Автоматический выключатель ABB 3п S203 C40 40А 6кА',
            price: 1413.14,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 1113,
            description: 'Автоматический выключатель ABB 3п S203 C50 50А 6кА',
            price: 1829.82,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Автоматические выключатели ABB на DIN-рейку',
            code: 545,
            description: 'Автоматический выключатель ABB 3п S203 C63 63А 6кА',
            price: 1911.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
            code: 1433,
            description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P ',
            price: 509.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
            code: 592,
            description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P ',
            price: 509.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 252
        },
        {
            folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
            code: 2846,
            description: 'Автоматический выключатель дифференциального тока АВДТ-32 2P ',
            price: 509.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
            code: 2828,
            description: 'Автоматический выключатель дифференциального тока DSH941R AC-C16/0,03 16A/30mA 2CSR145001R1164 ABB ',
            price: 2191.86,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Автоматические выключатели дифференциального тока (дифференциальные автоматы) 2п',
            code: 2830,
            description: 'Автоматический выключатель дифференциального тока DSH941R AC-C25/0,03 25A/30mA 2CSR145001R1254 ABB ',
            price: 2191.86,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Выключатели дифференциального тока (УЗО) 2п',
            code: 12127,
            description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 16А/30мА',
            price: 485.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 248
        },
        {
            folder: 'Выключатели дифференциального тока (УЗО) 2п',
            code: 9984,
            description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 25А/30мА',
            price: 485.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 218
        },
        {
            folder: 'Выключатели дифференциального тока (УЗО) 2п',
            code: 8926,
            description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 32А/30мА',
            price: 485.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 122
        },
        {
            folder: 'Выключатели дифференциального тока (УЗО) 2п',
            code: 8927,
            description: 'Выключатель дифференциального тока (УЗО) ВД1-63 2р 40А/30мА',
            price: 485.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 90
        },
        {
            folder: 'Контакторы',
            code: 4824,
            description: 'Контактор КМН-10910 9А   230В/АС3 1НО',
            price: 259.58,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Контакторы',
            code: 12898,
            description: 'Контактор КМН-11210 12А 230В/АС3 1НО',
            price: 267.39,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Контакторы',
            code: 12899,
            description: 'Контактор КМН-11810 18А 230В/АС3 1НО',
            price: 305.08,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Контакторы',
            code: 12900,
            description: 'Контактор КМН-22510 25А 230В/АС3 1НО',
            price: 411.79,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Контакторы',
            code: 17857,
            description: 'Контактор КМН-22510 25А 400В/АС3 1НО',
            price: 457.41,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Контакторы',
            code: 12829,
            description: 'Контактор КМН-22511 25А 230В/АС3 1НЗ',
            price: 451.68,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Контакторы',
            code: 12901,
            description: 'Контактор КМН-23210 32А 230В/АС3 1НО',
            price: 469.91,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Контакторы',
            code: 12902,
            description: 'Контактор КМН-34012 40А 230В/АС3 1НО+1НЗ',
            price: 994.48,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Контакторы',
            code: 20537,
            description: 'Контактор КМН-34012 40А 400В/АС3 1НО+1НЗ',
            price: 1009.52,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Контакторы',
            code: 12904,
            description: 'Контактор КМН-46512 65А 230В/АС3 1НО+1НЗ',
            price: 1105.64,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 18664,
            description: 'Выключатель нагрузки ВН-32 2P 25A',
            price: 145.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 345
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 3835,
            description: 'Рубильник ВР32-35 В31250 250А',
            price: 1056.14,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 16774,
            description: 'Переключатель ВР32-35 А70220 250А ',
            price: 1525.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 5351,
            description: 'Переключатель ВР32-35 В71250 250А ',
            price: 1743.74,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 8520,
            description: 'Рубильник ВР32-37 В31250 400А',
            price: 1463.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 15976,
            description: 'Переключатель ВР32-37 А70220 400А ',
            price: 2008.37,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Выключатели нагрузки (рубильники) и переключатели',
            code: 4308,
            description: 'Переключатель ВР32-37 В71250 400А ',
            price: 2209.94,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 746,
            description: 'Плавкая вставка ПН-2 100А',
            price: 52.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 80
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 6170,
            description: 'Плавкая вставка ПН-2 100/80А',
            price: 53.19,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 747,
            description: 'Плавкая вставка ПН-2 250А',
            price: 70.9,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 86
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 6504,
            description: 'Плавкая вставка ПН-2 250/160А',
            price: 71.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 26
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 748,
            description: 'Плавкая вставка ПН-2 400А',
            price: 126.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 44
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 14034,
            description: 'Контакт основания (держатель) 100А для ПН-2',
            price: 18.86,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 24
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 941,
            description: 'Контакт основания (держатель) 250А для ПН-2',
            price: 43.53,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Плавкие вставки и держатели к ним',
            code: 11076,
            description: 'Контакт основания (держатель) 400А для ПН-2',
            price: 65.21,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трансформаторы',
            code: 14940,
            description: 'Трансформатор тока Т-0,66   20/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 28
        },
        {
            folder: 'Трансформаторы',
            code: 14147,
            description: 'Трансформатор тока Т-0,66   30/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Трансформаторы',
            code: 14942,
            description: 'Трансформатор тока Т-0,66   50/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 66
        },
        {
            folder: 'Трансформаторы',
            code: 3506,
            description: 'Трансформатор тока Т-0,66   75/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Трансформаторы',
            code: 3507,
            description: 'Трансформатор тока Т-0,66 100/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Трансформаторы',
            code: 3502,
            description: 'Трансформатор тока Т-0,66 150/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 16
        },
        {
            folder: 'Трансформаторы',
            code: 3504,
            description: 'Трансформатор тока Т-0,66 200/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трансформаторы',
            code: 3505,
            description: 'Трансформатор тока Т-0,66 300/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Трансформаторы',
            code: 10913,
            description: 'Трансформатор тока Т-0,66 400/5 кл.0,5 5ВА',
            price: 414.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Трансформаторы',
            code: 11699,
            description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-12 IP30',
            price: 1308.44,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Трансформаторы',
            code: 2657,
            description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-24 IP30',
            price: 1250.61,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Трансформаторы',
            code: 1489,
            description: 'Ящик с понижающим трансформатором ЯТП-0,25-220-36 IP30',
            price: 1308.44,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 6137,
            description: 'Счетчик электроэнергии Меркурий 201.5 1ф 1т 5-60А',
            price: 564.76,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 103
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 1948,
            description: 'Счетчик электроэнергии Меркурий 200.02 1ф 2т 5-60А',
            price: 1581.84,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 13,
            description: 'Счетчик электроэнергии Меркурий 230AM-01 3ф 1т 5-60А',
            price: 1881.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 3480,
            description: 'Счетчик электроэнергии Меркурий 230AM-02 3ф 1т 10-100А',
            price: 1881.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 14,
            description: 'Счетчик электроэнергии Меркурий 230AM-03 3ф 1т 5-7,5А',
            price: 1881.7,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 1603,
            description: 'Счетчик электроэнергии Меркурий 230ART-01 CN 3ф 2т 5-60А',
            price: 4036.47,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 1014,
            description: 'Счетчик электроэнергии Меркурий 230ART-02 CN 3ф 2т 10-100А',
            price: 4141.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 4028,
            description: 'Счетчик электроэнергии Меркурий 230ART-03 CN 3ф 2т 5-7,5А',
            price: 4141.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 21363,
            description: 'Счетчик электроэнергии Меркурий 230ART-03 RN 3ф 2т 5-50А ',
            price: 4141.62,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 6473,
            description: 'Счетчик эл.энергии Меркурий 231AM-01 3ф 5(60)A/380В',
            price: 1805.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 10209,
            description: 'Счетчик эл.энергии Меркурий 231AТ-01 IrDA 2т 5(60)А/380В',
            price: 2646.14,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Приборы учета электроэнергии',
            code: 5821,
            description: 'Коробка испытательная д/счетчиков КИП прозрачная крышка',
            price: 181.5,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 23
        },
        {
            folder: 'Знаки электробезопасности',
            code: 5765,
            description: 'Знак ',
            price: 1.93,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 205
        },
        {
            folder: 'Знаки электробезопасности',
            code: 3379,
            description: 'Знак ',
            price: 6.15,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1136
        },
        {
            folder: 'Знаки электробезопасности',
            code: 15762,
            description: 'Знак ',
            price: 22.36,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 128
        },
        {
            folder: 'Знаки электробезопасности',
            code: 5763,
            description: 'Знак «220В» 15х50мм',
            price: 1.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 310
        },
        {
            folder: 'Знаки электробезопасности',
            code: 5764,
            description: 'Знак «380В» 15х50мм',
            price: 1.12,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 240
        },
        {
            folder: 'Знаки электробезопасности',
            code: 10609,
            description: 'Знак «Заземление» 30х30мм',
            price: 0.77,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 14
        },
        {
            folder: 'Средства защиты',
            code: 1127,
            description: 'Коврик диэлектрический 500х500',
            price: 228.71,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 0
        },
        {
            folder: 'Средства защиты',
            code: 1128,
            description: 'Коврик диэлектрический 750х750',
            price: 204.75,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 13
        },
        {
            folder: 'Средства защиты',
            code: 3342,
            description: 'Боты диэлектрические',
            price: 632.5,
            measure: 'пар',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 32
        },
        {
            folder: 'Средства защиты',
            code: 1124,
            description: 'Перчатки латексные диэлектрические',
            price: 312.8,
            measure: 'пар',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 41
        },
        {
            folder: 'Средства защиты',
            code: 1234,
            description: 'Очки защитные',
            price: 66.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Средства защиты',
            code: 236,
            description: 'Перчатки Х/Б с ПВХ точки 4-нитка',
            price: 11.44,
            measure: 'пар',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2530
        },
        {
            folder: 'Электроизмерительные приборы',
            code: 3339,
            description: 'Указатель напряжения Контакт 55 ЭМ (звук)',
            price: 357.88,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Электроизмерительные приборы',
            code: 3345,
            description: 'Клещи токоизмерительные М266',
            price: 390.98,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 6
        },
        {
            folder: 'Электроизмерительные приборы',
            code: 2611,
            description: 'Отвертка-пробник ОП-1',
            price: 64.89,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Изолента',
            code: 1754,
            description: 'Изолента ПВХ белая 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1572
        },
        {
            folder: 'Изолента',
            code: 1755,
            description: 'Изолента ПВХ желтая 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3939
        },
        {
            folder: 'Изолента',
            code: 3049,
            description: 'Изолента ПВХ желто-зеленая 20м х 18мм х 0,18мм',
            price: 28.29,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2589
        },
        {
            folder: 'Изолента',
            code: 1753,
            description: 'Изолента ПВХ зеленая 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4650
        },
        {
            folder: 'Изолента',
            code: 1752,
            description: 'Изолента ПВХ красная 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4669
        },
        {
            folder: 'Изолента',
            code: 2409,
            description: 'Изолента ПВХ синяя 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 21544
        },
        {
            folder: 'Изолента',
            code: 1751,
            description: 'Изолента ПВХ черная 20м х 18мм х 0,18мм',
            price: 24.73,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3455
        },
        {
            folder: 'Изолента',
            code: 17144,
            description: 'Изолента ХБ 100г',
            price: 31.54,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Изолента',
            code: 822,
            description: 'Изолента ХБ 300г',
            price: 84.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 1397
        },
        {
            folder: 'Изолента',
            code: 3090,
            description: 'Изолента ХБ 600г',
            price: 162.78,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 172
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 3188,
            description: 'Трубка термоусаживаемая ТУТ 1,5/0,75',
            price: 3.31,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5494,
            description: 'Трубка термоусаживаемая ТУТ 3/1,5',
            price: 4.4,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 8
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5006,
            description: 'Трубка термоусаживаемая ТУТ 4/2',
            price: 5.87,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5007,
            description: 'Трубка термоусаживаемая ТУТ 6/3',
            price: 9.35,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 7
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5075,
            description: 'Трубка термоусаживаемая ТУТ 8/4',
            price: 10.49,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5237,
            description: 'Трубка термоусаживаемая ТУТ 10/5',
            price: 12.18,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 9
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 8557,
            description: 'Трубка термоусаживаемая ТУТ 12/6',
            price: 13.28,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5061,
            description: 'Трубка термоусаживаемая ТУТ 16/8',
            price: 22.77,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 20
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 2627,
            description: 'Трубка термоусаживаемая ТУТ 20/10',
            price: 36.18,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 5880,
            description: 'Трубка термоусаживаемая ТУТ 25/12,5',
            price: 84.25,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 50
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 2626,
            description: 'Трубка термоусаживаемая ТУТ 30/15',
            price: 56.19,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 4891,
            description: 'Трубка термоусаживаемая ТУТ 40/20',
            price: 80.28,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 8149,
            description: 'Трубка термоусаживаемая ТУТ 60/30',
            price: 128.01,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Трубка термоусаживаемая ТУТ',
            code: 12809,
            description: 'Трубка термоусаживаемая ТУТ 80/40',
            price: 199.73,
            measure: 'м',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 3
        },
        {
            folder: 'Бирки кабельные',
            code: 3918,
            description: 'Бирка кабельная У-134 квадратная',
            price: 1.28,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 2510
        },
        {
            folder: 'Бирки кабельные',
            code: 6057,
            description: 'Бирка кабельная У-135 круглая',
            price: 0.59,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 100
        },
        {
            folder: 'Бирки кабельные',
            code: 2656,
            description: 'Бирка кабельная У-136 треугольная',
            price: 1.13,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 600
        },
        {
            folder: 'Бирки кабельные',
            code: 14907,
            description: 'Бирка кабельная У-153 квадратная',
            price: 1.08,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 700
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 3125,
            description: 'Хомут нейлоновый 2,5х100 (100шт) ',
            price: 22.04,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 197
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 1659,
            description: 'Хомут нейлоновый 2,5х150 (100шт)',
            price: 32.57,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 124
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 23331,
            description: 'Хомут нейлоновый 2,5х150 (100шт) чёрный',
            price: 32.95,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 340,
            description: 'Хомут нейлоновый 2,5х200 (100шт)',
            price: 41.99,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 198
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 20231,
            description: 'Хомут нейлоновый 2,5х200 (100шт) чёрный',
            price: 73.98,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 300
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 2851,
            description: 'Хомут нейлоновый 2,5х250 (100шт)',
            price: 72.98,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 97
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 1660,
            description: 'Хомут нейлоновый 3,6х300 (100шт)',
            price: 106.57,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 0
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 2406,
            description: 'Хомут нейлоновый 3,6х300 (100шт) черный',
            price: 108.24,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 187
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 3663,
            description: 'Хомут нейлоновый 5,0х350 (100шт)',
            price: 157.85,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 55
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 342,
            description: 'Хомут нейлоновый 5,0х400 (100шт)',
            price: 181.77,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 75
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 3079,
            description: 'Хомут нейлоновый 5,0х500 (100шт)',
            price: 256.68,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 12
        },
        {
            folder: 'Хомуты нейлоновые',
            code: 25457,
            description: 'Площадка 20х20 самоклеющаяся под хомут белая',
            price: 110.43,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 52
        },
        {
            folder: 'Инструмент ручной',
            code: 6758,
            description: 'Бокорезы диэлектрические 160мм',
            price: 234,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 5
        },
        {
            folder: 'Инструмент ручной',
            code: 6760,
            description: 'Пассатижи диэлектрические 160мм',
            price: 385.56,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 2
        },
        {
            folder: 'Инструмент ручной',
            code: 6702,
            description: 'Набор отверток диэлектрических 7шт. в коробке',
            price: 314.84,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 10
        },
        {
            folder: 'Расходные материалы',
            code: 1162,
            description: 'Дюбель 6х40',
            price: 0.22,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 15980
        },
        {
            folder: 'Расходные материалы',
            code: 2874,
            description: 'Дюбель-гвоздь 6х40',
            price: 0.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 20418
        },
        {
            folder: 'Расходные материалы',
            code: 1236,
            description: 'Саморез 3,5х35',
            price: 0.47,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 2300
        },
        {
            folder: 'Расходные материалы',
            code: 5519,
            description: 'Саморез 3,5х41',
            price: 0.55,
            measure: 'шт',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 7175
        },
        {
            folder: 'Расходные материалы',
            code: 4000,
            description: 'Соединительный изолирующий зажим СИЗ-1 (от 1,0 до 3,0 кв. мм) уп. 100 шт.',
            price: 51.43,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 4
        },
        {
            folder: 'Расходные материалы',
            code: 19456,
            description: 'Соединительный изолирующий зажим СИЗ-2 (от 2,5 до 4,5 кв. мм) уп. 100 шт.',
            price: 70.28,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:false,
            quantity: 11
        },
        {
            folder: '',
            code: 4001,
            description: 'Соединительный изолирующий зажим СИЗ-3 (от 2,5 до 5,5 кв. мм) уп. 100 шт.',
            price: 110.09,
            measure: 'упак',
            img:"https://robohash.org/3?size=50x50",
            spec:true,
            quantity: 19
        }
    ];

const folders = [
    {
        name: 'Автоматические выключатели ABB на DIN-рейку',
        children: []
    },
    {
        name: 'Автоматические выключатели АП50',
        children: []
    },
    {
        name: 'Автоматические выключатели АП51',
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
        name: 'Аксессуары для шкафов и щитов',
        children: []
    },
    {
        name: 'Бирки кабельные',
        children: []
    },
    {
        name: 'Выключатели',
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
        name: 'Компактные люминесцентные лампы',
        children: []
    },
    {
        name: 'Контакторы',
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
        name: 'Металлорукав',
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
        name: 'Патроны',
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
    },
    {
        name: 'Прожектора светодиодные',
        children: []
    },
    {
        name: 'Промышленные разъемы',
        children: []
    },
    {
        name: 'Пускорегулирующая аппаратура для люминесцентных ламп',
        children: []
    },
    {
        name: 'Расходные материалы',
        children: []
    },
    {
        name: 'Розетки и вилки',
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
        name: 'Сжимы ответвительные',
        children: []
    },
    {
        name: 'Средства защиты',
        children: []
    },
    {
        name: 'Трансформаторы',
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
        name: 'Удлинители',
        children: []
    },
    {
        name: 'Управление освещением',
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
        name: 'Электроустановочные изделия из каучука',
        children: []
    },
    {
        name: 'Элементы питания и аккумуляторы',
        children: []
    }
];

export {goods, folders};