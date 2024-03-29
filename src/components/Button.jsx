import React from 'react'

function Button(props) {
  return (
    <div className='button'>
      <button onClick={props.click} className='btn'>{props.value}</button>
    </div>
  )
}

export default Button
