import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    let total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0)

    return (
        <p>Number of exercises {total}</p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div >
    )
}

export default Course