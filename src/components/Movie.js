import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Movie = ({ userInfo }) => {
  const { singleVeiw } = useContext(CartContext);
  return (
    <div>
      <div className="card">
        {/* {console.log(userInfo)} */}
        <img
          src={userInfo.image?.medium}
          className="card-img-top h-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Movies Name: {userInfo.name}</h5>
          <p className="card-text">Rating: {userInfo.rating?.average}</p>
          <p className="card-text">Language: {userInfo.language}</p>
          <p className="card-text">
            <small className="text-muted">
              Release Date:{userInfo.premiered}
            </small>
          </p>
          <Link to={`/moviedetails/${userInfo.id}`}>
            <button
              className="btn btn-sm btn-dark"
              onClick={() => singleVeiw(userInfo.id)}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
