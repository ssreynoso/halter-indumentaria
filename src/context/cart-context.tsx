// contexts/CartContext.js
'use client'
import { Product } from '@/types/utils'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

export interface IAppContextProps {
    cartProducts: { product: Product; quantity: number }[]
    AddProduct: (newProduct: Product) => void
    DeleteProduct: (productId: string) => void
    ChangeQuantity: (id: string, isSum: boolean) => void
}

const CartContext = createContext<IAppContextProps>({
    cartProducts: [],
    AddProduct: () => {},
    DeleteProduct: () => {},
    ChangeQuantity: () => {},
})

export const CartProvider = ({ children }: PropsWithChildren) => {
    const [cartProducts, setCartProducts] = useState<{ product: Product; quantity: number }[]>([])

    const AddProduct = (newProduct: Product, quantity = 1) => {
        const existingProduct = cartProducts.find((value) => value.product.id === newProduct.id)

        if (existingProduct) {
            ChangeQuantity(existingProduct.product.id, true)
        } else {
            setCartProducts((lastProducts) => {
                const newProducts = [...lastProducts]
                newProducts.push({ product: newProduct, quantity })
                return newProducts
            })
        }
    }

    const DeleteProduct = (productId: string) => {
        const existingProductIdx = cartProducts.findIndex((value) => value.product.id === productId)

        if (existingProductIdx >= 0) {
            setCartProducts((lastProducts) => {
                const newProducts = lastProducts.splice(existingProductIdx, 1)
                return newProducts
            })
        }
    }

    const ChangeQuantity = (id: string, isSum: boolean) => {
        const newProducts = [...cartProducts]
        const product = newProducts.find((value) => value.product.id === id)

        if (product) {
            if (isSum) {
                product.quantity++
            } else {
                if (product.quantity > 1) {
                    product.quantity--
                } else {
                    if (product.quantity === 1) {
                        const productIdx = newProducts.findIndex((value) => value.product.id === id)
                        newProducts.splice(productIdx, 1)
                    }
                }
            }
        }

        setCartProducts(newProducts)
    }

    return (
        <CartContext.Provider value={{ cartProducts, AddProduct, DeleteProduct, ChangeQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
