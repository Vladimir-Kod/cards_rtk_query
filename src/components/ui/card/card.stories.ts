import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Card } from '@/components/ui/card/card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    card: {
      option: ['mainCard'],
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const MainCard: Story = {
  args: {
    card: 'mainCard',
  },
}
