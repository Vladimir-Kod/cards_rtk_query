import { StoryObj, Meta } from '@storybook/react'

import { Card } from '@/components/ui/card/card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['mainCard'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const MainCard: Story = {
  args: {
    variant: 'mainCard',
  },
}
