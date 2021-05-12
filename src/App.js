import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

// Components:
import Header from './components/Header';

// Pages:
import Homepage from './pages/Homepage';
import Climate from "./pages/Climate";
import Sightseeing from "./pages/Sightseeing";
import Culture from "./pages/Culture";
import Transport from "./pages/Transport";
import Covid from "./pages/Covid";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div style={{paddingBottom:"60px"}}>

      <Header />

      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/climate">
          <Climate />
        </Route>

        <Route exact path="/sightseeing">
          <Sightseeing />
        </Route>

        <Route exact path="/culture">
          <Culture />
        </Route>

        <Route exact path="/transport">
          <Transport />
        </Route>

        <Route exact path="/covid">
          <Covid />
        </Route>

        <Route component={NotFound} />


      </Switch>

      <Footer />


    </div>
  );
}

export default App;
