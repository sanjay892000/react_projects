import { useEffect, useState } from 'react'

function Weather() {
    const [weather, setWeatherData] = useState({});
    const [city, setCity] = useState('lucknow');
    const [iconCode, setIconCode] = useState(null);
    const [search, setSearch] = useState('');
    
    const fetchWeatherData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ind&appid=82dca606c1f8856b854704240fe36118&units=metric`)
        const data = await response.json();
        setWeatherData(data)
        setIconCode(data.weather[0].icon)
    }
    
    useEffect(() => {
        fetchWeatherData()
    }, [city]);
    
    console.log(weather.main.temp)
    const searchFun = (e) => {
        e.preventDefault()
        setCity(search)
        setSearch('')
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center bg-gradient-to-t from-cyan-500 to-blue-500'>
            <form className='flex w-3/4 justify-center items-center my-10' onSubmit={searchFun}><input className='h-12 w-1/2 py-3 px-5 text-xl outline-none border-2 rounded-md' value={search} type="text" placeholder='Enter city name' onChange={(e)=>{setSearch(e.target.value)}}/><button className='py-3 px-8 bg-orange-600 rounded-tr-md rounded-br-md text-white relative right-4'>Search</button></form>
            <img src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`} alt="loading..." />
            <p><sup>o</sup>C</p>
            <p>MyCity</p>
        </div>
    )
}

export default Weather
