import React from 'react';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel'
import Filter from "../post-filter/post-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add/post-add"

const App = () => {
    return (<div className="app">
        <Header />
        <div className="search-panel d-flex">
            <SearchPanel />
            <Filter />
        </div>
        <PostList />
        <PostAddForm />
    </div>
    )
}

export default App;