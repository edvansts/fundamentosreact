import React from 'react'
import './Form.css'

export default props => (
    <div>
        {props.desc}
        <input type="number" name={props.name}id={props.name} placeholder="Digite um número ..."/>
        <button onClick={e => props.click(props.name,document.getElementById(props.name).value)}>Pronto</button>
    </div>
)