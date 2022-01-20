import React from 'react';
import { useParams } from 'react-router-dom';

const Parameters = () => {
    
    // declare useParam variables
    const { input } = useParams();
    const { textColor } = useParams();
    const { bkgColor } = useParams();

    // isNaN to determine if input in parameter is a string, if it's a string then return
    // the word is input string
    // else return the number is input number
    return (
        <div>
            <h1>{input}</h1>
            <h1 style={{color: textColor, backgroundColor: bkgColor}}>The {isNaN(input) ? 'word' : 'number'} is {input}.</h1>
        </div>
    )
}

export default Parameters
