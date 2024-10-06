import './formulario.css';
import CampoTexto from '../Banner/CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import Colaborador from '../colaborador';

const Formulario = (props) =>{

    const   [nome,setNome]  = useState('')
    const   [imagem,setImagem] = useState('')
    const   [Idade, setIdade] = useState('')
    const   [classe,setClasse] = useState('')



    const aoSalvar = (e) =>{
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            Idade,
            classe,
            
        })
        setNome('')
        setImagem('')
        setIdade('')
        setClasse('')
    }
 return(
    <section className='formulario'>

    <form onSubmit={aoSalvar}> 
        <h2>Preencha dados do seu personagem</h2>
        <CampoTexto 
         obrigatorio = {true} 
         label="Nome" 
          placeholder="Digite o nome"
          valor ={nome}
          aoAlterado = {valor =>setNome(valor)}
          />
        <CampoTexto 
         obrigatorio = {true} 
         label="Idade"
          placeholder="Digite a Idade"
          valor ={Idade}
        aoAlterado = {valor =>setIdade(valor)}
          />
        <CampoTexto   
        label="Imagem"
         placeholder="Caminho da imagem" 
         valor ={imagem}
         aoAlterado = {valor =>setImagem(valor)}
         />

        <ListaSuspensa  
        obrigatorio = {true} 
        label="Classe" 
        itens={props.classes}
        valor = {classe}
        aoAlterado ={valor=>setClasse(valor)}
        />
        <Botao texto = "Criar Card">
            Criar Card
        </Botao>
    </form>
    </section>
)

}

    export default Formulario