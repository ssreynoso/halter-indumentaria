'use client'

import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MessageItem } from './message-item'
import { Input } from '@/components/ui/input'

const machineMessages = [
    `<p>Para maximizar tu presupuesto de $180 y asegurarnos de que obtengas una variedad de opciones, aquí tienes algunas sugerencias: </p>

    <h3 class="text-lg font-bold">Remeras:</h3>
    <ul class="list-disc ml-6">
        <li class="text-xs">
            <span class="font-bold">Remera Casual de Algodón - $15:</span>
            <p class="underline">https://halter-indumentaria/casual-algodon</p>
        </li>
        <li class="text-xs">
            <span class="font-bold">Remera Estampada de Edición Limitada - $25:</span>
            <p class="underline">https://halter-indumentaria/estampada-edicion-limitada</p>
        </li>
        <li class="text-xs">
            <span class="font-bold">Pack de 3 Remeras Básicas - Oferta Especial $30:</span>
            <p class="underline">https://halter-indumentaria/pack-3-basicas</p>
        </li>
    </ul>
    
    <h3 class="text-lg font-bold">Pantalones:</h3>
    <ul class="list-disc ml-6">
        <li class="text-xs">
            <span class="font-bold">Jeans Clásicos - $40:</span>
            <p class="underline">https://halter-indumentaria/jeans-clasicos</p>
        </li>
        <li class="text-xs">
            <span class="font-bold">Pantalón Deportivo Multifuncional - $35:</span>
            <p class="underline">https://halter-indumentaria/deportivo-multifuncional</p>
        </li>
        <li class="text-xs">
            <span class="font-bold">Chinos Elegantes - $45:</span>
            <p class="underline">https://halter-indumentaria/chinos-elegantes</p>
        </li>
    </ul>

    <h3 class="text-lg font-bold">Ofertas Especiales:</h3>
    <ul class="list-disc ml-6">
        <li class="text-xs">
            <span class="font-bold">Combo Exclusivo - Remera + Pantalón - $50:</span>
            <p class="underline">https://halter-indumentaria/combo-exclusivo</p>
        </li>
        <li class="text-xs">
            <span class="font-bold">Descuento del 20% en Compras Superiores a $100:</span>
            <p class="underline">https://halter-indumentaria/descuento-20</p>
        </li>
    </ul>
`,
    `
    <p>Los medios de pago aceptados son</p>
    <ul class="list-disc ml-6">
        <li>
            <span>Tarjeta de Crédito</span>
        </li>
        <li>
            <span>Tarjeta de Débito</span>
        </li>
        <li>
            <span>Mercado Pago</span>
        </li>
    </ul>
`,
    '<p>Los envíos se realizan a través de Correo Argentino</p>',
    `La guía de talles de las remeras es la siguiente:
    <ul class="list-disc ml-6">
        <li>
            <span>S: 50cm x 70cm</span>
        </li>
        <li>
            <span>M: 52cm x 72cm</span>
        </li>
        <li>
            <span>L: 54cm x 74cm</span>
        </li>
        <li>
            <span>XL: 56cm x 76cm</span>
        </li>
    </ul>
    `
]

export const FlexiButton = () => {
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState<{ value: string, sender: number }[]>([
        { value: '¡Hola! Soy Flexi, tu asistente virtual. En que te puedo ayudar?', sender: 0 }
    ])
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messages[messages.length - 1]?.sender === 1) {
            setTimeout(() => {
                const text = machineMessages.shift()
                setMessages([...messages, { value: text || '', sender: 0 }])
            }, 1000)
        }
    }, [messages])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setMessages([...messages, { value, sender: 1 }])
        setValue('')
    }

    useEffect(() => {
        if (container.current) {
            container.current.scrollTop = container.current.scrollHeight
        }
    }, [container.current?.scrollHeight, messages])
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='ghost' className='fixed right-4 bottom-10 w-14 h-14' >
                    <Image src='/icon-192x192.png' fill alt='logo' />
                </Button>
            </PopoverTrigger>
            <PopoverContent side='top' className='w-[500px] h-[70vh] p-2 translate-x-[-12px]'>
                <div className="w-full h-full mx-auto flex flex-col gap-4">
                    <div
                        ref={container} 
                        className='h-full pretty-scrollbar-y overflow-y-auto flex flex-col gap-2 p-2'
                    >
                        {messages.map((m, i) => (
                            <MessageItem key={i} message={m} />
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className='flex gap-2'>
                        <Input
                            placeholder='Escribe algo'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Button type='submit'>Enviar</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    )
}
