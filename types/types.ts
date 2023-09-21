export type MenuType = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
  }[]


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