import React, { useState } from 'react'
import Button from './Button';
// import evaluate from "mathjs"
import './Calculator.css';
export const Calculator = () => {
    const [ct,setct]=useState(0);
    const [tot,settot]=useState(0);
  function addValue(val){
    let x=ct
    x+=val
    console.log(val)
    setct(x)
  }
  function del(){
    let x=ct
    x=x.toString().slice(0,-1);
    setct(x)
  }
  function reset(){
    setct("")
  }
  function eva(){
    
    // setct(eval(ct.toString()))
    setct(Math.floor(eval(ct.toString()) * 100) / 100);
  }
  return (
    <div className='calc_wrapper'>
    <h1>Calculator</h1>
    <div className='screen'>
        {ct}
    </div>
    <div className='row'>
        <Button label="C" handleClick={reset} />
        <Button label="(" handleClick={addValue} />
        <Button label=")" handleClick={addValue} />
        <Button label="<=" handleClick={del} />
    </div>
    <div className='row'>
        <Button label="1" handleClick={addValue} />
        <Button label="2" handleClick={addValue} />
        <Button label="3" handleClick={addValue} />
        <Button label="+" handleClick={addValue} />
    </div>
    <div className='row'>
        <Button label="4" handleClick={addValue} />
        <Button label="5" handleClick={addValue} />
        <Button label="6" handleClick={addValue} />
        <Button label="-" handleClick={addValue} />
    </div>
    <div className='row'>
        <Button label="7" handleClick={addValue} />
        <Button label="8" handleClick={addValue} />
        <Button label="9" handleClick={addValue} />
        <Button label="*" handleClick={addValue} />
    </div>
    <div className='row'>
        <Button label="." handleClick={addValue} />
        <Button label="0" handleClick={addValue} />
        <Button label="=" handleClick={eva} />
        <Button label="/" handleClick={addValue} />
    </div>
    </div>
  )
}
export default Calculator