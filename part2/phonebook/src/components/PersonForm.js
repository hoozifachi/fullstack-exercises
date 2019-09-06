import React from 'react'

const PersonForm = ({newName, onNewNameChange, newNumber, onNewNumberChange: onNewNumberChange, onAdd}) => {
    return (
        <form>
            <div>
                name: <input value={newName} onChange={onNewNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={onNewNumberChange} />
            </div>
            <div>
                <button type="submit" onClick={onAdd}>add</button>
            </div>
        </form>
    )
}

export default PersonForm