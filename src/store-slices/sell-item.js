import { createSlice } from '@reduxjs/toolkit'

export const sellItemSlice = createSlice({
    name: 'sellItem',
    initialState: {
        id: 0,
        name: "",
        url: '',
        urlString: '',
        price: '',
        updatePrice: '',
        status: 0,
    },
    reducers: {
        setData: (state, payload) => {
            state.id = payload.payload.id
            state.name = payload.payload.name;
            state.url = payload.payload.url
            state.urlString = payload.payload.urlString
            state.price = payload.payload.price
            state.updatePrice = payload.payload.updatePrice
            state.status = payload.payload.status
            state.description = payload.payload.description
            state.material = payload.payload.material
            state.colorVariants = payload.payload.colorVariants
            state.colors = payload.payload.colors
            state.color = payload.payload.color
            state.measurement = payload.payload.measurement
        }
    }
})

export const { setData } = sellItemSlice.actions

export default sellItemSlice.reducer
