import React, { useContext } from "react";
import Movie from "./Movie";
import { CartContext } from "../context/CartContext.js";

const Movies = () => {
  const { singleVeiw, movies } = useContext(CartContext);

  // const [Movies, setMovies] = useState([]);

  // const updateNews = async () => {
  //   const url = "https://api.tvmaze.com/search/shows?q=all";
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   setMovies(parseData);
  // };
  // useEffect(() => {
  //   updateNews();
  // }, []);

  return (
    <div className="container my-3">
      <div className="container">
        <div className="row">
          {movies.map((element) => {
            return (
              <div className="col-md-4" key={element.show.id}>
                <Movie userInfo={element.show} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
