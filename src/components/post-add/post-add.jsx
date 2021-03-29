import React, {Component} from 'react';
import styled from 'styled-components';

const AddForm = styled.form`
	display: flex;
	margin-top: 20px;
`,
	AddFormInput = styled.input`
	display: block;
	width: 100%;
	height: calc(1.5em + .75rem + 2px);
	padding: .375rem .75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export default class PostAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e){
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: ''
		});
	}
	onValueChange(e){
		this.setState({
			text: e.target.value
		});
	}
	render(){
		return (
			<AddForm
				onSubmit={this.onSubmit}>
				<AddFormInput type="text" placeholder="what you think now" onChange={this.onValueChange}
					value={this.state.text}/>
				<button type="submit" className="btn btn-outline-secondary">
				Add post</button>
			</AddForm>
		);
	}
}
