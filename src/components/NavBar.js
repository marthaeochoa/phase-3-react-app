import BlogForm from "./BlogForm";
import BlogIndex from "./BlogIndex";
import PostForm from "./PostForm";

function NavBar() {

    return (
        <div>
            <BlogForm />
            <BlogIndex />
            <PostForm />
        </div>
    )
}

export default NavBar;