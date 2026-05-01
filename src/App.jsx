import { useState } from 'react'
import './App.css'

function App(){
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([
    {id:1 , title: "Wimpy kid", author: "John hendo", description: ""}
  ])
  function handleSubmit(){
    const newbook = {id: Date.now(), title, author , description};
    setBooks([...books , newbook]);
    setTitle('');
setAuthor('');
setDescription('');
  }
  return (
    <div>
      <form onSubmit={(e)=> {e.preventDefault(); handleSubmit();}} >
        <h1>Uwimanas Library</h1>
        <label>Title: </label>
        <input 
        value= {title}
        onChange={(e)=> setTitle(e.target.value)}
        /><br></br><br></br>
        <label>Author:  </label>
        <input 
        value= {author}
        onChange={(e)=> setAuthor(e.target.value)}
        /><br></br><br></br>
        <label>Description: </label>
        <textarea
        value= {description}
        onChange={(e)=> setDescription(e.target.value)}
        /><br></br><br></br>
        <button type='submit'>Submit</button>
      </form>
      <ul>
        <h1>Books</h1>
        {
          books.map(book => <li key={book.id}><b>Book {book.id}</b> <br></br><br></br> Title: {book.title} <br></br><br></br> Author: {book.author} <br></br><br></br> Description: {book.description}<br></br></li>)
        }
      </ul>
    </div>
  );
}

export default App;