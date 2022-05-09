import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseValue = (category) => {
    if (category == 'good') {
      console.log("good feedback")
      setGood(good + 1)

    } else if (category == 'neutral') {
      console.log("neutral feedback")
      setNeutral(neutral + 1)
      
    } else if (category == 'bad') {
      console.log("bad feedback")
      setBad(bad + 1)
    }
  }
  return (
    <div>
    <h1>give feedback</h1>

    <Button handleClick = {() => increaseValue("good")} text = "good"/>
    <Button handleClick = {() => increaseValue("neutral")} text = "neutral"/>
    <Button handleClick = {() => increaseValue("bad")} text = "bad"/>

    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    </div>
  )
}

export default App