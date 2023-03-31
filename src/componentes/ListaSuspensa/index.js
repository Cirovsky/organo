import './lista-suspensa.css'

const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false, opcional}) => {
    return !opcional&& items.length > 0 &&(<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa