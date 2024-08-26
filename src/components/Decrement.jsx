import React from 'react'

const Decrement = ({callBackDecrement}) => {
  return (
    <div>
        <button onClick={callBackDecrement}>
        décrémenté
    </button>
    </div>
  )
}

export default Decrement