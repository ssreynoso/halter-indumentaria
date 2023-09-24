import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const useRendered = () => {
    const [rendered, setRendered] = useState(false)
    useEffect(() => {
        setRendered(true)
    }, [])
    return rendered
}

export const useMediaQuerySm = () => {
    const rendered = useRendered()
    const matches = useMediaQuery('(min-width: 640px)')
    return rendered && matches
}

export const useMediaQueryMd = () => {
    const rendered = useRendered()
    const matches = useMediaQuery('(min-width: 768px)')
    return rendered && matches
}

export const useMediaQueryLg = () => {
    const rendered = useRendered()
    const matches = useMediaQuery('(min-width: 1024px)')
    return rendered && matches
}

export const useMediaQueryXl = () => {
    const rendered = useRendered()
    const matches = useMediaQuery('(min-width: 1280px)')
    return rendered && matches
}

export const useMediaQuery2Xl = () => {
    const rendered = useRendered()
    const matches = useMediaQuery('(min-width: 1536px)')
    return rendered && matches
}
