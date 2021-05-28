import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault();
    let name=newName;
    let personsArray = [{ name: 'Arto Hellas' }];

    persons.foreach(person=>{
      if (person.name===newName){
        alert("Already Signed up");
      }
      else{
        setPersons(persons.concat({name}));
      }
    })
  }
}

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  console.log("persons", persons);
  console.log(Object.values(persons))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
