import React from 'react';

const ShortcutItem = (props) => {

  return (
    <div className='list-group-item col-md-4'>
      <a href={props.url} target='_blank'>
        <img src={props.img}></img>
        {props.title}
      </a>

      <span className='edit'>Editing!</span>  
    </div>
  )
}

export default ShortcutItem
