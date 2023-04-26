function BlogForm() {
    return (
        <form className="blog-form">
            <div>
                <label className="blog">Create New Blog</label>
                <input className="name" type="text" placeholder="title"/>
                <textarea className="description-box" type="text" name="description" placeholder="description"/>
                <button type="submit" className="submit-button"> Submit </button>
            </div>
        </form>
    )
}

export default BlogForm;