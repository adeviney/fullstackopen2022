import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        newFilter = {newFilter}
        setFilter = {setFilter}/>

      <h3>add a new</h3>

      <PersonForm
        persons = {persons}
        setPersons = {setPersons}
        newName = {newName}
        setNewName = {setNewName}
        newNumber = {newNumber}
        setNewNumber = {setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons
        persons = {persons}
        filter = {newFilter}
      />
    </div>
  )
}

export default App