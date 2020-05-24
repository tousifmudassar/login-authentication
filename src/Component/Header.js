import React from 'react';
import {Link} from 'react-router-dom'
import {Row,Col,Navbar,Collapse,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

const Header = ()=>{
    return(
        <Row>
            <Col>
                <Navbar>
                    <NavbarBrand href="/">Todo App</NavbarBrand>
                    <Collapse>
                        <Nav>
                            <NavItem>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/logout">Logout</NavLink>
                         </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header;