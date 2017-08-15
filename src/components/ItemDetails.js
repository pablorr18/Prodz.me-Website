import React, { Component } from 'react';
import {Row, Col,Card, CardBlock} from 'reactstrap';
import {Link} from 'react-router-dom';
import './styles/ItemDetails.css';

import { connect } from 'react-redux';
import { retrievePortfolioList } from '../redux/actions/portfolio.actions';

class Details extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id:null,
			title: null,
			description: null,
			img_filename: null,
			type: null,
			links:null
		}
	}

	componentDidMount(){
		const { portfolio } = this.props;
		if(portfolio.items.length < 1){
			console.log('componentWillMount:','looking for list');
			this.props.retrievePortfolioList();
		}
		else{
			this.getItemInfo(portfolio.items);
		}
	}

	componentWillMount() {
		
	}

	componentWillReceiveProps(nextProps){
		console.log('nextProps:', nextProps);
		this.getItemInfo(nextProps.portfolio.items);
	}

	getItemInfo = (data) => {
		const itemSlug = this.props.match.params.slug;

		const item = data.find( item => item.slug === itemSlug);

		if(item){
			this.setState({
				id: item.id,
				title:item.title,
				description:this.createDescription(item),
				image: this.createImage(item),
				type: item.type,
				links: this.createLinks(item)
			});
		}
	}

	createImage = (item) => {
		if(item.img_filename){
			return (
				<img src={require('../images/portfolio/'+item.type+'/full/'+item.img_filename)} className="img-fluid" alt={item.slug} title={item.title} />
			);
		}
		else {
			return null
		};
	}

	createDescription = (item)=>{
		if(item.description){
			return (
				<div>
					<h4>Description:</h4>
					<p>{item.description}</p>
				</div>
			);
		}
		else {
			return null
		};
	}

	createLinks = (item)=>{
		if(item.links){
			return (
				<div>
					<h4>Links:</h4>
					{(item.links.ios) ? (<p><i className="fa fa-apple" aria-hidden="true"></i>: <a href={item.links.ios} target="_new">{item.links.ios}</a></p>): null}
					{(item.links.android) ? (<p><i className="fa fa-android" aria-hidden="true"></i>: <a href={item.links.android} target="_new">{item.links.android}</a></p>): null}
					{(item.links.web) ? (<p><i className="fa fa-globe" aria-hidden="true"></i>: <a href={item.links.web} target="_new">{item.links.web}</a></p>): null}
				</div>
			);
		}
		else {
			return null
		};
	}

	render() {

		return (
			<Row>
				<Col xs="12">
					<h1>Details</h1>
				</Col>
				<Col xs="12" className="prBtnBack">
					<Link to='/portfolio'><i className="icon-arrow-left-circle"></i> Return to Portfolio</Link>
				</Col>
				<Col xs="12">
					<Card className="prCards">
						<CardBlock>
							<Col sm="12" className="prDetailsTitle">
								<h2>{this.state.title}</h2>
							</Col>
							<Col sm="12" className="prDetailsImage">
								{this.state.image}
							</Col>
							<Col sm="12" className="prDetailsDescription">
								{this.state.description}
							</Col>
							<Col sm="12" className="prDetailsLinks">
								{this.state.links}
							</Col>
						</CardBlock>
					</Card>
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

Details = connect(mapStateToProps, actions)(Details);

export default Details;
