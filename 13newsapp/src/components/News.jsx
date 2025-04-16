import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function News(props) {
  const { category } = props;
  const [newsData, setNewsData] = useState([]);
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);
  const apikey = 'pub_65470f35338ae194ce5b9c7f1c690463ccbd6';
  const fetchNewsData = async () => {
    let response = await fetch(
      `https://newsdata.io/api/1/latest?category=${category}&size=9&country=in&language=en&apikey=${apikey}`
    );
    if (response.ok) {
      setLoader(true);
    }
    let data = await response.json();
    setData(data);
    setNewsData(data.results);
  };

  useEffect(() => {
    fetchNewsData();
  }, [category]);

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      {loader ? (
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold capitalize">
              {category} Latest News
            </h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          {data.status == "success" ? (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {newsData.map((news, i) => {
                return (
                  <NewsCard
                    key={i}
                    title={news.title}
                    description={news.description}
                    image={news.image_url}
                    link={news.link}
                    date={news.pubDate}
                    category={news.category}
                  />
                );
              })}
            </div>
          ) : (
            <div>not found News Data</div>
          )}
        </div>
      ) : (
        <div className="flex justify-center" role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </section>
  );
}

export default News;
