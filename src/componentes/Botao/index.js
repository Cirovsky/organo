import './Botao.css'

const Botao = ({evento, botaoAbrirForm, form, children}) => {
    return <button 
    className={`botao ${botaoAbrirForm? botaoAbrirForm : ''}`}
    onClick={()=> evento? evento(!form): null}
    >
        {children}
    </button>
}

export default Botao