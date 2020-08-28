import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-NavbarBrand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: withTheme;
        }
    } 
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nl-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">Contacts</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Styles>
)