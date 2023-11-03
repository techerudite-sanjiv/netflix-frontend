import React, { useEffect } from 'react'
import Header from '../../components/header'
import MovieCard from '../../components/movieCard'
import Border from '../../components/border'
import cn from 'classnames'
import styles from "./dashboard.module.css"
import { myMovieList1, popular } from './movieList'
import { myMovieList2 } from './movieList'
import Slider from "react-slick";
const MovieDashboard = () => {


  console.log(myMovieList1);




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className={cn(styles["dashboard-container"])}>
      <Header />
      <div className='mx-5'>
        <div className="mt-5">
          <h5 className='text-light'>Popular On Netflix</h5>
          <Slider {...settings}>
            {popular.map((item) => {
              return (
                <div className={cn(styles["movie-card"], '')}>
                  <img src={item.image} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>

        <div className='mt-5'>
          <h5 className='text-light'>Trending Now</h5>
          <Slider {...settings}>
            {popular.map((item) => {
              return (
                <div className={cn(styles["movie-card"], '')}>
                  <img src={item.image} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>


        <div className='mt-5'>
          <h5 className='text-light'>Suspenseful Detective TV Dramas</h5>
          <Slider {...settings}>
            {popular.map((item) => {
              return (
                <div className={cn(styles["movie-card"], '')}>
                  <img src={item.image} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>

        <div className='mt-5'>
          <h5 className='text-light'>US TV Shows</h5>
          <Slider {...settings}>
            {popular.map((item) => {
              return (
                <div className={cn(styles["movie-card"], '')}>
                  <img src={item.image} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className='mt-5'>
          <h5 className='text-light'>Indian TV Thrillers & Mysteries</h5>
          <Slider {...settings}>
            {popular.map((item) => {
              return (
                <div className={cn(styles["movie-card"], '')}>
                  <img src={item.image} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>


      </div>

    </div>
  )
}

export default MovieDashboard