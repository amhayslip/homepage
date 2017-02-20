import React, { Component } from 'react'

class InputBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      url: '',
      img: ''
    }
  }

  handleClick () {
    this.props.onShortcutSubmit(this.state.title, this.state.url, this.state.img)
  }

  render () {
    return (
      <div className='input-container'>
        <input placeholder='title'
          value={this.state.title}
          onChange={event => this.setState({title: event.target.value})} />
        <input placeholder='url'
          value={this.state.url}
          onChange={event => this.setState({url: event.target.value})} />
        <input placeholder='img url'
          value={this.state.img}
          onChange={event => this.setState({img: event.target.value})} />
        <button className='btn' onClick={() => this.handleClick()}>submit</button>
      </div>
    )
  }
}

export default InputBar
