// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [ username, setUsername ] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value.toLowerCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(event.target.elements[0].value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Username:</label>
        <input onChange={handleChange} value={username} type="text" id='name' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
