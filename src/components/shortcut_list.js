import React from 'react'
import ShortcutItem from './shortcut_item';

const ShortcutList = (props) => {
  if (props.shortcuts.length < 1) {
    return <div>Add a new shortcut above!</div>
  }

  const deleteShortcut = (shortcut) => {
    props.onShortcutDelete(shortcut)
  };

  const shortcuts = props.shortcuts.map((shortcut, index) => {
    return (
      <ShortcutItem onDelete={(shortcut) => deleteShortcut(shortcut)} shortcut={shortcut} key={index} />
    )
  })

  return (
    <div className='row'>
      <div className={'col-md-8 col-md-offset-2 list-group ' + (props.editMode ? 'edit-all' : '')}>
        {shortcuts}
      </div>
    </div>
  )
}

export default ShortcutList
