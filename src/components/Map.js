import React from 'react';
import Smoke1 from './Smoke1';
import Smoke2 from './Smoke2';
import '../Scene.css';

function Map (props) {
  return (
    <div className={"map map-active-scene-" + props.activeScene}>
      {props.activeScene === 2 && <Smoke1 />}
      {props.activeScene === 2 && <Smoke2 />}
      <div className="map-item"></div>
    </div>
  );
}

export default Map;