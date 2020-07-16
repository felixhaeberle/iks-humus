import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Start(props) {

  return (
    <div className="start">
      <div className="start-content">
        <CSSTransition className='heading' classNames='heading' in={true} timeout={{ enter: 500, exit: 300 }} appear>
          <div>
            <img alt="logo" src="./image/humus.svg"/>
            <h1>Humus</h1>
            <p>Die Mikrobiologie unserer Erde</p>
          </div>
        </CSSTransition>
      </div>
      <div className="start-link">
        <CSSTransition className='link' classNames='link' in={true} timeout={{ enter: 500, exit: 300 }} appear>
          <p onClick={props.startScenes}>Starten</p>
        </CSSTransition>
      </div>
      {/* <div className="information">
        <p>Hier könnte Info stehen</p>
      </div> */}
    </div>
  );
}

export default Start;