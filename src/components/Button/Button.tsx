
import { ButtonProps} from './button.props'
import style from './button.module.css'

import cn from 'classnames'

const Button = ({ typeButton = 'small',className , ...prop}:ButtonProps) => {
  return (
    <button  className={cn(style['button'],style['accent'],className,{
        [style['small']]: typeButton === 'small',
        [style['big']]:typeButton === 'big'
    })} {...prop}>{prop.children}</button>
  )
}

export default Button