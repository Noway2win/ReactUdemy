import React, {Component} from 'react';

export default class PostItem extends Component {
	constructor(props){
		super(props);
		this.state ={
			important: false,
			like: false
		};
		this.onImportant = this.onImportant.bind(this);
		this.onLike = this.onLike.bind(this);
	}

	onImportant(){
		this.setState(({important})=>({
			important: !important
		}));
	}

	onLike(){
		this.setState(({like})=>({
			like: !like
		}));
	}

	render() {
		const {label} = this.props;
		const  {important, like} = this.state;
		let classNames = 'app-list-item d-flex justify-content-between';
		if(like){
			classNames += ' like';
		}
		if (important) {
			classNames += ' important';
		}
		return (
			<li className={classNames}>
				<span  onClick={this.onLike} className="app-list-item-label">{label}</span>
				<div className="d-flex justify-content-center align-items-center">
					<button type="button" onClick={this.onImportant} className="btn-star btn-sm">
						<i className="fa fa-star"></i>
					</button>
					<button type="button" className="btn-trash btn-sm">
						<i className="fa fa-trash-o"></i>
					</button>
					<i className="fa fa-heart"></i>
				</div>
			</li>
		);
	}
}