import Loginform from "./Loginform"
import Profile from "./Profile"

function Home() {
    return (

        <div className='h-screen pt-5 bg-gray-200'>
            <h1 className='py-12 capitalize text-orange-900 font-bold text-center text-4xl max-md:text-2xl'>Concept of Context API</h1>
            <Loginform />
            <Profile />
        </div>

    )
}

export default Home
