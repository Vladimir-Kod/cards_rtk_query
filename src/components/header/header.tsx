import s from './header.module.scss'

import { Logo } from '@/assets/icons'
import { Button } from '@/components/ui/button'

export const HeaderRoot = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Button>Sign In</Button>
    </div>
  )
}
