import React, { Component } from 'react'

class ShortcutItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      url: props.shortcut.url,
      img: props.shortcut.img,
      title: props.shortcut.title,
      editMode: false
    }
  }

  handleDeleteClick () {
    this.props.onDelete(this.props.shortcut);
  }

  handleEditClick () {
    this.props.onEdit(this.props.shortcut);
  }

  render () {
    return (
      <div className='list-group-item col-md-4'>
        <a href={this.props.shortcut.url} target='_blank'>
          <img src={this.props.shortcut.img}></img>
          {this.props.shortcut.title}
        </a>

        <div className='edit-one-shortcut'>
          <input value={this.state.title}
            onChange={event => this.setState({title: event.target.value})}></input>
        </div>

        <div className='edit-all-shortcut'>
          <button onClick={() => this.handleDeleteClick()} className='btn btn-danger'>Delete</button>

          <button onClick={() => this.handleEditClick()} className='btn'>Edit</button>
        </div>
      </div>
    )
  }
}

export default ShortcutItem
