import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Movies, moviesList } from "./components/Movies";
import Info from "./components/Info";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact={true} path="/movies" component={Movies} />
        <Route path="/more" component={Info} />
        <Route path={`/movies/:title`} component={Details}>
          <Details moviesList={moviesList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
