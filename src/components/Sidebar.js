import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
import './styles/Sidebar.css';
import { Link } from 'react-router-dom';
import userPic from '../images/user_pic.jpg';

import 'simple-line-icons/css/simple-line-icons.css';

class Sidebar extends Component {

	render() {
		return (
			<Row className="align-self-end">
				<Col sm="12" className="prSidebarHeader"></Col>
				<Col sm="12" className="prSidebarContent">
					<Row>
						<Col sm="12" className="prSidebarAvatar">
							<img src={userPic} className="rounded-circle img-fluid" alt="User Pic" title="Prodz.me" />
						</Col>
						<Col sm="12">
							<span className="prSidebarFullname">Pablo Rodriguez</span>
						</Col>
						<Col sm="12">
							<span className="prSidebarSubtitle">Fullstack Developer<br />UI/UX Designer</span>
						</Col>
						<Col sm="12" className="prSidebarMenu">
							<ul>
								<li><Link to={'/portfolio'}><i className="icon-grid"></i> <span>Portfolio</span></Link></li>
								<li><Link to={'/about'}><i className="icon-user"></i> <span>About Me</span></Link></li>
								<li><Link to={'/contact'}><i className="icon-envelope"></i> <span>Contact</span></Link></li>
							</ul>
						</Col>
					</Row>
				</Col>
				<Col sm="12" className="prFooter">
					<div className="prSocials">
						<a href="https://www.twitter.com/pablorr18" target="_new"><i className="fa fa-twitter" aria-hidden="true"></i></a>
						<a href="https://www.linkedin.com/in/pablo-rodriguez-685905126" target="_new"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
						<a href="https://github.com/pablorr18" target="_new"><i className="fa fa-github" aria-hidden="true"></i></a>
						<a href="https://www.behance.net/prodz" target="_new"><i className="fa fa-behance" aria-hidden="true"></i></a>
						<a href="http://www.dribbble.com/pablorr18" target="_new"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
					</div>
					<div>
						<span className="prCopyright"><i className="fa fa-copyright" aria-hidden="true"></i> 2017 PRODZ.me. All rights reserved.</span>
					</div>
				</Col>
			</Row>
		);
	}
}

export default Sidebar;
