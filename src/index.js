import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar'
import ShortcutList from './components/shortcut_list'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shortcuts: JSON.parse(localStorage.getItem('shortcuts')) || []
    }
  }

  addShortcut (shortcut) {
    const newShortcut = {
      url: shortcut
    }

    this.setState({
      shortcuts: this.state.shortcuts.concat([newShortcut])
    }, () => {
      localStorage.setItem('shortcuts', JSON.stringify(this.state.shortcuts));
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
