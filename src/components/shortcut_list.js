import React from 'react'
import ShortcutItem from './shortcut_item';

const ShortcutList = (props) => {
  if (props.shortcuts.length < 1) {
    return <div>Add a new shortcut above!</div>
  }

  const shortcuts = props.shortcuts.map((shortcut) => {
    return (
      <ShortcutItem shortcut={shortcut} />
    )
  })

  return (
    <ul className='col-md-4 list-group'>
      {shortcuts}
    </ul>
  )
}

export default ShortcutList
