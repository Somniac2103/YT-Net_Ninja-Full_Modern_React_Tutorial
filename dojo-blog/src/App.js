import Navbar from './Navbar';
import Home from './Home';

function App() {
  /* const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com"
  */

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      {
      
      /* <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times.</p>

        <p>{ 10 }</p>
        <p>{"Hello, Ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google Site</a>
      </div> 
      */
      
      }
    </div>
  );
}

export default App;
