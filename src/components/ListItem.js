import React from 'react';

const ListItem = ({title, completed, handleChange}) => {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#cdcdcd',
		textDecoration: 'line-through'
	}

  return (
    <React.Fragment>
    	<p style={completed ? completedStyle : null}>
    		{title}
    	</p>
    	<input 
    		type="checkbox" 
    		value={completed} 
    		checked={completed}
    		onChange={() => handleChange}/>
    	<br />
    </React.Fragment>
  );
}

export default ListItem;