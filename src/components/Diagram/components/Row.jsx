import React from 'react'
import TextBox from "./TextBox";
import Line from "./Line";
import Node from "./Node";

const Row = (props) => {

    const {object, dataFrom, dataBefore, diagramWindowWidth} = props
    const {name, events} = object

    let from = 0, before = 0, k = 0

    let years = []
    for(let i = new Date(dataFrom).getFullYear(); i <= new Date(dataBefore).getFullYear(); i++) years.push(i)

    const offsetX = 10
    const headerHeight = 20
    const xLimit = diagramWindowWidth - offsetX
    const yLimit = 180

    const objectYear = [
        ...events.map(event => new Date(event.contract).getFullYear()),
        ...events.map(event => new Date(event.actual).getFullYear())
    ]

    const nameBoxWidth = 100


    from = Math.floor(new Date(dataFrom.split('-')[0], 0, 1) / 86400000)
    before = Math.floor(new Date(dataBefore.split('-')[0], 11, 31) / 86400000)

    // Коэффициент пересчета "пиксели/время"
    k = (xLimit - nameBoxWidth - offsetX) / (before - from)

    const getContractPosition = (event) => {
        return parseInt((new Date(event.contract).getTime() / 86400000 - from) * k) + nameBoxWidth
    }

    const getActualPosition = (event) => {
        return parseInt((new Date(event.actual).getTime() / 86400000  - from) * k) + nameBoxWidth
    }

    return (
        <div>
            {
                diagramWindowWidth &&
                    <svg width={xLimit} height={yLimit}>

                        <TextBox x={0} y={0} width={nameBoxWidth} height={yLimit}t text={name} filled={false} />

                        {
                            years.map((year, i) => {
                                const boxWidth = (before - from) / years.length * k
                                const x = nameBoxWidth + 365 * i * k
                                const filled = !!objectYear.find(el => el === year)
                                return(
                                    <>
                                        <TextBox x={x} y={0} width={boxWidth} height={headerHeight} text={year} filled={filled} />
                                        <TextBox x={x} y={headerHeight} width={boxWidth} height={(yLimit-headerHeight)/2} text={''} filled={filled} />
                                        <TextBox x={x} y={headerHeight+(yLimit-headerHeight)/2} width={boxWidth} height={(yLimit-headerHeight)/2} text={''} filled={filled} />
                                    </>
                            )})
                        }

                        {
                            events.map((event, i) => {
                                const x1 = getContractPosition(event)
                                const y1 = (yLimit / 4 + headerHeight / 2)
                                const x2 = getActualPosition(event)
                                const y2 = y1 + yLimit / 2
                                const lastElem = events.length - 1
                                return(
                                    <>
                                        <Line x1={x1} y1={y1+7.7} x2={x2} y2={y2-7.7} type={'3 2'} />
                                        {
                                            i === 0 &&
                                                <>
                                                    <Line x1={getContractPosition(events[0])} y1={y1} x2={getContractPosition(events[lastElem])} y2={y1}/>
                                                    <Line x1={getActualPosition(events[0])} y1={y2} x2={getActualPosition(events[lastElem])} y2={y2}/>
                                                </>
                                        }
                                        <Node x={x1} y={y1} event={event} type={'byContract'} />
                                        <Node x={x2} y={y2} event={event} type={event.status} />
                                    </>
                                )

                            })
                        }

                    </svg>

            }
        </div>
    )
}

export default Row