import React from 'react'
// --- Router ---
import { NavLink } from "react-router-dom";
// --- Styles ---
import styled, { css } from 'styled-components'
import { device } from '../styles/breakpoints'
// --- Icons ---
import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as MenuTVSeries} from '../assets/icon-nav-tv-series.svg'
import {ReactComponent as MenuMovies} from '../assets/icon-nav-movies.svg'
import {ReactComponent as MenuHome} from '../assets/icon-nav-home.svg'
import {ReactComponent as MenuBookmark} from '../assets/icon-nav-bookmark.svg'
import UserIcon from '../assets/image-avatar.png'

// --- Menu Component ---
const Menu = () => {
  return (
    <StyledMenu>
        <div>
          <StyledLogo />
        </div>
        <menu>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'page-active' : undefined}>
                <StyledMenuHome />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Movies" className={({isActive}) => isActive ? 'page-active' : undefined}>
               <StyledMenuMovies/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tvseries" className={({isActive}) => isActive ? 'page-active' : undefined}>
                <StyledMenuTVSeries/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookmarked" className={({isActive}) => isActive ? 'page-active' : undefined}>
                <StyledMenuBookmark/>
              </NavLink>
            </li>
        </menu>
        <div className='user-icon'>
          <img src={UserIcon} alt="User Icon" />
        </div>
    </StyledMenu>
  )
}

export default Menu

// --- Styles ---
const SharedIcons = css`
  cursor: pointer;
  transform: scale(0.8);
  @media ${device.sm}{
    transform: scale(1);
  }
  @media ${device.lg}{
    &:hover {
      path {
        fill: #FC4747;
      }
    }
  }
`

const StyledLogo = styled(Logo)`
  transform: scale(0.8);
  @media ${device.sm}{
    transform: scale(1);
  }
  @media ${device.lg}{
    &:hover {
      path {
        fill: #FC4747;
      }
    }
  }
`
const StyledMenuTVSeries = styled(MenuTVSeries)`
  ${SharedIcons}
`
const StyledMenuMovies = styled(MenuMovies)`
  ${SharedIcons}
`
const StyledMenuHome = styled(MenuHome)`
  ${SharedIcons}
`
const StyledMenuBookmark = styled(MenuBookmark)`
  ${SharedIcons}
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
    @media ${device.lg}{
      width: 96px;
      height: 95vh;
      border-radius: 20px;
      flex-direction: column;
      padding: 35px 0px;
      justify-content: start;
      min-height: 500px;
    }

    .user-icon {
      height: 24px;
      width: 24px;
      @media ${device.sm}{
        height: 32px;
        width: 32px;
      }
      @media ${device.lg}{
        height: 40px;
        width: 40px;
        margin-top: auto;
      }
    }

    menu {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media ${device.lg}{
          flex-direction: column;
          margin-top: 75px;
          margin-bottom: 75px;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child){
          margin-right: 24px;
          @media ${device.sm}{
            margin-right: 32px;
          }
          @media ${device.lg}{
            margin-right: 0;
            margin-bottom: 40px;
          }
        }
        .page-active {
          svg {
            path {
              fill: white;
            }
          }
        }
      }
    }
`