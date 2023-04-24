import React, { useState, useRef } from 'react';
import './ResponseCheck.css';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('click');
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);

    //waiting, ready , noew
    const onClickDisplay = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('색바꾸면클')
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('눌럿');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 200)
        }
        else if (state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting');
            setMessage('너무 빠름')
        }
        else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('click');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            });
            console.log(endTime.current - startTime.current);
        }
    }

    const resetBtn = () =>{
        setResult([]);
    }
    const renderAverage = () => {
        return  result.length === 0 ? null :  
        <>
            <div>
                평균 : {result.reduce((a, c) => a + c, 0) / result.length}ms
            </div>
            <ul>
                {result.map((v, i) => <>
                    <li>
                        <div> {i + 1} : {v}ms</div>
                    </li>
                </>)}
            </ul>
        </>
    }

    return (
        <>
            <div id="screen" className={state} onClick={onClickDisplay}> {message}
            </div>
            <button onClick={resetBtn}>Reset</button>
            {renderAverage()}
        </>
    )
}

export default ResponseCheck;
//module.exports = ResponseCheck;