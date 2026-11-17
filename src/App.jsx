import Parent from './components/Parent'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Nested Components</h1>
        <p>Understanding parent, child and grandchild components</p>
      </header>

      <main>
        <Parent />
      </main>

      <footer className="footer">
        <p>Built with React and Vite</p>
      </footer>
    </div>
  )
}

export default App