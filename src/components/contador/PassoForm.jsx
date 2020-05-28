import React from 'react'

export default props => {
    return(
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={props.passo} onChange={props.setPasso}/>
            <p style={{color:'red',fontSize: '8pt'}}>{props.passo>0 ? '' : '\n O número de passos atualmente é 0'}</p>
        </div>
    )
}