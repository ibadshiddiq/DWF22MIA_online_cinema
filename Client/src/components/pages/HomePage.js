import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Hero from "../hero/Hero";
import Card from "../card/Card";
import { API } from "../config/api";

function HomePage() {
  const router = useHistory();

  const [films, setFilms] = useState([]);

  const loadFilms = async () => {
    try {
      const response = await API.get("/films");
      setFilms(response.data.data.film);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFilms();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <Hero />
        <div className="row">
          {films &&
            films.map((film, index) => (
              <div className="col" key={film.id + index}>
                <Card film={film} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
