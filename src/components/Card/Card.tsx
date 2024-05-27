
import style from './card.module.css'
import { ICard } from './card.props'

function Card(prop:ICard){
  return (
    <div className={style["card"]}>
        <div className={style["top"]}>
            <img src={prop.image} alt="image" />
        </div>
        <div className={style["bottom"]}>
                <h3>{prop.name}</h3>
                <div className={style["bottom-list"]}>{prop.ingredients.map((el)=>{
                    return <span>{el}</span>
                })}</div>
        </div>
    </div>
  )
}

export default Card