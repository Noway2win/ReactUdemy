import React, {Component} from 'react';

export default class Filter extends Component{
	constructor(props){
		super(props);
		this.buttons=[
			{name: 'all', label: 'All'},
			{name: 'like', label: 'liked'}
		];
	}
	
	render(){
		const btns = this.buttons.map(({name, label})=>{
			const active = this.props.filter === name;
			const clasz = active ? 'btn-info' : 'btn-outline-secondary';
			return(
				<button
					key={name}
					className={`btn ${clasz}`}
					type="button"
					onClick={()=>this.props.onFilterSelect(name)}
				>{label}
				</button>
			);
		});	

		return (<div className="btn-group">
			{btns}
		</div>);}

}
