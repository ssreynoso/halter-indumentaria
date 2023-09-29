import { Garment, Genre, Product } from '@/types/utils'
import products from '@/db/products.json'

export const getClothes = async (genre: Genre, garment: Garment) => {
    const clothes = await products.products[genre]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const clothes2 = clothes[garment] as Product[]
    clothes2.forEach((item) => {
        item.garment = garment
        item.genre = genre
    })
    return clothes2
}

export const getTShirts = async () => {
    const tShirts: Product[] = []

    let clothesMan = await getClothes('hombre', 'remeras') as Product[]
    clothesMan = clothesMan.slice(0, 5)

    let clothesWoman = await getClothes('mujer', 'remeras') as Product[]
    clothesWoman = clothesWoman.slice(0, 5)

    for(let i = 0; i < 5; i++) {
        tShirts.push(clothesMan[i])
        tShirts.push(clothesWoman[i])
    }

    return tShirts
}

export const getAllClothes = async (limit: number, offset: number) => {
    const clothes: Product[] = []

    let c: Product[] = []
    c = await getClothes('hombre', 'bermudas')
    clothes.push(...c)
    c = await getClothes('hombre', 'buzos')
    clothes.push(...c)
    c = await getClothes('hombre', 'mallas')
    clothes.push(...c)
    c = await getClothes('hombre', 'pantalones')
    clothes.push(...c)
    c = await getClothes('hombre', 'remeras')
    clothes.push(...c)
    c = await getClothes('hombre', 'ropaInterior')
    clothes.push(...c)
    c = await getClothes('hombre', 'sweatters')
    clothes.push(...c)
    c = await getClothes('mujer', 'remeras')
    clothes.push(...c)
    c = await getClothes('mujer', 'ropaInterior')
    clothes.push(...c)

    console.log(clothes.length)
    console.log('get con', limit, offset)
    return clothes.slice(offset, offset+limit)
}