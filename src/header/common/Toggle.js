import React, { useState } from 'react';

const Toggle = () => {

  let [state, setState] = useState({ isToggleOn: true })
  let actualTitle = state.isToggleOn ? 'ON' : 'OFF'

  return (
    <button onClick={() => setState((actual) => ({...actual, isToggleOn: !actual.isToggleOn }))}>
      {actualTitle}
    </button>
  )
}

export default Toggle