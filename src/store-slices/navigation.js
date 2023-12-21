import { createSlice } from '@reduxjs/toolkit'

export const NavigationSlice = createSlice({
    name: 'navigation',
    initialState: { 
      id: 0
    },
    reducers: {
        setNavigation: (state, payload) => {
            state.id = payload.payload.id
        }
    }
})

export const { setNavigation } = NavigationSlice.actions

export default NavigationSlice.reducer