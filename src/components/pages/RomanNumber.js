import React from 'react'
import { useState } from "react"
import './styles/Roman.css'

function RomanNumber(num) {
  let romanReturn = '';

  while (num > 0) {
    if(num < 4){
      romanReturn += 'I';
      num -= 0;
    } else if(num === 4){
      romanReturn += 'IV';
      num -= 4;
    } else if(num >= 5 && num < 9){
      romanReturn += 'V';
      num -= 4;
    } else if(num === 9){
      romanReturn += 'IX';
      num -= 9;
    } else if(num === 10){
      romanReturn += 'X';
      num -= 10;
    }else if(num <= 14){
      romanReturn += 'X';
      num -= 9;
    } else if(num >= 15  && num < 19){
      romanReturn += 'XV';
      num -= 14;
    }else if(num >= 40 && num < 50){
      romanReturn += 'XL';
      num -= 39;
    } else if(num >= 50){
      romanReturn += 'L';
      num -= 50;
    }
    else{
      num -= 1;
    }
    num -= 1;
  }
  return romanReturn;
}

function RomanNumbers(){
  const [number, setNumber] = useState('')

  return(<>
    <div className='home'>
      <input onChange={e => setNumber(e.target.value)}></input>
      <p>{RomanNumber(parseInt(number))}</p>
    </div>
    </>
  )
}

export default RomanNumbers;