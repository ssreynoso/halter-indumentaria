'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export const Cart = () => {
    const { cartProducts, ChangeQuantity } = useCart()

    const finalizarPedido = () => {
        console.log('pedido finalizado')
        console.log(cartProducts)
    }

    // const addProduct = () => {
    //     console.log('Add Product desde Product item')
    //     CartDispatch({ type: 'AddProduct', payload: {
    //         category: 'bermuda',
    //         genre:'hombre',
    //         id: 'asdsad',
    //         images: [],
    //         name: 'JuanCobo',
    //         price: 2000
    //     } })
    // }

    useEffect(() => {
        console.log('Cambio', cartProducts)
    }, [cartProducts])

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="link" size="icon" className="absolute right-0 w-8 h-8">
                        <ShoppingCart />
                        {cartProducts.length !== 0 && (
                            <div className="absolute w-4 h-4 rounded-full bg-white bottom-0 right-0 flex justify-center items-center">
                                <span className="text-black text-xs font-bold">{cartProducts.length}</span>
                            </div>
                        )}
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="flex gap-4">
                            <ShoppingCart /> Tu carrito de compras
                        </SheetTitle>
                        <SheetDescription>
                            Visualizá los productos que añadiste al carrito acá. Podes eliminarlos y cambiar su
                            cantidad.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        {cartProducts.map((product) => (
                            <div key={product.product.id} className="grid grid-cols-12 items-center gap-4">
                                <div className="col-span-2 bg-red-50 h-full relative">
                                    <Image className='h-full w-full object-cover' fill src={product.product.images[0]} alt={product.product.name} />
                                </div>
                                <p className="col-span-6">{product.product.name}</p>
                                <span className="col-span-1">{product.quantity}</span>
                                <div className="w-full h-full flex gap-2 justify-center items-center col-span-3">
                                    <Button
                                        onClick={() => ChangeQuantity(product.product.id, true)}
                                        className="w-8 h-8"
                                        size="icon"
                                    >
                                        <PlusIcon />
                                    </Button>
                                    <Button
                                        onClick={() => ChangeQuantity(product.product.id, false)}
                                        className="w-8 h-8"
                                        size="icon"
                                    >
                                        <MinusIcon />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" onClick={finalizarPedido}>
                                Finalizar pedido
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}
