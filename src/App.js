import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

// Components:
import Header from './components/Header';

// Pages:
import Climate from "./pages/Climate";
import Covid from "./pages/Covid";
import Culture from "./pages/Culture";
import Homepage from './pages/Homepage';
import Sightseeing from "./pages/Sightseeing";
import Transport from "./pages/Transport";


function App() {
  return (
    <div>

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

      </Switch>

      <Footer />


    </div>
  );
}

export default App;
