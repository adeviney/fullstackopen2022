const Filter = ({ newFilter, setFilter }) => {
    const handleFilterChange = (event) => {
      setFilter(event.target.value)
    }
    return (
      <form>
          <div>
            filter shown with <input 
                    value = {newFilter}
                    onChange={handleFilterChange}/>
          </div>
        </form>
    )
  }

  export default Filter