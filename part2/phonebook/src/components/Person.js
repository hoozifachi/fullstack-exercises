import React from 'react'

const Person = ({ person }) => {
    return <span>{person.name} {person.number}<br /></span>
}

export default Person