import React from 'react'

import cn from "classnames"
import styles from './border.module.css'

const Border = () => {
  return (
    <div className={cn(styles['border_box'])}></div>
  )
}

export default Border