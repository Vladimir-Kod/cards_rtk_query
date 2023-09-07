import { FC } from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  text: string
  size?: TypographySizeType
  className?: string
}

export const Label: FC<Props> = ({ text, size, className }) => {
  return (
    <Typography className={className} size={size}>
      {text}
    </Typography>
  )
}
