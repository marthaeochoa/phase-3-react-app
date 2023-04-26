function PostForm (){
    return (
        <div>
            <h1>Create A Post</h1>
            <form>
                <input placeholder="Post Title" type="text" className="name"/>
                <textarea type="text" className="description-box"/>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default PostForm;