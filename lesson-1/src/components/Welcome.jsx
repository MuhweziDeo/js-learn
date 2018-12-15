import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h2>Welcome {this.props.name}</h2>
        // return React.createElement('div',{id:'hello'},React.createElement('h1',{className:'display-4'},'Hey'))
    }

};

export default Welcome;