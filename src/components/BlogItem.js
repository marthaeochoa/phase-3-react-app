import React from 'react'

function BlogItem({blog}) {
  const { id, title, description } = blog


  return (
    <div>
      <ul className='blog'>
        <li>{title}</li>
        {/* <li>{description}</li> */}
      </ul>
    </div>
  )
}

export default BlogItem