import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label className='lista-suspensa'>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}  // Passa o valor corretamente
                required={props.required} 
                value={props.valor}
            >
                <option value="">Selecione uma classe</option> {/* Adiciona um placeholder */}
                {props.itens.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;
