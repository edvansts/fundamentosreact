import React from 'react'

export default props => {

    return(
        <div>
            {props.children.map((child, i )=> {
                return React.cloneElement(child, { ...props, key:i })
            })}
        </div>
    )
}