'use client';

import { Category, Material } from '@/data/furniture';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface FilterSidebarProps {
    selectedCategories: Category[];
    selectedMaterials: Material[];
    priceRange: [number, number];
    onCategoryChange: (category: Category) => void;
    onMaterialChange: (material: Material) => void;
    onPriceRangeChange: (range: [number, number]) => void;
    onClearFilters: () => void;
}

const categories: Category[] = ['Bedroom Sets', 'Living Room', 'Wardrobes', 'Dinning Sets', 'Consoles', 'Tables', 'Chairs', 'Sofa Sets', 'Office Furniture'];
const materials: Material[] = ['Wood', 'Metal', 'Fabric', 'Leather', 'Glass'];

export function FilterSidebar({
    selectedCategories,
    selectedMaterials,
    priceRange,
    onCategoryChange,
    onMaterialChange,
    onPriceRangeChange,
    onClearFilters,
}: FilterSidebarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
        >
            <div>
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onClearFilters}
                    className="w-full"
                >
                    Clear All Filters
                </Button>
            </div>

            <Separator />

            {/* Category Filter */}
            <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => onCategoryChange(category)}
                                className="rounded border-gray-300"
                            />
                            <span className="text-sm">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Material Filter */}
            <div>
                <h4 className="font-medium mb-3">Material</h4>
                <div className="space-y-2">
                    {materials.map((material) => (
                        <label key={material} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedMaterials.includes(material)}
                                onChange={() => onMaterialChange(material)}
                                className="rounded border-gray-300"
                            />
                            <span className="text-sm">{material}</span>
                        </label>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                            className="w-full px-3 py-2 border rounded text-sm"
                            placeholder="Min"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                            className="w-full px-3 py-2 border rounded text-sm"
                            placeholder="Max"
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        ${priceRange[0]} - ${priceRange[1]}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
