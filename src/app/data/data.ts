import { Product } from "../models/Products";
import { imgsBanner } from "../models/ImgsBanner";

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
        description: '',
        price: 31.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/3Rj948Q5/Sin-t-tulo.png',
        benefits: [],
        contenido: '30u / 150mg'
      },
      {
        id: 2,
        name: 'EQUILIBRIO',
        description: '',
        price: 323.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/jdyP8vSx/EQUILIBRIO.png',
        benefits: [],
        contenido: '200mg / 15ml'
      },
      {
        id: 3,
        name: 'ALIVIO',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        benefits: [],
        contenido: '200mg / 15ml'
      },  
      {
        id: 4,
        name: 'BIENESTAR',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        benefits: [],
        contenido: '200mg / 15ml'
      },   
      {
        id: 5,
        name: 'DESCANSO',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        benefits: [],
        contenido: '200mg / 15ml'
      }, 
      {
        id: 6,
        name: 'CREMA FULL SPECTRUM',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        benefits: [],
        contenido: '100cm / 700mg'
      },     
    ],
    imgsbanner : [

    ]
    
  }
}

