'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/cart-store';

interface CartDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
    const { items, totalItems, subtotal, updateQuantity, removeItem } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-between">
                        <span>Shopping Cart ({totalItems})</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onOpenChange(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full py-6">
                    {items.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                            <div className="text-6xl mb-4">🛒</div>
                            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Add some furniture to get started!
                            </p>
                            <Button onClick={() => onOpenChange(false)}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 overflow-y-auto space-y-4">
                                <AnimatePresence>
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="flex gap-4 p-4 border rounded-lg"
                                        >
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                                <Image
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                                                <p className="text-xs text-muted-foreground">{item.category}</p>
                                                <p className="text-sm font-bold mt-1">${item.price.toFixed(2)}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <motion.div whileTap={{ scale: 0.9 }}>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-7 w-7"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            <Minus className="h-3 w-3" />
                                                        </Button>
                                                    </motion.div>
                                                    <span className="text-sm font-medium w-8 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <motion.div whileTap={{ scale: 0.9 }}>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-7 w-7"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            <Plus className="h-3 w-3" />
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                            <motion.div whileTap={{ scale: 0.9 }}>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-4 pt-4">
                                <Separator />
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <Button className="w-full" size="lg">
                                    Proceed to Checkout
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => onOpenChange(false)}
                                >
                                    Continue Shopping
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
