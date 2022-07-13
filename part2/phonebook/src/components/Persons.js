const Entry = ({person}) => {
    return (
      <div>{person.name} {person.phone}</div>
    )
  }
  
  const Persons = ({persons, filter}) => {
  
    const filteredPersons = persons.filter(
      person => person.name.toLowerCase().startsWith(filter.toLowerCase()))
    
    return (
      <ul>
        {filteredPersons.map(person =>
          <Entry key = {person.id} person = {person}/>)}
      </ul>
    )
  
    
  }
  
  export default Persons