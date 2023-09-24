import { Button } from '@/components/ui/button'

export const OurStorySection = () => {
    return (
        <section className="my-12 h-[500px] w-full max-w-7xl mx-auto flex gap-6 justify-center items-center">
            <div className='w-1/2 bg-red-400 h-full'>{/* Image */}</div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-8'>
                <h1 className="xl:text-6xl text-white">Lorem, ipsum.</h1>
                <p className='w-4/5 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia atque adipisci nemo quas velit
                    repellendus ipsam enim quibusdam odio.
                </p>
                <Button className="text-xl p-6 rounded-full">Nuestra historia</Button>
            </div>
        </section>
    )
}
