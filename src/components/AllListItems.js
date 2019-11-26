import React, {useState, useEffect} from 'react';
import ListItem from './ListItem'

const AllListItems = () => {
	const [todos, setTodos] = useState([]);
  const exampleRequest = 'https://jsonplaceholder.typicode.com/todos'

	useEffect(() => {
		getTodos()
	}, [])

	const getTodos = async () => {
    const response = await fetch(`${exampleRequest}`);
    const data = await response.json();
		setTodos(data)
	}

  return (
    <React.Fragment>
    	{ todos.map(todo =>
    		<ListItem key={todo.id} title={todo.title}/>
    		)	
    	}
    </React.Fragment>
  );
}

export default AllListItems;