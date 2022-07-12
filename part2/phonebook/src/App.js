import { useState } from 'react'


const Entry = ({person}) => {
  return (
    <div>{person.name}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addEntry = (event) => {
    event.preventDefault()

    const alreadyPresent = persons.some(p => p.name === newName)


    if (!alreadyPresent) {
      const newPerson = {
        id: persons.length + 1,
        name: newName
      }
      setPersons(persons.concat(newPerson))
    }
    
    else {
      window.alert(`${newName} is already added to the phonebook`)
    }
    setNewName('')
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input 
                  value = {newName}
                  onChange={handleInputChange}/>
        </div>
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