import React from 'react'
import './middlebar.css'
function MiddlebarSettings() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Settings</p>
        </div>
    </div>
  )
}

export default MiddlebarSettings