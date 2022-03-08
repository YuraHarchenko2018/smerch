import React, {useEffect, useState} from 'react';

const Clock = () => {
  let [state, setState] = useState(() => {
    return { date: new Date() }
  })

  const tick = () => {
    console.dir('tick')
    setState({ date: new Date() })
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return () => { clearInterval(timerID); console.dir('end') }
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {state.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default Clock;