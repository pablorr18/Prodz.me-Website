import React, { Component } from 'react';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import userPic from '../images/user_pic.jpg';

class MobileNavBar extends Component {

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
			<div className="hidden-sm-up fixed-top prMobileBar">
				<Navbar light toggleable className="prToBar">
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand href="/" className="prBrand">prodz.me</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto prMenuContainer" navbar>
							<NavItem className="prMenuItem">
								<Link to={'/portfolio'} onClick={this.toggle}>Portfolio</Link>
							</NavItem>
							<NavItem className="prMenuItem">
								<Link to={'/about'} onClick={this.toggle}>About Me</Link>
							</NavItem>
							<NavItem className="prMenuItem">
								<Link to={'/contact'} onClick={this.toggle}>Contact</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="prMobileAvatar">
					<img src={userPic} className="rounded-circle img-fluid" alt="User Pic" title="Prodz.me" />
				</div>
				<div className="prTopName">
					Pablo Rodriguez
				</div>
				<div className="prTopSubtitle">
					Fullstack Developer
				</div>
			</div>
		);
	}
}

export default MobileNavBar;

