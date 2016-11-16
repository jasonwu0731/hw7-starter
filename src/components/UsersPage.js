import React, { Component } from 'react';

import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

function HandleList(users){
  const list = [];
  users.forEach( (user, index) => {
    const temp = '#/users/'+(index+1).toString();
    list.push( <li key={index}><a href={temp}>User {index+1}</a></li> );
  });
  return list;
}

class UsersPage extends Component {
  state = {
    users: {},
  };

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then( res => { 
        return res.json();
      })
      .then(json => {
        //console.log(json)
        this.setState({ users: json });
      })
  }

  render() {
    const users_arr = this.state.users.users;
    if (users_arr === undefined) {
      return <div>No DATA...</div>;
    } 
    return (
      <div>{users_arr.length} users 
        <ul> {HandleList(users_arr)} </ul>
      </div>
    );
  }
}

export default UsersPage;
