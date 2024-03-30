import React from 'react'

function Button(props) {
  return (
    <div className='button'>

{/*       Button */}
      <button onClick={props.click} className='btn'>{props.value}</button>
    </div>
  )
}

export default Button
