import React from 'react';
import TouchpointMapPoint from './TouchpointMapPoint';

function TouchpointMap(props) {
  return (
    <div className="touchpoints-map">
      {props.scene.touchpoints.map(touchpoint => (
        <TouchpointMapPoint setActive={props.setActiveTouchpoint} key={touchpoint.id} {...touchpoint}/>
      ))}
    </div>
  );
}

export default TouchpointMap;
