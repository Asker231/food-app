import { Outlet } from 'react-router-dom'
import style from './auth.module.css'

function Auth() {
  return (
    <div className={style['authLayout']}>
      <div className={style["logo"]}>
        <img src="../../../public/logoAuth.svg" alt="" />
      </div>
      <div className={style["content"]}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth