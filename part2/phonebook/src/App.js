import { useState } from 'react'


const Entry = ({person}) => {
  return (
    <div>{person.name} {person.phone}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const alreadyPresent = persons.some(p => p.name === newName)

    if (!alreadyPresent) {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        phone: newNumber
      }

      setPersons(persons.concat(newPerson))
    }
    
    else {
      window.alert(`${newName} is already added to the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input 
                  value = {newName}
                  onChange={handleNameChange}/>
        </div>
        <div>number: <input 
                        value = {newNumber}
                        onChange = {handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>




      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Entry key = {person.id} person = {person}/>)}
      </ul>
    </div>
  )
}

export default App