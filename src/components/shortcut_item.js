import React, { Component } from 'react'

class ShortcutItem extends Component {
  constructor (props) {
    super(props)
  }

  handleDeleteClick () {
    this.props.onDelete(this.props.shortcut);
  }

  render () {
    return (
      <div className='list-group-item col-md-4'>
        <a href={this.props.shortcut.url} target='_blank'>
          <img src={this.props.shortcut.img}></img>
          {this.props.shortcut.title}
        </a>

        <span className='edit'>
          <button onClick={() => this.handleDeleteClick()} className='btn btn-danger'>Delete</button>
        </span>
      </div>
    )
  }
}

export default ShortcutItem
