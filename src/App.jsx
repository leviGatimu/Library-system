import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [books, setBooks] = useState([
    { id: 1, title: "Wimpy Kid", author: "John Hendo", description: "A classic childhood favorite." }
  ])

  function handleSubmit() {
    if (editingId) {
      setBooks(books.map(book => 
        book.id === editingId 
          ? { ...book, title, author, description } 
          : book
      ));
      setEditingId(null);
    } else {
      const newbook = { id: Date.now(), title, author, description };
      setBooks([...books, newbook]);
    }
    resetForm();
  }

  function handleEdit(book) {
    setEditingId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setDescription(book.description);
  }

  function handleDelete(id) {
    if (editingId === id) cancelEdit();
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  }

  function resetForm() {
    setTitle('');
    setAuthor('');
    setDescription('');
  }

  function cancelEdit() {
    setEditingId(null);
    resetForm();
  }

  return (
    <div className="app-grid">
      <main className="bookshelf-area">
        <div className="section-header">
          <h1>Bookshelf</h1>
          <span className="count">({books.length} Books)</span>
        </div>
        <div className="books-grid">
          {books.length > 0 ? (
            books.map(book => (
              <div key={book.id} className="book-card">
                <span className="book-id">#{book.id.toString().slice(-4)}</span>
                <div className="card-content">
                  <strong>{book.title}</strong>
                  <p className="author-name">by {book.author}</p>
                  {book.description && <p className="desc-text">{book.description}</p>}
                </div>
                <div className="card-actions">
                  <button className="edit-btn" onClick={() => handleEdit(book)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(book.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>Your library is empty. Add your first book!</p>
            </div>
          )}
        </div>
      </main>

      <aside className="sidebar">
        <form className="main-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} >
          <h2>{editingId ? 'Update Book' : 'Add New Book'}</h2>
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
          <div className="form-buttons">
            <button type='submit' className="primary-btn">
              {editingId ? 'Update Book' : 'Add to Library'}
            </button>
            {editingId && (
              <button type="button" className="secondary-btn" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </aside>
    </div>
  );
}

export default App;