import React from 'react';

const ShortcutItem = ({shortcut}) => {

  return (
    <div className='list-group-item col-md-4'>
      {shortcut.url}
    </div>
  )
}

export default ShortcutItem
