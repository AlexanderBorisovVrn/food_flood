export type Product = {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  options: OptionType[] | [];
};

export type Products = Product[] | [];

export type OptionType = {
  title: string;
  additionalPrice: number;
};

export const pizzas: Products = [
  {
    id: 1,
    title: "Гвантанамера",
    desc: 'Пицца "Гавантанамера" с тонким хрустящим тестом, сочными томатами, нежным моцарелла и свежим базиликом.',
    img: "/products/pizza/p1.png",
    price: 560,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 200 },
      { title: "Large", additionalPrice: 400 },
    ],
  },
  {
    id: 2,
    title: "Четыре сыра",
    desc: 'Пицца "Четыре сыра" с великолепным сочетанием горгонзолы, дор-блю, моцареллы и пекорино, создающими неповторимый сырный вкус.',
    img: "/products/pizza/p2.png",
    price: 500,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 170 },
      { title: "Large", additionalPrice: 330 },
    ],
  },
  {
    id: 3,
    title: "Супер Мясная",
    desc: 'Пицца "Супер Мясная" с многослойным сочетанием ветчины, копченой колбасы, бекона, курицы и копченой говядины, политыми сырным соусом.',
    img: "/products/pizza/p3.png",
    price: 630,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 200 },
      { title: "Large", additionalPrice: 400 },
    ],
  },
  {
    id: 4,
    title: "Фунги",
    desc: 'Пицца "Фунги" с ароматными шампиньонами, сушеными помидорами и карамелизованным луком, приправленными свежим розмарином.',
    img: "/products/pizza/p4.png",
    price: 590,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 190 },
      { title: "Large", additionalPrice: 350 },
    ],
  },
  {
    id: 5,
    title: "Пепперони",
    desc: 'Пицца "Пепперони" с острой колбаской пепперони, грибами, соусом из помидоров и ароматным пармезаном.',
    img: "/products/pizza/p5.png",
    price: 550,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 190 },
      { title: "Large", additionalPrice: 300 },
    ],
  },
  {
    id: 6,
    title: "Мексиканская",
    desc: 'Пицца "Мексиканская" с отборным говяжьим фаршем, острыми чили-перцами, перцем халапеньо и соусом сальсы.',
    img: "/products/pizza/p6.png",
    price: 550,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 190 },
      { title: "Large", additionalPrice: 300 },
    ],
  },
  {
    id: 7,
    title: "Фриттата",
    desc: 'Пицца "Фриттата" с начинкой из свежих овощей, ветчины, сыра пармезан и зелени, приготовленная по рецепту итальянского омлета.',
    img: "/products/pizza/p7.png",
    price: 550,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 200 },
      { title: "Large", additionalPrice: 380 },
    ],
  },
  {
    id: 8,
    title: "Капричоза",
    desc: 'Пицца "Капричоза" с выбранными ингредиентами, такими как ветчина, оливки, авокадо, грибы и томаты черри.',
    img: "/products/pizza/p8.png",
    price: 590,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 200 },
      { title: "Large", additionalPrice: 400 },
    ],
  },
];

export const burgers = [
  {
    id: 1,
    title: "Классический бургер",
    desc: "Бургер с сочной говяжьей котлетой, свежими овощами и специальным соусом.",
    img: "/products/burgers/b1.png",
    price: 350,
    options: [
      { title: "Common", additionalPrice: 0 },
      { title: "Double", additionalPrice: 100 },
    ],
  },
  {
    id: 2,
    title: "Чеддер-бургер",
    desc: "Бургер с говяжьей котлетой и обильным слоем сыра чеддер.",
    img: "/products/burgers/b2.png",
    price: 380,
    options: [
      { title: "Common", additionalPrice: 0 },
      { title: "Double", additionalPrice: 100 },
    ],
  },
  {
    id: 3,
    title: "BBQ Бургер",
    desc: 'Бургер "BBQ Бургер" с говяжей котлетой, беконом, луком, сыром и соусом BBQ.',
    img: "/products/burgers/b3.png",
    price: 450,
    options: [
      { title: "Common", additionalPrice: 0 },
      { title: "Double", additionalPrice: 150 },
    ],
  },
  {
    id: 4,
    title: "Бургер с грибами",
    desc: "Бургер с говяжьей котлетой, свежими овощами и ароматными шампиньонами.",
    img: "/products/burgers/b4.png",
    price: 420,
    options: [
      { title: "Common", additionalPrice: 0 },
      { title: "Double", additionalPrice: 100 },
    ],
  },
  {
    id: 5,
    title: "Авокадо Бургер",
    desc: 'Бургер "Авокадо Бургер" с говяжей котлетой, свежими овощами и авокадо.',
    img: "/products/burgers/b5.png",
    price: 420,
    options: [
      { title: "Common", additionalPrice: 0 },
      { title: "Double", additionalPrice: 150 },
    ],
  },
];

type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
};

export const menuData: MenuType[] | [] = [
  {
    id: 1,
    slug: "burgers",
    title: "Истиные бургеры",
    desc: "Сочные котлеты, смелые вкусы и изобилие изысканных начинок.",
    img: "/menu/burgers.jpg",
  },
  {
    id: 2,
    slug: "pizzas",
    title: "Оригинальная пицца",
    desc: "Рецепты, от фанатов своего дела.",
    img: "/menu/pizzas.jpg",
  },
  {
    id: 3,
    slug: "steaks",
    title: "Сочные стейки",
    desc: "Мясо от лучших производителей мраморной говядины.",
    img: "/menu/steaks.jpg",
  },
];
