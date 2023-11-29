'use client'

import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MessageItem } from './message-item'
import { Input } from '@/components/ui/input'

const machineMessages = [
    'El mejor cliente de la empresa, basado en el número de pedidos realizados, es el cliente Santiago Pérez con 14 pedidos.\n\n¿Desea conocer más información sobre este cliente?',
    'Email: sanper@example.com\nDirección: Calle 123\nCiudad: Bogotá\nPaís: Colombia',
    'El último pedido realizado por Santiago Pérez fue el día 15 de septiembre de 2023.',
    'En ese pedido se compraron 3 productos:\n\n- 1x Hamburguesa Triple Cheddar\n- 1x Bebida Coca Cola 1.5lt\n- 1x Papas Fritas.',
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
                <Button variant='ghost' className='fixed right-4 bottom-10 w-10 h-10' >
                    <Image src='/icon-192x192.png' fill alt='logo' />
                </Button>
            </PopoverTrigger>
            <PopoverContent side='top' className='w-[500px] h-[400px] p-2 translate-x-[-12px]'>
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
