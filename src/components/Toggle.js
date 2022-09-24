import React, { useState } from "react";

function Toggle() {
  const [ isOn, setisOn ] = useState(false)

  function handleToggle() {
    setisOn(isOn => !isOn)
  }

  const color = isOn ? 'red' : 'white'

  return <button style={{background: color}} onClick={handleToggle} >{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
