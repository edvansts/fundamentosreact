import React from 'react'

export default props => {
    return(
        <div>
            <span onClick={() => (window.alert('Gay'))}>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.bool ? 'Nerd' : 'Nutricionista'}</span>
        </div>
    )
}