import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        // return <h2>CLass Component</h2>
        return React.createElement('div',{id:'hello'},React.createElement('h1',{className:'display-4'},'Hey Yeah'))
    }

};

export default Welcome;