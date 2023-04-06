const React = require('react');
const { useState, useRef } = React;
const GuGudan = () =>{
    const [first,setFirst] = useState(Math.ceil(Math.random() * 9))
    const [second,setSecond] = useState(Math.ceil(Math.random() * 9))
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');
    const [cntSuccess,setCntSuccess] = useState(0);
    const [cntFail,setCntFail] = useState(0);
    const [resultVisible , setResultVisible] = useState(false);
    const inputRef = useRef(null);

    const onSubmit = (e) =>{
        e.preventDefault();
        if(parseInt(value) === first*second){
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setResult('Submit : ' + value +  ' ==> Success');
            setCntSuccess((prevCntSuccess) => prevCntSuccess +1);
        }else{
            setValue('');
            setResult('Submit : ' + value +  ' ==> Fail');
            setCntFail((prevCntFail) =>  prevCntFail+ 1);
        }
        inputRef.current.focus();
        setResultVisible(true);
    };

    const onChange = (e) =>{
        setValue(e.target.value);
    };

    const ShowResult = () =>(
        <div>{result}  <br/>
            Success Count : {cntSuccess} <br/>
            Fail    Count : {cntFail}   <br/>
        </div>
    )
    
    return (
            <>
                <div>{first} * {second} = {value}</div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} type = "number" value = {value} onChange={onChange}/>
                    <button> submit </button>
                </form>
                {resultVisible && <ShowResult/>}                          
                
            </>
        ) 
};

module.exports = GuGudan;