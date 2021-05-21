import React from 'react'
import {useState, useEffect } from 'react'

const Count = () => {
    const [name, setName] = useState({firstName: 'Mercy', lastName: 'Nnadi'});
    const [text, setText] = useState({firstNumber: '', secondNumber: ''});
    console.log(name);

    const firstNames = ['Jack', 'Mercy', 'Mary', 'Blessing', 'Roseline', 'Tochi'];
    const lastNames = ['Buchi', 'Nnadi', 'Timothy', 'Paul', 'Frank', 'chibuzor'];

    let num = Math.floor(Math.random()*6);
    let numTwo = Math.floor(Math.random()*6);
    // console.log(num, numTwo)


    const onclick =() => {
        setName({firstName: firstNames[num], lastName: lastNames[numTwo]});
    }

    return (

      
        
        <div>
            <button onClick={onclick}>Change Name</button>
            <br />
            <br />
            <h2>Your full name is {name.firstName} {name.lastName} </h2>
            
            <div>
                <input type="text" value={text.firstNumber} onChange={(e) => setText({...text, firstNumber :  e.target.value})} />
                <input type="text" value={text.secondNumber} onChange={(e) => setText({...text, secondNumber :  e.target.value})} />
                <br />
                <p>First Number is {text.firstNumber} </p>
                <br />
                <p>second Number is {text.secondNumber} </p>
            </div>
        </div>
    )
}

export default Count
