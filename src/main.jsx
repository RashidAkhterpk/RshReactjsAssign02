import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// let Hello = () => {
//   return (<h1>Hello World</h1>
//   )
// }
createRoot(document.getElementById('root')).render(
  <App />
  // <Hello />
)
