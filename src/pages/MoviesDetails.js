import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MovieDetail = () => {
  const { singleItem } = useContext(CartContext);

  const movieInfo = singleItem[0].show;
  console.log(movieInfo);

  return (
    <div className="container  position-relative d-flex flex-column mt-5 align-items-center">
      <div className="">
        <img
          className="img-fluid object-fit-contain "
          style={{ width: "100vw", height: "500px" }}
          src={movieInfo.image?.original}
        />
      </div>
      <div className="d-flex align-items-center px-5 pb-10 text-light w-100  position-absolute top-50  z-40 bg-secondary bg-opacity-75">
        <div
          className=" d-flex flex-column justify-content-between"
          style={{ height: "auto" }}
        >
          <div>
            <div className="fs-1 fw-bolder ">
              Movie title : {movieInfo ? movieInfo.name : ""}
            </div>

            <div className="fs-4">
              Duration : {movieInfo ? movieInfo.runtime + " mins" : ""}
            </div>
            <div className="fs-4 ">
              {movieInfo ? "Release date : " + movieInfo.premiered : ""}
            </div>
            <div className="my-5">
              {movieInfo && movieInfo.genres
                ? movieInfo.genres.map((genre) => (
                    <>
                      <span
                        className="p-2 fs-5 m-2   border border-primary rounded "
                        id={genre}
                      >
                        {genre}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="my-8">
            <div className="fs-5 mb-5  d-flex position-relative align-items-center">
              Synopsis
            </div>
            <p className="ml-auto fs-5 ">
              {movieInfo ? movieInfo.summary : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="position-relative  bottom-25 d-flex justify-content-between ">
        <div className="fs-3 m-2">Useful Links</div>
        {movieInfo && movieInfo.officialSite && (
          <a
            href={movieInfo.officialSite}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="btn m-2 btn-primary d-flex justify-content-center align-items-center fs-6 ">
                OfficialSite
              </span>
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
