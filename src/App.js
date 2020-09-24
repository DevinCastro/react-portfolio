import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  NavItem,
  NavLink
} from 'reactstrap'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <nav>
        <Navbar color="dark" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to="/react-portfolio">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/myPortfolio">Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/contactMe">Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/react-portfolio" component={Home} />
          <Route path="/myPortfolio" component={Portfolio} />
          <Route path="/contactMe" component={Contact} />
        </Switch>
      </nav>

      <footer className="fixed-bottom">
        <Navbar color="light" light expand="md">

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink target="_blank"
                  href="https://drive.google.com/file/d/1ndE82WoBnJDtFSzsTgw4Pq5GcVtk2GzX/view?usp=sharing">My Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/DevinCastro">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://www.linkedin.com/in/devin-castro-17a62bba/">LinkedIn</NavLink>
              </NavItem>

            </Nav>
            <NavbarText>Devin Castro</NavbarText>
          </Collapse>
        </Navbar>
      </footer>
    </Router>
  )
}

export default App