import React from 'react';
import ReactDom from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    
  }
   
  
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}</button>
    )
  }
}

ReactDom.render(
  <Toggle />,
  document.getElementById('root')
)