import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/Page404';
import About from './Pages/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
        <Route path='/events' exact component={About} />
        <Route path='/alumini' exact component={About} />
        <Route path='/contact' exact component={About} />
        <Route path='*' exact component={PageNotFound} />

      </Switch>
    </Router>
   
  );
}

export default App;
