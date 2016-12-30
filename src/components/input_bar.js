import React, { Component } from 'react'

class InputBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      url: '',
      img: ''
    }
  }

  handleClick () {
    this.props.onShortcutSubmit(this.state.url)
  }

  render () {
    return (
      <div className='input-container'>
        <input placeholder='url'
          value={this.state.url}
          onChange={event => this.setState({url: event.target.value})} />
        <input placeholder='img url'
          value={this.state.img}
          onChange={event => this.setState({img: event.target.value})} />
        <button onClick={() => this.handleClick()}>submit</button>
      </div>
    )
  }

}

export default InputBar
