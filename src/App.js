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

  render() {

    return (
      <div className="app">
        {(this.state.started === false
          && <Start startScenes={this.handleStartScenes}/> )}
          <ScenesContainer scenesStarted={this.state.started} />
      </div>
    )
  }
}

export default App;
