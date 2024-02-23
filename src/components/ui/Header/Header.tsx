import s from './Header.module.scss'
import Logo from '../../../assets/images/Header/Logo'
import { Button } from '../Button/button'

type HeaderProps = {
  isLoggedIn: boolean
}
export const Header = (props: HeaderProps) => {
  const { isLoggedIn = false } = props

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      {isLoggedIn ? (
        <div className={s.userContainer}>
          Ivan
          <div className={s.user}></div>
        </div>
      ) : (
        <Button variant={'secondary'}>Sign in</Button>
      )}
    </div>
  )
}
