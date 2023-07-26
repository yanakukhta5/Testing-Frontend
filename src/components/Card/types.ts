import { HTMLAttributes } from 'react'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
 title: string
 graide?: number
}