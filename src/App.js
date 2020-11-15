import './scss/style.scss';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App"> 

      <Router>
        <div>
          <Navbar bg="light" expand="lg" className="navigation">
            <Navbar.Brand href="/" className="nav__logo">The YAY Company</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" className="nav__mobile">
              <Nav className="mr-auto">
                <Nav.Link as={MenuLink} label="Home" to='/' activeOnlyWhenExact={true} className="nav__option mx-5" />
                <Nav.Link as={MenuLink} label="News" to='/news' className="nav__option mx-5"/>
                <Nav.Link as={MenuLink} label="Contact" to='/contact' className="nav__option mx-5"/>
              </Nav>
              <Form inline className="nav__form">
                <FormControl type="text" placeholder="Search" className="nav__input" />
                <Button className="nav_btn">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "nav__active" : ""}>
      <div className="nav__link-container">
        <Link className="nav__link" to={to}>{label}</Link>
      </div>
    </div>
  );
}

export default App;
