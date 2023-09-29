export type NavBarOption = { label: string, value: string }

export type Product = {
    id: string,
    name: string
    images: string[]
    genre: Genre
    garment: Garment
}

export type Genre = 'hombre' | 'mujer'

export type Garment = 'bermudas' | 'remeras' | 'mallas' | 'buzos' | 'ropaInterior' | 'sweatters' | 'pantalones'
