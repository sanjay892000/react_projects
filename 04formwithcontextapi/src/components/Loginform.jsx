import { useContext, useState } from "react"
import CreateContextApi from "../context/CreateContextApi"

function Loginform() {
    const { setUser } = useContext(CreateContextApi);
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const loginFun = (e) => {
        e.preventDefault();
        setUser({userName, pass});
    }
    return (
        <div className="w-screen flex justify-center items-center bg-gray-200">
            <form className="flex flex-col py-14 my-14 gap-y-7 items-center justify-center bg-gray-300 h-1/2 w-1/2" onSubmit={loginFun}>
                <div className="w-full flex justify-center items-center">
                    <label className="mr-3 text-xl text-orange-700 font-semibold" htmlFor="username">Username:</label>
                    <input className="h-12 px-5 py-2 text-xl outline-none w-1/2" type="text" id="username" value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter username" required/>
                </div>
                <div className="w-full flex justify-center items-center">
                    <label className="mr-3 text-xl text-orange-700 font-semibold" htmlFor="pass">Password:</label>
                    <input className="h-12 px-5 py-2 text-xl outline-none w-1/2" type="password" id="pass" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder="Enter password" required minLength={8}/>
                </div>
                <button className="py-3 px-7 bg-orange-300 hover:bg-orange-400 rounded-sm text-xl font-semibold">Login</button>
            </form>
        </div>
    )
}

export default Loginform
