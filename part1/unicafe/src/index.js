import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Stat = (props) => <div>{props.label} {props.value}</div>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementGood = () => setGood(good + 1);
    const incrementNeutral = () => setNeutral(neutral + 1);
    const incrementBad = () => setBad(bad + 1);

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={incrementGood} text='good' />
            <Button handleClick={incrementNeutral} text='neutral' />
            <Button handleClick={incrementBad} text='bad' />

            <h1>statistics</h1>

            <Stat label='good' value={good} />
            <Stat label='neutral' value={neutral} />
            <Stat label='bad' value={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
