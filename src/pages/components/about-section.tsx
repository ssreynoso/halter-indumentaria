import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export const AboutSection = () => {
    return (
        <>
            <Separator />
            <section id='about' className="my-12 flex flex-col justify-center items-center gap-12">
                <p className='text-2xl text-center w-3/5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quas, error harum labore rem
                    provident recusandae possimus consectetur maiores non.
                </p>
                <Button className="text-xl p-6 rounded-full">Start shopping</Button>
            </section>
        </>
    )
}
