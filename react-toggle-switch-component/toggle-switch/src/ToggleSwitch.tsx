import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  function clickSwitch(): string {
    if (toggle) {
      return 'toggle-switch is-on';
    } else {
      return 'toggle-switch';
    }
  }

  function labelSwitch(): string {
    if (toggle) {
      return 'on';
    } else {
      return 'off';
    }
  }

  const switchChange = clickSwitch();
  const label = labelSwitch();

  return (
    <div className={`${switchChange}`} onClick={() => setToggle(!toggle)}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
