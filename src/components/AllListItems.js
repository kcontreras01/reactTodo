import React, {Component} from 'react';
import ListItem from './ListItem'

class AllListItems extends Component {
	constructor() {
		super()

		this.state = {
	  	todos: []
	  }

	  this.handleChange = this.handleChange.bind(this)
	}
 
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => this.setState({
					todos: res
				}))
			.catch(err => console.log(err))		
	} 

  handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
  }

  render() {
	  return (
	    <React.Fragment>
	    	{ this.state.todos.map(todo =>
	    		<ListItem 
	    			key={todo.id} 
	    			/>
	    		)	
	    	}
	    </React.Fragment>
	  );
  }
}

export default AllListItems;