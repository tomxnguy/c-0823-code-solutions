import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ label }: ButtonProp) {
  const [count, setCount] = useState(0);

  function clickCount(): string {
    if (count < 3) {
      return '';
    } else if (count <= 5) {
      return 'cold';
    } else if (count <= 8) {
      return 'cool';
    } else if (count <= 11) {
      return 'tepid';
    } else if (count <= 14) {
      return 'warm';
    } else if (count <= 17) {
      return 'hot';
    } else {
      return 'nuclear';
    }
  }

  const colorChange = clickCount();
  return (
    <div>
      <button className={`${colorChange}`} onClick={() => setCount(count + 1)}>
        {label}
      </button>
    </div>
  );
}

type ButtonProp = {
  label: string;
};
