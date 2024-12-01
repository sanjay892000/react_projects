import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 5000,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        depositMoney: (state, action) => {
          state.amount += action.payload
        },
        withdrawMoney: (state, action) => {
          if(state.amount-action.payload>=0){
            state.amount -= action.payload
          }
          else{
            alert("Insufficient balance")
          }
        }
    }
})

export const { depositMoney, withdrawMoney } = counterSlice.actions

export default counterSlice.reducer