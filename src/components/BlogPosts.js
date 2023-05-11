import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import { useParams } from "react-router-dom";

function BlogPosts () {
    
    const { id } = useParams();


    const [posts, setPosts ] = useState([])
    useEffect(() =>{
        fetch('http://localhost:9292/posts')
        .then(r => r.json())
        .then((posts) => setPosts(posts));
      }, [id])

      

      function loadPosts(posts){
        return posts.map((post) => {

            return <PostItem 
            key={post.id}
            post={post}
            blogId={post.blog_id}
            param={id}
            />
            
        })
      }

    return (
        <div>
            {loadPosts(posts)}
        </div>
    )
}

export default BlogPosts;