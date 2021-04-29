import React from 'react'

import { UniverseWindow } from 'gol-react';
import 'gol-react/dist/index.css'

const App = () => {
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  }}>
    <UniverseWindow>
      <h1>Hello!</h1>
      <p>This is an inner element.</p>
    </UniverseWindow>
  </div>
}

export default App
