import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/furniture';

export interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    totalItems: number;
    subtotal: number;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            subtotal: 0,

            addItem: (product) => {
                const items = get().items;
                const existingItem = items.find((item) => item.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({
                        items: [...items, { ...product, quantity: 1 }],
                    });
                }

                // Update totals
                const newItems = get().items;
                set({
                    totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
                    subtotal: newItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    ),
                });
            },

            removeItem: (productId) => {
                const items = get().items.filter((item) => item.id !== productId);
                set({
                    items,
                    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
                    subtotal: items.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    ),
                });
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                const items = get().items.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                );

                set({
                    items,
                    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
                    subtotal: items.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    ),
                });
            },

            clearCart: () => {
                set({
                    items: [],
                    totalItems: 0,
                    subtotal: 0,
                });
            },
        }),
        {
            name: 'furniture-cart',
        }
    )
);
