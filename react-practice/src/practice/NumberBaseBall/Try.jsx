//import React, { memo } from 'react';

const React = require('react');

const { memo , useState } = React;
const Try = memo (({ tryInfo , index}) => {

    //하위에서 props의 값을 바꾸어 주어야 할떄는 직접 변경X ,  State로 넣어서 관리
    const [result , setResult ] = useState(tryInfo.result);
    const onClick = () => {
        setResult('props 값 바꾸기 테스트');
    };

    return (
        <li>
            <div>
                <b>{index+1}&nbsp;회차 : </b> 
            </div>
            <div onClick={onClick}>
                {tryInfo.try} &gt; {tryInfo.result} $$$$$ 테스트 {result}
            </div>

        </li>
    )
});
Try.displayName = 'Try';
module.exports = Try;