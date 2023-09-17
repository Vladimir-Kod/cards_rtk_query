import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'
import { SliderProps } from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  className?: string
} & SliderProps

export const SliderRoot: FC<Props> = ({ defaultValue, max, step }) => (
  <form>
    <Slider.Root className={s.SliderRoot} defaultValue={defaultValue} max={max} step={step}>
      <Slider.Track className={s.SliderTrack}>
        <Slider.Range className={s.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
    </Slider.Root>
  </form>
)
