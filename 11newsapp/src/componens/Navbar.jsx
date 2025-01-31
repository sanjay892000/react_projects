import { Link } from "react-router-dom"

function Navbar(props) {
  const { setCategory } = props;
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-300">
      <Link className="capitalize" onClick={() => setCategory('')} to="/"><img className="h-12 w-12 rounded-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6523f0c602b1650430ff1974/741c5421eb3e3ed160ef/file-name.png&fit=cover&h=416&q=40&w=416" alt="" /></Link>
      <div className="flex gap-5">
        <Link className="capitalize" onClick={() => setCategory('general')} to="/general">general</Link>
        <Link className="capitalize" onClick={() => setCategory('science')} to="/science">science</Link>
        <Link className="capitalize" onClick={() => setCategory('technology')} to="/technology">technology</Link>
        <Link className="capitalize" onClick={() => setCategory('business')} to="/business">business</Link>
        <Link className="capitalize" onClick={() => setCategory('health')} to="/health">health</Link>
        <Link className="capitalize" onClick={() => setCategory('sports')} to="/sports">sports</Link>
        <Link className="capitalize" onClick={() => setCategory('entertainment')} to="/entertainment">entertainment</Link>
      </div>
    </div>
  )
}

export default Navbar
