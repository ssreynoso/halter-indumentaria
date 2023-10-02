'use client'
import React, { PropsWithChildren } from 'react'
import { Button } from './ui/button'
import { WhatsappIcon } from './icons/whatsapp'
import { cn } from '@/lib/utils'

import { sendWhatsAppMessage } from '@/lib/whatsapp'
import { useTheme } from 'next-themes'

type Props = PropsWithChildren<{
    icon?: boolean
    className?: string
}>

export const WhatsAppButton = ({ icon, className, children }: Props) => {
    const { resolvedTheme } = useTheme()

    const handleWhatsappButton = async function() {
        try {
            const number = '5491157036135'
            const message = 'Hola! Quiero saber más sobre Neuronic AI'
            sendWhatsAppMessage(number, message)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            { icon ? (
                <Button
                    variant='outline'
                    className={cn(
                        'fixed right-4 bottom-4 xl:right-8 xl:bottom-8 z-50',
                        'w-12 h-12 p-0 [&>*]:w-8 [&>*]:h-8',
                        (!resolvedTheme || resolvedTheme === 'dark') ? 'fill-neuronicAI' : 'fill-neuronicAI'
                    )}
                    onClick={handleWhatsappButton}
                >
                    <WhatsappIcon />
                </Button>
            ) : (
                <Button
                    variant='default'
                    className={cn(
                        'text-xl h-14 bg-neuronicAI text-black shadow-lg shadow-[var(--neuronic-ai-transparent)]',
                        className
                    )}
                    onClick={handleWhatsappButton}
                >
                    { children }
                </Button>
            )}
        </>
    )
}
