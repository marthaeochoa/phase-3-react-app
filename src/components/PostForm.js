import { useParams } from "react-router-dom";
import { useState } from "react";


function PostForm ({onAddPost}){
    const { blog_id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    function handleOnChange(event){
        const {name, value} = event.target;
        console.log(formData)
        setFormData(formData => {
            return {
                ...formData,
                [name]:value,
            }
        })
    }



    function handleSubmit(event){
        event.preventDefault();



        fetch(`http://localhost:9292/posts`,{
            method: "POST",
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newPost) => console.log(newPost))
    }
    
    return (
        <div>
            <h1>Create A Post</h1>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Post Title"
                name="title" 
                type="text" 
                className="name"
                onChange={handleOnChange}
                value={formData.title}/>
                <textarea 
                type="text" 
                className="description-box"
                name="description"
                onChange={handleOnChange}
                value={formData.description}/>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default PostForm;