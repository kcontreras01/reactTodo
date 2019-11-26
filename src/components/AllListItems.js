import React, {Component} from 'react';
import ListItem from './ListItem'

class AllListItems extends Component {
	constructor() {
		super()

		this.state = {
	  	users: []
	  }

	  this.handleChange = this.handleChange.bind(this)
	}
 
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(res => this.setState({
					users: res
				}))
			.catch(err => console.log(err))		
	} 

  handleChange(id){
    this.setState(prevState => {
        const updatedTodos = prevState.users.map(user => {
            if (user.id === id) {
                user.completed = !user.completed
            }
            return user
        })
        return {
            users: updatedTodos
        }
    })
  }

  render() {
	  return (
	    <React.Fragment>
	    	{ this.state.users.map(user =>
	    		<ListItem 
	    			key={user.id}
	    			user={user} 
	    			/>
	    		)	
	    	}
	    </React.Fragment>
	  );
  }
}

export default AllListItems;