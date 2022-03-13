import React from 'react'

import styled from 'styled-components'
import { device } from '../styles/breakpoints'

const Menu = () => {
  return (
    <StyledMenu>
        <div className='logo'></div>
        <menu>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
            <ul>4</ul>
        </menu>
        <div></div>
    </StyledMenu>
  )
}

export default Menu

const StyledMenu = styled.nav`
    width: 100vw;
    height: 56px;
    background-color: ${p => p.theme.backgroundColorLight};
    margin-left: -16px;
    @media ${device.sm}{
        margin-left: 0px;
        margin-right: 0px;
        width: 100%;
        height: 72px;
        border-radius: 10px;
    }
`
