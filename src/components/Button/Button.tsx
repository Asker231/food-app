import React from 'react'
import { ButtonProps} from './button.props'

const Button = ({...prop}:ButtonProps) => {
  return (
    <button  {...prop}>{prop.children}</button>
  )
}

export default Button