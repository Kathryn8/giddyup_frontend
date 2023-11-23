import React, { useState } from 'react';
import { FlapDisplay, Presets } from 'react-split-flap-effect'
import 'react-split-flap-effect/extras/themes.css';


const SolariDisplay = ({ text, length }) => {
  // const [value, setValue] = useState("12:34");

  return (
    <FlapDisplay
      chars={Presets.ALPHANUM + ',!.$'}
      length={length}
      value={text}
      timing={50}
      className='lightBordered'
    />
  )
};

export default SolariDisplay;
