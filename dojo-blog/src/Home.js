import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');


  //let name = 'mario';
  /* const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = ()=> {
    setName('Luigi');
    setAge(30);
  } */

/*   const handleClickAgain = (name) => {
    console.log('Hello ' + name);
  } */
/* 
  const [name,setName] = useState('Mario'); */

/*   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  } */

  

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" /* handleDelete={handleDelete} *//>}
      {/* <Bloglist blogs={blogs.filter((blog)=> blog.author === 'Mario')} title="Mario's Blogs"/>
      <button onClick={()=> setName('Luigi')}>Change Name</button>
      <p>{name}</p> */}

     {/*  <h2>Homepage</h2> */}
    {/*   <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button> */}
     {/*  <button onClick={()=>{handleClickAgain('Mario')}}>Click me again</button> */}
      
    </div>
  )
}

export default Home;
