import '@/styles/components/footer.css'
import { cn } from '@/lib/utils'
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Button } from './ui/button'

export const Footer = () => {
    return (
        <>
            <Separator />
            <footer
                className={cn(
                    'w-full max-w-7xl mx-auto h-[250px] flex [&>div]:basis-1/4',
                    '[&>div]:border-r [&>div]:border-r-white'
                )}
            >
                <div className='footer-item'>
                    <h3>Newsletter</h3>
                    {/* <p>form...</p> */}
                </div>
                <div className='footer-item'>
                    <h3>Shop</h3>
                    <ul>
                        <li>
                            <Button variant={'link'} className='h-4 text-md font-light p-0'>
                                <Link href='/shop'>Remeras</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant={'link'} className='h-4 text-md font-light p-0'>
                                <Link href='/shop'>Pantalones</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant={'link'} className='h-4 text-md font-light p-0'>
                                <Link href='/shop'>Ropa Interior</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h3>Info</h3>
                    <ul>
                        <li>
                            <Button variant={'link'} className='h-4 text-md font-light p-0'>
                                <Link href='/'>Nuestra historia</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className='footer-item border-none'>
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
