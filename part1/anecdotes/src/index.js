import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({anecdotes, points, selected}) => (
     <p>
        {anecdotes[selected]}<br />
        has {points[selected]} votes
    </p>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
    const [topPoints, setTopPoints] = useState({ value: 0, index: 0 })

    const randomSelection = () => {
        return setSelected(Math.floor(Math.random() * 6));
    }

    const incrementPoints = () => {
        const newPoints = [...points]
        newPoints[selected] += 1
        setPoints(newPoints)
        
        if (points[selected] > topPoints.value) {
            let newTopPoints = {...topPoints}
            newTopPoints.value = points[selected]
            newTopPoints.index = selected
            setTopPoints(newTopPoints)
        }
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdotes={props.anecdotes} points={points} selected={selected} />
            <button onClick={incrementPoints}>vote</button>
            <button onClick={randomSelection}>next anecdote</button>

            <h1>Anecdote with the most votes</h1>
            <Anecdote anecdotes={props.anecdotes} points={points} selected={topPoints.index} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
