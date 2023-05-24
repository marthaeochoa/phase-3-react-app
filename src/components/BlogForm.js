import { useState } from "react";


function BlogForm({onAddBlog}) {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    function handleOnChange(event){
        const {name, value} = event.target;
        setFormData(formData => {
            return {
                ...formData,
                [name]: value
            }
        })
    }

    

    function handleSubmit(event){
        event.preventDefault();

        fetch('http://localhost:9292/blogs', {
            method: "POST",
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newBlog) => onAddBlog(newBlog))
    }


    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <div>
                <label className="blog">Create New Blog</label>
                <input 
                className="name" 
                name="title"
                type="text" 
                placeholder="title"
                onChange={handleOnChange}
                value={formData.title}/>
                <textarea 
                className="description-box" 
                type="text" 
                name="description" 
                placeholder="description"
                onChange={handleOnChange}
                value={formData.description}/>
                <button type="submit" className="submit-button"> Submit </button>
            </div>
        </form>
    )
}

export default BlogForm;