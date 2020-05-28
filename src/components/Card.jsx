import React from 'react'
import "./Card.css"

export default props => {
    const { title, subtitle } = props;
    const estilo = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || '#F00'
    }
    return (
        <div className="Card" style={estilo}>
            <h1 className="Title">{title}</h1>
            {props.subtitle ? <p className="Subtitle">{subtitle}</p> : ''}
            <div className="Content">
                {props.children ? props.children : 'Nada a exibir.' }
            </div>
        </div>
    )
}