import NavBar from './components/NavBar';
import BlogIndex from './components/BlogIndex';
import BlogForm from './components/BlogForm';
import PostForm from './components/PostForm';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import BlogPosts from './components/BlogPosts';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:9292/blogs')
    .then(r => r.json())
    .then((blogs) => setBlogs(blogs));
  }, [])


  function onAddBlog(newBlog){
    setBlogs(blogs => {
      return [...blogs, newBlog]
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogs</h1>
        <NavBar /> 
        <Routes>
        <Route path='/' element={<BlogIndex blogs={blogs}/>}>
        </Route>

        <Route path='/blog/:id' element={<BlogPosts/>} />

        <Route path='/blog-form' element={<BlogForm  onAddBlog={onAddBlog}/>}/>
        <Route path='/post-form' element={<PostForm/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
