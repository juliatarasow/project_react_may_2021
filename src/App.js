import { Switch, Route } from "react-router-dom";


// Components:
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

// Pages:
import Homepage from './pages/Homepage/Homepage';
import Climate from "./pages/Climate/Climate";
import Sightseeing from "./pages/Sightseeing/Sightseeing";
import Culture from "./pages/Culture/Culture";
import Transport from "./pages/Transport/Transport";
import Covid from "./pages/Covid/Covid";
import NotFound from "./pages/NotFound/NotFound";

import './App.css';


function App() {
  return (
    <div style={{ paddingBottom: "60px" }}>

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
