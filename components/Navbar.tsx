'use client';

import Link from 'next/link';
import Image from "next/image";
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CartDrawer } from '@/components/CartDrawer';
import { useCartStore } from '@/lib/cart-store';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const totalItems = useCartStore((state) => state.totalItems);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center"
  >
    <Image
      src="/images/site-logo.png"   // put your logo inside /public folder
      alt="GharPyara"
      width={140}
      height={40}
      className="object-contain"
      priority
    />
  </motion.div>
</Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                                Products
                            </Link>
                            <div className="relative group">
                                <button className="text-sm font-medium hover:text-primary transition-colors">
                                    Categories
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                    <Link href="/products?category=Sofas" className="block px-4 py-2 hover:bg-accent">Sofas</Link>
                                    <Link href="/products?category=Chairs" className="block px-4 py-2 hover:bg-accent">Chairs</Link>
                                    <Link href="/products?category=Tables" className="block px-4 py-2 hover:bg-accent">Tables</Link>
                                    <Link href="/products?category=Bedroom" className="block px-4 py-2 hover:bg-accent">Bedroom</Link>
                                    <Link href="/products?category=Office" className="block px-4 py-2 hover:bg-accent">Office</Link>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 max-w-sm mx-6">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search furniture..."
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* Cart and Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative"
                                    onClick={() => setCartOpen(true)}
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    {totalItems > 0 && (
                                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                            {totalItems}
                                        </Badge>
                                    )}
                                </Button>
                            </motion.div>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="py-4 space-y-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search furniture..."
                                            className="pl-10"
                                        />
                                    </div>
                                    <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                                        Home
                                    </Link>
                                    <Link href="/products" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                                        Products
                                    </Link>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-muted-foreground">Categories</p>
                                        <Link href="/products?category=Sofas" className="block py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Sofas</Link>
                                        <Link href="/products?category=Chairs" className="block py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Chairs</Link>
                                        <Link href="/products?category=Tables" className="block py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Tables</Link>
                                        <Link href="/products?category=Bedroom" className="block py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Bedroom</Link>
                                        <Link href="/products?category=Office" className="block py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Office</Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        </>
    );
}
