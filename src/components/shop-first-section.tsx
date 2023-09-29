import React from 'react'
import { Separator } from './ui/separator'

export const ShopFirstSection = () => {
    return (
        <>
            <Separator />
            <div className="h-[200px] max-w-7xl mx-auto my-12 flex items-center">
                <h3 className='w-1/2 text-5xl font-bold'>Comprá nuestros productos</h3>
                <p className='w-1/2 text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur excepturi quisquam, quis quas
                    exercitationem illo quia iusto similique nostrum.
                </p>
            </div>
        </>
    )
}
