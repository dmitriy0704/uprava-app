import logo from './logo.svg';
import bg from './images/bg.jpg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import RegPhone from "./pages/RegPhone";
import RegPass from "./pages/RegPass";
import RegName from "./pages/RegName";
import Dashboard from "./pages/Dashboard";
import RegSMS from "./pages/RegSms";
import UslugaYurista from "./pages/uslugi/UslugaYurista";
import AvtoYurist from "./pages/uslugi/AvtoYurist";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/RegPhone">
            <RegPhone/>
          </Route>
          <Route path="/RegSms">
            <RegSMS/>
          </Route>
          <Route path="/RegPass">
            <RegPass/>
          </Route>
          <Route path="/RegName">
            <RegName/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/UslugaYurista">
            <UslugaYurista/>
          </Route>
          <Route path="/AvtoYurist">
            <AvtoYurist/>
          </Route>




        </Switch>
      </Router>

    </div>
  );
}

export default App;
