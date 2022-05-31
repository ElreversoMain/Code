import React, { useState } from 'react'

const ContadorFuncional = () => {
  const [valorContador, setValorContador] = useState(0)

  const somaContador = () => {
    // this.setState({ valorContador: this.state.valorContador + 1 })
    setValorContador(valorContador + 1)
  }

  const subtraiContador = () => {
    setValorContador(valorContador - 1)
  }

    return (
      <div>
        <h3>Contador com Componente Funcional</h3>
        <p>{valorContador}</p>
        <button onClick={subtraiContador}>-</button>
        <button onClick={somaContador}>+</button>
      </div>
    )
  }

export default ContadorFuncional