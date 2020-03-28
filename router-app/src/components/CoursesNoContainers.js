import React from 'react';
import {
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
//courses imports
import CSS from './courses/CSS';
import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';

{/* match.url stands in for './courses'
in Router it's match.path 
if ./course gets changed or moved down the road it will still be accurate*/}
const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
        {/* Displays Routes below navigation. 
        Redirect to set a default course so it won't diaply empty */}
    
    <Route exact path={match.path} render={() =>  <Redirect to={`${match.path}/html`} />} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />

  </div>
);

export default Courses;