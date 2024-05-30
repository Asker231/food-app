import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import style from './login.module.css'

function Login() {
  return (
    <div className={style["login"]}>
      <form >
      <TextField placeholder='Email' lable='Ваш email'/>
          <TextField placeholder='Пароль' lable='Ваш пароль'/>
          <div className={style["bottom"]}>
          <Button className={style["buttoon"]} typeButton='big'>Вход</Button>
          <span>Нет аккаунта?</span>
          <NavLink to={'/auth/register'}>Зарегистрироваться</NavLink>
          </div>
      </form>
    </div>
  )
}

export default Login