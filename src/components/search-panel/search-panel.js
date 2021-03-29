import React, {Component} from 'react';


export default class SearchPanel extends Component {
	constructor(props){
		super(props);
		this.state={
			term:''
		};
		this.onUpdatesearch=this.onUpdatesearch.bind(this);
	}
	onUpdatesearch(e){
		const term = e.target.value;
		this.setState({
			term
		});
		this.props.onUpdateSearch(term);

	}
	render(){
		return (
			<input className="form-control search-input"
				type="text"
				placeholder="Search for post"
				onChange={this.onUpdatesearch} />
		);}
}

