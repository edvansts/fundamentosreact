import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lis = alunos.map(item => {
        return <li key={item.id}>{item.id}) {item.nome}- {item.nota}</li>
    })

    return (
        <div>
            <ul style={{ listStyle: 'none', textAlign: 'justify' }}>
                {lis}
            </ul>
        </div>
    )
}