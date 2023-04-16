import React from 'react'
import style from './Style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {chSelect} from "../../../store/diagramSlice";


const SelectName = () => {
    const {objects, selected} = useSelector(state => state.diagram)
    const dispatch = useDispatch()

    const action = (payload) => {
        dispatch(chSelect(payload))
    }

    return (
        <div className={style.selectFrame}>
            <ul>
                {objects.map((object, i) => {
                    const isChecked = !!selected.find(el => el === i+1)
                    return (
                        <li key={`li_${i}`}>
                            <input type={"checkbox"}
                                  onChange={() => action(i+1)}
                                  checked={isChecked}
                            />
                            {object.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SelectName