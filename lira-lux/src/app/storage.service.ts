import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  cards = [
    {
      id: 1,
      cardTitle: 'Roto Designo R79 WD',
      cardText: 'Вікно з піднятою віссю відкривання. Енергоефективне, з зовнішним загартованим склом і термоізоляціним блоком WD.',
      price: '247.5 - 588.75 €',
      images: ['../assets/images/r7wd.jpg', '../assets/images/r7KEd.jpg', '../assets/images/r79KWd.jpg', '../assets/images/r79cut.jpg', '../assets/images/r79-plast-cut.jpg', '../assets/images/r79info.jpg'],
      scope: 'для дахів з кутом нахилу від 20° до 65°',
      modalTitles: ['Вікно з піднятою віссю відкривання Designo R79', 'Унікальні функціональні рішення'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['оригінальне рішення Roto – вісь відкривання в ¾ висоти вікна. Вільний та безпечний доступ людини до відкритого вікна, стоячи в повний зріст.', 'зручний та безпечний доступ зсередини приміщення до зовнішньої поверхні стулки для можливості миття вікна, за рахунок примусового відкривання стулки вікна на 120°', 'встановлений на заводі термоізоляційний блок WD, забезпечує додаткову теплоізоляцію вікна', '3-й клас безпеки для дерев’яних (Н) та 5-й найвищий – для вікон з ПВХ (К)', 'регульована фурнітура дозволяє після монтажу усувати перекоси, що можуть виникнути в результаті роботи дахової конструкції, без додаткового демонтажу вікна']
      },
      icon: '../assets/images/r7icon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R75 H WD', '1.0', '1.3', '52', '1-2', '3-4']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний стандарт',
        specifications: ['R79 H WD', '0.7', '1.1', '47', '2', '4']
      },
      woodSpecificationsTableRow3: {
        isIt: false
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R75 K WD', '1.0', '1.3', '52', '1-2', '3-4']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний стандарт',
        specifications: ['R79 K WD', '0.7', '1.1', '47', '2', '4']
      },
      plasticSpecificationsTableRow3: {
        isIt: false
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: false,
      wdInfo: ['виготовлений з твердого і гнучкого поліпропілену', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру в місці стику рами з відкосом приблизно на 5 °С', 'пароізоляційна плівка – забезпечує герметичне з’єднання рами вікна з основною пароізоляцією даху', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можливість комбінувати з іншими вікнами WDF R4/R7 та WDT R4', 'зовнішні та внутрішні аксесуари'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом і термоізоляціним блоком WD',
          windows: [
            {
              windowName: 'WDF R75 H WD AL (дерев`яне) ',
              windowPrices: '247.5 - 457.5 €'
            },
            {
              windowName: 'WDF R75 K WD AL (пластикове) ',
              windowPrices: '277.5 - 489 €'
            }
          ]
        },
        {
          completeSet: 'Вікно енергоефективне з двокамерним склопакетом та зовнішним загартованим склом і термоізоляціним блоком WD',
          windows: [
            {
              windowName: 'WDF R79 H WD AL (дерев`яне) ',
              windowPrices: '281.25 - 536.25 €'
            },
            {
              windowName: 'WDF R79 K WD AL (пластикове) ',
              windowPrices: '313.5 - 588.75 €'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      cardTitle: 'Roto Designo R4',
      cardText: 'Вікно з центральною віссю відкривання. Енергоефективне, з зовнішним загартованим склом. Можливий блок WD (як опція).',
      price: '138 - 381 €',
      images: ['../assets/images/r45HWd.jpg', '../assets/images/r4Kwd.png', '../assets/images/r45H.jpg', '../assets/images/r45Hcut.jpg'],
      scope: 'для дахів з кутом нахилу від 15° до 85°',
      modalTitles: ['Вікно з центральною віссю відкривання Designo R4', 'Ідеальне для комбінованих з’єднань'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['вісь відкривання на ½ висоти вікна', 'ідеальна інтеграція вікна з дахом, ергономічна форма зовнішніх накладок, без видимих елементів з’єднань, колір – антрацит-металік', 'встановлений на заводі термоізоляційний блок WD (під замовлення)', '3-й клас безпеки для дерев’яних (Н) та 5-й найвищий – для вікон з ПВХ (К)', 'регульована фурнітура дозволяє після монтажу усувати перекоси, що можуть виникнути в результаті роботи дахової конструкції, без додаткового демонтажу вікна']
      },
      icon: '../assets/images/r4icon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R45 H', '1.0', '1.5', '52', '1-2', '3-4']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: false,
        title: '',
        specifications: ['R45 H WD', '1.0', '1.3', '52', '1-2', '3-4']
      },
      woodSpecificationsTableRow3: {
        isIt: false
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R45 K', '1.0', '1.4', '52', '1-2', '3-4']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: false,
        title: '',
        specifications: ['R45 K WD', '1.0', '1.3', '52', '1-2', '3-4']
      },
      plasticSpecificationsTableRow3: {
        isIt: false
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: false,
      wdInfo: ['виготовлений з твердого і гнучкого поліпропілену', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру в місці стику рами з відкосом приблизно на 5 °С', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можливість встановлення автоматики вже після монтажу вікна, під час його експлуатації', 'можливість комбінувати з іншими вікнами WDF R4/R7 та WDT R4', 'зовнішні та внутрішні аксесуари'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом',
          windows: [
            {
              windowName: 'WDF R45 H AL (дерев`яне) ',
              windowPrices: '138 - 255 €'
            },
            {
              windowName: 'WDF R45 K AL (пластикове) ',
              windowPrices: '180 - 340.5 €'
            }
          ]
        },
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом і термоізоляціним блоком WD',
          windows: [
            {
              windowName: 'WDF R45 H WD AL (дерев`яне) ',
              windowPrices: '174 - 288.75 €'
            },
            {
              windowName: 'WDF R45 K WD AL (пластикове) ',
              windowPrices: '219 - 381 €'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      cardTitle: 'Roto Designo R8',
      cardText: 'Вікно з верхньою віссю (двома осями) відкривання. Енергоефективне, з зовнішним загартованим і внутрішнім склом триплекс, та WD блоком.',
      price: '421.5 - 1273.5 €',
      // tslint:disable-next-line:max-line-length
      images: ['../assets/images/r8kwd2.jpg', '../assets/images/r8HWD.JPG', '../assets/images/r8HWDcut.jpg', '../assets/images/r8KWdCut.png', '../assets/images/r8Khome.jpg'],
      scope: 'для дахів з кутом нахилу від 20° до 65°',
      modalTitles: ['Вікно з верхньою віссю (двома осями) відкривання Designo R8', 'Найвища функціональність'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['подвійна система відкривання:', 'по верхній або в ¾ висоти вікна. Всі функції вікна управляються однією ручкою. Регулювання вікна після його монтажу.', 'вільний, комфортний і безпечний доступ до відкритого вікна, інтенсивне провітрювання та необмежений вид через вікрите вікно, завдяки куту відкривання 45°', 'висока енергоефективність Uw=1,1÷0,8 Вт/м2∙К', 'ідеальна герметичність і захист від взлому завдяки 4 точкам блокування, 5-й найвищий клас безпеки', 'безпечний і зручний доступ до зовнішної поверхні склопакету вікна завдяки автоматичному блокуванню стулки в положенні для миття (137°)', 'двоступеневе мікропровітрювання']
      },
      icon: '../assets/images/r8icon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R88С H WD', '1.0', '1.1', '52', '2', '3']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R89G H WD', '0.8', '1.0', '56', '3', '3']
      },
      woodSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R89P H WD', '0.5', '0.82', '47', '3', '3']
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R88С K WD', '1.0', '1.1', '52', '2', '4']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R89G K WD', '0.8', '0.99', '56', '3', '4']
      },
      plasticSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R89P K WD', '0.5', '0.8', '47', '3', '4']
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: true,
      wdInfo: ['виготовлений з поліетилену, стійкого до УФ-випромінювання та окислення', 'встановлюється на заводі у базовій комплектації', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру у місці стику рами з відкосом приблизно на 5 °С', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можливість встановлення автоматики вже після монтажу вікна, під час його експлуатації', 'можна комбінувати з вікнами WDF R6/R8 та WDT R6', 'зовнішні та внутрішні аксесуари'],
      quadroInfo: ['спеціальний ремінь для зручності переносу вікна покрівельниками під час монтажу на дах – швидкий, легкий та безпечний монтаж', 'вікно з енергоефективним однокамерним склопакетом 8С, з ще більш високим коефіцієнтом теплопередачі вікна Uw=1,1 Вт/м2∙К – оптимальна температура в приміщені та зниження витрат на опалення', 'безпечний склопакет з внутрішнім склом триплекс захищає від отримання травм (від фрагментів скла), якщо воно розбивається'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R88C H WD AL (дерев`яне) ',
              windowPrices: '421.5 - 678 €'
            },
            {
              windowName: 'WDF R88C K WD AL (пластикове) ',
              windowPrices: '468.75 - 759 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R89G H WD AL (дерев`яне) ',
              windowPrices: '549 - 1005 €'
            },
            {
              windowName: 'WDF R89G K WD AL (пластикове) ',
              windowPrices: '642 - 1182 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R89P H WD AL (дерев`яне) ',
              windowPrices: '591 - 1086 €'
            },
            {
              windowName: 'WDF R89P K WD AL (пластикове) ',
              windowPrices: '694.5 - 1273.5 €'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      cardTitle: 'Roto Designo R4 RotoTronic',
      cardText: 'Вікно з центральною віссю відкривання стулки та дистанційним керуванням. З зовнішним загартованим склом і термоізоляціним блоком WD (як опція).',
      price: '576 - 850.5 €',
      images: ['../assets/images/r4TronicKWD.jpg', '../assets/images/r4TronicHHome.jpg', '../assets/images/remoteControl.jpeg', '../assets/images/wallSwitch.jpg'],
      scope: 'для дахів з кутом нахилу від 15° до 85°',
      modalTitles: ['Вікно з центральною віссю відкривання Designo R4 RotoTronic', 'Дистанційне керування'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['вікно з центральною віссю відкривання стулки та дистанційним керуванням (вісь обертання на ½ висоти вікна)', 'керується за допомогою настінного вимикача (RotoTronic E), дистанційного керування через пульт (RotoTronic EF)(продаються окремо)', 'встановлений на заводі термоізоляційний блок WD (під замовлення)', '+ 3-й клас безпеки для дерев’яних (Н) та 5-й найвищий – для вікон з ПВХ (К)', 'регульована фурнітура дозволяє після монтажу усувати перекоси, що можуть виникнути в результаті роботи дахової конструкції, без додаткового демонтажу вікна']
      },
      icon: '../assets/images/r4tronicIcon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R45 H Tronic', '1.0', '1.5', '52', '2', '3-4']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: false,
        title: '',
        specifications: ['R45 H WD Tronic', '1.0', '1.3', '52', '2', '3-4']
      },
      woodSpecificationsTableRow3: {
        isIt: false
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Стандарт',
        specifications: ['R45 K Tronic', '1.0', '1.4', '52', '2', '3-4']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: false,
        title: '',
        specifications: ['R45 K WD Tronic', '1.0', '1.3', '52', '2', '4']
      },
      plasticSpecificationsTableRow3: {
        isIt: false
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: false,
      wdInfo: ['виготовлений з твердого і гнучкого поліпропілену', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру в місці стику рами з відкосом приблизно на 5 °С', 'пароізоляційна плівка – забезпечує герметичне з’єднання рами вікна з основною пароізоляцією даху', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можна комбінувати з вікнами WDF R4/R7 та WDT R4', 'зовнішні та внутрішні аксесуари', 'Версія Е управляється за допомогою вимикача. Версія EF – дистанційне керування за допомогою пульта. Вимикач та пульт замовляються окремо та в ціну вікна не входять.'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом',
          windows: [
            {
              windowName: 'WDT R45 H AL EF (дерев`яне) ',
              windowPrices: '576 - 726 €'
            },
            {
              windowName: 'WDT R45 K AL EF (пластикове) ',
              windowPrices: '663 - 807 €'
            }
          ]
        },
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом і термоізоляціним блоком WD',
          windows: [
            {
              windowName: 'WDT R45 H WD AL EF (дерев`яне) ',
              windowPrices: '619.5 - 771 €'
            },
            {
              windowName: 'WDT R45 K WD AL EF (пластикове) ',
              windowPrices: '706.5 - 850.5 €'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      cardTitle: 'Roto Q-4',
      cardText: 'Вікно з центральною віссю відкривання та верхньою ручкою. Енергоефективне з зовнішним загартованим склом. Можливий блок WD (як опція).',
      price: '279 - 663 €',
      images: ['../assets/images/Q4HWD.jpg', '../assets/images/Q4Hback.jpg', '../assets/images/Q4HHome.jpg'],
      scope: 'для дахів з кутом нахилу від 15° до 90°',
      modalTitles: ['Вікно з центральною віссю відкривання Roto Q-4', 'Впевнений вибір для співвідношення «ціна – якість»'],
      advantages: {
        hasAdvantageTitle: true,
        advantageTitles: ['Енергоефективність', 'Якість', 'Легкий монтаж', 'Зручність верхньої ручки'],
        adventage: ['UW= від 1,2 до 0,77 Вт/м2К забезпечує оптимальну температуру в будинку та зменшує ваші рахунки за опалення вашої будівлі', '15 років гарантії та найвища якість продукції – це безвідмовна робота протягом багатьох років', 'Ліцензований монтаж на клік – це вірно встановлені, ідеально відрегульовані, завжди підігнані вікна', 'Легкий доступ до вікна означає більше можливостей облаштувати інтер’єр та більше простору в будинку']
      },
      icon: '../assets/images/q4icon.JPG',
      hasPlasticVersion: false,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 2S Standard',
        specifications: ['Q-4 H2S S1', '1.0', '1.2', '52', '1', '4']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 2С Сomfort',
        specifications: ['Q-4 H2C S1', '1.0', '1.2', '51', '2', '4']
      },
      woodSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 3С Comfort',
        specifications: ['Q-4 H3C S0', '0.7', '1.0', '47', '3', '4']
      },
      woodSpecificationsTableRow4: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 3P Premium',
        specifications: ['Q-4 H3P P5', '0.5', '0.77', '47', '3', '4']
      },
      plasticSpecificationsTableRow1: {
        isIt: false
      },
      plasticSpecificationsTableRow2: {
        isIt: false
      },
      plasticSpecificationsTableRow3: {
        isIt: false
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: false,
      hasMoreOptions: true,
      hasQuadro: false,
      moreOptions: ['можливість комбінувати з іншими вікнами Q-4/QT-4', 'зовнішні та внутрішні аксесуари'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом',
          windows: [
            {
              windowName: 'Q-4 H 2S AL S1 (дерев`яне) ',
              windowPrices: '279 - 414 €'
            }
          ]
        },
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим та внутрішнім склом триплекс',
          windows: [
            {
              windowName: 'Q-4 H 2C AL S1 (дерев`яне) ',
              windowPrices: '288.75 - 445.5 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним загартованим і внутрішнім склом триплекс',
          windows: [
            {
              windowName: 'Q-4 H 3C AL S0 (дерев`яне) ',
              windowPrices: '360.75 - 561.75 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним загартованим і внутрішнім склом триплекс та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'Q-4 H 3P AL P5 (дерев`яне) ',
              windowPrices: '399.75 - 663 €'
            }
          ]
        }
      ]
    },
    {
      id: 6,
      cardTitle: 'Roto Q-4 Tronic',
      cardText: 'Вікно з центральною віссю відкривання, верхньою ручкою, та дистанційним керуванням. Енергоефективне з зовнішним загартованим склом. (+WD)',
      price: '728.25 - 1182 €',
      images: ['../assets/images/q4Tronic.JPG', '../assets/images/q4TronicBack.jpg', '../assets/images/remoteControl.jpeg'],
      scope: 'для дахів з кутом нахилу від 15° до 90°',
      modalTitles: ['Вікно з центральною віссю відкривання Roto Q-4 Tronic', 'Дистанційне керування'],
      advantages: {
        hasAdvantageTitle: true,
        advantageTitles: ['Енергоефективність', 'Якість', 'Легкий монтаж', 'Електричне керування'],
        adventage: ['Коефіцієнт UW= від 1,2 до 0,77 Вт/м2К забезпечує оптимальну температуру в будинку та зменшує ваші рахунки за опалення вашої будівлі', '15 років гарантії та найвища якість продукції – це безвідмовна робота протягом багатьох років', 'Ліцензований монтаж на клік – це правильно встановлені, ідеально відрегульовані, завжди підігнані вікна', 'Серійне вікно обладнане електроприводом і системою управління в якості стандартного використання в недоступних людині місцях. Управління вікном за допомогою вимикача на стіні (QT-4E), та дистанційного керування через пульт (QT-4F) (продаються окремо)']
      },
      icon: '../assets/images/q4tronicIcon.JPG',
      hasPlasticVersion: false,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 2S Standard',
        specifications: ['QT4 H2S S1', '1.0', '1.2', '52', '1', '4']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 2С Сomfort',
        specifications: ['QT4 H2C S1', '1.0', '1.2', '51', '2', '4']
      },
      woodSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 3С Comfort',
        specifications: ['QT4 H3C S0', '0.7', '1.0', '47', '3', '4']
      },
      woodSpecificationsTableRow4: {
        isIt: true,
        hasTitle: true,
        title: 'Склопакет 3P Premium',
        specifications: ['QT4 H3P P5', '0.5', '0.77', '47', '3', '4']
      },
      plasticSpecificationsTableRow1: {
        isIt: false
      },
      plasticSpecificationsTableRow2: {
        isIt: false
      },
      plasticSpecificationsTableRow3: {
        isIt: false
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: false,
      hasMoreOptions: true,
      hasQuadro: false,
      moreOptions: ['можна комбінувати з вікнами Q-4/QT-4', 'зовнішні та внутрішні аксесуари'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим склом',
          windows: [
            {
              windowName: 'QT4 H2SAL S1EF (дерев`яне) ',
              windowPrices: '728.25 - 882 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним загартованим і внутрішнім склом триплекс',
          windows: [
            {
              windowName: 'QT4 H3CAL S0EF (дерев`яне) ',
              windowPrices: '828 - 1064.25 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним загартованим і внутрішнім склом триплекс та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'QT4 H3PAL P5EF (дерев`яне) ',
              windowPrices: '874.5 - 1182 €'
            }
          ]
        }
      ]
    },
    {
      id: 7,
      cardTitle: 'Roto Designo R6',
      // tslint:disable-next-line:max-line-length
      cardText: 'Вікно з центральною віссю відкривання. Енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та блоком WD.',
      price: '381 - 1078.5 €',
      images: ['../assets/images/r6KWDnew.png', '../assets/images/r6HWD.JPG', '../assets/images/r6HWDopen.JPG', '../assets/images/r6HWDback.jpg'],
      scope: 'для дахів з кутом нахилу від 15° до 90°',
      modalTitles: ['Вікно з центральною віссю відкривання Designo R6', 'Традиційні функціональні рішення'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['вісь відкривання на ½ висоти вікна', 'висока енергоефективністьUw = 1,1÷0,8 Вт/м2∙К', 'встановлена на заводі пароізоляція, монтажні кутники і термоізоляційний блок WD', 'ідеальна інтеграція вікна з дахом, ергономічна форма зовнішніх накладок, без видимих елементів з’єднань, колір – антрацит-металік', '3-й клас безпеки для дерев’яних (Н) та 5-й найвищий – для вікон з ПВХ (К)', '4 точки блокування в кожному з кутів вікна – надійний захист від злому', 'двоступеневе мікропровітрювання', 'система регулювання вікна без демонтажу – за рахунок регульованої фурнітури усуваються перекоси, які можуть виникнути під час роботи дерев’яної конструкції покрівлі']
      },
      icon: '../assets/images/r4icon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R68С H WD', '1.0', '1.1', '52', '2', '3']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R69G H WD', '0.8', '1.0', '56', '3', '3']
      },
      woodSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R69P H WD', '0.5', '0.82', '47', '3', '3']
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R68С K WD', '1.0', '1.1', '52', '2', '4']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R69G K WD', '0.8', '0.99', '56', '3', '4']
      },
      plasticSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R69P K WD', '0.5', '0.8', '47', '3', '4']
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: true,
      wdInfo: ['виготовлений з поліетилену, стійкого до УФ-випромінювання та окислення', 'встановлюється на заводі у базовій комплектації', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру у місці стику рами з відкосом приблизно на 5 °С', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можливість встановлення автоматики вже після монтажу вікна, під час його експлуатації', 'можливість з’єднання в комбінаціях з іншими вікнами WDF R6/R8 та WDT R6', 'зовнішні та внутрішні аксесуари'],
      quadroInfo: ['спеціальний ремінь для зручності переносу вікна покрівельниками під час монтажу на дах – швидкий, легкий та безпечний монтаж', 'вікно з енергоефективним однокамерним склопакетом 8С, з ще більш високим коефіцієнтом теплопередачі вікна Uw=1,1 Вт/м2∙К – оптимальна температура в приміщені та зниження витрат на опалення', 'безпечний склопакет з внутрішнім склом триплекс захищає від отримання травм (від фрагментів скла), якщо воно розбивається'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R68C H WD AL (дерев`яне) ',
              windowPrices: '381 - 592.5 €'
            },
            {
              windowName: 'WDF R68C K WD AL (пластикове) ',
              windowPrices: '577 - 678 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R69G H WD AL (дерев`яне) ',
              windowPrices: '472.5 - 846 €'
            },
            {
              windowName: 'WDF R69G K WD AL (пластикове) ',
              windowPrices: '558 - 997.5 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDF R69P H WD AL (дерев`яне) ',
              windowPrices: '541.5 - 975 €'
            },
            {
              windowName: 'WDF R69P K WD AL (пластикове) ',
              windowPrices: '604.5 - 1078.5 €'
            }
          ]
        }
      ]
    },
    {
      id: 8,
      cardTitle: 'Roto Designo R6 RotoTronic',
      cardText: 'Електричне вікно з центральною віссю відкривання. Енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та блоком WD.',
      price: '790.5 - 1650.75 €',
      images: ['../assets/images/r6TronicHWD.jpg', '../assets/images/r6tronicKWD.JPG', '../assets/images/remoteControl.jpeg'],
      scope: 'для дахів з кутом нахилу від 15° до 90°',
      modalTitles: ['Вікно з центральною віссю відкривання Designo R6 RotoTronic', 'Дистанційне керування'],
      advantages: {
        hasAdvantageTitle: false,
        adventage: ['дистанційне керування відкриванням вікна (вісь відкривання на ½ висоти вікна)', 'керується за допомогою настінного вимикача (RotoTronic E), або пультом дистанційного керування (Roto Tronic EF) (продаються окремо)', 'встановлений на заводі термоізоляційний блок WD (базова комплектація)', 'регульована фурнітура дозволяє після монтажу усувати перекоси, що можуть виникнути в результаті роботи дахової конструкції, без додаткового демонтажу вікна']
      },
      icon: '../assets/images/r4tronicIcon.JPG',
      hasPlasticVersion: true,
      woodSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R68С H Tronic', '1.0', '1.1', '52', '2', '3']
      },
      woodSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R69G H Tronic', '0.8', '1.0', '56', '3', '3']
      },
      woodSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R69P H Tronic', '0.5', '0.82', '47', '3', '3']
      },
      woodSpecificationsTableRow4: {
        isIt: false
      },
      plasticSpecificationsTableRow1: {
        isIt: true,
        hasTitle: true,
        title: 'Комфорт (Склопакет 8С)',
        specifications: ['R68С K Tronic', '1.0', '1.1', '52', '2', '3']
      },
      plasticSpecificationsTableRow2: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний комфорт (Склопакет 9G)',
        specifications: ['R69G K Tronic', '0.8', '1.0', '56', '3', '3']
      },
      plasticSpecificationsTableRow3: {
        isIt: true,
        hasTitle: true,
        title: 'Двокамерний преміум (Склопакет 9Р)',
        specifications: ['R69P K Tronic', '0.5', '0.99', '47', '3', '3']
      },
      plasticSpecificationsTableRow4: {
        isIt: false
      },
      hasWDinfo: true,
      hasMoreOptions: true,
      hasQuadro: true,
      wdInfo: ['виготовлений з поліетилену, стійкого до УФ-випромінювання та окислення', 'встановлюється на заводі у базовій комплектації', 'підвищує енергоефективність вікна до 15%', 'підвищує температуру у місці стику рами з відкосом приблизно на 5 °С', 'усуває можливість виникнення містка холоду і запобігає утворенню конденсату'],
      moreOptions: ['можливість з’єднання в комбінаціях з іншими вікнами WDF R6/R8 та WDT R6', 'зовнішні та внутрішні аксесуари'],
      quadroInfo: ['спеціальний ремінь для зручності переносу вікна покрівельниками під час монтажу на дах – швидкий, легкий та безпечний монтаж', 'вікно з енергоефективним однокамерним склопакетом 8С, з ще більш високим коефіцієнтом теплопередачі вікна Uw=1,1 Вт/м2∙К – оптимальна температура в приміщені та зниження витрат на опалення', 'безпечний склопакет з внутрішнім склом триплекс захищає від отримання травм (від фрагментів скла), якщо воно розбивається'],
      pricesByCompleteSets: [
        {
          completeSet: 'Вікно енергоефективне з зовнішним загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDT R68C H WD AL EF (дерев`яне) ',
              windowPrices: '790.5 - 984 €'
            },
            {
              windowName: 'WDT R68C K WD AL EF (пластикове) ',
              windowPrices: '817.5 - 1024.5 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDT R69G H WD AL EF (дерев`яне) ',
              windowPrices: '914.25 - 1291.5 €'
            },
            {
              windowName: 'WDT R69G K WD AL EF (пластикове) ',
              windowPrices: '1177.5 - 1565.25 €'
            }
          ]
        },
        {
          completeSet: 'Вікно суперенергоефективне з двокамерним склопакетом, зовнішним та середнім загартованим і внутрішнім склом триплекс, та термоізоляційним блоком WD',
          windows: [
            {
              windowName: 'WDT R69P H WD AL EF (дерев`яне) ',
              windowPrices: '1086 - 1464.75 €'
            },
            {
              windowName: 'WDT R69P K WD AL EF (пластикове) ',
              windowPrices: '1261.5 - 1650.75 €'
            }
          ]
        }
      ]
    }
  ];

  public getCards() {
    return this.cards;
  }

  public updateCards(data) {
    this.cards = data;
  }
}
