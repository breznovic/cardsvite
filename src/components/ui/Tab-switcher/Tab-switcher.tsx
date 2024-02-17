import { FC } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import s from './Tabs-switcher.module.scss'

type TabsListProps = {
  disabled?: boolean
  tabsTitle: string
  value: string
}
export type TabSwitcherProps = {
  onValueChange?: (value: string) => void
  tab: Array<TabsListProps>
  title: string
}

export const TabsSwitcher: FC<TabSwitcherProps> = ({ onValueChange, tab, title }) => {
  return (
    <div>
      <Typography as={'span'} className={s.title} variant={'body2'}>
        {title}
      </Typography>
      <TabsPrimitive.Root className={s.root} onValueChange={onValueChange}>
        <TabsPrimitive.List>
          {tab.map(tab => {
            return (
              <TabsPrimitive.Trigger
                className={s.tabsTrigger}
                disabled={tab.disabled}
                key={tab.value}
                value={tab.value}
              >
                {tab.tabsTitle}
              </TabsPrimitive.Trigger>
            )
          })}
        </TabsPrimitive.List>
      </TabsPrimitive.Root>
    </div>
  )
}
