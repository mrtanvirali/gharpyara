'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/furniture';
import { useCartStore } from '@/lib/cart-store';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem(product);
    };

    return (
        <Link href={`/products/${product.id}`}>
            <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform hover:scale-110 duration-300"
                        />
                        {product.newArrival && (
                            <Badge className="absolute top-2 right-2 bg-green-500">New</Badge>
                        )}
                        {product.featured && (
                            <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>
                        )}
                    </div>
                    <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {product.category}
                        </p>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {product.description}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                            ${product.price.toFixed(2)}
                        </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full"
                        >
                            <Button
                                className="w-full"
                                onClick={handleAddToCart}
                            >
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                            </Button>
                        </motion.div>
                    </CardFooter>
                </Card>
            </motion.div>
        </Link>
    );
}
