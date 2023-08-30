import { createSlice } from '@reduxjs/toolkit'

export const modalFormSlice = createSlice({
    name: 'modal-form',
    initialState: {
        isOpen: false,
        switchSlide: false
    },
    reducers: {
        openModalForm: (state, action) => {
            state.isOpen = true
        },
        closeModalForm: (state, action) => {
            state.isOpen = false
        },
        switchToSignIn: (state, action) => {
            state.switchSlide = true
        },
        switchToSignUp: (state, action) => {
            state.switchSlide = false
        }
    },
})
export const { openModalForm, closeModalForm, switchToSignIn, switchToSignUp } = modalFormSlice.actions

export default modalFormSlice.reducer
