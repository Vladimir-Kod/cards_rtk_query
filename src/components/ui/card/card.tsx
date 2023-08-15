import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  variant?: 'mainCard'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { variant = 'mainCard', className, as: Component = 'div', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
