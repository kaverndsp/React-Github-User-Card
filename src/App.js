import React from 'react';
import axios from "axios";
import Card from "./components/Card";

import './App.css';



class App extends React.Component {
  state={
    users: [],
    followers: []
  }
  
  componentDidMount(){
    axios.get("https://api.github.com/users/kaverndsp")
    .then( res => {
      console.log(res);
      this.setState({
        users: res.data
      })
      console.log(this.state.users)
    })
    .catch(err => {
      console.log("The data could not be returned", err)
    })
    axios.get("https://api.github.com/users/kaverndsp/followers")
    .then(response => {
      console.log("second call", response);
      this.setState({
        followers: response.data
      })
      console.log("this is the grabbed data", this.state.followers);
    })
    .catch(error => {
      console.log("The data for followers could not be returned", error)
    })

  }
  

  render(){
  return (
    <div className="App">
      <Card key={this.state.users.id} data={this.state.users} follower={this.state.followers}/>
      
  
    </div>
  );
}
}
export default App;
