
import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: 'React',
    descricao: 'Videos sobre React',
    cor: '#000',
  }
  const [categorias, setCategorias] = useState(['Teste']);
  const [values, setValues] = useState(valoresIniciais);

  
    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]:valor,
      })
    }

    function handleChange(infosDoEvento){
      //const { getAttribute, value } = infosDoEvento.target;
      setValue(
        infosDoEvento.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    return(
      <PageDefault>
          <h1>Cadastro de categoria: {values.nome} </h1>

          <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);      
            
            setValues(valoresIniciais);

          }}> 

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="????"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />


          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          {/*
            <div>
              <label>
                Nome da categoria:
                <input
                  type="text"
                  name="nome"
                  value={values.nome} //ou {values['nome]}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label>
                Descrição:
                <textarea
                  type="text"
                  name="descricao"
                  value={values.descricao} 
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>      
              <label>
                Cor:
                <input
                  type="color"
                  name="cor"
                  value={values.cor} 
                  onChange={handleChange}
                />
              </label>              
            </div>
          */}
            
            <button>
              Cadastrar
            </button>

          </form>

          <ul>
            {categorias.map((categoria, indice)=> {
              return(
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>

          <Link to="/">
               Ir para a Home 
          </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;