import { ITextField } from '../../interfaces/textFiedl.interface'
import style from './textField.module.css'

function TextField({lable,...prop}:ITextField) {
  return (
    <div className={style["textField"]}>
        <span>{lable}</span>
        <input {...prop}/>
    </div>
  )
}

export default TextField