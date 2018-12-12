import React, { Component } from 'react';
import './App.css';
import './Table';
import Form from './Form';
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

handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
};
  render(){
    var name='dee';
   
   
return (
<div className="container">
<h1>Hello {name}</h1>
<Table characterData={this.state.characters}
        removeCharacter={this.removeCharacter}
        handleSubmit={this.handleSubmit}
/>
<Form/>
</div>

);
}

}
export default App;
