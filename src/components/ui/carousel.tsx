'use client'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PropsWithChildren, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { OptionsType } from 'embla-carousel-autoplay/components/Options'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

type AutoplayOptions = {
    delay: number
    stopOnInteraction: boolean
    stopOnLastSnap: boolean
}

type Props = PropsWithChildren<{
    className?: string
    containerClassName?: string
    buttons?: boolean
    buttonsOnHover?: boolean
    options?: EmblaOptionsType
    autoplayOptions: Partial<AutoplayOptions & OptionsType>
}>

export const Carousel = (props: Props) => {
    const { children, containerClassName, className, buttons, buttonsOnHover, options, autoplayOptions } = props

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
        <div className={cn('overflow-hidden w-full relative', containerClassName)} ref={emblaRef}>
            <div className={cn('flex [&>*]:grow-0 [&>*]:shrink-0 [&>*]:h-full', className)}>{children}</div>

            {buttons && (
                <>
                    <Button
                        size="icon"
                        className={cn(
                            'absolute left-2 top-1/2 translate-y-[-50%]',
                            buttonsOnHover ? 'hidden transition-opacity hover:visible' : 'visible'
                        )}
                        variant="outline"
                        onClick={scrollPrev}
                    >
                        <ArrowLeftIcon />
                    </Button>
                    <Button
                        size="icon"
                        className={cn(
                            'absolute right-2 top-1/2 translate-y-[-50%]',
                            buttonsOnHover ? 'hidden transition-opacity hover:visible' : 'visible'
                        )}
                        variant="outline"
                        onClick={scrollNext}
                    >
                        <ArrowRightIcon />
                    </Button>
                </>
            )}
        </div>
    )
}
