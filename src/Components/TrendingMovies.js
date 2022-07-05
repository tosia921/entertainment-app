import React, { useEffect } from 'react'
// RTK Query
import { useGetTrendingMoviesQuery} from '../redux/features/ImbdApiSlice'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Styled Components
import styled, { css } from 'styled-components'
import { device } from '../styles/breakpoints';

const TrendingMovies = () => {
    const { data, error, isLoading, isSuccess } = useGetTrendingMoviesQuery();
    // console.log(data)

  return (
    <>
    <Styledh2>Trending</Styledh2>
    <StyledSlider>
    {isLoading && <h1>Loading</h1>}
    {isSuccess && 
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 10,
          }
        }}
        className="mySwiper"
      >
      {data.results.map(result => {
        return (
          <SwiperSlide key={result.id}>
            <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} />
            <div className='details'>
              <div className='details__container'>
                <p className='details__container--date' >{result.first_air_date === undefined ? result.release_date.split('-')[0] : result.first_air_date.split('-')[0]}</p>
                <p className='details__container--type' >{result.media_type === 'tv' ? 'Tv Series' : 'Movie'}</p>
              </div>
              <p className='details__title'>{result.name ? result.name : result.title }</p>
            </div>
          </SwiperSlide>
        )         
      })}
      </Swiper>
    }
    </StyledSlider>
    </>
  )
}

export default TrendingMovies

// Styles

const Styledh2 = styled.h2`
  margin-bottom: 20px;
  font-weight: 200;
`

const StyledSlider = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: grab;
  &:target {
    cursor: grabbing;
  }
  h2 {
    margin-bottom: 20px;
  }
  .mySwiper {
    width: 140%;

    @media ${device.sm}{
      width: 130%;
      }
    @media ${device.lg}{
      width: 120%;
      }
    @media ${device.xl}{
      width: 130%;
      }
  } 

  .swiper-slide {
    width: 40%; 
    overflow: hidden;
    position: relative;
    img {
      border-radius: 20px;
    }
  }

  .details {
    position: absolute;
    bottom: 20px;
    left: 20px;

    &__container {
      opacity: 0.75;
      display: flex;

      p:not(:last-child) {
        margin-right: 20px;
      }

      &--date {
        
      }
      &--type {

      }

      &--date, &--type {
        font-size: 12px;
        @media ${device.sm}{
        font-size: 14px;
        }
        @media ${device.lg}{
          font-size: 16px;
        }
        @media ${device.xl}{
          font-size: 18px;
        }
      }
    }

    &__title {
      font-size: 14px;
      font-weight: 500;

      @media ${device.sm}{
        font-size: 14px;
      }
      @media ${device.lg}{
        font-size: 18px;
      }
      @media ${device.xl}{
        font-size: 24px;
      }
    }

  }
`