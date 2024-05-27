import {Outlet } from 'react-router-dom'
import style from './home.module.css'
import NavigateButton from '../../components/NavigateButton/NavigateButton'
import userImage from '../../assets/UserImage.png'
import Button from '../../components/Button/Button'



function Home() {    
   const navArray = [
      {
        id:1,
        title:"Меню",
        path:"/menu",
        icon:"../../../public/menu-icon.svg",
      },
      {
        id:2,
        title:"Корзина",
        path:"/cart",
        icon:"../../../public/cart-icon.svg",
      },
   ]  
  return (
    <div className={style['home']}>
        <div className={style["sideBar"]}>
            <div className={style["header"]}>
            <div className={style["personInfo"]}>
                <img src={userImage}  alt="" />
                <div className={style["username"]}>
                      <span> Kotsev Asker </span>
                      <img className={style["img"]} src="../../../public/bage.svg" alt="" /> 
                </div>

                <span className={style["userEmail"]}>kotsevasker0gmail.com</span>
            </div>
            <div className={style['navigation']}>
            {
                navArray.map((el)=>{
                    return <NavigateButton key={el.id} title={el.title} icon={el.icon} path={el.path}/>
                })
            }
            </div>
            </div>

        <div className={style["out"]}>
            <Button typeButton='small'>
                <img src="../../../public/exit-icon.svg" alt="" />
                Выйти
                </Button>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Home