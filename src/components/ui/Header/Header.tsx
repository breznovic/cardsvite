import Logo from '@/assets/images/Logo'
import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.layout}>
      <div className={s.header}>
        <div className={s.logo}>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Header
