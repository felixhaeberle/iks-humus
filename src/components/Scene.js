import React from 'react';
import TouchpointMap from './TouchpointMap';
import Touchpoints from './Touchpoints';

function Scene (props) {
  return (
      <div className="scene">
        <TouchpointMap setActiveTouchpoint={props.setActiveTouchpoint.bind(this)} {...props} />
        <Touchpoints closeTouchpoint={props.closeTouchpoint} activeTouchpoint={props.activeTouchpoint} {...props} />
      </div>
    );
}

export default Scene;
