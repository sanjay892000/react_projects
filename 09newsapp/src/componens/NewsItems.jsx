import NewsImg from '../assets/newspaper.png'

function NewsItems(props) {
  const { title, description, newsCategory, urlToImage, readmore, published } = props;

  const publish = new Date(published);
  console.log(publish.toLocaleTimeString())
  return (
    <div className="w-1/4 max-lg:w-1/3 max-md:w-1/2 max-sm:w-full flex flex-col p-4">
      <div className="w-full">
        <img className="w-full h-44 object-cover" src={urlToImage ? urlToImage : NewsImg} alt="" />
      </div>
      <p className="text-md font-semibold text-gray-900">{title.length>=80 ? title.slice(0,80) : title}...</p>
      <p className="text-sm font-semibold text-gray-600">{description.length>=140 ? description.slice(0,140) : description}...</p>
      <p className="text-sm text-gray-500">{newsCategory}</p>
      <p className="text-sm text-gray-400">updated at {publish.toLocaleTimeString()}</p>
      <a className="text-blue-800" href={readmore}>read more...</a>
    </div>
  )
}

export default NewsItems
