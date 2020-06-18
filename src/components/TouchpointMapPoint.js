import React from 'react';

function TouchpointMapPoint(props) {
  const sonarPosition = {
    position: 'fixed',
    top: props.coordinates.top,
    left: props.coordinates.left
  }

  return (
    <div onClick={() => props.setActive(props.id)} className="map-point">
      <span className="sonar-icon" style={sonarPosition}>
        <span className="sonar"></span>
      </span>
    </div>
  );
}

export default TouchpointMapPoint;
