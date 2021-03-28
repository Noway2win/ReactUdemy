import React from 'react';

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input type="text" placeholder="what you think now" className="form-control new-post-label" />
			<button type="submit" className="btn btn-outline-secondary">
				Add post</button>
		</form>
	);
};

export default PostAddForm;