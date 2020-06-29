import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../Scene.css';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isShown: false,
      animationCoordinates: {
        top: 0,
        left: 0,
      }
    } 
  }

  componentDidMount(){
    if(this.props.scene.id === this.props.activeScene){
      this.setState({
        isShown: true
      })
    }
  }

  render(){
    let defaultStyle = {
      backgroundImage: `url(/image/map.svg)`,
      backgroundPosition: `${this.props.scene.coordinates.top}px ${this.props.scene.coordinates.left}px`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      transition: 'all 2s ease-in',
      height: '100vh',
      width: '100vw'
    }

    return (
      <CSSTransition 
        in={this.state.isShown}
        classNames="map"
        timeout={500}>
        <div className="map" style={defaultStyle}></div>
      </CSSTransition>
    );
  }
}

export default Map;