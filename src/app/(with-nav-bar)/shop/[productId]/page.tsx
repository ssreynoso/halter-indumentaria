import { Carousel } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { getClothe } from '@/services/clothes'
import Image from 'next/image'
import { CartSection } from './cart-section'
import { Badge } from '@/components/ui/badge'

const ProductPage = async ({ params }: { params: { productId: string }}) => {
    const { productId } = params
    const product = await getClothe(productId)
    // const product = null

    return (
        <div className="mt-[var(--nav-bar-height)] py-12 gap-12 h-screen-nav-bar grid grid-cols-2 max-w-7xl mx-auto">
            <div className='col-span-1 p-2'>
                { product ? (
                    <Carousel
                        buttons
                        containerClassName='w-2/3 mx-auto h-full'
                        className='h-full [&>div]:basis-full relative'
                        options={{ loop: false, dragFree: false }}
                        autoplayOptions={{ active: false }}
                    >
                        { product.images.map((image, idx) => (
                            <div key={idx} className='relative'>
                                <Image className='object-cover' fill src={image} alt={`${product.name} ${idx}`} />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <Skeleton className='w-full h-full' />
                )}
            </div>
            <div className='bg-white w-2 h-full absolute mx-auto top-0 left-1/2 translate-x-[-50%]'></div>
            <div className='relative h-full flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    { (product) ? (
                        <>
                            <div className='flex gap-4'>
                                <Badge>{product.genre}</Badge>
                                <Badge>{product.category}</Badge>
                            </div>
                            <h3 className='text-5xl font-bold'>{product.name}</h3>
                            <p className='w-2/3 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis temporibus tempore ab tempora quis ducimus consequatur asperiores eum modi.</p>
                        </>
                    ) : (
                        <>
                            <div className='flex gap-4'>
                                <Skeleton className='rounded-xl w-20 h-4' />
                                <Skeleton className='rounded-xl w-20 h-4' />
                            </div>
                            <Skeleton className='w-1/2 h-8' />
                            <Skeleton className='w-2/3 h-4' />
                            <Skeleton className='w-1/3 h-4' />
                            <Skeleton className='w-2/3 h-4' />
                            <Skeleton className='w-1/3 h-4' />
                            <Skeleton className='w-1/3 h-4' />
                        </>
                    )}
                </div>
                { product ? (
                    <CartSection product={product}/>
                ) : (
                    <div className="sticky w-full rounded bg-dots h-32 bottom-0 flex justify-between items-center p-4 gap-4">
                        <div className="flex gap-10 justify-center h-2/3 basis-1/4 items-center bg-black w-min p-4">
                            <Skeleton className='w-11 h-11' />
                            <Skeleton className='w-11 h-11' />
                        </div>
                        <Skeleton className='h-2/3 basis-3/4 text-xl font-bold' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductPage
