import './input.css'
import React, {useState} from 'react'

export default props => {
  
  const [valor, setValor] = useState('Lote');

  function quandoMudar(e){
    setValor(e.target.value)
  }

  return (

    <div className='Input'>
        <h2>{valor}</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}></div>
        <input value={valor} onChange={quandoMudar}/>
        <input value={valor} readOnly/>
        <input value={undefined}/>
        
        
    </div>
  )
}