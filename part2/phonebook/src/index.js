import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Person = ({person}) => {
    return <span>{person.name} {person.number}<br/></span>
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleNewNameChange = (event) => setNewName(event.target.value)

    const handleNewNumberChange = (event) => setNewNumber(event.target.value)

    const handleAdd = (event) => {
        event.preventDefault()

        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            return
        }

        const newPerson = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    const rows = () => 
        personsToShow.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with <input value={filter} onChange={handleFilterChange} />
            <form>
                <h2>Add a new</h2>
                <div>
                    name: <input value={newName} onChange={handleNewNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNewNumberChange} />
                </div>
                <div>
                    <button type="submit" onClick={handleAdd}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
