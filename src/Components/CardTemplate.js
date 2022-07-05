import React from 'react'
// Styled Components
import styled, { css } from 'styled-components'
import { device } from '../styles/breakpoints';

const CardTemplate = ({title, year, type, img}) => {
  return (
    <Card>
        <img src={`https://image.tmdb.org/t/p/w400${img}`}></img>
        <div>
            <div className='details'>
              <span className='year'>{year}</span>
              <span className='type'>{type}</span>
            </div>
            <p className='title'>{title}</p>
        </div>
    </Card> 
  )
}

export default CardTemplate

const Card = styled.div`
    width: 48%;
    margin-bottom: 30px;

    @media ${device.sm}{
      width: 32%;
    }
    @media ${device.lg}{
      width: 24%;
    }
    @media ${device.xl}{
      width: 19%;
    }
    img {
      border-radius: 20px;
    }
    .year,.type {
      font-size: 14px ;
      opacity: 0.75;
    }
    .year {
      margin-right: 15px;
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      @media ${device.sm}{
        font-size: 16px;;
      }
      @media ${device.lg}{
        font-size: 18px;
      }
    }
    .details {  
      margin-top: 5px;

      span {
        position: relative;
        font-weight: 300;
        font-size: 14px;
        @media ${device.sm}{
        font-size: 15px;;
      }
      @media ${device.lg}{
        font-size: 16px;
      }
      }
      span:not(:last-child)::after {
        content: '';
        display: inline-block;
        height: 3px;
        width: 3px;
        border-radius: 5px;
        background: #979797;
        opacity: 1;
        color: white;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10px;
      }
    }
`
