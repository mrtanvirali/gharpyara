'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { CartDrawer } from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/furniture';
import { Category, Material } from '@/data/furniture';

type SortOption = 'price-low' | 'price-high' | 'newest' | 'name';

function ProductsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category') as Category | null;

    const [selectedCategories, setSelectedCategories] = useState<Category[]>(
        categoryParam ? [categoryParam] : []
    );
    const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
    const [sortBy, setSortBy] = useState<SortOption>('newest');
    const [cartOpen, setCartOpen] = useState(false);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const handleCategoryChange = (category: Category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleMaterialChange = (material: Material) => {
        setSelectedMaterials((prev) =>
            prev.includes(material)
                ? prev.filter((m) => m !== material)
                : [...prev, material]
        );
    };

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedMaterials([]);
        setPriceRange([0, 2000]);
    };

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter((product) => {
            const categoryMatch =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);
            const materialMatch =
                selectedMaterials.length === 0 ||
                selectedMaterials.includes(product.material);
            const priceMatch =
                product.price >= priceRange[0] && product.price <= priceRange[1];

            return categoryMatch && materialMatch && priceMatch;
        });

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return filtered;
    }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

    return (
        <>
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl font-bold mb-2">All Products</h1>
                        <p className="text-muted-foreground">
                            Showing {filteredAndSortedProducts.length} of {products.length} products
                        </p>
                    </motion.div>

                    <div className="flex gap-8">
                        {/* Desktop Filters */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-20">
                                <FilterSidebar
                                    selectedCategories={selectedCategories}
                                    selectedMaterials={selectedMaterials}
                                    priceRange={priceRange}
                                    onCategoryChange={handleCategoryChange}
                                    onMaterialChange={handleMaterialChange}
                                    onPriceRangeChange={setPriceRange}
                                    onClearFilters={handleClearFilters}
                                />
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Sort and Mobile Filter Toggle */}
                            <div className="flex justify-between items-center mb-6">
                                <Button
                                    variant="outline"
                                    className="lg:hidden"
                                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                >
                                    Filters
                                </Button>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium">Sort by:</label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                                        className="px-3 py-2 border rounded-md text-sm"
                                    >
                                        <option value="newest">Newest</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="name">Name</option>
                                    </select>
                                </div>
                            </div>

                            {/* Mobile Filters */}
                            {mobileFiltersOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="lg:hidden mb-6 p-4 border rounded-lg"
                                >
                                    <FilterSidebar
                                        selectedCategories={selectedCategories}
                                        selectedMaterials={selectedMaterials}
                                        priceRange={priceRange}
                                        onCategoryChange={handleCategoryChange}
                                        onMaterialChange={handleMaterialChange}
                                        onPriceRangeChange={setPriceRange}
                                        onClearFilters={handleClearFilters}
                                    />
                                </motion.div>
                            )}

                            {/* Products Grid */}
                            {filteredAndSortedProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-xl text-muted-foreground mb-4">
                                        No products found matching your filters
                                    </p>
                                    <Button onClick={handleClearFilters}>Clear Filters</Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredAndSortedProducts.map((product, index) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <ProductCard product={product} />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        </>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading products...</p>
                </div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}
