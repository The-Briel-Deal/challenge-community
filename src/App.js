import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from './AboutUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MainPage from './MainPage';
import Create from './Create';




function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <LandingPage/>
        </Route>

        <Route path="/AboutUs">
          <AboutUs/>
        </Route>

        <Route path="/SignIn">
          <SignIn/>
        </Route>

        <Route path="/MainPage">
          <MainPage/>
        </Route>

        <Route path="/Create">
          <Create/>
        </Route>


        <Route path="/SignUp">
          <SignUp/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
