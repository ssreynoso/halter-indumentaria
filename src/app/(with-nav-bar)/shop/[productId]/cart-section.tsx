'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useCart } from '@/context/cart-context'
import { Product } from '@/types/utils'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export const CartSection = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState(0)
    const { AddProduct } = useCart()

    const { toast } = useToast()

    const addProduct = () => {
        if (quantity > 0) {
            AddProduct(product)
        } else {
            toast({
                title: 'Por favor, ingresá una cantidad mayor a 0.',
            })
        }
    }


    return (
        <div className="sticky w-full rounded bg-dots h-32 bottom-0 flex justify-between items-center p-4 gap-4">
            <div className="flex gap-4 justify-center h-2/3 basis-1/4 items-center bg-black w-min p-4">
                <Button onClick={() => setQuantity((value) => (value > 1 ? value - 1 : 0))} size="icon">
                    <MinusIcon />
                </Button>
                <p className='text-2xl font-semibold'>{quantity}</p>
                <Button onClick={() => setQuantity((value) => value + 1)} size="icon">
                    <PlusIcon />
                </Button>
            </div>
            <Button onClick={addProduct} className='h-2/3 basis-3/4 text-xl font-bold'>Añadir al carrito</Button>
        </div>
    )
}
