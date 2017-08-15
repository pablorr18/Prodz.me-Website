import React, { Component } from 'react';
import {Row, Col, Card, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
import './styles/Portfolio.css';

import { connect } from 'react-redux';
import { retrievePortfolioList } from '../redux/actions/portfolio.actions';

class Portfolio extends Component {

	componentDidMount(){
		const { portfolio } = this.props;
		if(portfolio.items.length < 1){
			console.log('componentWillMount:','looking for list');
			this.props.retrievePortfolioList();
		}
	}

	componentWillMount() {
	}

	componentWillReceiveProps(nextProps){
		console.log('nextProps:', nextProps);
	}

	createCards = () => {

		const { portfolio } = this.props;

		return portfolio.items.map( item => (
			<Col key={item.id} xs="4" sm="4" md="4" lg="3" xl="2">
				<Card className="prPortfolioCards">
					<Link to={`/portfolio/${item.slug}`}>
						<CardImg top width="100%" src={require('../images/portfolio/'+item.type +'/thumb/' + item.img_filename)} alt="Card image cap" />
					</Link>
				</Card>
			</Col>
		));
	}

	render() {
		return (
			<Row>
				<Col xs="12">
					<h1>Portfolio</h1>
				</Col>
				<Col xs="12">
					<Row>
						{this.createCards()}
					</Row>
				</Col>
			</Row>		
		);
	}
}

const mapStateToProps = (state) => {
	const { portfolio } = state;
	return { portfolio };
}

const actions = {retrievePortfolioList};

Portfolio = connect(mapStateToProps, actions)(Portfolio);

export default Portfolio;
