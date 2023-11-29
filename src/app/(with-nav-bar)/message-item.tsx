'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { PersonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

type MessageItemProps = {
    message: { value: string; sender: number }
}

export const MessageItem = function ({ message }: MessageItemProps) {
    const sentByUser = message.sender === 1 // 1 es el usuario, 0 es el bot
    // const data = message.value.split('\n')

    const velocity = 50
    const [visibleText, setVisibleText] = useState('')

    useEffect(() => {
        if (message.sender === 1) {
            setVisibleText(message.value)
            return
        }

        let i = 0
        const interval = setInterval(() => {
            if (i <= message.value.length) {
                setVisibleText(message.value.slice(0, i))
                i++
            } else {
                clearInterval(interval)
            }
        }, velocity)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={cn(
                'min-w-[20%] w-fit max-w-[60%] rounded-lg p-1 mb-1 last:mb-0 relative break-all',
                sentByUser && 'bg-tertiary self-end mr-10',
                !sentByUser && 'bg-secondary ml-10'
            )}
        >
            { sentByUser ? (
                <div className='absolute top-3 right-[-40px] border-2 rounded-full h-8 w-8 flex items-center justify-center'>
                    <PersonIcon className="text-primary h-5 w-5" />
                </div>
            ) : (
                <Image src='/icon-192x192.png' width={40} height={40} className="absolute top-1 left-[-45px]" alt='icon'/>
            )}
            <div className="p-2">
                {/* {data.map((txt) => (
                    <p key={getUUID()} className="">
                        {txt}
                    </p>
                ))} */}
                <p className='break-keep'>
                    {visibleText}
                </p>
            </div>
        </div>
    )
}
