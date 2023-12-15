import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="" method="post">
        <label htmlFor="">Blog Title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body:</label>
        <textarea 
          name="" 
          id=""
          cols="30" 
          rows="10"
          required
          value= {body}
          onChange= {(e)=>setBody(e.target.value)}
        >

        </textarea>
        <label htmlFor="">Blog Author:</label>
        <select 
          name=""
          id=""
          value="author"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>

    </div>
  )
}

export default Create
