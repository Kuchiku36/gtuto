import React from 'react'

const Increment = ({callBackIncrement}) => {
  return (
    <div>

    <button onClick={callBackIncrement}>
        incrémenter
    </button>
    </div>
  )
}

export default Increment