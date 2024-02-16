import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

import { TextField } from '@/components/ui/Text-field/Text-field'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',

    type: 'text',
  },
}

export const Password = {
  args: {
    label: 'Input',
    password: true,
    placeholder: 'Input',
    search: false,
    type: 'password',
  },
}
export const Error = {
  render: () => {
    return <TextField disabled error errorMessage={'Error!'} label={'Input'} />
  },
  style: {
    color: 'red',
  },
}

export const Search: Story = {
  render: () => {
    const [text, setText] = useState('')
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value)
    }

    return (
      <>
        <TextField
          label={'Some text'}
          onChange={handelChange}
          placeholder={'Input search'}
          search
          value={text}
        />
      </>
    )
  },
}
