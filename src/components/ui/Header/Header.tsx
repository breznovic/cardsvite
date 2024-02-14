import s from './Header.module.scss'
import { Button } from '../Button/button'
import Logo from '@/assets/images/Header/Logo'

const Header = () => {
  return (
    <div className={s.layout}>
      <div className={s.header}>
        <div className={s.logo}>
          <Logo />
        </div>
        <Button className={s.button} variant={'secondary'}>
          Sign in
        </Button>
      </div>
    </div>
  )
}

export default Header
