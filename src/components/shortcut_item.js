import React from 'react';

const ShortcutItem = (props) => {

  return (
    <div className='list-group-item col-md-4'>
      <a href={props.url} target='_blank'>
        {props.title}
      </a>
    </div>
  )
}

export default ShortcutItem
