import { createSlice } from '@reduxjs/toolkit'

export const SustainabilityAboutSlice = createSlice({
    name: 'sustainabilityAbout',
    initialState: {},
    reducers: {
        setSustainabilityAbout: (state, payload) => {
            state.name = payload.payload.name
            state.urlString = payload.payload.urlString
            state.description = payload.payload.description
            state.firstRowImgUrl = payload.payload.firstRowImgUrl
            state.firstRowTitle = payload.payload.firstRowTitle
            state.firstRowDesc = payload.payload.firstRowDesc
            state.firstRowSemiDesc = payload.payload.firstRowSemiDesc
            state.secondRowImgUrl = payload.payload.secondRowImgUrl
            state.secondRowTitle = payload.payload.secondRowTitle
            state.secondRowDesc = payload.payload.secondRowDesc
            state.secondRowSemiDesc = payload.payload.secondRowSemiDesc
        }
    }
})

export const { setSustainabilityAbout } = SustainabilityAboutSlice.actions

export default SustainabilityAboutSlice.reducer