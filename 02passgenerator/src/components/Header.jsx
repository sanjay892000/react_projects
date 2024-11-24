import { useMyTheme } from "../context/ThemeContext"

function Header() {

    const {themeMode, lightMode, darkMode} = useMyTheme();

    const changeMode=()=>{
        if(themeMode==='light'){
            darkMode()
        }
        else{
            lightMode()
        }
    }

    return (
        <header className="fixed w-screen text-center">
            <h1 className="text-orange-600 font-bold text-5xl py-14">Password Generator</h1>
            <label className="inline-flex items-center me-5 cursor-pointer fixed top-4 right-4">
                <input type="checkbox" value={themeMode} className="sr-only peer" onChange={changeMode}/>
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500">
                    </div>
                    <span className="ms-3 text-xl font-medium capitalize text-orange-600">{themeMode==='light' ? 'light' : 'dark'}</span>
            </label>
        </header>
    )
}

export default Header
