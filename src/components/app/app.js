import React from 'react';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../post-filter/post-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add/post-add';

const App = () => {

	const data = [5, 
		{
			label: 'Trying to add props',
			id: 'dsdssd'
		},
		{
			label: 'Crying about adding props',
 
			id: 'rewrwq'
		}, {
			label: 'Happy about props',
                   
			id: 'rqqwrrs'
		},];

	return (<div className='app'>
		<Header />
		<div className='search-panel d-flex'>
			<SearchPanel />
			<Filter />
		</div>
		<PostList posts={data} />
		<PostAddForm />
	</div>
	);
};

export default App;