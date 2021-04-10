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
import { TrueFalse } from './TrueFalse';
import { MainConcept } from './MainConcept';
import { LongQuestion } from './LongQuestion';

function App() {
  return (
    <Router>
      {/* Navbar */}

        <Navbar bg="light" sticky="top">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/longQuestions">Long Questions</Link>
          </Nav.Link>
        </Navbar>



      {/* Switch Component */}
      <Switch>
        <Route path="/longQuestions">
          <LongQuestion />
        </Route>
        <Route path="/multichoice/:id">
          <MultiChoice />
        </Route>
        <Route path="/truefalse/:id">
          <TrueFalse />
        </Route>
        <Route path="/mainconcept/:id">
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
