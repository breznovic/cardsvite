import type { Meta, StoryObj } from '@storybook/react'

import { OptionType, RadioGroup } from './RadioGroup'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const initialDefaultState: OptionType[] = [
  { disabled: false, label: 'Radio 1', value: 'first' },
  { disabled: false, label: 'Radio 2', value: 'second' },
  { disabled: false, label: 'Radio 3', value: 'third' },
  { disabled: false, label: 'Radio 4', value: 'fourth' },
]

export const Default: Story = {
  args: {
    disabled: false,
    options: initialDefaultState,
  },
}

export const AllRadioItemsDisabled: Story = {
  args: {
    disabled: true,
    options: initialDefaultState,
  },
}
const initialSeveralDisabledState: OptionType[] = [
  { disabled: true, label: 'Radio 1', value: 'first' },
  { disabled: false, label: 'Radio 2', value: 'second' },
  { disabled: true, label: 'Radio 3', value: 'third' },
  { disabled: false, label: 'Radio 4', value: 'fourth' },
]

export const SeveralRadioItemsDisabled: Story = {
  args: {
    disabled: false,
    options: initialSeveralDisabledState,
  },
}
