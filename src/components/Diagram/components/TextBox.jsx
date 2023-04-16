import React from 'react'

const TextBox = (props) => {
    const {x, y, width, height, text, filled} = props
    const fill = filled ? 'powderblue' : 'white'
    return (
        <>
            <rect x={x} y={y} width={width} height={height} fill={fill} stroke="darkgray"  strokeWidth="1" />
            <text x={x + width / 2} y={y + 10} dominantBaseline={'middle'} textAnchor={'middle'}>{text}</text>
        </>
    )
}

export default TextBox