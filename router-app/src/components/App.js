import React from 'react';
import {
  BrowserRouter,
  Route, 
  Switch
} from 'react-router-dom';
//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Featured from './Featured';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
    {/*Switch only renders the FIRST matching routes, 
    if nothing is found, the 404 is displayed */}
      <Switch>
        {/* exact makes it so it matches '/' exactly, instead of letting
        Home match anything that start with a '/' */}
        <Route exact path="/" component={Home} />
        {/* inline rendering takes a function. Allows props to be passed*/}
        <Route path="/about" render={() => <About title='About'/>} />
        <Route exact path="/teachers" component={Teachers} />
        {/* ':' for URL parameters, can be sepearted by a dash
        /teachers/:topic/:fname-:lname
         */}
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;