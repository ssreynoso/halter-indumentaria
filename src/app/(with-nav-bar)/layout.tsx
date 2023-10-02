'use client'

import { Footer } from '@/components/footer'
import { NavBar } from '@/components/nav-bar'
import { CartProvider } from '@/context/cart-context'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <CartProvider>
                <NavBar />
                {children}
            </CartProvider>
            <Footer />
        </div>
    )
}
