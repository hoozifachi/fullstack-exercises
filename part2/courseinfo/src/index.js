import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    id: 1,
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                {
                    id: 2,
                    name: 'Using props to pass data',
                    exercises: 7
                },
                {
                    id: 3,
                    name: 'State of a component',
                    exercises: 14
                },
                {
                    id: 4,
                    name: 'Redux',
                    exercises: 11
                },
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                },
            ]
        }
    ]

    return (
        <div>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))