import React, {useEffect, useRef, useState} from 'react'
import style from './Diagram.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {init} from "../../store/diagramSlice";
import Row from "./components/Row";
import Header from "./components/Header";


const Diagram = () => {
    const ref = useRef()
    const [diagramWindowWidth, setDiagramWindowWidth] = useState(null)
    const {dataFrom, dataBefore, selectedObjects} = useSelector(state => state.diagram)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(init())
        setDiagramWindowWidth(ref.current.clientWidth)
    }, [])

    const resize = () => {
        setDiagramWindowWidth(ref.current.clientWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize)
        return window.addEventListener('resize', resize)
    }, [])



    return (
        <div ref={ref} id={'diagram'} className={style.frame}>

            <Header />

            {
                selectedObjects.map((object, i) => {
                        return <Row key={`${i}`}
                             object={object}
                             dataFrom={dataFrom}
                             dataBefore={dataBefore}
                             diagramWindowWidth={diagramWindowWidth}
                        />
                    }
                )
            }
        </div>
    )
}

export default Diagram