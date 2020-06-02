import React from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        }
        //this.inc = this.inc.bind(this)

    }

    inc = () => {
        const numero = this.state.numero + this.state.passo
        this.setState({ numero })
    }

    dec = () => {
        const numero = this.state.numero - this.state.passo
        this.setState({ numero })
    }

    setPasso = (e) => {
        const value = Number(e.target.value)>0 ? Number(e.target.value) : e.target.value
        const passo = typeof value==='string' && value!=='' ? '' : Number(value)
        this.setState({passo})
    }
    /*handleMouseMove = (e) => {
        console.log('A posição do mouse é x= '+e.clientX + ' e y= '+e.clientY)
    }*/

    render() {
        return (
            <div className="Contador" /*onMouseMove={this.handleMouseMove}*/>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes passo={this.state.passo} inc={this.inc} dec={this.dec}/>
            </div>
        )
    }
}