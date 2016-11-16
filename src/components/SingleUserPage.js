import React, { Component, PropTypes } from 'react';

class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
  	user_data: {},
  }

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    //console.log(`id:${this.props.id}`)
    const temp = `/api/users/${this.props.id}`
    fetch(temp)
    	.then(res => {
    		const temp = res.json()
    		//console.log(temp)
    		return temp
    	})
    	.then(json => {
    		this.setState({ user_data: json });
    	})
  }

  render() {
  	const temp = this.state.user_data
  	//console.log(temp)
    return (
    	<div> User {this.props.id}
	    	<ul>
	    		<li>Avator: {temp.avator}</li>
		    	<li>Name: {temp.name}</li>
		    	<li>Age: {temp.age}</li>
	    	</ul>
    	</div>
    )
  }
}

export default SingleUserPage;
