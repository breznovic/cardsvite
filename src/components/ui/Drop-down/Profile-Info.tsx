import img from '@/assets/images/Drop-down/img.jpg'
import { Typography } from '@/components/ui/Typography'

import s from './Drop-down.module.scss'

export type ProfileInfoProps = {
  email: string
  name: string
}

export const ProfileInfo = ({ email, name }: ProfileInfoProps) => {
  return (
    <div className={s.profileContainer}>
      <img alt={'avatar'} src={img} />
      <div>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography className={s.profileName} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
