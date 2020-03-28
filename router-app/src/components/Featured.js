import React from 'react';

const Featured = ({match}) => {
  {/**matches 'name' url param passed from app.js
match infromation can be found in chrome react devtools*/}
  let name = match.params.name
  let topic = match.params.topic
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;