import React from "react";
import Card from "./Card";

function Home() {
  const playersList = [
    {
      player_id: "75601",
      name: "virat kohli",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c616517/virat-kohli.jpg",
      role: "batsman",
      country: "india",
      birth_place: "delhi",
    },
    {
      player_id: "75602",
      name: "rohit sharma",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c616514/rohit-sharma.jpg",
      role: "batsman",
      country: "india",
      birth_place: "maharashtra",
    },
    {
      player_id: "75603",
      name: "shikhar dhawan",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c170660/shikhar-dhawan.jpg",
      role: "batsman",
      country: "india",
      birth_place: "delhi",
    },
    {
      player_id: "75604",
      name: "shubman gil",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c616515/shubman-gil.jpg",
      role: "batsman",
      country: "india",
      birth_place: "punjab",
    },
    {
      player_id: "75605",
      name: "shreyas iyer",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c616518/shreyas-iyer.jpg",
      role: "batsman",
      country: "india",
      birth_place: "mumbai",
    },
    {
      player_id: "75606",
      name: "manish pandey",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c171022/manish-pandey.jpg",
      role: "batsman",
      country: "india",
      birth_place: "utaranchal",
    },
    {
      player_id: "75607",
      name: "mayank agarawal",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c591981/mayank-agarawal.jpg",
      role: "batsman",
      country: "india",
      birth_place: "karnataka",
    },
    {
      player_id: "75608",
      name: "prithvi shaw",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c593782/prithvi-shaw.jpg",
      role: "batsman",
      country: "india",
      birth_place: "maharashtra",
    },
    {
      player_id: "75609",
      name: "cheteshwar pujara",
      image:
        "https://static.cricbuzz.com/a/img/v1/800x800/i1/c332890/cheteshwar-pujara.jpg",
      role: "batsman",
      country: "india",
      birth_place: "gujarat",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap items-center gap-10 py-10">
      {playersList.map((elements, i) => {
        return (
          <Card
            key={i}
            name={elements.name}
            role={elements.role}
            image={elements.image}
            birth={elements.birth_place}
            country={elements.country}
          />
        );
      })}
    </div>
  );
}

export default Home;
