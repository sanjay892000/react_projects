import React from "react";

function NewsCard(props) {
  const { title, description, image, link, date, category } = props;
  let newTitle;
  if (title) {
    newTitle = String(title).trim().slice(0, 80) + "...";
  } else {
    newTitle = "A news app delivers news content from various sources";
  }
  let newDescription;
  if (description) {
    newDescription = String(description).trim().slice(0, 150) + "...";
  } else {
    newDescription = "A news app delivers news content from various sources, allowing users to stay informed and engage with current events in a personalized and interactive way.";
  }

  return (
    <article className="flex flex-col dark:bg-gray-50">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={image ? image : 'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM='}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
        >
          {category}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {newTitle}
        </h3>
        <p>{newDescription}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{date}</span>
          <span>
            <a href={link}>read more</a>
          </span>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
