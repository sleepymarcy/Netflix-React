import { Navbar, Nav, Form, Button, FormControl, NavDropdown, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import Netflix from '../assets/Netflix.svg'
import { BsSearch } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import React from 'react'
import Gallerie from "./GallerieRow";

class MyNavbar extends React.Component {

    state = {
        search: ''
    };

    render() {

        return (
            <>
                <Navbar className="Navbar" variant="dark" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={Netflix} alt="logo" className="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="App.js">Home</Nav.Link>
                            <Nav.Link href="#">TV Shows</Nav.Link>
                            <Nav.Link href="#">Movies</Nav.Link>
                            <Nav.Link href="#">Recently Added</Nav.Link>
                            <Nav.Link href="#">My List</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                    value={this.state.search}
                                    onChange={movie => this.setState({ search: movie.target.value })}
                                />
                                <Button variant="outline-dark"><BsSearch /></Button>
                            </Form>

                            <Nav.Link href="#"> KIDS </Nav.Link>

                            <Nav.Link><BsBellFill /></Nav.Link>

                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Manage Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Help Center</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Signout Netlix</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Gallerie sendSearch={this.state.search} />
            </>
        )
    }
}

export default MyNavbar