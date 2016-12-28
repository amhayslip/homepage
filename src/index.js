import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shortcuts: []
    }
  }

  addShortcut (shortcut) {
    const newShortcut = {
      url: shortcut
    }

    this.setState({
      shortcuts: this.state.shortcuts.concat([newShortcut])
    })
  }

  render () {
    return (
      <div>
        <InputBar onShortcutSubmit={shortcut => this.addShortcut(shortcut)} />
        <ShortcutList shortcuts={this.state.shortcuts} />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
