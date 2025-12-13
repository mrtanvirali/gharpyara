export type Category = 'Bedroom Sets' | 'Living Room' | 'Wardrobes' | 'Dinning Sets' | 'Consoles' | 'Tables' | 'Chairs' | 'Sofa Sets' | 'Office Furniture';
export type Material = 'Wood' | 'Metal' | 'Fabric' | 'Leather' | 'Glass';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  material: Material;
  images: string[];
  specifications: {
    dimensions: string;
    weight: string;
    color: string;
  };
  featured?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bedroom Sets 01',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    featured: false,
  },
  {
    id: '2',
    name: 'Bedroom Sets 02',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    newArrival: true,
  },
  {
    id: '3',
    name: 'Bedroom Sets 03',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    featured: false,
  },
  {
    id: '4',
    name: 'Bedroom Sets 04',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    newArrival: true,
  },
  {
    id: '5',
    name: 'Bedroom Sets 05',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-05.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    featured: true,
  },
  {
    id: '6',
    name: 'Bedroom Sets 06',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-06.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    newArrival: true,
  },
  {
    id: '7',
    name: 'Bedroom Sets 07',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-07.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  {
    id: '8',
    name: 'Bedroom Sets 08',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-08.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    featured: true,
  },
  {
    id: '9',
    name: 'Bedroom Sets 09',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-09.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
    newArrival: true,
  },
  {
    id: '10',
    name: 'Bedroom Sets 10',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-10.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  {
    id: '11',
    name: 'Living Room 01',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '12',
    name: 'Living Room 02',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '13',
    name: 'Living Room 03',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },
  {
    id: '14',
    name: 'Living Room 04',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },
  {
    id: '15',
    name: 'Wardrobes 01',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '16',
    name: 'Wardrobes 02',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '17',
    name: 'Dinning Set 01',
    description: 'Dinning Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Dinning Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/dinning/dinning-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    featured: true,
  },
  {
    id: '18',
    name: 'Dinning Set 02',
    description: 'Dinning Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 600.99,
    category: 'Dinning Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/dinning/dinning-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '19',
    name: 'Dinning Set 03',
    description: 'Dinning Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 600.99,
    category: 'Dinning Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/dinning/dinning-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },
  {
    id: '20',
    name: 'Dinning Set 04',
    description: 'Dinning Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 600.99,
    category: 'Dinning Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/dinning/dinning-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },
  {
    id: '21',
    name: 'Console 01',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Consoles',
    material: 'Wood',
    images: [
      '/images/catalogue/consoles/consoles-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    featured: true,
  },

  {
    id: '22',
    name: 'Console 02',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Consoles',
    material: 'Wood',
    images: [
      '/images/catalogue/consoles/consoles-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

  {
    id: '23',
    name: 'Console 03',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Consoles',
    material: 'Wood',
    images: [
      '/images/catalogue/consoles/consoles-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

  {
    id: '24',
    name: 'Console 04',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Consoles',
    material: 'Wood',
    images: [
      '/images/catalogue/consoles/consoles-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

  {
    id: '25',
    name: 'Table 01',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Tables',
    material: 'Wood',
    images: [
      '/images/catalogue/tables/tables-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

  {
    id: '26',
    name: 'Table 02',
    description: 'Table with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Tables',
    material: 'Wood',
    images: [
      '/images/catalogue/tables/tables-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

  {
    id: '27',
    name: 'Table 03',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Tables',
    material: 'Wood',
    images: [
      '/images/catalogue/tables/tables-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

  {
    id: '28',
    name: 'Table 04',
    description: 'Console with elegant design. Perfect for contemporary living spaces.',
    price: 300.99,
    category: 'Tables',
    material: 'Wood',
    images: [
      '/images/catalogue/tables/tables-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

 {
  id: '29',
    name: 'Chair 01',
    description: 'Chair with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Chairs',
    material: 'Wood',
    images: [
      '/images/catalogue/chairs/chair-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '40 lbs',
      color: 'Grey & Brown'
    },
     },

  {
  id: '30',
    name: 'Chair 02',
    description: 'Chair with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Chairs',
    material: 'Wood',
    images: [
      '/images/catalogue/chairs/chair-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '40 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

  {
  id: '31',
    name: 'Chair 03',
    description: 'Chair with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Chairs',
    material: 'Wood',
    images: [
      '/images/catalogue/chairs/chair-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '40 lbs',
      color: 'Grey & Brown'
    },
    featured: true,
  },

  {
  id: '32',
    name: 'Chair 04',
    description: 'Chair with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Chairs',
    material: 'Wood',
    images: [
      '/images/catalogue/chairs/chair-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '40 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

  {
  id: '33',
    name: 'Sofa Sets 01',
    description: 'Sofa Set with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Sofa Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/sofa/sofa-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

  {
  id: '33',
    name: 'Sofa Sets 02',
    description: 'Sofa Set with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Sofa Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/sofa/sofa-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
    featured: true,
  },

  {
  id: '34',
    name: 'Sofa Sets 03',
    description: 'Sofa Set with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Sofa Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/sofa/sofa-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

  {
  id: '35',
    name: 'Sofa Sets 04',
    description: 'Sofa Set with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Sofa Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/sofa/sofa-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

  {
  id: '36',
    name: 'Office Furniture 01', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-01.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
     featured: true,
  },

  {
  id: '37',
    name: 'Office Furniture 02', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-02.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

  {
  id: '38',
    name: 'Office Furniture 03', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

  {
  id: '39',
    name: 'Office Furniture 04', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

];

