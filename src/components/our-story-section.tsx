import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const OurStorySection = () => {
    return (
        <section className='my-12 h-[500px] w-full max-w-7xl mx-auto flex gap-6 justify-center items-center'>
            <div className='w-2/5 h-full bg-red-50 object-center'>
                <video className='object-cover w-full h-full' muted autoPlay loop>
                    <source src='/halter/remeras.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='w-3/5 h-full flex flex-col justify-center items-center gap-8'>
                <h1 className="xl:text-5xl text-white font-bold">Mirá lo último</h1>
                <p className='w-4/5 text-center text-2xl'>
                    Sé el primero en ver nuestras últimas prendas
                </p>
                <Button className="text-xl p-6 rounded-full">
                    <Link href='/shop'>Productos disponibles</Link>
                </Button>
            </div>
        </section>
    )
}
