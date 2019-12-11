import React, { Component } from 'react';
import styled from 'styled-components';



export default class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href=' ' className="navbar-brand col-sm-3 col md-2 mr-0 align-items-center">Pokedex</a>
                </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
background: #ef5350 !important;
 .navbar-brand{
     color: white;
 }


`
