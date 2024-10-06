import Colaborador from '../colaborador'
import './classe.css'

const Classe = (props) => {
    return (
       (props.colaboradores.length > 0)? <section className='classe' style={{ backgroundColor: props.cor_secundaria }}>
            <h3 style={{ borderColor: props.cor_primaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => (
                    <Colaborador 
                        corDeFundo={props.cor_primaria}
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        classe={colaborador.classe} 
                        imagem={colaborador.imagem}
                    />
                ))}
            </div>
        </section>
        :
        ''
    )
}

export default Classe;