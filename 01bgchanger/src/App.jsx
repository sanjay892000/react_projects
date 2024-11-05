
function App() {


 const bgChange = (e) => {
    document.body.style.backgroundColor = e.target.innerHTML;
  }

  return (
    <>
      <button className="w-9 h-8" onClick={bgChange}>red</button>
      <button className="w-9 h-8" onClick={bgChange}>green</button>
      <button className="w-9 h-8" onClick={bgChange}>yellow</button>
      <button className="w-9 h-8" onClick={bgChange}>blue</button>
      <button className="w-9 h-8" onClick={bgChange}>pink</button>
      <button className="w-9 h-8" onClick={bgChange}>white</button>
      <button className="w-9 h-8" onClick={bgChange}>black</button>
    </>
  )
}

export default App
