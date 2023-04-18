import React from 'react'

const Ellipse = ({color,text}) => {
  return (
    <svg className='inline-block' width="9" height="9" viewBox="0 0 9 9" fill="" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.5" cy="4.5" r="4.5" fill={color}/>
</svg>

  )
}

export default Ellipse