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
        price: 2,
        currency : 'ARS',
        image: 'https://i.postimg.cc/3Rj948Q5/Sin-t-tulo.png',
        analitics: [],
        contenido: '30u / 150mg'
      },
      {
        id: 2,
        name: 'EQUILIBRIO',
        description: '',
        price: 1,
        currency : 'ARS',
        image: 'https://i.postimg.cc/jdyP8vSx/EQUILIBRIO.png',
        analitics: [],
        contenido: '200mg / 15ml'
      },
      {
        id: 3,
        name: 'ALIVIO',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        analitics: [],
        contenido: '200mg / 15ml'
      },  
      {
        id: 4,
        name: 'BIENESTAR',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        analitics: [],
        contenido: '200mg / 15ml'
      },   
      {
        id: 5,
        name: 'DESCANSO',
        description: '',
        price: 123.8,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        analitics: [],
        contenido: '200mg / 15ml'
      }, 
      {
        id: 6,
        name: 'CREMA FULL SPECTRUM',
        description: '',
        price: 3,
        currency : 'ARS',
        image: 'https://i.postimg.cc/T1F0rP0t/ALIVIO.png',
        analitics: [],
        contenido: '100cm / 700mg'
      },     
    ],
    imgsbanner : [

    ]
    
  }
}

