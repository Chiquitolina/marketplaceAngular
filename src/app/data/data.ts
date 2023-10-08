export interface imgsBanner {
  id: number;
  src: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  benefits: string[];
}

export interface Database {
    data: {
      imgsbanner: imgsBanner[];
      products: Product[];
    };
}

export const database: Database = {
  "data" : {
    products : [
      {
        id: 1,
        name: 'GUMMIES DULCES SUEÑOS',
        price: 31.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/3Rj948Q5/Sin-t-tulo.png',
        benefits: []
      },
      {
        id: 2,
        name: 'EQUILIBRIO',
        price: 323.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/jdyP8vSx/EQUILIBRIO.png',
        benefits: []
      },
      {
        id: 3,
        name: 'ALIVIO',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        benefits: []
      },    
    ],
    imgsbanner : [

    ]
  }
}

