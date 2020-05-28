import React from 'react'
import { useState } from 'react'

export default props => {

    const [name, setName] = useState('')
    const [idade, setIdade] = useState(-1)
    const [nerd, setNerd] = useState(false)
    const [nameFail, setNameFail] = useState(false)
    const [idadeFail, setIdadeFail] = useState(false)

    function result(){
        if(name==='' || idade< 0 || idade===''){
            if(name==='' && nameFail===false){
                setNameFail(true)
            }
            if((idade < 0 || idade==='' )&& idadeFail===false){
                setIdadeFail(true)
            }
            return
        }else{
            if(setNameFail){
                setNameFail(false)
            }
            if(setIdadeFail){
                setIdadeFail(false)
            }
        }
        props.clicar(name,idade,nerd)
    }

    function updateField(event){
        const eventName = event.target.name
        if(eventName==='name'){
            const n = event.target.value
            setName(n)
        }else if(eventName==='idade'){
            const i = event.target.value
            setIdade(i)
        }else{
            if(event.target.id==='radioS'){
                setNerd(true)
            }else{
                setNerd(false)
            }
        }
    }

    return(
        <React.Fragment>
            <div>
                Qual seu nome? 
                <input type="text" value={name} onChange={e => updateField(e)}
                name="name" id="txtName" placeholder="Insira seu nome..."/>
                <p style={{fontSize:'10px',color:'#F00'}}>{nameFail ? 'Nome inválido inserido*' : ''}</p>
            </div>

            <div>
                Qual sua idade?
                <input type="number" value={idade===-1 ? '' : idade} onChange={e => updateField(e)}
                name="idade" id="txtI" placeholder="Insira sua idade..." />
                <p style={{fontSize:'10px',color:'#F00'}}>{idadeFail ? 'Idade inválida inserida*' : ''}</p>
            </div>

            <div>
                Você é Nerd? 
                <input type="radio" onChange={e =>updateField(e)} name="radioBool" id="radioS"  />
                <label htmlFor="radioS">Sim</label>
                <input type="radio" onChange={e =>updateField(e)} name="radioBool" id="radioN" defaultChecked />
                <label htmlFor="radioN">Não</label>
            </div>

            <button onClick={_ => result() }>Enviar</button>

        </React.Fragment>
    )
}