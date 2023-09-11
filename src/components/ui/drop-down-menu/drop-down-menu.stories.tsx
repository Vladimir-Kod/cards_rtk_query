import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuDemo } from '@/components/ui/drop-down-menu'

const meta = {
  title: 'Components/DropdownMenuDemo',
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: ['true', 'false'],
  //   selectItemValue: ['HTML', 'SCC', 'React'],
  //   placeHolderValue: ['Select-box'],
  //   defaultValue: []
  // },
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuWithAvatar: Story = {
  args: {
    imgUrl:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    avatarFallback: 'KS',
    login: 'Ksyusha',
    email: 'ksyusha@gmail.com',
  },
}

export const DropDownMenu: Story = {
  args: {},
}
