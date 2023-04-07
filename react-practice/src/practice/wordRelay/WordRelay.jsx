const React = require('react');
const { Component, useState, useRef } = React;

const WordRelay = () =>  {
    const [word, setWord] = useState('정의호');
    const [value , setValue] = useState('');
    
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(word.slice(-1) === value.slice(0,1)){
            setWord(value);
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

            
        </>
    )
};

// class WordRelay extends Component{
    

//     render(){
//         return <h1>Hi {this.state.text}</h1>
//     }
// }

module.exports = WordRelay;