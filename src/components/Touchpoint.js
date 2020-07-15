import React  from 'react'
import Markdown from 'markdown-to-jsx';

class Touchpoint extends React.Component {
  constructor(props) {
    super(props)
    this.state = { md: '' }
  }

  async componentDidMount() {
    const touchpointId = this.props.id;
    const file = await import(`../../content/touchpoint-${touchpointId}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
      md: text
    })
  }

  render() {
    return (
      <div className="touchpoint">
        <div className="touchpoint-content">
          <Markdown children={this.state.md} />
        </div>
      </div>
    )
  }
}

export default Touchpoint;
