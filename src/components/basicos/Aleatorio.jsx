import React from 'react'

export default props => {
  const aleatorio1 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio2 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio3 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio4 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio5 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio6 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio7 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio8 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio9 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;
  const aleatorio10 = parseInt(Math.random()* (props.maximo - props.minimo)) + props.minimo;




  return (
    <div>
       <h2> Valor Aleatorio </h2>
          <p><strong>Valor Minimo:</strong> {props.minimo}</p>
          <p><strong>Valor Maximo:</strong> {props.maximo}</p>
          <p><strong>1o Numero:</strong> {aleatorio1}</p>
          <p><strong>2o Numero:</strong> {aleatorio2}</p>
          <p><strong>3o Numero:</strong> {aleatorio3}</p>
          <p><strong>4o Numero:</strong> {aleatorio4}</p>
          <p><strong>5o Numero:</strong> {aleatorio5}</p>
          <p><strong>6o Numero:</strong> {aleatorio6}</p>
{/*          <p><strong>7o Numero:</strong> {aleatorio7}</p> 
          <p><strong>8o Numero:</strong> {aleatorio8}</p>
          <p><strong>9o Numero:</strong> {aleatorio9}</p>
          <p><strong>10o Numero:</strong> {aleatorio10}</p>
  */}
    </div>
  )
}
