import { INavProp } from "./navigatebutton.props"
import { Link} from "react-router-dom"
import style from './navigateButton.module.css';
import cn from 'classnames'


const NavigateButton = ({title,icon,path}:INavProp) => {


  
  return (
    <Link className={cn(style["link"])}  to={path}>
        <img className={style["image"]} src={icon} alt="icon" />
        <span>{title}</span>
    </Link>
  )
}

export default NavigateButton