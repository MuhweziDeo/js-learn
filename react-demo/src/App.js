import React, { Component } from 'react';
import './App.css';
import './Table';
import Table from './Table';
class App extends Component{
  state={
    characters:[]
  };
  removeCharacter=index=>{
    const {characters}=this.state;
    this.setState({
        characters:characters.filter((character,i)=>{
            return i!==index;
        }
        )
    })
};
  render(){
    var name='dee';
   
   
return (
<div className="container">
<h1>Hello {name}</h1>
<Table characterData={this.state.characters}
        removeCharacter={this.removeCharacter}
/>
</div>

);
}

}
export default App;
