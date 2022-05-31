import logo from './logo.svg';
import './App.css';
import React from "react"
import Calcular from "./Exercicio.js/Calcular"
import Calcular2 from "./Exercicio.js/Calcular2"

 class App extends React.Component {
  render () {
    return (
            <div>
           <Calcular/>  
           
           <Calcular2/>
           </div>
           
           
    )
  }
}
export default App;