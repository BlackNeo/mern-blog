import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <span className="copyright">
                &copy;{new Date().getFullYear()} Tous droits reservés @ ZSDEV.
            </span>
        </FooterContainer>
    )
}

export default Footer

// Footer Container
const FooterContainer = styled.footer`
    background: #334444;
    height: 4rem;
    left: 0;
    bottom: 0;
    width: 100%;
    .copyright {
        color: #ffffff;
        position: relative;
        top: 1rem;
        left: 20rem;
    }
`;