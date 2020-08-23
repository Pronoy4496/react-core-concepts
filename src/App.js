import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name:'Photoshop',price:'$90.99'}]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react paragraph </p>
        <Counter></Counter>
        <Product name={products[0].name} price={products[0].price} ></Product>
       <Person name='Rubel' nayika='Bobita'></Person>
       <Person name='Jashim' nayika='Shompa'></Person>
       <Person name='Manna' nayika='Moushumi'></Person>
       <Person name='Salam' nayika='Shabana'></Person>
      </header>
    </div>
  );
    function Counter(){
      const [count, setCount] = useState (0);
      const handleIncrease = () => setCount(count + 1);
      
      return(
        <div>
          <h1>Count:0</h1>
          <button onClick ={handleIncrease}>Increase</button>
        </div>
      )
    }


  function Person(props){
    return (
    <div style ={{border:"2px solid red", margin: "10px"}}>
       <h1>Nayok: {props.name}</h1>
    <h3>Hero of  {props.nayika}</h3>
    </div>
    )
  }
  function Product(props){
    const productStyle={
      border:"1px solid gray",
      borderRadius: '5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      float:"left"
    }
    
    return (
      <div style={productStyle}>
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
        <button>Buy Now</button>
      </div>
    )
  }
}

export default App;
