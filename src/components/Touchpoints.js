import React from 'react';
import Touchpoint from './Touchpoint';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Touchpoints(props) {
  return (
    <TransitionGroup className="touchpoints">
      {props.scene.touchpoints.map(touchpoint => (
        touchpoint.id === props.activeTouchpoint &&
        <CSSTransition classNames='touchpoint' timeout={600} key={touchpoint.id} >
          <Touchpoint {...touchpoint}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default Touchpoints;
