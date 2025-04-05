import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())

function App() {

  return (
    <>
      <h1>React World On The Go</h1>
      
      <Suspense fallback={<h3>Searching...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
