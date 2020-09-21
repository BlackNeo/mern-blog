import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <MainContainer>
            <Link to="/">
                <h1>Bienvenue dans le blog <br/>
                MERN STACK</h1>
                <br/>
            </Link>
        </MainContainer>
    )
}

export default Header

// Main container
const MainContainer = styled.header`
    background: url(../../img/header-bg.jpg) no-repeat center/cover;
    height: 25rem;
    text-aign: center;

    h1 {
        transform: translate(-50, -50%);
        color: #fff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 25%;
        text-align: center
    }
`;