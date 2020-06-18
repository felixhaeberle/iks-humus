import React from 'react';
import Touchpoint from './Touchpoint';

function Touchpoints(props) {
  return (
    <div className="touchpoints">
      {props.scene.touchpoints.map(touchpoint => (
        touchpoint.id === props.activeTouchpoint &&
        <Touchpoint key={touchpoint.id} {...touchpoint}/>
      ))}
    </div>
  );
}

export default Touchpoints;
