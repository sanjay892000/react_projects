import { useDispatch } from "react-redux";
import { depositMoney, withdrawMoney } from "../feature/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const dispatch = useDispatch()

  const [myamount, setMyamount] = useState(null)
  const updateBalance = (e) => {
    setMyamount(e.target.value)
  }
  return (
    <div className="bg-gray-800">
      <h1 className="text-center text-3xl font-bold text-green-600 mt-10">Diposit/withdraw Money</h1>
      <form className="max-w-lg mt-10 mx-auto flex justify-center items-center my-10">

        <input type="number" value={myamount} id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Enter your amount" onChange={updateBalance} />

      </form>
      <div className="flex justify-evenly">
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 outline-none" onClick={() => {dispatch(depositMoney(Number(myamount))); setMyamount("")}}>Deposit</button>
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 outline-none" onClick={() => {dispatch(withdrawMoney(Number(myamount))); setMyamount("")}}>Withdraw</button>
      </div>
    </div>
  )
}

export default Counter;
