import React from 'react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import './Scene.css';
import scenes from './components/scenes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scenes: scenes,
      activeScene: 1
    };
  }

  nextScene = () => {
    if(this.state.activeScene !== this.state.scenes.length) {
      this.setState(prevState => {
        return {
              ...prevState,
              activeScene : prevState.activeScene +1
        }
      })
    }
  }

  prevScene = () => {
    if(this.state.activeScene !== 1) {
      this.setState(prevState => {
        return {
              ...prevState,
              activeScene : prevState.activeScene -1
        }
      })
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.scenes.map(scene => (
          (this.state.activeScene - 1) === this.state.scenes.indexOf(scene) 
          &&
          <div className="scene-wrapper" key={scene.title}> 
            <Navigation 
              key={`navigation-${scene.title}`}
              scene={scene} 
              scenesSize={this.state.scenes.length}
              activeScene={this.state.activeScene}
              next={this.nextScene}
              prev={this.prevScene} />
            <Scene key={`scene-${scene.title}`} scene={scene} />
          </div>
          ))}
      </div>
    )
  }
}

export default App;
