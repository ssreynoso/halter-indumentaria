import { Category, Genre, Product } from '@/types/utils'
import products from '@/db/products.json'

export const getAllClothes = async (all = true, limit = 10, offset = 0): Promise<Product[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clothes = (await products.products as any) as Product[]

    if (all) {
        return clothes
    }

    return clothes.slice(offset, offset+limit)
}

export const getClothes = async (genre: Genre, category: Category) => {
    const clothes = await getAllClothes()
    const clothes2 = clothes.filter(c => (c.genre === genre && c.category === category))
    return clothes2
}

export const getClothe = async (id: string) => {
    const products = await getAllClothes()
    return products.find(value => value.id === id)
}

export const getTShirts = async () => {
    const tShirts: Product[] = []

    let clothesMan = await getClothes('hombre', 'remera') as Product[]
    clothesMan = clothesMan.slice(0, 5)

    let clothesWoman = await getClothes('mujer', 'remera') as Product[]
    clothesWoman = clothesWoman.slice(0, 5)

    for(let i = 0; i < 5; i++) {
        tShirts.push(clothesMan[i])
        tShirts.push(clothesWoman[i])
    }

    return tShirts
}
