import React from "react";

export default (props) => {
  const isPar = props.numero % 2 === 0;

  const Numero = props.numero;

  return (
    <div>
      O Numero {Numero} é:
      {isPar ? <span>Par</span> : <span>Impar</span>}
    </div>
  );
};
