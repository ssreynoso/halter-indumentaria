import { Product } from '@/types/utils'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const ProductItem = ({ item }: { item: Product }) => {
    return (
        <div className="w-full h-full object-cover relative">
            <div className={cn(
                'absolute w-full h-full transition-opacity flex justify-center items-center flex-col gap-6',
                'bg-transparent hover:bg-[rgba(0,0,0,.5)] opacity-0 hover:opacity-100 z-40'
            )}>
                <h3 className=' w-4/5 text-xl font-bold text-center font-outline-2'>Remera {item.genre} {item.name}</h3>
                <Button className='cursor-pointer'>Visitar</Button>
            </div>
            <Image className="object-cover w-full h-full" fill src={item.images[0]} alt={'image'} />
        </div>
    )
}
