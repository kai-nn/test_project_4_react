import {createSlice} from "@reduxjs/toolkit";
import {objects} from "../mocks/objects";
import {selectObjects} from '../general/selectObjects'


const initialState = {
    objects: [...objects],
    dataFrom: '2016-05-22',
    dataBefore: '2023-05-22',
    selected: [1, 2, 3, 4, 5],
    selectedObjects: []
}

const diagramSlice = createSlice({
    name: 'diagram',
    initialState,
    reducers: {
        init: (state) => {

            const selectedObjects = selectObjects({
                objects: [...objects],
                dataFrom: state.dataFrom,
                dataBefore: state.dataBefore,
                selected: state.selected,
            })

            state.selectedObjects = selectedObjects
        },

        chPeriod: (state, action) => {

            state[action.payload.label] = action.payload.value

            const selectedObjects = selectObjects({
                objects: [...objects],
                dataFrom: state.dataFrom,
                dataBefore: state.dataBefore,
                selected: state.selected,
            })
            state.selectedObjects = selectedObjects
        },

        chSelect: (state, action) => {

            let selectedByState = [...state.selected]
            const selectedElem = selectedByState.find(el => el === action.payload)

            selectedByState = selectedElem === undefined
                ? [...selectedByState, action.payload]
                : selectedByState.filter(el => el !== action.payload)

            state.selected = [...selectedByState].sort()

            const selectedObjects = selectObjects({
                objects: [...objects],
                dataFrom: state.dataFrom,
                dataBefore: state.dataBefore,
                selected: state.selected,
            })

            state.selectedObjects = selectedObjects
        },
    }
})


export const {
    init,
    chPeriod,
    chSelect,
} = diagramSlice.actions

export default diagramSlice.reducer