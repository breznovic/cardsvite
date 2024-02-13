import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '.'

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    checked: true,
    label: 'Check-box',
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
    label: 'Check-box',
    disabled: true,
  },
}
export const DisabledOff: Story = {
  args: {
    checked: false,
    label: 'Check-box',
    disabled: true,
  },
}
