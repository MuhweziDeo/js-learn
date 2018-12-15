import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        // init COmponent
        super()
        this.state={
            message:'welcome visitor' 

        };
    }
    ChangeMessage(){
        this.setState({
            message:'You have subscribed'
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.ChangeMessage()} className="btn btn-outline-danger">Subscribe</button>
            </div>
        ) 
        // return React.createElement('div',{id:'hello'},React.createElement('h1',{className:'display-4'},'Hey'))
    }

};

export default Message;