import '@/styles/components/footer.css'
import { cn } from '@/lib/utils'
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Separator } from './ui/separator'

export const Footer = () => {
    return (
        <>
            <Separator />
            <footer
                className={cn(
                    'w-full max-w-7xl  mx-auto h-[300px] flex [&>div]:basis-1/4',
                    '[&>div]:border-r [&>div]:border-r-white'
                )}
            >
                <div className='footer-item'>
                    <h3>Newsletter</h3>
                    <p>form...</p>
                </div>
                <div className='footer-item'>
                    <h3>Shop</h3>
                    <ul>
                        <li>Lorem </li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum. </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h3>Info</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Preguntas frecuentes</li>
                        <li>No se que poner</li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h3>Encontranos</h3>
                    <div className='flex gap-2'>
                        <GitHubLogoIcon className='w-8 h-8'/>
                        <InstagramLogoIcon className='w-8 h-8'/>
                        <TwitterLogoIcon className='w-8 h-8'/>
                    </div>
                    <p className='absolute bottom-8'>©️ Halter indumentaria 2023</p>
                </div>
            </footer>
        </>
    )
}
