import React from 'react'

import styled from 'styled-components'
import { device } from '../styles/breakpoints'

import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as MenuTVSeries} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as MenuMovies} from '../assets/icon-nav-movies.svg'
import {ReactComponent as MenuHome} from '../assets/icon-nav-home.svg'
import {ReactComponent as MenuBookmark} from '../assets/icon-nav-bookmark.svg'
import UserIcon from '../assets/image-avatar.png'

const Menu = () => {
  return (
    <StyledMenu>
        <StyledLogo />
        <menu>
            <ul>
              <StyledMenuHome/>
              </ul>
            <ul>
              <StyledMenuMovies/>
            </ul>
            <ul>
              <StyledMenuTVSeries/>
            </ul>
            <ul>
              <StyledMenuBookmark/>
            </ul>
        </menu>
        <div className='user-icon'>
          <img src={UserIcon} alt="User Icon" />
        </div>
    </StyledMenu>
  )
}

export default Menu

const StyledLogo = styled(Logo)`
  transform: scale(0.8);
`
const StyledMenuTVSeries = styled(MenuTVSeries)`
  transform: scale(0.8);
`
const StyledMenuMovies = styled(MenuMovies)`
  transform: scale(0.8);
`
const StyledMenuHome = styled(MenuHome)`
  transform: scale(0.8);
`
const StyledMenuBookmark = styled(MenuBookmark)`
  transform: scale(0.8);
`

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 56px;
    background-color: ${p => p.theme.backgroundColorLight};
    margin-left: -16px;
    padding: 0 16px;  
    @media ${device.sm}{
        margin-left: 0px;
        margin-right: 0px;
        padding: 0 24px;  
        width: 100%;
        height: 72px;
        border-radius: 10px;
    }

    .logo {
      svg {
        path {
          /* width: 25px;
          height: 20px; */
        }
      }
    }

    .user-icon {
      height: 24px;
      width: 24px;
    }

    menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 100px;
      max-width: 200px;

      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
`
