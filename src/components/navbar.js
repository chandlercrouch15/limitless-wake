import React from 'react';
import { Link } from "gatsby"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Brand from "../images/limitless-logo.png"
import "./navbar.css"

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar color="dark" dark expand="md" id="navbar" style={{zIndex:`5`}}>
                    <NavbarBrand className="NavbarBrand start-navitem">
                        <Link to="/"><img src={Brand} width="100%" height="100%" className="navBrand d-inline-block align-top" style={{ maxWidth: `100px`, marginBottom: `0px` }}alt="Limitless Wake Logo" /></Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/" className="nav-item">Home</Link></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="nav-item text-white">
                                    Resources
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="resources/pricing" className="nav-item">
                                        <DropdownItem>
                                            Pricing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/locations" className="nav-item">
                                        <DropdownItem>
                                            Locations
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/boat-rentals" className="nav-item">
                                        <DropdownItem>
                                            Boat Rentals
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/faq" className="nav-item">
                                        <DropdownItem>
                                            FAQ
                                        </DropdownItem>
                                    </Link>
                                    <Link to="resources/testimonials" className="nav-item">
                                        <DropdownItem>
                                            Testimonials
                                        </DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink><Link to="/gallery" className="nav-item">Gallery</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/blog" className="nav-item">Blog</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/about" className="nav-item">About</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact" className="nav-item end-navitem">Contact</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}