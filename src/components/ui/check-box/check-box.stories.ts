import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxDemo } from '@/components/ui/check-box/index.ts'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxDemo,
  tags: ['autodocs'],
  argTypes: {
    value: ['Some checkBox'],
  },
} satisfies Meta<typeof CheckboxDemo>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBox: Story = {
  args: {
    value: 'Some checkBox',
  },
}
export const CheckBoxIsDisabled: Story = {
  args: {
    value: 'Some checkBox',
    disabled: true,
  },
}
