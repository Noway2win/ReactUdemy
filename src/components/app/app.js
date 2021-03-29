import React, {Component} from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../post-filter/post-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add/post-add';

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`;

const SearchPanelBlock = styled.div`
	display:flex;
	margin: 1rem 0;
`;

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data : [
				{
					label: 'Trying to add props',
					important:false,
					like:false,
					id: 1
				},
				{
					label: 'Crying about adding props',
					important:false,
					like:false,
					id: 2
				},
				{
					label: 'Happy about props',
					important:false,
					like:false,
					id: 3
				},
			],
			term: '',
			filter:'all'
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToogleImportant = this.onToogleImportant.bind(this);
		this.onToogleLiked = this.onToogleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
		this.maxId = 4;
	
	}
	deleteItem(id){
		this.setState(({data})=>{
			const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index),
				after = data.slice(index+1);

			const newArr = [...before, ...after];
			return {
				data: newArr
			};
		});
	}

	addItem(body){
		const newItem={
			label:body,
			important:false,
			id: this.maxId++
		};
		this.setState(({data})=>{
			const newArr = [...data, newItem];
			return {data: newArr};
		});
	}

	onToogleImportant(id){
		this.setState(({data})=>{
			const index = data.findIndex(elem => elem.id === id);

			const oldPost = data[index],
				newItem = {...oldPost, important: !oldPost.important};

			const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
			return {data:newArr};
		});
	}

	onToogleLiked(id){
		this.setState(({data})=>{
			const index = data.findIndex(elem => elem.id === id);

			const oldPost = data[index],
				newItem = {...oldPost, like: !oldPost.like};

			const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
			return {data:newArr};
		});
	}

	searchPost(items, term){
		if(term.length === 0){
			return items;
		}

		return items.filter(item=>{
			return item.label.indexOf(term)>-1;
		});
	}
	filterPost(items, filter){
		switch(filter){
		case 'like':
			return items.filter(item=>item.like); 
		case 'all': return items;
		}	
	}
	onUpdateSearch(term){
		this.setState({
			term
		});
	}
	onFilterSelect(filter){
		this.setState({filter});
	}
	render(){
		const {data, term, filter} = this.state;

		const liked = data.filter(item => item.like).length,
			totalPosts = this.state.data.length,
			visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<AppBlock>
				<Header liked={liked} totalPosts={totalPosts}/>
				<SearchPanelBlock>
					<SearchPanel 
						onUpdateSearch={this.onUpdateSearch}/>
					<Filter 
						filter={filter}
						onFilterSelect = {this.onFilterSelect}/>
				</SearchPanelBlock>
				<PostList posts={visiblePosts}
					onDelete={this.deleteItem} 
					onToogleImportant={this.onToogleImportant}
					onToogleLiked={this.onToogleLiked}/>
				<PostAddForm  onAdd={this.addItem}/>
			</AppBlock>
		);
	}
}


