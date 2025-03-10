import { useState } from 'react'
import './colaborador.css'
import {AiFillCloseCircle} from 'react-icons/ai'


const Colaborador = ({ colaborador, cor, deletarColaborador}) => {
    
    return (
    <div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: cor }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
            <AiFillCloseCircle className='deletar' onClick={()=> deletarColaborador(colaborador)}/>
            
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador