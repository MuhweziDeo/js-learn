import React, { Component } from 'react';
import './App.css';
import './Table';
import Table from './Table';
class App extends Component{
  render(){
    var name='dee';
    const characters = [
      {
          'name': 'Charlie',
          'job': 'Janitor'
      },
      {
          'name': 'Mac',
          'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
  ];
return (


<div className="container">
<h1>Hello {name}</h1>
<Table characterData={characters}/>
</div>

);
}

}
export default App;
