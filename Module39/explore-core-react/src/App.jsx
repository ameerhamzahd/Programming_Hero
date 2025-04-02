import './App.css'
import Counter from './counters';
import Batsman from './Batsmen';
import Bowler from './Bowlers';
import User from './Users';
import Friend from './Friends';
import Post from './posts';
import Player from './Players';
import { Suspense } from 'react';

const fetchData = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())

const fetchFriendsData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  return response.json();
}

const fetchPostsData = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())

function App() {
  const friendsPromise = fetchFriendsData();
  
  const handleClick = () => {
    alert('Clicked');
  };

  const handleAddition = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Player></Player>
      <Counter></Counter>
      <Batsman></Batsman>
      <Bowler></Bowler>

      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchData={fetchData}></User>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friend friendsPromise={friendsPromise}></Friend>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Post fetchPostsData={fetchPostsData}></Post>
      </Suspense>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('Clicked 2.')}>Click 2</button>
      <button onClick={() => handleAddition(10)}>Addition</button>
    </>
  )
}

export default App
