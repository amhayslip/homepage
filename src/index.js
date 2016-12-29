import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar'
import ShortcutList from './components/shortcut_list'


class App extends Component {
  constructor (props) {
    super(props)

    this.STORAGE_ID = 'homepage_shortcuts'

    this.state = {
      shortcuts: JSON.parse(localStorage.getItem(this.STORAGE_ID)) || []
    }
  }

  addShortcut (shortcut) {
    const newShortcut = {
      url: shortcut
    }

    this.setState({
      shortcuts: this.state.shortcuts.concat([newShortcut])
    }, () => {
      localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.state.shortcuts));
    })
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <InputBar onShortcutSubmit={shortcut => this.addShortcut(shortcut)} />
          <ShortcutList shortcuts={this.state.shortcuts} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
