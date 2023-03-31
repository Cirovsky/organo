import './campo-texto.css'

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, campoMenor}) => {
    return (<div className={`campo-texto ${campoMenor? campoMenor : ''}`}>
        <label>{label}</label>
        <input value={valor}
            onChange={evento => aoAlterado(evento.target.value)}
            required={obrigatorio}
            placeholder={placeholder} />
    </div>)


}

export default CampoTexto;