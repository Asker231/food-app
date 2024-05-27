
import style from  './menu.module.css';
import cn from 'classnames'

function Menu() {


  return (
    <div className={style["menu"]}>
      <div className={style["header"]}>
            <h1>Меню</h1>
<div className={cn(style["input"])}>
              <img src="../../../public/search-icon.svg" alt="" />
              <input type="text"/>
            </div>
        </div>
    </div>
  )
}

export default Menu