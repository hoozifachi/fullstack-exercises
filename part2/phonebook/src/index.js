import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const Person = ({ person }) => {
    return <span>{person.name} {person.number}<br /></span>
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

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} onFilterChange={handleFilterChange} />
            <h3>Add a new</h3>
            <PersonForm 
                newName={newName} 
                onNewNameChange={handleNewNameChange} 
                newNumber={newNumber}
                onNewNumberChange={handleNewNumberChange} 
                onAdd={handleAdd} 
            />
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
