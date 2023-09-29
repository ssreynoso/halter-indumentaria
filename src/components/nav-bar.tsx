'use client'

import Link from 'next/link'
// import Image from 'next/image'
// import Logo from '@/assets/logo.png'
import { useBoolean, useEventListener } from 'usehooks-ts'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
// import { ModeToggle } from '@/components/dark-mode-toggle-button'
import { DropdownNavbarMenu } from '@/components/dropdown-navbar-menu'
import { NavBarOption } from '@/types/utils'
// import { ChangeTheme } from './change-theme'

const NavOptions = ({ options }: { options: NavBarOption[] }) => (
    <ul className={cn('hidden xl:flex xl:flex-row xl:gap-5 w-max absolute left-0')}>
        { options.map(op => (
            <li key={op.value}>
                <Button variant="link"> 
                    <Link href={op.value}>{op.label}</Link>
                </Button>
            </li>
        ))}
    </ul>
)


export const NavBar = () => {
    const { value: moved, setFalse: setMovedFalse, setTrue: setMovedTrue } = useBoolean(false)

    const navOptions = [
        { label: 'SHOP', value: '/shop' },
        { label: 'INFO', value: '/' },
    ]

    const onScroll = () => {
        if (window.scrollY > 0) {
            setMovedTrue()
        } else {
            setMovedFalse()
        }
    }

    useEventListener('scroll', onScroll)

    return (
        <nav
            className={cn(
                'px-4 w-full h-[var(--nav-bar-height)] border-b xl:px-0',
                'transition-all duration-500 fixed top-0 z-50 backdrop-blur-md border-b-transparent',
                moved && 'border-b-white bg-zinc-950'
            )}
        >
            <div className="w-full h-full mx-auto max-w-7xl flex justify-center items-center relative">
                {/* <Image src='' alt='Logo' className='h-2/3 max-h-10 w-max absolute left-0' /> */}
                <NavOptions options={navOptions}/>
                <Button variant='link' className=''>
                    <Link href='/'>
                        {/* <h2 className='text-xl'>Halter</h2> */}
                        <img className='h-full w-14' src="/logo.jpg" alt="Logo" />
                    </Link>
                </Button>
                <DropdownNavbarMenu options={navOptions} className='xl:hidden' />
                {/* <ModeToggle className='absolute right-0 hidden xl:inline-flex'/> */}
                {/* <ChangeTheme /> */}
            </div>
        </nav>
    )
}