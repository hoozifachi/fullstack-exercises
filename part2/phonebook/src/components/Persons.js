import React from "react";
import Person from './Person'

const Persons = ({persons, filter}) => {
    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    const rows = () =>
        personsToShow.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            {rows()}
        </div>
    )
}

export default Persons