import React from 'react'
import DiretaChild from './DiretaChild'

export default props => {
    return(
        <div>
            <DiretaChild nome='Ricardo' idade={25} bool={false}/>
            <DiretaChild nome='Jonatas' idade={17} bool={true}/>
        </div>
    )
}