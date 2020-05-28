import React from 'react'
import './app.css'

import FamiliaMembro from './components/FamiliaMembro'
import Familia from './components/Familia'
import Random from './components/Random'
import Card from './components/Card'
import Form from './components/Form'
import ListaAlunos from './components/Repetição/ListaAlunos'
import TabelaProdutos from './components/Repetição/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UserInfo from './components/condicional/UserInfo'
import DiretaFather from './components/comunicação/DiretaFather'
import IndiretaFather from './components/comunicação/IndiretaFather'
import Input from './components/controlado/Input'
import Contador from './components/contador/Contador'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foot: '</>',
            posts: [
                { id: 1, title: 'Aprendendo React' },
                { id: 2, title: 'A RocketSeat é massa!' },
                { id: 3, title: 'Ainda não sei outro título' }
            ],
        }
    }
    /*click(name,value){
        if(name.indexOf('1')!==-1){
            const i = 0;
            const r1 = Number(value)
            const randons = [...this.state.randons]
            randons[i] = r1
            this.setState({randons})
        }else{
            const i = 1;
            const r1 = Number(value)
            const randons = [...this.state.randons]
            randons[i] = r1
            this.setState({randons})
        }
        
    }
    */
    render() {
        return (
            <div className="App">
                <h1>Fundamentos React</h1>
                <div className="Cards">
                    <Card color="#3FF" title="Componente Controlado (Input)" >
                        <Contador numeroInicial={10}/>
                    </Card>
                    <Card color="#9F6" title="Componente Controlado (Input)" >
                        <Input />
                    </Card>
                        
                    <Card color="#097" title="Componente com Comunicação Indireta" >
                        <IndiretaFather />
                    </Card>

                    <Card color="#709" title="Componente com Comunicação Direta" >
                        <DiretaFather />
                    </Card>

                    <Card color="#AAA" title="Componente Condicional" subtitle="Primeiro Componente Condiconal">
                        <ParOuImpar numero={11} />
                        <UserInfo />
                        <UserInfo user={{name: 'Fabricio'}}/>
                    </Card>

                    <Card color="#6F9" title="Componente de Repetição" subtitle="Segundo Componente de Repetição">
                        <TabelaProdutos />
                    </Card>

                    <Card color="#F6A" title="Componente de Repetição" subtitle="Primeiro Componente de Repetição">
                        <ListaAlunos />
                    </Card>

                    <Card color="#0F9" subtitle="Primeiro Componente com Filhos" title="Componente com Filhos">
                        <Familia sobrenome='Matos'>
                            <FamiliaMembro nome="Carlos" />
                            <FamiliaMembro nome="Ana" />
                            <FamiliaMembro nome="João" />
                        </Familia>
                    </Card>

                    <Card color="#0F0" subtitle="Meu primeiro cartão com subs" title="Primeiro Cartão">
                        <Random min={1} max={10} />
                    </Card>

                    <Card title="Fragmento" subtitle="Primeiro Formulário">
                        <Form />
                    </Card>
                    
                    {this.state.posts.map(post =>
                        <Card color="#00F" title={post.title} key={post.id} />
                    )}
                </div>
                <footer>
                    {this.state.foot}
                </footer>
            </div>
        )
    }
}