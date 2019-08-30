import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = (props) => <tr><td>{props.label}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
    const totalStats = props.good + props.neutral + props.bad
    const totalScore = props.good - props.bad
    const average = totalStats === 0 ? 0 : totalScore / totalStats
   
    return (
        <>
            <h1>statistics</h1>

            <table>
                <tbody>
                    <Statistic label='good' value={props.good} />
                    <Statistic label='neutral' value={props.neutral} />
                    <Statistic label='bad' value={props.bad} />
                    <Statistic label='all' value={totalStats} />
                    <Statistic label='average' value={average} />
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const incrementGood = () => {
        setGood(good + 1)
    }
    const incrementNeutral = () => {
        setNeutral(neutral + 1)
    }
    const incrementBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={incrementGood} text='good' />
            <Button handleClick={incrementNeutral} text='neutral' />
            <Button handleClick={incrementBad} text='bad' />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
