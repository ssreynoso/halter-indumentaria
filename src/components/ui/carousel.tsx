'use client'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PropsWithChildren, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { OptionsType } from 'embla-carousel-autoplay/components/Options'

type AutoplayOptions = {
    delay: number,
    stopOnInteraction: boolean,
    stopOnLastSnap: boolean,
}

type Props = PropsWithChildren<{
    className?: string
    containerClassName?: string
    buttons?: boolean
    options?: EmblaOptionsType
    autoplayOptions: Partial<AutoplayOptions & OptionsType>
}>

export const Carousel = ({ children, containerClassName, className, buttons, options, autoplayOptions }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={cn('overflow-hidden w-full', containerClassName)} ref={emblaRef}>
            <div className={cn('flex [&>*]:grow-0 [&>*]:shrink-0 [&>*]:h-full', className)}>
                {children}
            </div>
            
            { buttons && 
                <>
                    <Button className="absolute left-2 top-1/2 translate-y-[-50%]" variant='outline' onClick={scrollPrev}>
                        Prev
                    </Button>
                    <Button className="absolute right-2 top-1/2 translate-y-[-50%]" variant='outline' onClick={scrollNext}>
                        Next
                    </Button>
                </>
            }
        </div>
    )
}
