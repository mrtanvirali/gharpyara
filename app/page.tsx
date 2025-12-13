'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sofa, Armchair, Table2, Bed, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductSlider } from '@/components/ProductSlider';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { products } from '@/data/furniture';

const categories = [
  { name: 'Sofas', icon: Sofa, href: '/products?category=Sofa Sets', color: 'from-orange-400 to-pink-500' },
  { name: 'Chairs', icon: Armchair, href: '/products?category=Chairs', color: 'from-purple-400 to-indigo-500' },
  { name: 'Tables', icon: Table2, href: '/products?category=Tables', color: 'from-blue-400 to-cyan-500' },
  { name: 'Bedroom', icon: Bed, href: '/products?category=Bedroom Sets', color: 'from-green-400 to-emerald-500' },
  { name: 'Office', icon: Briefcase, href: '/products?category=Office Furniture', color: 'from-yellow-400 to-orange-500' },
];

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const featuredProducts = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 8);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
          <div className="container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Transform Your Space
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover premium furniture that combines style, comfort, and quality.
                  Elevate your home with our curated collection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" asChild className="text-lg">
                      <Link href="/products">
                        Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-lg">
                      View Collections
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] lg:h-[600px]"
              >
                <Image
                  src="/images/catalogue/living/living-12.jpeg"
                  alt="Modern living room"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Products Slider */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked favorites for your home</p>
            </motion.div>
            <ProductSlider products={featuredProducts} />
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Find exactly what you're looking for</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={category.href}>
                    <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg hover:shadow-2xl transition-shadow`}>
                      <category.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-2">New Arrivals</h2>
                  <p className="text-muted-foreground">Latest additions to our collection</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/products">View All</Link>
                </Button>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  GharPayra
                </h3>
                <p className="text-gray-400">
                  Premium furniture for modern living spaces.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Shop</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/products">All Products</Link></li>
                  <li><Link href="/products?category=Sofa Sets">Sofa Sets</Link></li>
                  <li><Link href="/products?category=Bedroom Sets">Bedroom Sets</Link></li>
                  <li><Link href="/products?category=Dinning Sets">Dinning Sets</Link></li>
                  <li><Link href="/products?category=Chairs">Chairs</Link></li>
                  <li><Link href="/products?category=Tables">Tables</Link></li>
                  <li><Link href="/products?category=Office Furniture">Office Furniture</Link></li>
                  <li><Link href="/products?category=Consoles">Consoles</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Contact</Link></li>
                  <li><Link href="#">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#">Help Center</Link></li>
                  <li><Link href="#">Shipping</Link></li>
                  <li><Link href="#">Returns</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 GharPayra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
