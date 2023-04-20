// import React, { Component }  

const React = require('react');
const Try = require('./Try');
const { useState , useRef} = React;

const length = 3;

function getNumber() {
    return Math.ceil(Math.ceil(Math.random() * 9))
}
function getUniqueNumberList() {

    console.log('getUniqueNumberList')
    const list = new Set();
    while (length > list.size) {
        list.add(getNumber());
    }
    //return [...list].sort((a, b) => a - b);
    return [...list];
}

const NumberBaseBall = () => {
    const [result, setResult] = useState('시작');
    const [value, setValue] = useState('');

    //const [answer, setAnswer] = useState(getUniqueNumberList()); 
    //초기값 설정시 state에 함수 호출을 넣어서 렌더링 할때마다 반복적인 쓸데없는 함수 호출이 일어난다,
    //함수 호출이 아닌 함수 자체를 넣어서 렌더 될때마다 호출이 아닌 return값 자체를 넣음
    const [answer, setAnswer] = useState(getUniqueNumberList); // lazy init
    const [tries, setTries] = useState([]);

    const inputRef = useRef(null);



    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!value || value.length < 3) {
            alert('값을 입력해주세요');
            return;
        }
        if (value === answer.join('')) {
            setValue('');
            setAnswer(getUniqueNumberList());
            setResult('정답');
            setTries([]);
            alert('정답입니다.');

            inputRef.current.focus();
        }
        else {
            const valueArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            let out = 0;
            if (tries.length >= 9) {
                setResult(`실패!  정답 : ${answer.join(',')} `);
                alert('다시 시작합니다');
                setValue();
                setAnswer(getUniqueNumberList());
                setTries([]);
            } else {
                valueArray.forEach((value, index) => {
                    if (answer[index] === value) {
                        strike += 1;
                    }
                    else if (answer.includes(value)) {
                        ball += 1;
                    }
                    else {
                        out += 1;
                    }
                })
                setTries((prevTries) => {
                    return [...prevTries, { try: value, result: `${strike}S ${ball}B ${out}O` }];
                });
                setValue('');
            }
        }
    };

    return (
        <>
            {console.log('렌더', value)}
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input  ref={inputRef} maxLength={3} value={value} onChange={onChangeInput}></input>
                <button>submit</button>
            </form>
            <div> 시도 : {tries.length}</div>
            <ul>
                {tries.map((v, i) =>
                    <Try key={`${i}차`} tryInfo={v} index={i}/>
                )}
            </ul>
        </>
    )

};

module.exports = NumberBaseBall;
