import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


//TODO: 404 error catching
function App() {
const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><AboutUs /></Route>
          <Route exact path="/work"><OurWork /></Route>
          <Route path="/work/:id"><MovieDetail /></Route>
          <Route path="/contact"><ContactUs /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
