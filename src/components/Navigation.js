import React from 'react';

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="navigation-info">
        <h1>{props.scene.title}</h1>
        <p>{props.scene.description}</p>
      </div>
      <div className="navigation-links">
        {props.activeScene !== 1 && <p className="arrow prevItem" onClick={props.prev}></p> }
        {props.activeScene !== props.scenesSize && <p className="arrow nextItem" onClick={props.next}></p> }
      </div>
    </div>
  );
}

export default Navigation;