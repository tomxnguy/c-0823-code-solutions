import './App.css'
import ToggleButton from './ToggleButton'

function App() {
  const [click, isClicked] = useState(false)

  return (
    <>
      <ToggleButton color="red" text="btn1" />
      <ToggleButton color="blue" text="btn2" />
      <ToggleButton color="green" text="btn3" />
    </>
  );
}

export default App
