import React from 'react';
import Scene from './components/Scene';
import Navigation from './components/Navigation';
import Map from './components/Map';
import Pagination from './components/Pagination';
import Sound from 'react-sound';
import scenes from './components/scenes';
import './Scene.css';
import { CSSTransition } from 'react-transition-group';

let intervalCountVolumeUp;

class ScenesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenes: scenes,
      activeScene: 1,
      sound: {
        volume: 0
      } 
    };
  }

  nextScene = () => {
    if(this.state.activeScene !== this.state.scenes.length) {
      this.setState(prevState => {
        return {
              ...prevState,
              activeScene : prevState.activeScene +1,
              sound: {
                volume: 0
              }
        }
      })
    }
  }

  prevScene = () => {
    if(this.state.activeScene !== 1) {
      this.setState(prevState => {
        return {
              ...prevState,
              activeScene : prevState.activeScene -1,
              sound: {
                volume: 0
              }
        }
      })
    }
  }

  reloadScene = () => {
    this.setState({
      scenes: scenes,
      activeScene: 1,
      sound: {
        volume: 0
      } 
    })
  }

  handleSoundAfterLoading = () => {
    intervalCountVolumeUp = setInterval(() => this.countVolumeUp(), 200);
  }

  stopInterval = (interval) => {
    clearInterval(interval);
  }

  // handleSoundSceneWillChange = () => {
  //   intervalCountVolumeDown = setInterval(() => this.countVolumeDown(), 500);
  // }

  countVolumeUp = () => {
    console.log(this.state.sound.volume)
    if(this.state.sound.volume > 90){
      this.stopInterval(intervalCountVolumeUp);
    } else {
      this.setState((state) => ({
        sound: {
          volume: state.sound.volume <= 90 && state.sound.volume + 10
        }
      }))
    }
  }

  countVolumeDown = () => {
    if(this.state.sound.volume < 10){
      this.stopInterval(intervalCountVolumeUp);
    } else {
      this.setState((state) => ({
        sound: {
          volume: state.sound.volume >= 10 && state.sound.volume - 10
        }
      }))
    }
  }

  render() {

    let scene = this.state.scenes[this.state.activeScene -1];

    return (
      <div className="scenes">        
        <Pagination               
          scenesSize={this.state.scenes.length}
          activeScene={this.state.activeScene}
          reload={this.reloadScene}
        />
        <Map activeScene={this.state.activeScene} {...this.props}/>
        <CSSTransition timeout={500} classNames='scene'>
          <div className="scene-wrapper"> 
            <Navigation 
              key={`navigation-${scene.title}`}
              scene={scene} 
              scenesSize={this.state.scenes.length}
              activeScene={this.state.activeScene}
              next={this.nextScene}
              prev={this.prevScene} 
            />
            <Scene 
              key={`scene-${scene.title}`} 
              scene={scene} 
              activeScene={this.state.activeScene}
              scenes={scenes}
            />
            {(this.props.scenesStarted
              && <Sound
                  url={scene.sound}
                  playStatus={Sound.status.PLAYING}
                  volume={this.state.sound.volume}
                  onLoad={this.handleSoundAfterLoading}
                  onFinishedPlaying={this.handleSongFinishedPlaying}/> 
              )}
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default ScenesContainer;