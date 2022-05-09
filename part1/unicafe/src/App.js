import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return(
      <p>{text} {value}%</p>
    )
  }
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  const average = (good * 1 + bad * -1) / all
  const posperc = good / all

  return (
    <div>
      <StatisticLine text = "good" value = {good} />
      <StatisticLine text = "neutral" value = {neutral} />
      <StatisticLine text = "bad" value = {bad} />
      <StatisticLine text = "all" value = {all} />
      <StatisticLine text = "average" value = {average} />
      <StatisticLine text = "positive" value = {posperc} />

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseValue = (category) => {
    if (category === 'good') {
      console.log("good feedback")
      setGood(good + 1)

    } else if (category === 'neutral') {
      console.log("neutral feedback")
      setNeutral(neutral + 1)
      
    } else if (category === 'bad') {
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
    <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    
    
    </div>
  )
}

export default App