import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jasim','Alomgir','Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  // const nayokName = nayoks.map(nayok => nayok);
  // console.log(nayokName)
  // const productName = products.map(product => product.name)
  // console.log(productName)

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <User></User>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count :{count}</h1>
      <button onMouseMove={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function User(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#DEE1E6',
    height: '200px',
    width: '200px',
    float: 'left',
  }
  const {name,price} = props.product;
  // console.log(name, price)
  return (
    <div style={productStyle}>
      <h3> {name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray'
  }
  return (
  <div style={{border: '2px solid red', width: '500px'}}>
      <h1>My Name: {props.name}</h1>
      <p>My Profession {props.job}</p>
  </div>)
}

export default App;
