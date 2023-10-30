import { useState, type FormEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { ImCheckmark } from 'react-icons/im';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function lengthErrorMessage() {
    if (password.length === 0) {
      return 'A password is required.';
    }
    if (password.length < 8) {
      return 'Your password is too short.';
    }
  }

  function iconChange() {
    if (password.length < 8) {
      return <ImCross color="red" />;
    } else {
      return <ImCheckmark color="green" />;
    }
  }

  const lengthError = lengthErrorMessage();
  const showIcon = iconChange();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{showIcon}</span>
        </label>
        <p>{lengthError}</p>
      </form>
    </>
  );
}
