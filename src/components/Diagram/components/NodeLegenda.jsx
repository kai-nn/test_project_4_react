import React from 'react'


const NodeLegenda = (props) => {

    const {x, y, event, type} = props

    const styleText = {
        fill: "black",
        font: "bold  10px sans-serif",
    }
    const legenda =
        <>
            <tspan x={x} dy={-14}>{event.legenda}</tspan>
            <tspan x={x} dy={30}>
                {
                    type === 'byContract'
                        ? event.contract.split('-').reverse().join('.')
                        : event.actual.split('-').reverse().join('.')
                }
            </tspan>
        </>

    return (
        <>
            <text x={x} y={y} dominantBaseline={'middle'} textAnchor={'middle'} style={styleText}>{legenda}</text>
        </>
    )
}

export default NodeLegenda