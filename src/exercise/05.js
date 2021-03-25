// Styling
// http://localhost:3000/isolated/exercise/05.js

import {italic, red} from 'chalk'
import * as React from 'react'
import '../box-styles.css'

function Box({children, size, style}) {
  const classList = `box box--${size}`
  const mergedStyle = {
    fontStyle: 'italic',
    color: 'red',
    ...style,
  }
  return (
    <div className={classList} style={{...mergedStyle}}>
      {children}
    </div>
  )
}
function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
