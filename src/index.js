import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import InputBar from './components/input_bar'
import ShortcutList from './components/shortcut_list'


class App extends Component {
  constructor (props) {
    super(props)

    this.STORAGE_ID = 'homepage_shortcuts'

    this.state = {
      shortcuts: JSON.parse(localStorage.getItem(this.STORAGE_ID)) || [],
      editMode: false
    }
  }

  addShortcut (title, shortcut, img) {
    const newShortcut = {
      title: title,
      url: shortcut,
      img: img
    }

    this.setState({
      shortcuts: this.state.shortcuts.concat([newShortcut])
    }, () => {
      localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.state.shortcuts));
    })
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
          <ShortcutList shortcuts={this.state.shortcuts} editMode={this.state.editMode} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
