import React, { Component } from 'react';
import {Row, Col, Card, CardBlock} from 'reactstrap';

class Contact extends Component {

	render() {
		return (
			<Row>
				<Col xs="12">
					<h1>Contact</h1>
				</Col>
				<Col xs="12">
					<Card className="prCards">
						<CardBlock>
							<p>
								Building products from the start, working side by side with others, creating new features and continuously improving is what I love about my job!
							</p>
							<p>
								Get in touch. Send me a message.
							</p>
						</CardBlock>
					</Card>
				</Col>
			</Row>		
		);
	}
}

export default Contact;
