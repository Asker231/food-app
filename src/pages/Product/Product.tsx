import { Link, useLoaderData, useParams } from "react-router-dom"
import style from './product.module.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../helpers/Api"
import { ICard } from "../../components/Card/card.props"
import Button from "../../components/Button/Button"
import Loading from "../../components/Loading/Loading"


function Product() {
  const[isDownload,setDownLoad] = useState<boolean>(false)

    const {id} = useParams()
    const num = useLoaderData() as number

    console.log(num);
    
    const[product,setProduct] = useState<ICard>()
   async function getData(id:string|undefined){
        try {
          setDownLoad(true)
            const{data} = await axios.get(`${url}products/${id}`) 
            setProduct(data)
            setTimeout(()=>{
              setDownLoad(false)
            },500)
            
        } catch (error) {
               console.log(error);
                
        }
    }
    useEffect(()=>{
        getData(id)
    },[])
  return isDownload ? <Loading/>: (
    <div className={style["product"]}>
            <div className={style["header"]}>
              <div className={style["left"]}>
              <Link to='/'>  
              <div className={style["back"]}>
                <img src="../../../public/arrowback.svg" alt="" />
              </div></Link>
              <div className={style["title"]}>
                  {product?.name}
                </div>
              </div>
              <Button typeButton="small"> <img src="../../../public/cartBtn.svg" alt="" /> В корзину</Button>
            </div>
            <div className={style["bottom"]}>
               <div  className={style["img"]}> <img src={product?.image} alt="" /></div>
               <div className={style["section"]}>
                  <div className={style["price"]}>
                    <span>Цена</span>
                    {product?.price}
                  </div>
                  <div className={style["divider"]}></div>
                  <div className={style["rait"]}>
                         <span>Рейтинг</span>
                         <div className={style["rIcon"]}>
                          <span>{product?.rating}</span>
                            <img src="../../../public/star-icon.svg" alt="" />
                         </div>
                  </div>
                  <div className={style["ingr"]}>
                        <span>Состав:</span>
                        <ul>
                        {
                          product?.ingredients.map((el)=>{
                            return <li>{el}</li>
                          })
                        }
                        </ul>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default Product