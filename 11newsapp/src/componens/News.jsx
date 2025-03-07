import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function News(props) {

  const { category, country } = props;
  const apiKey = '79a4d82c033c445f94b5ca8e52390987';

  const [newsData, setNewsData] = useState([]);
  const fetchNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    fetchNews();
  }, [category])

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
