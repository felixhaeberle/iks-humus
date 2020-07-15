import React from 'react';
import TouchpointMapPoint from './TouchpointMapPoint';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function TouchpointMap(props) {
  return (
    <TransitionGroup className="touchpoints-map">
      {props.scene.touchpoints.map(touchpoint => (
        <CSSTransition timeout={2000} classNames={touchpoint} key={touchpoint.id} appear>
          <TouchpointMapPoint setActive={props.setActiveTouchpoint} {...touchpoint}/>
        </CSSTransition>
        ))}
    </TransitionGroup>
  );
}

export default TouchpointMap;
