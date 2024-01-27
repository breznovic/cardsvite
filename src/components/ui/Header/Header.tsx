import Logo from '@/assets/images/Logo'
import s from './Header.module.scss'
import { Button } from '../button'

const Header = () => {
  return (
    <div className={s.layout}>
      <div className={s.header}>
        <div className={s.logo}>
          <Logo />
        </div>
        <Button variant="secondary" className={s.button}>Sign in</Button>
      </div>
    </div>
  )
}

export default Header
