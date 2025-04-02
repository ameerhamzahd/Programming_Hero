import { Suspense } from 'react'
import './App.css'
import User from './Users'

const fetchUserData = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())

function App() {

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <User user={fetchUserData }></User>
      </Suspense>
    </>
  )
}

export default App
