import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PageNotFound from './Pages/Page404'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import NewsDetails from './Pages/NewsDetails/NewsDetails'
import Media from './Pages/Media/Media'
import ScrollToTop from './Components/ScrollToTop'
import Members from './Pages/Membership/Members'

import Secureroute from './utility/SecureRoute'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { getUserData, logoutUser } from './Redux/actions/userActions'
import { SET_AUTHENTICATED } from './Redux/types'
import axios from 'axios'
import Study from './Pages/StudyInMorocco/Study'
import Alumini from './Pages/Graduates/Alumini'
import NewsP from './Pages/Media/NewsP'
import Library from './Pages/Media/Library'
import Gallery from './Pages/Media/Gallery'
import Universitites from './Pages/StudyInMorocco/Universitites'
import Courses from './Pages/StudyInMorocco/Courses'
import AboutAlumini from './Pages/Graduates/AboutAlumini'
import Scholarships from './Pages/StudyInMorocco/Scholarships'
import Panel from './Pages/AdminPanel/Panel'
import Commitees from './Pages/Commitees/Commitees'
import FormerLeaders from './Pages/FormerLeaders/FormerLeaders'
import ResidenceCard from './Pages/Services/Residence Card/ResidenceCard'

axios.defaults.baseURL =
  'https://us-central1-lisam-5c8b4.cloudfunctions.net/api'

function App() {
  const { authenticated } = useSelector((state) => state.user)
  const token = localStorage.FBIdToken
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token)
      // console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutUser())
        window.location.href = '/login' //redirects users to homepage
      } else {
        dispatch({ type: SET_AUTHENTICATED })
        axios.defaults.headers.common['Authorization'] = token
        dispatch(getUserData())
      }
    }

    return () => {}
  }, [dispatch, token])

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={About} />
        <Route path="/media" exact component={Media} />
        <Route path="/membership" exact component={Members} />
        <Route path="/contact" exact component={Contact} />

        <Route path="/study" exact component={Study} />
        <Route path="/study-universities" exact component={Universitites} />
        <Route path="/study-courses" exact component={Courses} />
        <Route path="/study-scholarship" exact component={Scholarships} />

        <Route path="/alumini" exact component={Alumini} />
        <Route path="/alumini-about" exact component={AboutAlumini} />

        <Route path="/login" exact component={Login} />

        <Route path="/media-news" exact component={NewsP} />
        <Route path="/library" exact component={Library} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/committees" exact component={Commitees} />
        <Route path="/past-presidents" exact component={FormerLeaders} />

        {/* services */}
        <Route
          path="/services-residence-card"
          exact
          component={ResidenceCard}
        />

        {/* secure routes */}
        <Secureroute
          path="/admin-panel"
          exact
          authenticated={authenticated}
          component={Panel}
        />

        <Route path="/media/news/:newsid" exact component={NewsDetails} />

        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
