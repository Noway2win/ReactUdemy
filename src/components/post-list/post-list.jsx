import React from 'react';
import PostListItem from '../post-list-item/item'
const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList