import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar'
import ShortcutList from './components/shortcut_list'
import update from 'immutability-helper'


class App extends Component {
  constructor (props) {
    super(props)

    this.STORAGE_ID = 'homepage_shortcuts'

    this.state = {
      shortcuts: this.getFromLocalStorage(),
      editMode: false
    }
  }

  getFromLocalStorage () {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID)) || []
  }

  setToLocalStorage () {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.state.shortcuts))
  }

  addShortcut (title, shortcut, img) {
    const newShortcut = {
      title: title,
      url: shortcut,
      img: img
    }

    this.setState({
      shortcuts: this.state.shortcuts.concat([newShortcut])
    }, () => { this.setToLocalStorage() })
  }

  deleteShortcut (shortcut) {
    const index = this.state.shortcuts.indexOf(shortcut)

    this.setState({
      shortcuts: update(this.state.shortcuts, {$splice: [[index, 1]]})
    }, () => { this.setToLocalStorage() });
  }

  renderEditText () {
    if (this.state.editMode) {
      return 'Done'
    } else {
      return 'Edit'
    }
  }

  handleEditClick () {
    this.setState({ editMode: !this.state.editMode });
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <InputBar onShortcutSubmit={(title, shortcut, img) => this.addShortcut(title, shortcut, img)} />
          <button onClick={() => this.handleEditClick()} className='btn'>{this.renderEditText()}</button>
          <ShortcutList onShortcutDelete={(shortcut) => this.deleteShortcut(shortcut)} shortcuts={this.state.shortcuts} editMode={this.state.editMode} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
