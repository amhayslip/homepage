import React from 'react';

const ShortcutItem = (props) => {
  console.log(props)

  return (
    <div className='list-group-item col-md-4'>
      {props.url}
    </div>
  )
}

export default ShortcutItem
