import React from 'react'
import { useState } from "react"
function RomanNumber(num) {
  const [number, setNumber] = useState('')
  console.log(number);
  var romanToNumber ={
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    VI: 4,
    I:1
  };
  var roman = '';


  for(var key in romanToNumber){
    while(num >= romanToNumber[key]){
      roman += key;
      num -= romanToNumber[key];
    }  
  }
  
  return (
    <div className='home'>
      <input onChange={e => setNumber(e.target.value)}></input>
      <p></p>
    </div>
  )
}


export default RomanNumber;