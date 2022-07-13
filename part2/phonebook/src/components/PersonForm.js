
  const PersonForm = ( {persons, setPersons, setNewName, newName, newNumber, setNewNumber }) => {
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
    )
  }
  
  export default PersonForm