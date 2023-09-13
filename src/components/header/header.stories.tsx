import type { Meta, StoryObj } from '@storybook/react'

import { Logout, PersonIcon } from '@/assets/icons'
import { HeaderRoot } from '@/components/header'
import { HeaderAvatar } from '@/components/ui/avatar'
import { DropdownMenuDemo } from '@/components/ui/drop-down-menu'
import { ButtonForMenu } from '@/components/ui/drop-down-menu/button-for-menu'
import { HeaderWithAvatarForDropDMenu } from '@/components/ui/drop-down-menu/header-with-avatar-for-menu'

const meta = {
  title: 'Components/Header',
  component: HeaderRoot,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: ['true', 'false'],
  //   selectItemValue: ['HTML', 'SCC', 'React'],
  //   placeHolderValue: ['Select-box'],
  //   defaultValue: []
  // },
} satisfies Meta<typeof HeaderRoot>

export default meta
type Story = StoryObj<typeof meta>

const imgAvatar =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
const avatarFallback = 'KS'
const email = 'ksyusha@gmail.com'
const login = 'Ksyusha'

const dropDownMenuElement = [
  <HeaderWithAvatarForDropDMenu
    key={'1'}
    avatarFallback={avatarFallback}
    imgUrl={imgAvatar}
    email={email}
    login={login}
    withSeparator={true}
  />,
  <ButtonForMenu icon={<PersonIcon />} withSeparator={true} title={'My Profile'} key={'2'} />,
  <ButtonForMenu icon={<Logout />} withSeparator={false} title={'Sign Out'} key={'3'} />,
]

export const HeaderWithButton: Story = {
  args: {
    isLoggedIn: false,
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    loginName: 'ksyusha',
    isLoggedIn: true,
    children: (
      <DropdownMenuDemo
        trigger={<HeaderAvatar imgUrl={imgAvatar} avatarFallback={avatarFallback} />}
        dropDownMenuElement={dropDownMenuElement}
      />
    ),
  },
}
