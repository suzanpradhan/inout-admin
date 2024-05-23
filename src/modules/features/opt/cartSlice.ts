import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: string[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      // console.log(action.payload)
      state.items.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add } = cartSlice.actions

export default cartSlice.reducer