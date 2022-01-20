import './App.css';
import {Link, Route, Switch } from "react-router-dom"

import Home from './views/Home';
import Parameters from './views/Parameters';

// added <BrowserRouter> to index.js and have it enclosing App
function App() {
  
  return (
    <>
      {/* <p> Home and Parameter nav bar */}
      <p>
        <Link to="/">Home</Link>|
        <Link to="/:input">Input</Link>|
        <Link to="/:input/:textColor/:bkgColor">Parameters</Link>
      </p>
      <Switch>
        {/* passing in a word or number, text color and bkg color in path variable */}
        <Route path="/:input/:textColor/:bkgColor">
            <Parameters />
        </Route>
        {/* must be placed after path="/:input/:textColor/:bkgColor"> so it doesn't override*/}
        <Route path="/:input">
            <Parameters />
        </Route>
        {/* order of switch matters, put at "/" at the end so switch recognizes other paths first */}
        {/* if not put <Route exact path="/"> so switch does an exact match with the path */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
