import React from 'react'
import If,{Else} from './If'

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If teste={user && user.name}>
                <span>Seja bem vindo <strong>{user.name}</strong></span>
                <Else teste={!user || !user.name}>
                    <span>Seja bem vindo <strong>Colega</strong></span>
                </Else>
            </If>
        </div>
    )
}