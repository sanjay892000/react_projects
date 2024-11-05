
import { useCallback, useEffect, useRef, useState } from 'react'
function PassGen() {

  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  //create genFun using of useCallback hook for optimization

   const genFun = useCallback(() => {
     let pass = "";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if (includeNumbers) str += "0123456789";
     if (includeSymbols) str += "!@#$%^&*()_+=-{}[]|:;<>,.?/~";
     for (let i = 0; i < length; i++) {
       pass += str[Math.floor(Math.random() * str.length)];
     }
     setPassword(pass)
   }, [length, includeNumbers, includeSymbols])


  //we can also create genFun without useCallback hooks, but without usecallback hook genFun function is not optimize function
/*   const genFun = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) str += "0123456789";
    if (includeSymbols) str += "!@#$%^&*()_+=-{}[]|:;<>,.?/~";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass)
  } */


   //useRef hook for provide reference
   const passwordRef = useRef(null);

   const copyPassword = () => {
     passwordRef.current?.select();
     window.navigator.clipboard.writeText(password)
   }

  useEffect(() => {
    genFun();
  }, [length, includeNumbers, includeSymbols])
  //if change the dependency after then useEffect run & call the genFun

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-800'>
      <div className="py-14 w-3/4 flex flex-col justify-center items-center bg-gray-700 rounded-md">
        <div className='flex flex-col justify-center items-center relative w-3/4'>
          <input className="h-14 w-full my-10 outline-none px-5 py-1 bg-gray-100 rounded-md text-orange-500 text-2xl font-semibold" type="text" value={password} ref={passwordRef} readOnly /><label className='bg-orange-400 hover:bg-orange-500 text-black active:text-white font-medium rounded-r-md cursor-pointer px-8 py-3.5 text-xl absolute right-0 ' onClick={copyPassword}>Copy</label></div>
        <div className="my-3 w-full px-20 flex justify-evenly">
          <div><input className='mx-2 w-80' id='range' type="range" min={8} max={20} value={length} onChange={(e) => { setLength(e.target.value) }} />
            <label className='text-2xl text-orange-600' htmlFor="range">{length}</label></div>
          <div><input id="num" className='mx-2 h-5 w-5' type="checkbox" onChange={(e) => { setIncludeNumbers(e.target.checked) }} /> <label className='text-2xl text-orange-600' htmlFor="num">Number</label></div>
          <div><input id="symbol" className='mx-2 h-5 w-5' type="checkbox" onChange={(e) => { setIncludeSymbols(e.target.checked) }} /> <label className='text-2xl text-orange-600' htmlFor="symbol">Symbol</label></div>
        </div>
      </div>
    </div>
  )
}

export default PassGen
