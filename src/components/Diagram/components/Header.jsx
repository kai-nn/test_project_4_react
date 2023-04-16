import React from 'react'
import style from "../Diagram.module.scss";
import Node from "./Node";


const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <div>
                    <svg width={20} height={20}>
                        <Node event={{status: 'ok'}} type={'ok'}/>
                    </svg>
                </div>
                Пройденные вехи в срок
            </div>
            <div>
                <div>
                    <svg width={20} height={20}>
                        <Node event={{status: 'ok'}} type={'disruption'}/>
                    </svg>
                </div>
                Срыв
            </div>
            <div>
                <div>
                    <svg width={20} height={20}>
                        <Node event={{status: ''}} type={'byContract'}/>
                    </svg>
                </div>
                Даты, согласно контрактного графика
            </div>
            <div>
                <div>
                    <svg width={20} height={20}>
                        <Node event={{status: ''}} type={'forecast'}/>
                    </svg>
                </div>
                Прогноз
            </div>
        </div>
    )
}

export default Header