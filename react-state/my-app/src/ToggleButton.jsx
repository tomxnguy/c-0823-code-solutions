import {useState} from 'react'

function ToggleButton({text, color}){
  const [click, isClicked] = useState(false);
  console.log('isclicked', isClicked);

  function handleClick(){
    console.log('before setter', isClicked)
    setIsClicked(!isClicked);
    console.log('after setter', isClicked)
    setisNotClicked(isClicked);

  }

  return <button onClick={handleClick} style={{ backgroundColor: color }}>{text}</button>;
}

export default ToggleButton
