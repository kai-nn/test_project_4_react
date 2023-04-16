import React from 'react'
import NodeLegenda from "./NodeLegenda";


const Node = (props) => {
    const width = 10, height = 10
    const {x=width, y=height, event, type} = props
    const sym = event.status === 'ok' || event.status === 'disruption' ? '✓' : ''

    const statusColor = {
        ok: 'green',
        disruption: 'red',
        byContract: 'blue',
        forecast: 'grey',
    }
    const styleRect = {
        stroke: "black",
        transformBox: "fill-box",
        transformOrigin: "center",
        transform: "rotate(45deg)",
        fill: statusColor[type],
    }
    const styleText = {
        font: "bold  10px sans-serif",
        fill: "white"
    }

    return (
        <>
            <rect x={x-width/2} y={y-height/2} width={width} height={height} type={type} style={styleRect} />
            <text x={x} y={y+1} dominantBaseline={'middle'} textAnchor={'middle'} style={styleText}>{sym}</text>

            {
                event.legenda && <NodeLegenda x={x} y={y} event={event} type={type} />
            }
        </>
    )
}

export default Node