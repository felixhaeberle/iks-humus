import React from 'react';
import TouchpointMap from './TouchpointMap';
import Touchpoints from './Touchpoints';

class Scene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTouchpoint: null
    };
  }

  handleActiveTouchpoint = (activeTouchpoint) => {
    this.setState({
      activeTouchpoint: activeTouchpoint
    })
  }

  render() {
    return (
      <div className="scene">
        <TouchpointMap setActiveTouchpoint={this.handleActiveTouchpoint.bind(this)} {...this.props} />
        <Touchpoints activeTouchpoint={this.state.activeTouchpoint} {...this.props} />
      </div>
    );
  }
}

export default Scene;
