import { useState, type FormEvent } from 'react';

export default function ControlledForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
