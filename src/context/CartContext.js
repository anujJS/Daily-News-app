import React, { createContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  const [movies, setMovies] = useState([]);
  // const { id } = useParams();

  const updateNews = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    let data = await fetch(url);
    let parseData = await data.json();
    setAllMovies(parseData);
  };
  useEffect(() => {
    updateNews();
  }, []);

  // Adding cart items to localstorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("allMovies"));
    if (items) {
      setMovies(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allMovies", JSON.stringify(allMovies));
  }, [allMovies]);

  const singleVeiw = (id) => {
    setSingleItem(movies.filter((item) => item.show.id === id));
  };

  return (
    <CartContext.Provider
      value={{
        movies,
        singleVeiw,
        singleItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
