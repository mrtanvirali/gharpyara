'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart, Package, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ImageGallery } from '@/components/ImageGallery';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { products } from '@/data/furniture';
import { useCartStore } from '@/lib/cart-store';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params.id as string;
    const product = products.find((p) => p.id === productId);

    const [quantity, setQuantity] = useState(1);
    const [cartOpen, setCartOpen] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product not found</h1>
                    <Button onClick={() => router.push('/products')}>
                        Back to Products
                    </Button>
                </div>
            </div>
        );
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
        setCartOpen(true);
    };

    return (
        <>
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-6"
                    >
                        <Button
                            variant="ghost"
                            onClick={() => router.back()}
                            className="gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                    </motion.div>

                    {/* Product Details */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ImageGallery images={product.images} productName={product.name} />
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <div className="flex gap-2 mb-2">
                                    {product.featured && <Badge className="bg-orange-500">Featured</Badge>}
                                    {product.newArrival && <Badge className="bg-green-500">New Arrival</Badge>}
                                    <Badge variant="outline">{product.category}</Badge>
                                </div>
                                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                                <p className="text-3xl font-bold text-primary">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="font-semibold mb-2">Description</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <Separator />

                            {/* Specifications */}
                            <div>
                                <h3 className="font-semibold mb-3">Specifications</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Material</p>
                                        <p className="font-medium">{product.material}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Color</p>
                                        <p className="font-medium">{product.specifications.color}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Dimensions</p>
                                        <p className="font-medium">{product.specifications.dimensions}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Weight</p>
                                        <p className="font-medium">{product.specifications.weight}</p>
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* Quantity Selector */}
                            <div>
                                <h3 className="font-semibold mb-3">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border rounded-lg">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 font-medium">{quantity}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1"
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full"
                                            onClick={handleAddToCart}
                                        >
                                            <ShoppingCart className="mr-2 h-5 w-5" />
                                            Add to Cart
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                <div className="text-center">
                                    <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <p className="text-xs font-medium">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <p className="text-xs font-medium">Fast Delivery</p>
                                </div>
                                <div className="text-center">
                                    <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <p className="text-xs font-medium">2 Year Warranty</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </div>

            <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        </>
    );
}
