import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { Logout, PersonIcon } from '@/assets/icons'
import { HeaderAvatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type DropdownMenuDemoType = {
  imgUrl?: string
  avatarFallback?: string
  login?: string
  email?: string
}
export const DropdownMenuDemo: FC<DropdownMenuDemoType> = ({
  imgUrl,
  avatarFallback,
  login,
  email,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HeaderAvatar imgUrl={imgUrl} avatarFallback={avatarFallback} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.item}>
            <div className={s.header}>
              <HeaderAvatar imgUrl={imgUrl} avatarFallback={avatarFallback} />
              <div className={s.typography}>
                <Typography className={s.typography} size={'subtitle2'}>
                  {login}
                </Typography>
                <Typography className={s.typographyEmail} size={'caption'}>
                  {email}
                </Typography>
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.profile}>
            <Button className={s.button} variant={'link'}>
              <div className={s.itemChild}>
                <PersonIcon />
                <Typography className={s.typography} size={'caption'}>
                  My Profile
                </Typography>
              </div>
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.profile}>
            <Button className={s.button} variant={'link'}>
              <div className={s.itemChild}>
                <Logout />
                <Typography className={s.typography} size={'caption'}>
                  Sign Out
                </Typography>
              </div>
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow width={18} height={8} className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
