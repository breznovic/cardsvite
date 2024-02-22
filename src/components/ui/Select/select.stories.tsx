import type { Meta, StoryObj } from '@storybook/react'

import { OptionType, Select } from './select'

const meta = {
  argTypes: {
    label: { control: 'text' },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const initialDefaultState: OptionType[] = [
  { disabled: false, title: 'Select 1', value: 'first' },
  { disabled: true, title: 'Select 2', value: 'second' },
  { disabled: false, title: 'Select 3', value: 'third' },
  { disabled: false, title: 'Select 4', value: 'fourth' },
]

export const SelectDefault: Story = {
  args: {
    disabled: false,
    label: 'Select',
    options: initialDefaultState,
    placeholder: initialDefaultState[0].title,
    variant: 'default',
  },
}

const initialPaginationState: OptionType[] = [
  { disabled: false, title: '10', value: 'Ten' },
  { disabled: false, title: '20', value: 'Twenty' },
  { disabled: false, title: '30', value: 'Thirty' },
  { disabled: false, title: '50', value: 'Fifty' },
  { disabled: false, title: '100', value: 'One hundred' },
]

export const SelectPagination: Story = {
  args: {
    disabled: false,
    label: 'Pagination',
    options: initialPaginationState,
    placeholder: initialPaginationState[0].title,
    variant: 'pagination',
  },
}
