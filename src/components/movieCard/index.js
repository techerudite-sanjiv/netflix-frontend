import React from 'react'
import cn from "classnames"
import styles from './movieCard.module.css'


const MovieCard = ({movie}) => {
    return (
        <div>
            <div className={cn(styles["movie-card"],'')}>
                <img src={movie} alt="" />
            </div>

        </div>
    )
}

export default MovieCard