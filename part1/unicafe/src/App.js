import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text} </button>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'positive'){
    return (
      <tr>
        <td>{text}</td> 
        <td>{value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if ((good + bad + neutral) === 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }

  return ( <>
  <h1>statistics</h1>
  <table>
    <tbody>
      <StatisticLine text="good" value = {good}/>
      <StatisticLine text="neutral" value = {neutral}/>
      <StatisticLine text="bad" value = {bad}/>
      <StatisticLine text="all" value = {good+neutral+bad}/>
      <StatisticLine text="average" value = {(good - bad)/(good+neutral+bad)}/>
      <StatisticLine text="positive" value = {good/(good+neutral+bad)*100}/>
    </tbody>
  </table>
  </>
  )
  
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text = "good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text = "neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text = "bad"/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App