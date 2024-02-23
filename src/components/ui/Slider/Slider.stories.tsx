import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './Slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    value: [2, 10],
  },
  render: args => {
    const [value, setValue] = useState(args.value)

    return (
      <>
        <Slider
          onValueChange={prev => {
            setValue(prev)
          }}
          value={value}
        />
      </>
    )
  },
}
