import './colaborador.css'

const Colaborador =({nome,imagem,classe,corDeFundo}) =>{
    return (
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
            <img src={imagem} alt={nome}></img>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{classe}</h5>
        </div>
    </div>
    )

}

export default Colaborador