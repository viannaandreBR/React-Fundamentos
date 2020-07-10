import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
  return (

    <div>

        <DiretaFilho texto="Filho 01" numero="001" bool={true} />
        <DiretaFilho texto="Filho 02" numero="002" bool={false} />
        <DiretaFilho texto="Filho 03" numero="003" bool={true} />
        <DiretaFilho texto="Filho 04" numero="004" bool={false} />

    </div>
  )
}