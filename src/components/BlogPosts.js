import { useState, useEffect } from "react";

function BlogPosts () {
const [posts, setPosts ] = useState([])
    useEffect(() =>{
        fetch('http://localhost:9292/posts')
        .then(r => r.json())
        .then((posts) => setPosts(posts));
      }, [])


      function loadposts(posts){
        return posts.map((post) => {
            return <ul>
                <li>{post.title}</li>
                <li>{post.description}</li>
                <li>{post.blog_id}</li>
            </ul>
        })
      }

    return (
        <div>
            {loadposts(posts)}
        </div>
    )
}

export default BlogPosts;