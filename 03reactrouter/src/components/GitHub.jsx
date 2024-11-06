import { useEffect, useState } from "react"

function GitHub() {
  const [gitdata, setGitdata] = useState({})

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users/sanjay892000");
    const data = await response.json()
    console.log(data)
    setGitdata(data)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    {gitdata.id ? <div className="h-screen flex gap-x-10 max-lg:flex-col max-sm:px-3 max-lg:px-8 justify-evenly items-center text-lg leading-10">
      <img className="max-xl:h-1/2 max-lg:h-2/5 max-md:h-1/3 w-auto object-cover rounded-full" src={gitdata.avatar_url} alt="" />
      <div className="w-1/2 max-lg:w-full">
        <h1><span className="font-semibold pr-2 capitalize">Name:</span>{gitdata.name}</h1>
        <p><span className="font-semibold pr-2 capitalize">Username:</span>{gitdata.login}</p>
        <p><span className="font-semibold pr-2 capitalize">Bio:</span>{gitdata.bio}</p>
        <div className="flex gap-x-4 max-sm:gap-x-1">
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Repository:</span>{gitdata.public_repos}</p>
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Followers:</span>{gitdata.followers}</p>
          <p className="py-2 px-7 max-sm:px-4 max-sm:text-sm bg-orange-700 text-white mt-8 rounded-md hover:bg-orange-800"><span className="font-semibold pr-2 capitalize">Following:</span>{gitdata.following}</p>
        </div>

      </div>
    </div> : <div className="h-screen flex justify-center items-center capitalize text-5xl text-orange-700">Not fetch GitHub Data </div>}
    </>
  )
}

export default GitHub
