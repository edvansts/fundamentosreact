import React from 'react'

export default props => {
    return(
        <div>
            <button className={props.passo%5===0 ? 'hard' : ''} onClick={props.inc} >+</button>
            <button className={props.passo%5===0 ? 'hard' : ''} onClick={props.dec}>-</button>
        </div>
        
    )
}