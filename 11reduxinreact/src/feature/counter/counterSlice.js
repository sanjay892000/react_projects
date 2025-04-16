import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount:Number(localStorage.getItem('amount') || 8476),
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        depositMoney: (state, action) => {
          state.amount += action.payload
          localStorage.setItem('amount', state.amount)// store the updated balance in local storage
        },
        withdrawMoney: (state, action) => {
          if(state.amount-action.payload>=0){
            state.amount -= action.payload
            localStorage.setItem('amount', state.amount) // store the updated balance in local storage
          }
          else{
            alert("Insufficient balance")
          }
        }
    }
})

export const { depositMoney, withdrawMoney } = counterSlice.actions

export default counterSlice.reducer