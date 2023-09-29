'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Separator } from './ui/separator'
import { getAllClothes } from '@/services/clothes'
import debounce from 'just-debounce-it'
import { Product } from '@/types/utils'
import { useNearScreen } from '@/hooks/use-near-screen'
import { ProductItem } from './product-item'

const Viewer = ({callback}: { callback: () => void }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const { isNearScreen } = useNearScreen({
        distance   : '200px',
        externalRef: ref,
        once       : false,
    })

    const debounceHandleNextPage = useCallback(
        debounce(callback),
        []
    )

    useEffect(() => {
        if (isNearScreen){
            debounceHandleNextPage()
        }
    }, [debounceHandleNextPage, isNearScreen])

    return <div ref={ref} className='w-full h-3'></div>
}

export const GridProductsSection = () => {
    const limit = 5
    const [offset, setOffset] = useState(0)
    const [allProducts, setAllProducts] = useState<Product[]>([])

    useEffect(() => {
        console.log('Hago get con ', limit, offset)

        getAllClothes(limit, offset)
            .then((products) => {
                const newProducts = [...allProducts]
                newProducts.push(...products)
                setAllProducts(newProducts)    
            })
    }, [offset])

    return (
        <>
            <Separator />
            <div className="my-12 max-w-7xl mx-auto min-h-screen">
                <div className="grid grid-cols-3 auto-rows-[350px] gap-4 mx-auto w-5/6 min-h-[500px]">
                    { allProducts.map((product) => (
                        <ProductItem key={`${product.genre}-${product.garment}-${product.id}`} item={product} />
                    ))}
                </div>
                <Viewer callback={() => setOffset(value => value + limit)}/>
            </div>
        </>
    )
}
