import NewsItems from "./NewsItems";

function News(props) {
  const { category, newsData } = props;
  return (
    <div className="flex flex-wrap">
      {newsData.map((element, i) => {
        return (
          <NewsItems key={i} title={element.title} description={element.description} newsCategory={element.category}
            urlToImage={element.image} readmore={element.url} published={element.published_at} />
        )
      })}
    </div>
  )
}

export default News
