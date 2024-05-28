
import { useEffect, useState } from 'react';
import style from  './menu.module.css';
import cn from 'classnames'
import { ICard } from '../../components/Card/card.props';
import Card from '../../components/Card/Card';

function Menu() {

  const[data,setData] = useState<Array<ICard>>([])

  async function  GetData() {
      const f = await fetch("https://purpleschool.ru/pizza-api-demo/products")
      const res = await f.json()
      setData(res)

  }

  useEffect(()=>{
    GetData()
  },[])

  return (
    <div className={style["menu"]}>
      <div className={style["header"]}>
            <h1>Меню</h1>
<div className={cn(style["input"])}>
              <img src="../../../public/search-icon.svg" alt="" />
              <input type="text"/>
            </div>
        </div>
        <div className={style["list"]}>
        {
          data.map((el)=>{
            return <Card key={el.id} id={el.id} name={el.name} ingredients={el.ingredients} image={el.image} />
          })
        }
        </div>
    </div>
  )
}

export default Menu