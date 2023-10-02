import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'
import Link from 'next/link'

export const MainSection = () => {
    const images = [
        '/halter/02B122D7-0075-4CA0-A6DA-491664719697.jpg',
        '/halter/IMG_6682.jpg',
        '/halter/IMG_8559.jpg',
        '/halter/IMG_8569.JPG',
        '/halter/IMG_6683.jpg',
        '/halter/IMG_9100.jpg',
    ]

    return (
        <section className='h-screen relative'>
            <div className='absolute w-full h-screen-nav-bar top-0 z-0'>
                <Carousel
                    className='h-screen [&>*]:basis-1/3 opacity-25'
                    options={{
                        loop: true,
                        dragFree: false,
                    }}
                    autoplayOptions={{ delay: 6000 }}
                >
                    { images.map((image) => (
                        <img className='object-cover w-full h-full' key={image} src={image} alt={image} />
                    ))}
                </Carousel>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-6 justify-center items-center z-10'>
                <h1 className="xl:text-6xl text-white font-bold">Halter Indumentaria</h1>
                <p className='text-xl font-semibold'>AHORRÁ EN TU SIGUIENTE COMPRA, 25% EN EFECTIVO/15% TRANFERENCIA BANCARIA</p>
                <Button className="text-xl p-6 rounded-full">
                    <Link href='/shop'>Comprá indumentaria</Link>
                </Button>
            </div>
        </section>
    )
}
