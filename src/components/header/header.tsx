import { FC, ReactNode } from 'react'

import s from './header.module.scss'

import { Logo } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  isLoggedIn: boolean
  loginName?: string
  children?: ReactNode
}
export const HeaderRoot: FC<Props> = ({ isLoggedIn, loginName, children }) => {
  return (
    <div className={s.header}>
      <Logo />
      {isLoggedIn ? (
        <div className={s.avatar}>
          <Typography className={s.typography} size={'subtitle1'}>
            {loginName}
          </Typography>
          {children}
        </div>
      ) : (
        <Button>Sign In</Button>
      )}
    </div>
  )
}
