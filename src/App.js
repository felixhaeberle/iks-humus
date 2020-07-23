import React from 'react';
import Start from './components/Start'
import ScenesContainer from './ScenesContainer'
import './Scene.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    };
  }

  handleStartScenes = () => {
    this.setState({
      started: true
    });
  }

  reloadScene = () => {
    this.setState({
      started: false
    });
  }

  render() {

    return (
      <div class="humus">
        <div className="app">
          {(this.state.started === false
            && <Start startScenes={this.handleStartScenes}/> )}
            <ScenesContainer reloadScene={this.reloadScene} scenesStarted={this.state.started} />
        </div>
        <p>Interaktive Kommunikationssysteme | Felix Häberle, Tobias Ertel und Zacharie Reifegerst | 2020</p>
      </div>
    )
  }
}

export default App;
