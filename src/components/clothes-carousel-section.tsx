import { Separator } from '@/components/ui/separator'
import { Carousel } from './ui/carousel'

export const ClothesCarrouselSection = () => {
    return (
        <>
            <Separator />
            <section id='about' className="my-12 flex flex-col justify-center items-center gap-12 w-full max-w-7xl mx-auto">
                <Carousel
                    containerClassName='border border-white'
                    className='h-[300px] [&>*]:border-r [&>*]:border-r-white [&>*]:basis-1/4 [&>*]:p-4'
                    options={{
                        loop: true,
                        dragFree: true
                    }}
                    autoplayOptions={{
                        delay: 2000,
                        stopOnInteraction: false,
                        stopOnLastSnap: false,
                    }}
                >
                    <div><div className='w-full h-full bg-red-50'>Slide 1</div></div>
                    <div><div className='w-full h-full bg-red-100'>Slide 2</div></div>
                    <div><div className='w-full h-full bg-red-200'>Slide 3</div></div>
                    <div><div className='w-full h-full bg-red-300'>Slide 1</div></div>
                    <div><div className='w-full h-full bg-red-400'>Slide 2</div></div>
                    <div><div className='w-full h-full bg-red-500'>Slide 3</div></div>
                    <div><div className='w-full h-full bg-red-500'>Slide 3</div></div>
                    <div><div className='w-full h-full bg-red-500'>Slide 3</div></div>
                </Carousel>
            </section>
        </>
    )
}
