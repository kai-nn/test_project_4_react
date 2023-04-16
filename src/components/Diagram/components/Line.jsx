import React from 'react'

const Line = (props) => {
    const {x1, y1, x2, y2, type='1 0', color='black'} = props
    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray={type} stroke={color}/>
    )
}

export default Line