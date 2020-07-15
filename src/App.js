import React from 'react';
import Start from './components/Start'
import ScenesContainer from './ScenesContainer'
import './Scene.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: true,
    };
  }

  render() {

    return (
      <div className="app">
        {(this.state.started === false
          ? <Start />
          : <ScenesContainer />)}
      </div>
    )
  }
}

export default App;
