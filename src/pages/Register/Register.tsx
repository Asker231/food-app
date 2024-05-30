import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import style from './register.module.css'

function Register() {
  return (
    <div className={style["register"]}>
          <TextField placeholder='Email' lable='Ваш email'/>
          <TextField placeholder='Пароль' lable='Ваш пароль'/>
          <TextField placeholder='Имя' lable='Ваше имя'/>
          <div className={style["bottom"]}>
          <Button className={style["buttoon"]} typeButton='big'>Вход</Button>
          <span>Есть аккаунта?</span>
          <NavLink to={'/auth/login'}>Войти</NavLink>
          </div>
    </div>
  )
}

export default Register