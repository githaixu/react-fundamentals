// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [ errorMessage, setError ] = React.useState('');
  const [ btnDisabled, setBtnDisabled ] = React.useState(false);
  const btnRef = React.useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;
    const isValieInput = value === value.toLowerCase();
    setBtnDisabled(!isValieInput);
    setError(isValieInput ? '' : 'Username must be lower case');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(event.target.elements[0].value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Username:</label>
        <input onChange={handleChange} type="text" id='name' />
      </div>
      <button disabled={btnDisabled} ref={btnRef} type="submit">Submit</button>
      <div>{errorMessage}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
