import './App.css'
import { puppyList } from './data.js'

function App() {
  console.log(puppyList);
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {/* Your JSX code here */}
    </div>
  )
}

export default App

