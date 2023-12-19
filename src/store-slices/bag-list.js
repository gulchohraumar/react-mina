import { createSlice } from '@reduxjs/toolkit'

export const bagListSlice = createSlice({
    name: 'bagList',
    initialState: {
       dataList: []
    },
    reducers: {
        setBagListData: (state, payload) => {
            state.dataList = payload.payload.dataList
        }
    }
})

export const { setBagListData } = bagListSlice.actions

export default bagListSlice.reducer