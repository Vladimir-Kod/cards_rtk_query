import { FC, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'
import { SliderProps } from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/typography'

type Props = {
  className?: string
  changeSliderValue: (value: number[]) => void
} & SliderProps

export const SliderRoot: FC<Props> = ({ defaultValue, max, step, changeSliderValue }) => {
  const { sliderValue, changeSliderValue } = useState<number[]>([0, 50])
  const changeCurentValue = (value: number[]) => {
    // changeSliderValue(value)
  }

  return (
    <form>
      <div className={s.root}>
        <div className={s.sliderContainer}>
          <div className={s.minValue}>
            <Typography size={'body1'} className={s.typography}>
              {sliderValue ? sliderValue[0] : ''}
            </Typography>
          </div>
          <Slider.Root
            onValueChange={changeCurentValue}
            className={s.SliderRoot}
            defaultValue={sliderValue}
            max={max}
            step={step}
          >
            <Slider.Track className={s.SliderTrack}>
              <Slider.Range className={s.SliderRange} />
            </Slider.Track>
            <Slider.Thumb className={s.SliderThumb} aria-label="Volume">
              <div className={s.CenterSliderThumb}></div>
            </Slider.Thumb>
            <Slider.Thumb className={s.SliderThumb} aria-label="Volume1">
              <div className={s.CenterSliderThumb}></div>
            </Slider.Thumb>
          </Slider.Root>
          <div className={s.maxValue}>
            <Typography size={'body1'} className={s.typography}>
              {max}
            </Typography>
          </div>
        </div>
      </div>
    </form>
  )
}
