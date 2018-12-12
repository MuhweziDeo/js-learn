import React, { Component } from 'react';
import './App.css';
import './Table';
import Table from './Table';
class App extends Component{
  state={
    characters:[
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
    ]
  };
  render(){
    var name='dee';
    removeCharacter=index=>{
        const {characters}=this.state;
        this.setState({
            characters:characters.filter((character,i)=>{
                return i!==index;
            }
            )
        })
    }
   
return (
<div className="container">
<h1>Hello {name}</h1>
<Table characterData={this.state.characters}/>
</div>

);
}

}
export default App;
