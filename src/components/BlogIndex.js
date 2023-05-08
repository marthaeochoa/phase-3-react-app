import BlogItem from "./BlogItem";
import { Link } from "react-router-dom";


function BlogIndex ({blogs, setBlogId}) {

    function listBlogs(blogs){
        return blogs.map(blog => {
            return (
                <Link to={`/${blog.id}`} >
                <BlogItem 
                key={blog.id}
                blog={blog}
                />
                </Link>
            )

        })
    }



    return (
        <div>
        {listBlogs(blogs)}
        </div>
    )
}

export default BlogIndex;