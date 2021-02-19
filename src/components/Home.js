import React from "react";
import HomeStyle from "./HomeStyle";
import Spinner from "./Spinner";

const Home = ({ movies, isLoading }) => {
  //console.log(movies);
  //console.log(isLoading);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {movies.map((movie) => (
        <HomeStyle key={movie._id} movie={movie}></HomeStyle>
      ))}
    </section>
  );
};
export default Home;
