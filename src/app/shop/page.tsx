import { GridProductsSection } from '@/components/grid-products-section'
import { ShopFirstSection } from '@/components/shop-first-section'
import React from 'react'

const ShopPage = () => {
    return (
        <div className="h-screen-nav-bar w-full mt-[var(--nav-bar-height)]">
            <ShopFirstSection />
            <GridProductsSection />
        </div>
    )
}

export default ShopPage
