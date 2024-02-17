import type { Meta, StoryObj } from '@storybook/react'
import Input from './input'

const meta = {
  argTypes: {
    isError: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
}

export const InputWithError: Story = {
  args: {
    disabled: false,
    isError: true,
    label: 'Input',
  },
}

export const InputPasswordWithIcon: Story = {
  args: {
    disabled: false,
    isError: false,
    label: 'Input',
    type: 'password',
  },
}

export const InputSeachWithIcon: Story = {
  args: {
    disabled: false,
    isError: false,
    label: 'Input',
    type: 'search',
  },
}
