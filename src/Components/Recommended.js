import React, { useState } from 'react'
// RTK Query
import { useGetPopularMoviesQuery } from '../redux/features/ImbdApiSlice'
// Components
import CardTemplate from './CardTemplate'
// Styled Components
import styled, { css } from 'styled-components'
import { device } from '../styles/breakpoints';

const Recommended = () => {

  const { data, error, isLoading, isSuccess } = useGetPopularMoviesQuery(1);

  console.log(data)

  return (
    <PopularMovies>
        <h2>Popular Movies</h2>
        <div className='listing'>
        { isSuccess &&
            data.results.map(movie => {
                return (
                    <CardTemplate key={movie.id} title={movie.title} year={movie.release_date.split('-')[0]} type={`Movie`} img={movie.poster_path} />
                )
            })
        }
        </div>
    </PopularMovies>
  )
}

export default Recommended

const PopularMovies = styled.section`
    width: 100%;
    @media ${device.lg}{
        width: calc(100vw - 164px);
    }
    
    margin: 0;
    padding: 0;
    .listing {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
    
    h2 {
      font-size: 22px;
      font-weight: 200;
       margin: 20px 0px;
       max-width: 300px;
    }

`