import React from 'react';
import '../Scene.css';

function Map (props) {
  return (
    <div className={"map map-active-scene-" + props.activeScene}></div>
  );
}

export default Map;