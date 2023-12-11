import {useState} from 'react';
import Bloglist from './Bloglist';

const Home = () => {

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
  const [ blogs, setBlogs ] = useState([
    { title: ' My new Website', body: 'Content of new website blog', author:'Mario', id:1},
    { title: 'Welcome Party!', body: 'Content of Welcome Party blog', author:'Yoshi', id:2},
    { title: 'Web dev top tips', body: 'Content of Web dev top tips blog', author:'Mario', id:3},
  ])

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs"/>
      <Bloglist blogs={blogs.filter((blog)=> blog.author === 'Mario')} title="Mario's Blogs"/>

     {/*  <h2>Homepage</h2> */}
    {/*   <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button> */}
     {/*  <button onClick={()=>{handleClickAgain('Mario')}}>Click me again</button> */}
      
    </div>
  )
}

export default Home
