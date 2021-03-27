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
import Admin from './Pages/AdminPanel/Admin';

import Secureroute from './utility/SecureRoute';
import Login from './Pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { getUserData, logoutUser } from './Redux/actions/userActions';
import { SET_AUTHENTICATED } from './Redux/types';
import axios from 'axios';



function App() {
  const {authenticated} = useSelector(state => state.user)

  const token = localStorage.FBIdToken;
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutUser);
        window.location.href = '/login'; //redirects users to homepage
      } else {
        dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authorization'] = token;
        dispatch(getUserData);
      }
    }

    return () => {
      
    }
  }, [dispatch,token])
  
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={About} />
        <Route path='/media' exact component={Media} />
        <Route path='/membership' exact component={Members} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/login' exact component={Login} />

        <Secureroute path='/admin-panel' exact authenticated={authenticated} component={Admin} />
       

        <Route path="/media/news/:newsid" exact component={NewsDetails} />
        
        <Route path='*' exact component={PageNotFound} />

      </Switch>
    </Router>
   
  );
}

export default App;
