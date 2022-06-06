import React from 'react'

export default class App extends React.Component{
  state ={
    Name:""
  }
  
   sendNameInput=(event)=>{
     this.setState({Name:event.target.value})

   }
  
  render () {
    return (
      <div> 
        <h1>{this.state.Name}</h1>
      <input  value={this.state.Name}
      onChange={this.sendNameInput}
      ></input>


        

      </div>
          
    )
  }
}