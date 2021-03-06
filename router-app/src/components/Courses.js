import React from 'react';
import {
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
//courses imports
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

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
        Redirect to set a default course so it won't disaply empty
        Courses are displayed by passing props to Course Container and pulling infrom from Courses/Data page */}
    
    <Route exact path={match.path} render={() =>  <Redirect to={`${match.path}/html`} />} />
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses} />} />
    <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />} />
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} />}/>

  </div>
);

export default Courses;