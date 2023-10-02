export type NavBarOption = { label: string, value: string }

export type Product = {
    id: string,
    price: number,
    name: string
    images: string[]
    genre: Genre
    category: Category
}

export type Genre = 'hombre' | 'mujer'

export type Category = 'bermuda' | 'remera' | 'malla' | 'buzo' | 'ropa-interior' | 'sweatter' | 'pantalon'
