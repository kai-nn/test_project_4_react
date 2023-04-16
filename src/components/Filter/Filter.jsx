import React from 'react'
import style from './Filter.module.scss'
import DataInput from "./components/DataInput";
import SelectName from "./components/SelectName";

import { Preview, print } from 'react-html2pdf'


const Filter = () => {

    const getReport = () => {
        print('Отчет.pdf', 'diagram')
    }

    return (
        <div className={style.frame}>
            <span>Фильтр</span>

            <div>по дате</div>
            <DataInput label={'dataFrom'} />
            <DataInput label={'dataBefore'} />

            <div>по объектам</div>
            <SelectName />
            <button onClick={getReport}>Получить Отчет.pdf</button>

        </div>
    )
}

export default Filter