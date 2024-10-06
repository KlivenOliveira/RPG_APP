import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/formulario';
import Classe from './componentes/classes';

function App() {
  

  const classes = [
    {
      nome: 'Guerreiro'  ,
      corPrimaria: '#D2A679', // Pastel de SaddleBrown
      corSecundaria: '#A0522D' // Cor original
    },
    {
      nome: 'Barbaro',
      corPrimaria: '#E9967A', // Pastel de FireBrick
      corSecundaria: '#8B0000' // Cor original
    },
    {
      nome: 'Mago',
      corPrimaria: '#C3B1E1', // Pastel de Indigo
      corSecundaria: '#6A5ACD' // Cor original
    },
    {
      nome: 'Clerigo',
      corPrimaria: '#A9D0F5', // Pastel de SteelBlue
      corSecundaria: '#87CEEB' // Cor original
    },
    {
      nome: 'Monge',
      corPrimaria: '#F8DEB5', // Pastel de GoldenRod
      corSecundaria: '#B8860B' // Cor original
    },
    {
      nome: 'Ladino',
      corPrimaria: '#A3BEBE', // Pastel de DarkSlateGray
      corSecundaria: '#708090' // Cor original
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log("Novo colaborador adicionado:", colaborador);
    setColaboradores([...colaboradores, colaborador]);
};

  return (
    <div className="App">
      <Banner />
      <Formulario classes={classes.map(classe => classe.nome)}  
      aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} 
      />
    {classes.map(classe => (
  <Classe 
    key={classe.nome}  
    nome={classe.nome} 
    cor_primaria={classe.corPrimaria}
    cor_secundaria={classe.corSecundaria}
    colaboradores={colaboradores.filter(colaborador => colaborador.classe === classe.nome)} 
  />
))}

    </div>
    
  );
  
}

export default App;
