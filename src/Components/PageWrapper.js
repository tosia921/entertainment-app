import React from 'react'

import styled from 'styled-components';
import { device } from '../styles/breakpoints';

import Menu from './Menu';

const PageWrapper = ({children}) => {
  return (
    <Wrapper>
        <Menu />
        <main>
          {children}
        </main>
    </Wrapper>
  )
}

export default PageWrapper

const Wrapper = styled.div`
    padding: 0 16px;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${p => p.theme.backgroundColorDark};
    display: flex;
    flex-direction: column;

    @media ${device.sm}{
      padding: 23px 25px 0px 25px;
    }
    @media ${device.lg}{
      flex-direction: row;
    }
`;