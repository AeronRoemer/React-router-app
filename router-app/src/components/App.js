import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
    {/* exact makes it so it matches '/' exactly, instead of letting
    Home match anything that start with a '/' */}
      <Route exact path="/" component={Home} />
      {/* inline rendering takes a function. Allows props to be passed*/}
      <Route path="/about" render={() => <About title='About'/>} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;