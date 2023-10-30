import { FormEvent } from 'react';

export default function UncontrolledForm() {
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
          Username: <input type="text" name="username" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
