import React from 'react'
import { useState } from "react"
import './styles/Roman.css';

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
    } else if(num >= 10 && num < 40){
      romanReturn += 'X';
      num -= 9;
    }else if(num >= 40 && num < 50){
      romanReturn += 'XL';
      num -= 39;
    } else if(num >= 50 && num < 90){
      romanReturn += 'L';
      num -= 49;
    }  else if(num >= 90 && num < 100){
      romanReturn += 'XC';
      num -= 89;
    }  
     else if(num >= 100 && num < 400){
      romanReturn += 'C';
      num -= 99;
    }else if(num >= 400 && num < 500){
      romanReturn += 'CD';
      num -= 399;
    } else if(num >= 500 && num < 900){
      romanReturn += 'D';
      num -= 499;
    } else if(num >= 900 && num < 1000){
      romanReturn += 'CM';
      num -= 899;
    } else if(num >= 1000){
      romanReturn += 'M';
      num -= 999;
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
    <h1 className='heading'>Roman Number Converter</h1>
      <div className='wraper'>
      <input autoFocus onChange={e => setNumber(e.target.value)} placeholder='Add some value'></input>
      <div className='inputinfo'><p>{RomanNumber(parseInt(number))}</p></div>
      </div>
    </div>
    </>
  )
}

export default RomanNumbers;