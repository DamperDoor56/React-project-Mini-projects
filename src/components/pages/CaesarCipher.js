import React, {useState} from 'react'
import './styles/Caesar.css'
import {BsInfoLg} from 'react-icons/bs'

function codeCipher(str, num){
  num = num % 26;
  var lowStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var result = '';

  for(var i = 0; i < lowStr.length; i++){
    var currentLetter = lowStr[i];
    if(currentLetter === ' '){
      result += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i] === str[i].toUpperCase()){
      result += alphabet[newIndex].toUpperCase();
    }
    else result += alphabet[newIndex];
  }
  return result;
}
const CaesarCipher = () => {
  const [word, setWord] = useState('');
  const [number, setNumber] = useState('');
  const [show, setShow] = useState('');
  

  return <>
   <div className='homecaesar'>
    <h1>Caesar Cipher</h1>
    {
     show? <p className='info'>In cryptography, a<span>Caesar cipher</span> is one of the simplest and most widely known encryption techniques. 
      It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3,
      D would be replaced by A, E would become B, and so on.
     </p>:null
    }
    
    <input autoFocus onChange={e => setWord(e.target.value)} placeholder='Add a word'></input>
    <input autoFocus onChange={e => setNumber(e.target.value)} placeholder='Add a number'></input>
    <p>You can try with <br></br> 'Rfyr uyq dsl zsr Gk rpwgl em cyr qmkc ZZO afgaicl', 2 </p>
    <p>{codeCipher(word,number)}</p>
    <button className='info-btn' onClick={() => setShow(!show)} ><BsInfoLg /></button>
    </div>
    </>
};

export default CaesarCipher;
