import React from 'react'
import styled from 'styled-components'

const HeaderSC = styled.header`
  height:60px;
  width:100%;
  background-color:black;
  display:flex;
  align-items:center;
`;

const LogoSC = styled.img`
  height:12px;
  margin:2%;
`;

function Header() {
    return (
        <HeaderSC>
            <LogoSC src='./images/logo_white.png' alt='black logo'></LogoSC>
        </HeaderSC>
    )
}

export default Header
