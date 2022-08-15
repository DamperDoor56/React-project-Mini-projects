import React from 'react'

function RomanNumber() {
  var romanToNumber ={
    M: 1000,
    CM:900,
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
  return (
    <div className='home' id='theme'>Roman Number Converter</div>
  )
}
export default RomanNumber;