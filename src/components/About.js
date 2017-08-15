import React, { Component } from 'react';
import {Row, Col, Card, CardBlock} from 'reactstrap';

class About extends Component {

	render() {
		return (
			<Row>
				<Col xs="12">
					<h1>About Me</h1>
				</Col>
				<Col xs="12">
					<Card className="prCards">
						<CardBlock>
							<p>
								I'm a Fullstack Developer from Puerto Rico currently living in the great city of Chicago. I specialize in Mobile Cross-Platform Development (iOS & Android) but also in Web Front-end and Back-end Development. In addition, I design simple and clean interfaces for web, mobile and desktop applications.
							</p>
							<p>
								One of the greatest strengths about being a developer and a designer is that not only I can handle the graphical aspects of a project, but I can also fully understand how every element is supposed to work and take care of the highly technical aspect of coding it.
							</p>
							<p>
								Learning and keeping up with new technologies and languages is what inspires me to keep growing and evolving as a developer and professional.
							</p>
						</CardBlock>
					</Card>
				</Col>
			</Row>			
		);
	}
}

export default About;
