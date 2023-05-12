import React from 'react'

export const PostItem = ({post, param, blogId}) => {
    const {title, description} = post
    
    function loadPosts(){
        if(parseInt(param) === blogId){
            return <div> <ul className='cards'>
            <li className='title'><h4>{title}</h4></li>
            <li>{description}</li>
            <button>See comments</button>
        </ul>
        </div>
        } else {
            return null
        }
    };

  return (
    <div>
            {loadPosts()}
    </div>
  )
}
