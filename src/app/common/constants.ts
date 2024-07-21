  
export interface ProductCategory {
    destacados: string[];
    calzados: string[];
    ropa: string[];
}

export enum Categories {
    CALZADOS = 'calzados',
    ROPA = 'ropa'
}

export enum FilterOptions {
    MOST_RELEVANT = 'Más relevante',
    MOST_RECENT = 'Más reciente',
    LOWEST_PRICE = 'Menor precio',
    HIGHEST_PRICE = 'Mayor precio'
}

export enum AccordionFilters {
    SALE = 'Sale',
    SIZE = 'Size',
    CATEGORIES = 'Categories'
}

export interface AccordionFilter {
    name: AccordionFilters;
    label: string;
    discounts?: number[]; // Opcional para el filtro de 'Sale'
    categories?: Categories[]; // Opcional para el filtro de 'Categories'
  }
  
export const PRODUCT_SIZES: { [key in Categories]: (number | string)[] } = {
    [Categories.CALZADOS]: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14],
    [Categories.ROPA]: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
};
  
export const FILTER_OPTIONS_ARRAY = [
    { key: FilterOptions.MOST_RELEVANT, value: 'Más relevante' },
    { key: FilterOptions.MOST_RECENT, value: 'Más reciente' },
    { key: FilterOptions.LOWEST_PRICE, value: 'Menor precio' },
    { key: FilterOptions.HIGHEST_PRICE, value: 'Mayor precio' }
];

export const ACCORDION_FILTERS: AccordionFilter[] = [
    { name: AccordionFilters.SALE, label: 'Sale', discounts: [20, 30, 40, 50] },
    { name: AccordionFilters.SIZE, label: 'Size' },
    { name: AccordionFilters.CATEGORIES, label: 'Categories', categories: Object.values(Categories) }
];

export const STORE_NAVBAR_MENU = [
    {"name" : "hombre", 
        "products" :  {
            "destacados": [
                'Ver todo hombre',
                'Lo nuevo',
                'Lo más vendido',
                'Íconos',
                'Jordan',
                'Eventos Nike'
        ],
            "calzados": [
                'Ver todo el calzado',
                'Moda',
                'Jordan',
                'Air Max',
                'Air Force 1',
                'Dunk',
                'Botines',
                'Running',
                'Gym y Entrenamiento',
                'Nike SB',
                'Ojotas y Sandalias',
                'SALE en Calzado'
        ],
            "ropa": [
                'Ver toda la Ropa',
                'Remeras y Camisetas',
                'Shorts',
                'Pantalones y Calzas',
                'Buzos',
                'Camperas',
                'Jordan',
                'Medias',
                'Gorras',
                'SALE en Ropa'
        ],
    }},
    {"name" : "mujer", 
        "products" :  {
            "destacados": [
                'Ver todo Mujer',
                'Lo nuevo',
                'Lo más vendido',
                'Íconos',
                'Jordan',
                'Eventos Nike'
        ],
            "calzados": [
                'Ver todo el calzado',
                'Moda',
                'Jordan',
                'Air Max',
                'Air Force 1',
                'Dunk',
                'Botines',
                'Running',
                'Gym y Entrenamiento',
                'Ojotas y Sandalias',
                'SALE en Calzado'
        ],
            "ropa": [
                'Ver toda la Ropa',
                'Tops Deportivos',
                'Remeras y Camisetas',
                'Calzas',
                'Shorts y Polleras',
                'Pantalones y Calzas',
                'Buzos',
                'Camperas',
                'Maternidad',
                'Jordan',
                'Medias',
                'Gorras',
                'SALE en Ropa'
        ],
    }},   
    {"name" : "ninoa", 
        "products" :  {
            "destacados": [
                'Ver todo hombre',
                'Lo nuevo',
                'Lo más vendido',
                'Íconos',
                'Jordan',
                'Eventos Nike'
        ],
            "calzados": [
                'Ver todo el calzado',
                'Moda',
                'Jordan',
                'Air Max',
                'Air Force 1',
                'Dunk',
                'Botines',
                'Running',
                'Gym y Entrenamiento',
                'Nike SB',
                'Ojotas y Sandalias',
                'SALE en Calzado'
        ],
            "ropa": [
                'Ver toda la Ropa',
                'Remeras y Camisetas',
                'Shorts',
                'Pantalones y Calzas',
                'Buzos',
                'Camperas',
                'Jordan',
                'Medias',
                'Gorras',
                'SALE en Ropa'
        ],
    }},
    {"name" : "sale", 
        "products" :  {
           "destacados": {},
           "calzados": {},
           "ropa": {},
       }} 
]
