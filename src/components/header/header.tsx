import { FC } from 'react'

import s from './header.module.scss'

import { Logo } from '@/assets/icons'
import { HeaderAvatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  isLoggedIn: boolean
  imgUrl?: string
  avatarFallback?: string
  loginName?: string
}
export const HeaderRoot: FC<Props> = ({ isLoggedIn, avatarFallback, imgUrl, loginName }) => {
  return (
    <div className={s.header}>
      <Logo />
      {isLoggedIn ? (
        <div className={s.avatar}>
          <Typography className={s.typography} size={'subtitle1'}>
            {loginName}
          </Typography>
          <HeaderAvatar imgUrl={imgUrl} avatarFallback={avatarFallback} />
        </div>
      ) : (
        <Button>Sign In</Button>
      )}
    </div>
  )
}
