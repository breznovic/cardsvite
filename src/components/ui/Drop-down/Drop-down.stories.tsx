import type { Meta } from '@storybook/react'

import { DeleteIcon } from '@/assets/images/Drop-down/DeleteIcon'
import { EditIcon } from '@/assets/images/Drop-down/EditIcon'
import { MenuDots } from '@/assets/images/Drop-down/MenuDots'
import { PlayCircle } from '@/assets/images/Drop-down/PlayCircle'
import { ProfileIcon } from '@/assets/images/Drop-down/ProfileIcon'
import { SignOutIcon } from '@/assets/images/Drop-down/SignOutIcon'
import img from '@/assets/images/Drop-down/img.jpg'
import { DropDown, DropDownMenuItemWithIcon } from '@/components/ui/Drop-down/Drop-down'

import s from '@/components/ui/Drop-down/Drop-down.module.scss'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta

export const Default = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
        <p style={{ fontSize: '26px', fontWeight: '700', margin: 0 }}>My Deck</p>
        <PlayCircle style={{ display: 'none' }} />
        <DropDown
          trigger={
            <button className={s.button}>
              <MenuDots />
            </button>
          }
        >
          <DropDownMenuItemWithIcon icon={<PlayCircle />} onSelect={() => {}} text={'Learn'} />
          <DropDownMenuItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Edit'} />
          <DropDownMenuItemWithIcon icon={<DeleteIcon />} onSelect={() => {}} text={'Delete'} />
        </DropDown>
      </div>
    )
  },
}

export const DefaultWithProfile = {
  render: () => {
    const userInfo = {
      email: 'j&johnson@gmail.com',
      name: 'Ivan',
    }

    return (
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
        <PlayCircle style={{ display: 'none' }} />
        <DropDown
          trigger={
            <button className={s.button} style={{ height: '36px', width: '36px' }}>
              <img alt={'avatar'} src={img} />
            </button>
          }
        >
          <DropDownMenuItemWithIcon
            icon={<img src={img} style={{ height: '36px', width: '36px' }} />}
            onSelect={() => {}}
            text={userInfo.email}
          />
          <DropDownMenuItemWithIcon
            icon={<ProfileIcon />}
            onSelect={() => {}}
            text={'My Profile'}
          />
          <DropDownMenuItemWithIcon icon={<SignOutIcon />} onSelect={() => {}} text={'Sign Out'} />
        </DropDown>
      </div>
    )
  },
}
