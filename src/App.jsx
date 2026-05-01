import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([
    { id: 1, title: "Wimpy Kid", author: "John Hendo", description: "A classic childhood favorite." }
  ])

  function handleSubmit() {
    const newbook = { id: Date.now(), title, author, description };
    setBooks([...books, newbook]);
    setTitle('');
    setAuthor('');
    setDescription('');
  }

  return (
    <div className="app-grid">
      <main className="bookshelf-area">
        <div className="section-header">
          <h1>Bookshelf</h1>
          <span className="count">({books.length} Books)</span>
        </div>
        <div className="books-grid">
          {
            books.map(book => (
              <div key={book.id} className="book-card">
                <span className="book-id">#{book.id.toString().slice(-4)}</span>
                <strong>{book.title}</strong>
                <p className="author-name">by {book.author}</p>
                {book.description && <p className="desc-text">{book.description}</p>}
              </div>
            ))
          }
        </div>
      </main>

      <aside className="sidebar">
        <form className="main-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} >
          <h2>Add New Book</h2>
          <div className="field">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="The Great Gatsby"
              required
            />
          </div>
          <div className="field">
            <label>Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="F. Scott Fitzgerald"
              required
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief summary..."
              rows="4"
            />
          </div>
          <button type='submit'>Add to Library</button>
        </form>
      </aside>
    </div>
  );
}

export default App;