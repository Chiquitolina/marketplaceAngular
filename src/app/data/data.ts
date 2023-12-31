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
        description: 'Noches tranquilas, días brillantes. La clave para un descanso reparador. Nuestras gummies te invitan a noches de serenidad y descanso total.',
        price: 15500,
        currency : 'ARS',
        image: 'https://i.postimg.cc/3Rj948Q5/Sin-t-tulo.png',
        analitics: [],
        contenido: '30u / 150mg',
        ratio: '1 - 1'
      },
      {
        id: 2,
        name: 'EQUILIBRIO',
        description: 'Equilibrio en su máxima expresión. Experimentá cómo un cuerpo y mente en equilibrio pueden transformar tu vida cotidiana, brindandote sensación de calma y plenitud.',
        price: 9000,
        currency : 'ARS',
        image: 'https://i.postimg.cc/wj4xdYQT/DSC-2912.jpg',
        analitics: [],
        contenido: '200mg / 15ml',
        ratio: '50 - 1'
      },
      {
        id: 3,
        name: 'ALIVIO',
        description: 'Descubre el alivio de dolores intensos, molestias físicas, emociones y liberá tu máximo potencial.',
        price: 9000,
        currency : 'ARS',
        image: 'https://i.postimg.cc/fTKTB93d/DSC-2898.jpg',
        analitics: [],
        contenido: '200mg / 15ml',
        ratio: '1 - 1'
      },  
      {
        id: 4,
        name: 'BIENESTAR',
        description: 'Una fórmula diseñada para armonizar cuerpo y mente. Descubre tu nuevo compañero hacia el camino de un mayor bienestar físico y emocional.',
        price: 9000,
        currency : 'ARS',
        image: 'https://i.postimg.cc/YS4rrDdN/DSC-2970.jpg',
        analitics: [],
        contenido: '200mg / 15ml',
        ratio: '3 - 1'
      },   
      {
        id: 5,
        name: 'DESCANSO',
        description: 'Experimentá un sueño profundo y revitalizador. Disfrutá la serenidad que tu cuerpo y mente merecen.',
        price: 9000,
        currency : 'ARS',
        image: 'https://i.postimg.cc/mggZqgM5/DSC-2932.jpg',
        analitics: [],
        contenido: '200mg / 15ml',
        ratio: '50 - 1'

      }, 
      {
        id: 6,
        name: 'CREMA FULL SPECTRUM',
        description: 'Crema full spectrum, se desliza suavemente, nutriendo tu piel con la riqueza del CBD. ¿Listo para experimentar la suavidad?',
        price: 13000,
        currency : 'ARS',
        image: 'https://i.ibb.co/1L9qWFv/cremea.png',
        analitics: [],
        contenido: '100cm / 700mg',
        ratio: ''

      },     
    ],
    imgsbanner : [

    ]
    
  }
}

