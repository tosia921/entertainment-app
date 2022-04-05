import React from 'react'
// RTK Query
import { useGetTrendingMoviesQuery} from '../redux/features/ImbdApiSlice'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Styled Components
import styled, { css } from 'styled-components'

const TrendingMovies = () => {
    const { data, error, isLoading, isSuccess } = useGetTrendingMoviesQuery();
    console.log(data)
  return (
    <StyledSlider>
    {isLoading && <h1>Loading</h1>}
    {isSuccess && 
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
      {data.results.map(result => {
        return (
          <SwiperSlide>
            <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} />
          </SwiperSlide>
        )         
      })}
      </Swiper>
    }
    </StyledSlider>
  )
}

export default TrendingMovies

// Styles

const StyledSlider = styled.div`

  .mySwiper {
    width: 110%;
    height: 300px;
  } 

  .swiper-slide {
    height: 300px;
    height: 100%;
    img {
      height: 100%;
    width: 100%;
    object-fit: cover;
    }
  }
`