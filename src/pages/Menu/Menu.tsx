
import { useEffect, useState } from 'react';
import style from  './menu.module.css';
import cn from 'classnames'
import { ICard } from '../../components/Card/card.props';
import Card from '../../components/Card/Card';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

function Menu() {
  const[data,setData] = useState<Array<ICard>>([])
  const[isDownload,setDownLoad] = useState<boolean>(false)
  async function  GetData() {
    try{
      setDownLoad(true)
      const{data} = await axios.get<Array<ICard>>("https://purpleschool.ru/pizza-api-demo/products")
      setData(data)
      setTimeout(()=>{
        setDownLoad(false)
      },500)
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    GetData()
  },[])

  return isDownload ? <Loading/>:
  (
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