import React from 'react';

import styled from 'styled-components';

const HeaderDiv = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;
const Header = ({liked, totalPosts}) => {
	return (
		<HeaderDiv>
			<h1>Satsukevich Dzmirty</h1>
			<h2>{totalPosts} posts and {liked} likes</h2>
		</HeaderDiv>
	);
};

export default Header;