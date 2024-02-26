import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckBox } from '.'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    checked: true,
    label: 'CheckBox',
  },

  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <CheckBox {...args} checked={checked} onChange={() => setChecked(!checked)} />
      </>
    )
  },
}

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'CheckBox',
  },
}
export const DisabledOff: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'CheckBox',
  },
}
