
import { Link } from 'react-router-dom'
import style from './card.module.css'
import { ICard } from './card.props'

function Card(prop:ICard){
  return (
    <Link to={`/product/${prop.id}`} className={style["card"]}>
        <div className={style["top"]}>
            <img src={prop.image} alt="image" />
        </div>
        <div className={style["bottom"]}>
                <h3>{prop.name}</h3>
                <div className={style["bottom-list"]}>
                  <span>
                  {
                    prop.ingredients.join(",")
                  }
                  </span>
                </div>
        </div>
    </Link>
  )
}

export default Card