import React from 'react'

export default props  => {
    const random = Math.floor(Math.random() * (props.max - props.min+1))+props.min;
    return(
        <div>
            <h1>Valor Aleatório</h1>
            <div>
                <div>Valor Minimo: {props.min}</div>
                <div>Valor Máximo: {props.max}</div>
                <div>Valor Escolhido: {random}</div>
            </div>
        </div>
    )         
}
