import type { Meta, StoryObj } from '@storybook/react'

import { HeaderRoot } from '@/components/header'

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

export const HeaderWithButton: Story = {
  args: {
    isLoggedIn: false,
  },
}
export const HeaderWithAvatar: Story = {
  args: {
    loginName: 'ksyusha',
    isLoggedIn: true,
    avatarFallback: 'VK',
    imgUrl:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  },
}
