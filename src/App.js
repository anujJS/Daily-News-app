import React from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import MovieDetail from "./pages/MoviesDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <>
          <NavBar />
          {/* <Movies /> */}

          <Routes>
            <Route index element={<Movies />} />
            <Route path="moviedetails/:id" element={<MovieDetail />} />
          </Routes>
        </>
      </Router>
    </CartContextProvider>
  );
};
export default App;
