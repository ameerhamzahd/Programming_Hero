import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('/awesomeBottles.json')
.then(response => response.json())

function App() {

  return (
    <>
      <h1>Awesome Water Bottles</h1>

      <Suspense fallback={<div>Awesome Bottles are loading...</div>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
