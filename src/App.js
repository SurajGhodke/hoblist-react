import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CompanyInfo from "./components/CompanyInfo";
import Footer from "./components/Footer";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://hoblist.com/movieList";

  const getAllMovies = async () => {
    await axios
      .post(`${url}`, {
        category: "movies",
        language: "Kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        //console.log(response.data);
        const res = response.data.result;
        //const result = response.data;
        //setMovies(response.data.result);
        setMovies(res);
        setIsLoading(false);
        //console.log(movies);
        //console.log(isLoading);
        //console.log(setMovies(result));
        //console.log(result[0].language);
        //console.log(result[0]);
        //{movies[0].genre}
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Home isLoading={isLoading} movies={movies} /> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/signup" />
        </Route>
        <Route
          exact
          path="/home"
          render={(props) => (
            <Home {...props} isLoading={isLoading} movies={movies} />
          )}
        />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/company-info" component={CompanyInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
