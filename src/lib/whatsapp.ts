import { execURL } from '@/lib/utils'

export const sendWhatsAppMessage = function (number: string, text: string) {
    // Ejecuto el link
    const url = `https://wa.me/${encodeURI(number)}?text=${encodeURI(text)}`
    execURL(url)
}
