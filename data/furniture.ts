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
  id: '34',
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
  id: '35',
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
  id: '36',
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
  id: '37',
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
  id: '38',
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
  id: '39',
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
  id: '40',
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
  
  {
  id: '41',
    name: 'Office Furniture 05', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-05.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

{
  id: '42',
    name: 'Office Furniture 06', 
    description: 'Office Furniture with elegant design. Perfect for contemporary living spaces.',
    price: 400.99,
    category: 'Office Furniture',
    material: 'Wood',
    images: [
      '/images/catalogue/office/office-06.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Grey & Brown'
    },
  },

  {
    id: '43',
    name: 'Bedroom Sets 11',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-11.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '44',
    name: 'Bedroom Sets 12',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-12.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '45',
    name: 'Bedroom Sets 13',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-13.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '46',
    name: 'Bedroom Sets 14',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-14.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '47',
    name: 'Bedroom Sets 15',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-15.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '48',
    name: 'Bedroom Sets 16',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-16.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '49',
    name: 'Bedroom Sets 17',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-17.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

{
    id: '50',
    name: 'Bedroom Sets 18',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-18.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },

 {
    id: '51',
    name: 'Bedroom Sets 19',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-19.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  }, 

 {
    id: '52',
    name: 'Bedroom Sets 20',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-20.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  
 {
    id: '53',
    name: 'Bedroom Sets 21',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-21.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '54',
    name: 'Bedroom Sets 22',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-22.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  
{
    id: '55',
    name: 'Bedroom Sets 23',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-23.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

 {
    id: '56',
    name: 'Bedroom Sets 24',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-24.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   
  
{
    id: '57',
    name: 'Bedroom Sets 25',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-25.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '58',
    name: 'Bedroom Sets 26',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-26.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '59',
    name: 'Bedroom Sets 27',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-27.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '60',
    name: 'Bedroom Sets 28',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-28.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '61',
    name: 'Bedroom Sets 29',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-29.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '62',
    name: 'Bedroom Sets 30',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-30.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '63',
    name: 'Bedroom Sets 31',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-31.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '64',
    name: 'Bedroom Sets 32',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-32.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '65',
    name: 'Bedroom Sets 33',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-33.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '66',
    name: 'Bedroom Sets 34',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-34.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  }, 
  
{
    id: '67',
    name: 'Bedroom Sets 35',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-35.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '68',
    name: 'Bedroom Sets 36',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-36.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '69',
    name: 'Bedroom Sets 37',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-37.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '70',
    name: 'Bedroom Sets 38',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-38.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '71',
    name: 'Bedroom Sets 39',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-39.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '72',
    name: 'Bedroom Sets 40',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-40.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '73',
    name: 'Bedroom Sets 41',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-41.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '74',
    name: 'Bedroom Sets 42',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-42.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },   

{
    id: '75',
    name: 'Bedroom Sets 43',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-43.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  
{
    id: '76',
    name: 'Bedroom Sets 44',
    description: 'Bedroom Set with elegant design. Perfect for contemporary living spaces.',
    price: 500.99,
    category: 'Bedroom Sets',
    material: 'Wood',
    images: [
      '/images/catalogue/bedroom/bedroom-44.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '120 lbs',
      color: 'Walnut Brown'
    },
  },
  
{
    id: '77',
    name: 'Living Room 05',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-05.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '78',
    name: 'Living Room 06',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-06.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '79',
    name: 'Living Room 07',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-07.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '80',
    name: 'Living Room 08',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-08.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '81',
    name: 'Living Room 09',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-09.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '82',
    name: 'Living Room 10',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-10.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '83',
    name: 'Living Room 11',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-11.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '84',
    name: 'Living Room 12',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 1000.99,
    category: 'Living Room',
    material: 'Wood',
    images: [
      '/images/catalogue/living/living-12.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '220 lbs',
      color: 'Grey & Brown'
    },
  }, 

{
    id: '85',
    name: 'Wardrobes 03',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-03.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '86',
    name: 'Wardrobes 04',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-04.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '87',
    name: 'Wardrobes 05',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-05.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

{
    id: '88',
    name: 'Wardrobes 06',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-06.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '89',
    name: 'Wardrobes 07',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-07.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
   },

{
    id: '90',
    name: 'Wardrobes 08',
    description: 'Living Room Set with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-08.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
   },

{
    id: '91',
    name: 'Wardrobes 02',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-09.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

{
    id: '92',
    name: 'Wardrobes 10',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-10.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

{
    id: '93',
    name: 'Wardrobes 11',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-11.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '94',
    name: 'Wardrobes 12',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-12.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

{
    id: '95',
    name: 'Wardrobes 13',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-13.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
    newArrival: true,
  },

{
    id: '96',
    name: 'Wardrobes 14',
    description: 'Wardrobe with elegant design. Perfect for contemporary living spaces.',
    price: 200.99,
    category: 'Wardrobes',
    material: 'Wood',
    images: [
      '/images/catalogue/wardrobe/wardrobe-14.jpeg',
    ],
    specifications: {
      dimensions: '72" W x 84" L',
      weight: '70 lbs',
      color: 'Grey & Brown'
    },
  },

];