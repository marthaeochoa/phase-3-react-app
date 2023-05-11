import React from 'react'

export const PostItem = ({post, param, blogId}) => {
    const {title, description} = post
    
    function loadPosts(){
        if(parseInt(param) === blogId){
            return <ul>
            <li>{title}</li>
            <li>{description}</li>
        </ul>
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
