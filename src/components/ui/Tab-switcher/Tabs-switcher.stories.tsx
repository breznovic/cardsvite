import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { TabsSwitcher } from '@/components/ui/Tab-switcher/Tab-switcher'

const meta = {
  component: TabsSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabsSwitcher',
} satisfies Meta<typeof TabsSwitcher>

export default meta

const tab = [
  { tabsTitle: 'My Cards', value: 'My Cards' },
  { tabsTitle: 'All Cards', value: 'All Cards' },
  { tabsTitle: 'Rare Cards', value: 'Rare Cards' },
  { disabled: true, tabsTitle: 'Disabled', value: 'Rare' },
]

export const TabSwitcher = {
  args: {},
  render: () => {
    const [value, setValue] = useState('My cards')

    return (
      <div>
        <TabsSwitcher onValueChange={value => setValue(value)} tab={tab} title={'Title'} />
        <p style={{ marginTop: '36px' }}>{value}</p>
      </div>
    )
  },
}
