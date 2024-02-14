import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
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
          value={value}
          onValueChange={prev => {
            setValue(prev)
          }}
        />
      </>
    )
  },
}
