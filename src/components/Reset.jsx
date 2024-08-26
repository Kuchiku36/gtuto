import React from 'react'

const Reset = ({callBackReset}) => {
  return (
    <div>
        <button onClick={callBackReset}>
        reset
    </button>
    </div>
  )
}

export default Reset