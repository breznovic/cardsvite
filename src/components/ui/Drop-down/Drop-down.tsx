import { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu'

import s from './Drop-down.module.scss'

export type DropDownProps = {
  children: ReactNode
  trigger?: ReactNode
}

export const DropDown = ({ children, trigger }: DropDownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root onOpenChange={setOpen} open={open}>
      <DropdownMenu.Trigger asChild>{trigger ?? trigger}</DropdownMenu.Trigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align={'end'} className={s.content} forceMount sideOffset={2}>
          <div className={s.itemBox}>{children}</div>
          <DropdownMenu.Arrow className={s.arrow} />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu.Root>
  )
}
export type DropDownItemProfileProps = {
  children: ReactNode
}

// DropDown.DropDownItemProfile = ({ children }: DropDownItemProfileProps) => {
//   return <DropdownMenuItem className={s.dropDownItem}>{children}</DropdownMenuItem>
// }

export const DropDownItemProfile: FC<DropDownItemProfileProps> = ({ children }) => {
  return <DropdownMenuItem className={s.dropDownItem}>{children}</DropdownMenuItem>
}

export type DropDownMenuItemWithIconProps = {
  icon: ReactNode
  onSelect: (event: Event) => void
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropDownMenuItemWithIcon: FC<DropDownMenuItemWithIconProps> = ({
  icon,
  onSelect,
  text,
  ...rest
}) => {
  return (
    <DropdownMenuItem className={s.dropDownItem} onSelect={onSelect} {...rest}>
      {icon}
      <Typography as={'span'} variant={'caption'}>
        {text}
      </Typography>
    </DropdownMenuItem>
  )
}
