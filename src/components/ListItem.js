import React from 'react';

const ListItem = ({user}) => {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through'
	}

  return (
    <React.Fragment>
    	<p>{user.name}</p>
    	<p>{user.email}</p>
    	<p>{user.phone}</p>
    	<br />
    </React.Fragment>
  );
}

export default ListItem;