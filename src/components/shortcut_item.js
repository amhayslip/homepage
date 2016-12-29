import React from 'react';

const ShortcutItem = ({shortcut}) => {

  return (
    <li className='list-group-item'>
      {shortcut.url}
    </li>
  )
}

export default ShortcutItem
