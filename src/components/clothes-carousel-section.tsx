'use client'

import { Separator } from '@/components/ui/separator'
import { Carousel } from './ui/carousel'
import { getTShirts } from '@/services/clothes'
import { ProductItem } from './product-item'
export const ClothesCarrouselSection = async () => {
    const clothes = await getTShirts()
    
    return (
        <>
            <Separator />
            <section id='about' className="my-12 flex flex-col justify-center items-center gap-12 w-full max-w-7xl mx-auto">
                <Carousel
                    buttons
                    containerClassName='border border-white'
                    className='h-[300px] [&>*]:border-r [&>*]:border-r-white [&>*]:basis-1/4'
                    options={{
                        loop: true,
                        dragFree: true
                    }}
                    autoplayOptions={{
                        active: true,
                        delay: 4000,
                        stopOnMouseEnter: true,
                        stopOnInteraction: false,
                        stopOnLastSnap: false,
                    }}
                >
                    { clothes.map(item => (
                        <ProductItem key={item.images[0]} item={item} />
                    ))}
                </Carousel>
            </section>
        </>
    )
}
