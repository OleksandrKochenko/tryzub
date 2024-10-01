export const socialData = [
  {
    icon: 'line-md:facebook',
    name: 'facebook',
    style: { header: 'text-[4vh] text-gray-500 mx-1', footer: '' },
    link: 'https://www.facebook.com/groups/UCATrysub/',
    hoverColor: 'hover:text-blue-600',
  },
  {
    icon: 'line-md:instagram',
    name: 'instagram',
    style: { header: 'text-[4vh] text-gray-500 mx-1', footer: '' },
    link: '',
    hoverColor: 'hover:text-pink-500',
  },
  {
    icon: 'line-md:youtube',
    name: 'youtube',
    style: { header: 'text-[5vh] text-gray-500 mx-1', footer: '' },
    link: '',
    hoverColor: 'hover:text-red-500',
  },
  {
    icon: 'line-md:twitter-x',
    name: 'twitter-x',
    style: { header: 'text-[3.5vh] text-gray-500 mx-1', footer: '' },
    link: '',
    hoverColor: 'hover:text-black',
  },
  {
    icon: 'line-md:telegram',
    name: 'telegram',
    style: { header: 'text-[4vh] text-gray-500 mx-1', footer: '' },
    link: '',
    hoverColor: 'hover:text-blue-500',
  },
];

export const mainMenuData = [
  { ua: 'Головна', en: 'Home', route: '/' },
  { ua: 'Події', en: 'Events', route: '/events' },
  { ua: 'Галерея', en: 'Gallery', route: '/photos' },
  { ua: 'Про нас', en: 'About', route: '/contacts' },
  { ua: 'Проекти', en: 'Projects', route: '/projects' },
  { ua: 'Ресурси', en: 'Resources', route: '/resources' },
];

export const homePageData = {
  hero: {
    ua: 'Українсько-Канадське Товариство «Тризуб» прагне об’єднати українських канадців усіх поколінь у м. Брендон та підвищити самооцінку їхнього українського походження через поширення, збереження та розвиток українських традицій і культури, а також усвідомлення внеску їхніх предків у розвиток Канади.',
    en: `The Ukrainian Canadian Association Tryzub strives to bring Ukrainian-Canadians of all generations together in the Brandon area and raise self-esteem of their Ukrainian background through sharing, preserving and developing Ukrainian traditions and culture as well as acknowledging their ancestors' contribution to the development of Canada.
`,
  },
  values: [
    {
      name: 'vision',
      title: {
        ua: 'Наше бачення',
        en: `Our vision`,
      },
      description: {
        ua: 'Розвиток та підтримка культурного різноманіття в суспільстві зміцнює та збагачує це суспільство. Повага до інших культур починається з поваги та обізнаності щодо власної культури, історії та традицій.',
        en: `Development and support of cultural diversity in society strengthens and enriches this society. Respect for other cultures begins with respect and awareness of one's own culture, history and traditions.`,
      },
      icon: 'mingcute:bulb-line',
    },
    {
      name: 'mission',
      title: { ua: 'Наша місія', en: 'Our mission' },
      description: {
        ua: 'Підтримка та популяризація української ідентичності, культурного та освітнього життя в Канаді. Допомога новоприбулим українцям в адаптації до життя в Канаді, налагодженні контактів та створенні кола спілкування зі спільними цінностями та традиціями.',
        en: `Supporting and promotion of Ukrainian identity, cultural and educational life in Canada. Assistance to newly arrived Ukrainians in adapting to life in Canada, establishing contacts and creating a communication pool with common values ​​and traditions.`,
      },
      icon: 'fluent:plant-cattail-24-regular',
    },
    {
      name: 'support',
      title: { ua: 'Підтримка України', en: 'Stand with Ukraine' },
      description: {
        ua: 'Україна бореться за своє існування, захищаючись від жорстокої російської агресії. З перших днів війни УКА "Тризуб" фінансово підтримує Збройні Сили України. Допомога триватиме до перемоги України у війні за незалежність.',
        en: `Ukraine is fighting for its existence, defending itself from brutal Russian aggression. Since the first days of the war, UCA Trizub has been donating the Armed Forces of Ukraine. The aid will continue until Ukraine wins the war for independence.`,
      },
      icon: 'solar:heart-pulse-outline',
    },
  ],
  news: { ua: 'В курсі подій', en: 'Stay up-to-date' },
  donation: {
    title: { ua: 'Як нас підтримати', en: 'Donation methods' },
    disclaimer: {
      ua: 'Всі пожертви перераховуються на підтримку Збройних Сил України, поки не закінчиться українсько-російська війна',
      en: 'All donations are transferred for support of Armed Forces of Ukraine, until the Ukrainian-Russian war remains',
    },
    description: {
      ua: 'Ми цінуємо вашу підтримку в наданні допомоги Україні.',
      en: 'We appreciate your support in helping us provide aid to Ukraine. ',
    },
    subtitle: {
      ua: 'Ось кілька способів, якими ви можете зробити свій внесок:',
      en: 'Here are some ways you can contribute:',
    },
    methods: [
      {
        name: {
          ua: 'За допомогою електронного переказу',
          en: 'E-Transfer Donation',
        },
        method: {
          ua: 'Ви можете надіслати електронний переказ на адресу ucat@gmail.com, щоб підтримати військові, дитячі та інші ініціативи України.',
          en: 'You can send an e-Transfer to ucat@gmail.com to support Ukraine’s military, children and other initiatives.',
        },
        icon: 'mage:money-exchange',
      },
      {
        name: { ua: 'Пожертвування готівкою', en: 'Donation by cash' },
        method: {
          ua: 'Приєднуйтесь до наших культурних заходів та вистав, щоб відчути українські традиції. Пожертви можна зробити особисто за допомогою нашої скриньки для пожертв.',
          en: 'Join us at our cultural events and performances to experience Ukrainian traditions. Donations can be made in person using our donation box.',
        },
        icon: 'healthicons:money-bag-outline',
      },
      {
        name: {
          ua: 'Купуйте наші сувеніри та домашні страви',
          en: 'Buy our souvenirs and food',
        },
        method: {
          ua: 'Придбайте українські сувеніри, вироби та традиційні страви виготовлені нашими волонтерами. Усі кошти йдуть на підтримку України.',
          en: 'Purchase Ukrainian souvenirs, products and traditional food made by our volunteers. All proceeds go towards supporting Ukraine.',
        },
        icon: 'arcticons:ukraine-tryzub',
      },
      {
        name: { ua: 'Контакт для пожертвувань', en: 'Contact for Donations' },
        method: {
          ua: 'Щоб дізнатися про інші способи пожертвування, звертайтеся до Вартана Давтяна - (204) 720-7083',
          en: 'For other methods to donate, please contact Vartan Davtian - (204) 720-7083',
        },
        icon: 'healthicons:communication-outline',
      },
    ],
    thanks: {
      ua: 'Дякуємо за вашу щедрість і підтримку!',
      en: 'Thank you for your generosity and support!',
    },
  },
};

export const donateBtnData = {
  ua: 'Підтримати',
  en: 'Donate',
};
