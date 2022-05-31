import React from 'react'

class Calcular extends React.Component {
    state = {
        ValorContador: 0
    }

    SomarNumero=()=>{
        this.setState({ ValorContador: this.state.ValorContador + 1})

    }

    DiminuirNumero=()=>{
        this.setState({ ValorContador:  this.state.ValorContador - 1})
    }

    
    render () {
        return (
            <div>
                <h3>Contador</h3>
                <p>{this.state.ValorContador}</p>
                <button onClick={this.SomarNumero}>+</button>
                <button onClick={this.DiminuirNumero}>-</button>

            </div>
        )
    }
}
export default Calcular;