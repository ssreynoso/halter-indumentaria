import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export const AboutSection = () => {
    return (
        <>
            <Separator />
            <section id="about" className="my-12 flex flex-col justify-center items-center gap-12">
                <p className="text-2xl text-center w-3/5">
                    Comenzá a llenar tu carrito con nuestras remeras, buzos, jeans y muchos mas! Recordá que si superas
                    $30.000 tenes envio gratis!
                </p>
                <Button className="text-xl p-6 rounded-full">Empieza a comprar</Button>
            </section>
        </>
    )
}
