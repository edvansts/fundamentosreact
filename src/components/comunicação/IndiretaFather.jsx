import React from 'react'
import IndiretaChild from './IndiretaChild'

export default class IndiretaFather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            idade: -1,
            bool: false
        }
        this.click = this.click.bind(this)
    }

    click(nome,idade,bool){
        this.setState({nome,idade,bool})
    }
    render(){
        return(
            <div>
                <IndiretaChild clicar={this.click}/>
                <div>
                    <span>{this.state.nome} </span>
                    <span>{this.state.idade===-1 ? '' : this.state.idade+' anos'} </span>
                    <span>{this.state.bool  ? 'Nerd' : (this.state.idade===-1 ? '' : 'Retard')}</span>
                </div>
            </div>
        )
    }
}