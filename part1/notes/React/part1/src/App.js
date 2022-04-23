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

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
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

const App = () => { 
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