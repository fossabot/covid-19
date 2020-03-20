import React from "react";
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { useFetch } from './useFetch';

import Home from './Home';
import World from './World';
import Countries from './Countries';
import Country from './Country';
import NotFoundPage from './NotFoundPage';

const App = () => {
  const [countryCoronaData, countryCoronaDataLoading] = useFetch(
    "https://corona.lmao.ninja/countries"
  );

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">COVID-19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/countries">Countries</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search by Country" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home 
              countryCoronaData={countryCoronaData} 
              countryCoronaDataLoading={countryCoronaDataLoading} />
          </Route>
          <Route exact path="/home">
            <Home 
              countryCoronaData={countryCoronaData} 
              countryCoronaDataLoading={countryCoronaDataLoading} />
          </Route>
          <Route exact path="/world">
            <World 
              countryCoronaData={countryCoronaData} 
              countryCoronaDataLoading={countryCoronaDataLoading} />
          </Route>
          <Route exact path="/countries" 
            render={ props => <Countries {...props} countryCoronaData={countryCoronaData} countryCoronaDataLoading={countryCoronaDataLoading}  /> } />
          <Route exact path="/country-details" render={ props => <Country {...props} /> } />
          <Route path='*' render={(props) => <NotFoundPage {...props} />} />
        </Switch>
      </div>
    </Router>
    
  );
};
export default App;

