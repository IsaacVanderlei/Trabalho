import React from 'react';
import Book from './Pages/book';
import Movie from './Pages/movie';
import Character from './Pages/character';
import Quote from './Pages/quote';
import Chapter from './Pages/chapter';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/character">Character</Link>
        <Link to="/quote">Quote</Link>
        <Link to="/chapter">Chapter</Link>

        <Switch>
          <Route path="/" exact component={Book} />
          <Route path="/movie" component={Movie} />
          <Route path="/character" component={Character} />
          <Route path="/quote" component={Quote} />
          <Route path="/chapter" component={Chapter} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;