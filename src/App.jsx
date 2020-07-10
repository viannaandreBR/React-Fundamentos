import "./App.css";

import React from "react";

import Card from "./components/layout/Card";

import Mega from './components/mega/Mega'
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Usuarioinfo from "./components/condicional/Usuarioinfo";

import FamiliaMembro from "./components/basicos/FamiliaMembro";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";

import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1> Fundamentos React </h1>


    <div className="Cards">
      <Card titulo="#13- Mega Surpresinha" color="#B9006E">
        <Mega qtde={9}></Mega>
      </Card>


      <Card titulo="#12- Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11- Componente Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10- Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={23}></ParOuImpar>

        <Usuarioinfo usuario={{}} />
        {/*    <Usuarioinfo usuario={{ nome: 'Fernando'}}></Usuarioinfo>
{/*        <Usuarioinfo usuario={{ email: 'Fer@nando.com'}}></Usuarioinfo>
    */}
      </Card>

      <Card titulo="#07 - Tabela Produtos" color="#1E4C65">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio minimo={1} maximo={50} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
        ></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
