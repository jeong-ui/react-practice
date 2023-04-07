const React = require('react');
const { useState, useRef } = React;

const WordRelay = () =>  {
    const [word, setWord] = useState('시작');
    const [result , setResult] = useState(''); 
    const [value , setValue] = useState('');
    
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(word.slice(-1) === value.slice(0,1)){
            setResult('OK');
            setWord(value);
        }
        else {
            setResult('No');
        }

        setValue('');
        inputRef.current.focus();
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input ref = {inputRef} type="text" value ={value} onChange={onChange}/>
                <button> submit </button>
            </form>
            <div>{result}</div>
    
            
        </>
    )
};

module.exports = WordRelay;