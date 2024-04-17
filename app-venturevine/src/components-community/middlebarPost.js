import React from 'react'
import './middlebar.css'
function MiddlebarPost() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Post</p>
        </div>
    </div>
  )
}

export default MiddlebarPost