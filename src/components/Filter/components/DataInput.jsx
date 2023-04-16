import React, {useEffect} from 'react'
import style from './Style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {chPeriod} from "../../../store/diagramSlice";


const DataInput = (props) => {
    const label = props.label
    const dispatch = useDispatch()
    const data = useSelector(state => state.diagram[label])

    const action = (events) => {
        const value = events.target.value
        console.log({label: label, value: value})
        dispatch(chPeriod({label: label, value: value}))
    }

    useEffect(() => {

    }, [data])


    return (
        <div className={style.inputFrame}>
            <div className={style.label}>{label === 'dataFrom' ? 'От' :'До'}: </div>
            <input className={style.input}
                   type={'date'}
                   value={data}
                   onChange={action}
            />
        </div>
    )
}

export default DataInput