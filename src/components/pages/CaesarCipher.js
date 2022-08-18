import React, {useState} from 'react'
import './styles/Caesar.css'
import {BsInfoLg} from 'react-icons/bs'

function convertCeasar(str, num){
  var lowerCaseStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var newStr = '';

  for(var i = 0; i < lowerCaseStr.lenght; i++){
    var currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex -26;
  }
}

const CaesarCipher = () => {
  const [word, setWord] = useState('Try with "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"');
  const [number, setNumber] = useState('Try with "13"');
  return <>
   <div className='home'>
    <h1>Caesar Cipher</h1>
    <p className='info'>In cryptography, a<span>Caesar cipher</span> is one of the simplest and most widely known encryption techniques. 
      It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3,
      D would be replaced by A, E would become B, and so on.
</p>
    <input autoFocus onChange={e => setWord(e.target.value)} placeholder='Add a word'></input>
    <input autoFocus onChange={e => setNumber(e.target.value)} placeholder='Add a number'></input>
    <p>{word}</p>
    <p>{number}</p>
    <button><BsInfoLg /></button>
    </div>
    </>
};

export default CaesarCipher;
