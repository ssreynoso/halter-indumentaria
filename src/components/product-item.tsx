'use client'

import { Product } from '@/types/utils'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCart } from '@/context/cart-context'
import Link from 'next/link'

export const ProductItem = ({ item }: { item: Product }) => {
    const { AddProduct } = useCart()

    const addProduct = () => {
        AddProduct(item)
    }

    return (
        <div className="w-full h-full object-cover relative">
            <div className={cn(
                'absolute w-full h-full transition-opacity flex justify-center items-center flex-col gap-6',
                'bg-transparent hover:bg-[rgba(0,0,0,.8)] opacity-0 hover:opacity-100 z-40'
            )}>
                <h3 className=' w-3/5 text-xl font-bold text-center font-outline-2'>{item.name}</h3>
                <div className='flex gap-4'>
                    <Button variant={'secondary'} onClick={addProduct} className='cursor-pointer'>Añadir al carrito</Button>
                    <Button className='cursor-pointer'>
                        <Link href={`/shop/${item.id}`}>Visitar</Link>
                    </Button>
                </div>
            </div>
            <Image className="object-cover w-full h-full" fill src={item.images[0]} alt={'image'} />
        </div>
    )
}
