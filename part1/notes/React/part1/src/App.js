// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { getByDisplayValue } from '@testing-library/react'
import { useState } from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


// React component names must be capitalized
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/adeviney">adeviney</a>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => { 
  const [ clicks, setClicks ] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])

  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  const hello = (who) => () => {
    console.log('hello', who)
  }

  // using a function that returns a function
  // const setToValue = (newValue) => () => {
  //   console.log('value now', newValue) // print the new value to console
  //   setValue(newValue)
  // }

  // another way to do the same as above

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})

  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1}) 
  }


  //const increaseByOne = () => setCounter(counter+1)
 //const decreaseByOne = () => setCounter(counter-1)
  //const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // const handleClick = () => {
  //   console.log('clicked')
  // }

  //console.log('rendering...', counter)

  const name = 'Peter'
  const age = 10

  return (
    // content of React app (usually) needs to contain one root element, i.e. div-element
    // using a root element is not the only working option
    // an array of components is also a valid solution
    // Because the root element is stipulated, we have "extra" div-elements in the DOM-tree. 
    // This can be avoided by using fragments, i.e. by wrapping the elements to be returned by the component 
    // with an empty element:

    <> 
      <h1>Greetings</h1>
      <Hello name = "Maya" age = {26 + 10}/>
      <Hello name = {name} age = {age}/>
      <Footer/>
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clicks.right}
        <History allClicks = {allClicks} />
        <p>
        {value}
        <Button handleClick = {()=>setToValue(1000)} text ="thousand"/>
        <Button handleClick = {()=>setToValue(0)} text ="reset"/>
        <Button handleClick = {()=>setToValue(value + 1)} text ="increment"/>
        </p>
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>

      </div>
      {/* <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      /> */}
      
    </>
  )
}

export default App

// array of components
// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello name="Maya" age={26 + 10} />,
//     <Footer />
//   ]
// }
// 