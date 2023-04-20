import React, { useState } from 'react';
import './ResponseCheck.css';

const ResponseCheck = () => {
    const [state , setState] = useState('waiting');
    const [message , setMessage ] = useState('click');
    const [result , setResult] = useState([]);
    let startTime,endTime,timeout;
    
    //waiting, ready , noew
    const onClickDisplay = () =>{
        if(state === 'waiting'){
            setState('ready');
            setMessage('색바꾸면클')
            
            this.timeout = setTimeout(()=> {
                setState('now');
                setMessage('눌럿');
                this.startTime = new Date();
            },Math.floor(Math.random() * 1000) + 2000)           
        }
        else if(state === 'ready'){
                clearTimeout(this.timeout);
                setState('waiting');
                setMessage('너무 빠름')
        }
        else if(state === 'now'){
            this.endTime = new Date();
            setState('waiting');
            setMessage('click');
            setResult();
            console.log(this.endTime);
            console.log(this.startTime);
            console.log(this.endTime - this.startTime);
        }
    }
    return (
        <>
            <div id="screen" className={state} onClick={onClickDisplay}> {message}
            </div>
            <div>
                {result}
            </div>
        </>
    )
}

export default ResponseCheck;
//module.exports = ResponseCheck;