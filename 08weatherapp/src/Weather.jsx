import { useEffect, useState } from 'react'

function Weather() {
    const [weather, setWeatherData] = useState({});
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('lucknow');
    const [description, setDescription] = useState('')
    const [iconCode, setIconCode] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [feelsTemp, setFeelsTemp] = useState('');
    const [windSpeed, setWindSpeed] = useState('')


    const fetchWeatherData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ind&appid=82dca606c1f8856b854704240fe36118&units=metric`)
        const data = await response.json();
        console.log(data)
        setWeatherData(data)
        setDescription(data.weather[0].description)
        setIconCode(data.weather[0].icon)
        setTemp(data.main.temp)
        setHumidity(data.main.humidity)
        setFeelsTemp(data.main.feels_like)
        setWindSpeed(data.wind.speed)
    }

    useEffect(() => {
        fetchWeatherData()
    }, [city]);

    const searchFun = (e) => {
        e.preventDefault()
        setCity(search)
        setSearch('')
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center bg-gradient-to-t from-cyan-500 to-blue-500'>
            <form className='flex w-3/4 justify-center items-center my-5' onSubmit={searchFun}>
                <input className='h-12 w-1/2 py-3 px-5 text-xl outline-none border-2 rounded-md' value={search} type="text" placeholder='Enter city name' onChange={(e) => { setSearch(e.target.value) }} />
                <button className='py-3 px-8 bg-gray-600 rounded-tr-md rounded-br-md text-white relative right-4'>Search</button>
            </form>
            <div className='flex justify-center items-center flex-col text-center p-5'>
                <h1 className='text-5xl capitalize text-white'>{city}</h1>
                <div class="icon">
                    <img src={`http://openweathermap.org/img/wn/${iconCode}@4x.png`} alt="Weather Icon" />
                </div>
                <div class="text-6xl text-white mb-8 font-bold">{Math.round(temp)}<sup>o</sup>C</div>
                <div class="text-white capitalize text-5xl mb-5">{description}</div>
                <div class=" flex gap-8 text-2xl my-5 text-white">
                    <p className='font-bold capitalize'>Feels like: <span className='text-gray-700'>{feelsTemp}</span></p>
                    <p className='font-bold capitalize'>Humidity: <span className='text-gray-700'>{humidity}%</span></p>
                    <p className='font-bold capitalize'>Wind speed: <span className='text-gray-700'>{windSpeed}m/s</span></p>
                </div>
            </div>
        </div>
    )
}

export default Weather
