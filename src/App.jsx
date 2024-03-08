import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  function handleClick() {
    alert('Button clicked')
  }

  const handleClick2 = () => {
    alert('Button clicked 2')
  }
  
  const addToFour = (num) => {
    alert( num + 5);
  }


  return (
    <>
      <h1>React Second Concepts</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {
        alert('Button clicked 3')
      }}>Click Me 3</button>
      <button onClick={() => addToFour(3)}>Click Me 4</button>
    </>
  )
}

export default App
