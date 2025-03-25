import './App.css'
import ToDo from './ToDo';
import FooD from './Food';
import BarcelonaPlayers from './Players';
import Prophet from './Prophets';

function App() {
  const time = 23;
  const price = 10.28;
  const players = ['Pedri Gonzalez', 'Lamine Yamal', 'Raphinha', 'Pau Cubarsi'];
  const prophets = [
    {
      id: 1,
      name: 'Ibrahim(As.)',
      age: 100,
      country: 'Egypt'
    },
    {
      id: 2,
      name: 'Musa(As.)',
      age: 120,
      country: 'Egypt'
    },
    {
      id: 3,
      name: 'Isa(As.)',
      age: 0,
      country: 'Israel'
    },
    {
      id: 4,
      name: 'Muhammad(SAAS.)',
      age: 62,
      country: 'Saudi Arabia'
    }
  ];

  return (
    <>
      <div className="card">
        <h1>REACT Core Concepts</h1>
        {/* Implementing Component */}
        <Developer></Developer>
        <Student name='Daiyan' dept='CSE'></Student>
        <Student name='Hamzah' dept='EEE'></Student>
        <Device name='iPhone' price='180k'></Device>
        <Device name='Samsung' price='110k'></Device>

        <ToDo task='learn REACT' isDone={true} time={time}></ToDo>
        <ToDo task='revise JS' isDone={false}></ToDo>
        <ToDo task='pray' isDone={true} time='11'></ToDo>

        <FooD foodName='Jumbo Burger' isAvailable={false} price={price}></FooD>
        <FooD foodName='Oven Baked Pasta' isAvailable={true} price={price}></FooD>
        <FooD foodName='Oven Baked Pasta' isAvailable={true} ></FooD>

        {
          players.map(player => <BarcelonaPlayers name={player}></BarcelonaPlayers>)
        }

        {
          prophets.map(prophet => <Prophet key={prophet.id} info={prophet}></Prophet>)
        }
      </div>
    </>
  )
}

// Component Creation
function Developer() {
  const name = 'Ameer Hamzah Daiyan';
  const age = 23;

  return (
    <div>
      <p>I am {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function Student(props) {
  console.log(props)
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Department: {props.dept}</p>
    </div>
  )
}

function Device({ name, price }) {
  return (
    <div style={{
      border: '2px solid skyblue',
      borderRadius: '25px',
      fontSize: '15px',
      color: 'maroon'
    }}>
      <p>Device Name: {name}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default App
