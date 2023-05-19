import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import { useParams, Link } from "react-router-dom";
import PostForm from "./PostForm";

function BlogPosts () {
    
    const { id } = useParams();


    const [posts, setPosts ] = useState([])
    useEffect(() =>{
        fetch('http://localhost:9292/posts')
        .then(r => r.json())
        .then((posts) => setPosts(posts));
      }, [id])

      function onAddPost(newPost){
        setPosts(posts => {
          return[...posts, newPost]
        })
      }

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
           <Link to={`/${id}/post-form`} component={<PostForm onAddPost={onAddPost}/>}><button>Create Post</button></Link>
            {loadPosts(posts)}
        </div>
    )
}

export default BlogPosts;