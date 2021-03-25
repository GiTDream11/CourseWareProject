import './App.css';
import './styles/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Test } from './Test';
import { Home } from './Home';
import { Nav, Navbar } from 'react-bootstrap';
import { MultiChoice } from './MultiChoice';
import { MainConcept } from './MainConcept';

function App() {
  return (
    <Router>
      {/* Navbar */}

        <Navbar sticky="top">
          <Nav.Link>
            <Link to="/test">Test</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/multichoice">MultiChoice</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/mainconcept">Main Concepts</Link>
          </Nav.Link>
        </Navbar>



      {/* Switch Component */}
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/multichoice">
          <MultiChoice />
        </Route>
        <Route path="/mainconcept">
          <MainConcept />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </Router>

  );
}



export default App;
