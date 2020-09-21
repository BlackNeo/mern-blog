import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logo from '../../bibinesports.png';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img style={{ width: "50px"}} src={logo} alt={logo} />  
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link p-2" to="/">Accueil<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link p-2" to="/ajouter">Ajouter</Link>
                    </li>
                    </ul>
                </div>
            </nav>           
        </NavbarContainer>
    )
}

export default Navbar
//Main Navbar Container
const NavbarContainer = styled.div`
    background: var(--dark-green);
    .nav-link {
        color: #fff !important;
        &:hover {
            background: var(--light-green);
        }
    } 
`;
