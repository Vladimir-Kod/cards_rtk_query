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

export const Header: Story = {
  args: {},
}
