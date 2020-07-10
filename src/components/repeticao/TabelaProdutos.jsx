import React from "react";
import './TabelaProdutos.css'
import produtos from "../../data/produtos";

{/* --------------------- Solução via Tabela 

---- */}

export default (props) => {
 
  function getLinhas(){
    return produtos.map((produto, i )=> {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.produto}</td>
          <td>{produto.preco}</td>
        </tr>
      )
    }) 
  }
  return(
    <div className="TabelaProdutos">
      <table >
        <thead>
            <tr>
              <th>Id</th>
              <th>Produto</th>
              <th>Preco</th>
            </tr>
        </thead>
        <tbody>
          
            {getLinhas()}
          
        </tbody>
      </table>
    </div>
  )
}






{/*
-------------Solução Via Lista

export default (props) => {
  const produtosLI = produtos.map((produto) => {
    return (
      <li key={produto.id}>
        {produto.id}) {produto.produto} -> {produto.preco}
      </li>
    );
  });

  return (
    <div>
      <ul>{produtosLI}</ul>
    </div>
  );
};


*/}

