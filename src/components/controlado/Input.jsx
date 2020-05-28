import React from 'react'
import { useState } from 'react'

export default props => {
    const [value, setValue] = useState('Inicial')

    function updateField(e){
        setValue(e.target.value)
    }

    return (
        <div>
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" placeholder='...' value={value} onChange={updateField}/>
                <input type="text" placeholder='...' value={value} readOnly/>
                <input type="text" placeholder='...' value={undefined}/>
            </div>
        </div>
    )
}