import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = ({parts}) => {
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

const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div >
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
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
                name: 'Bonus',
                exercises: 4
            },
        ]
    }

    return(
        <div>
            <Course course={course} />
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))