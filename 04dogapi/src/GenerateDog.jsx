import React, { useEffect, useState } from "react";

function GenerateDog() {

    const [image, setImage] = useState("")

    const fetchImage = async()=>{
      let response = await fetch('https://dog.ceo/api/breeds/image/random')
      let data = await response.json();
      console.log(data.message)
      setImage(data.message)
    }
    useEffect(()=>{
        fetchImage()
    },[])

  return (
    <div className="main-page">
      <h1>Generate Random Dog Image</h1>
      <button id="colgen" onClick={fetchImage}>Generate</button>
      <div className="color-box" id="color-box">
        <img src={image} alt="loading..." />
      </div>
    </div>
  );
}

export default GenerateDog;
