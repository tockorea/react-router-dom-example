import React from 'react';
import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

function App() {
  let contents = [
    { id: 1, title: "HTML", description: "HTML is ..." },
    { id: 2, title: "JavaScript", description: "JavaScript is ..." },
    { id: 3, title: "React", description: "React is ..." }
  ];
  return (
    <Router>
      <div>
        <h1>React Router DOM example</h1>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/topics"><Topics topics={contents}></Topics></Route>
          <Route path="/contact"><Contact></Contact></Route>
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;