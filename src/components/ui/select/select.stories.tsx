import type { Meta, StoryObj } from '@storybook/react'

import { SelectRoot } from './select.tsx'

const meta = {
  title: 'Components/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: ['true', 'false'],
  //   selectItemValue: ['HTML', 'SCC', 'React'],
  //   placeHolderValue: ['Select-box'],
  //   defaultValue: []
  // },
} satisfies Meta<typeof SelectRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    placeHolderValue: 'Select-box',
    disabled: false,
    selectItemValue: ['HTML', 'SCSS', 'React'],
    labelValue: 'Select-box',
  },
}

export const SelectDisabled: Story = {
  args: {
    placeHolderValue: 'Select-box',
    disabled: true,
    selectItemValue: ['HTML', 'SCC', 'React'],
    labelValue: 'Select-box',
  },
}
