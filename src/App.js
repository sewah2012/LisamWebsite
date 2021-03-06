import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/Page404';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NewsDetails from './Pages/NewsDetails/NewsDetails';
import Media from './Pages/Media/Media';
import ScrollToTop from './Components/ScrollToTop';
import Members from './Pages/Alumini/Members';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
        <Route path='/media' exact component={Media} />
        <Route path='/membership' exact component={Members} />
        <Route path='/contact' exact component={Contact} />
       

        <Route path="/media/news/:newsid" exact component={NewsDetails} />
        
        <Route path='*' exact component={PageNotFound} />

      </Switch>
    </Router>
   
  );
}

export default App;
