import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      Home Page
      {/* <p><a href='/products'>Products page</a></p> */}{" "}
      {/* THIS USE OF ANCHOR TO NAVIGATE THROUGH ROUTES IS NOT CORRECT AS IT RELOADS PAGE EVERYTIME AND FETCHES BANED EVERYTIME */}
      <Link to="products">Products page</Link> {/*This is not a relative path added to currently active path*/}
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
