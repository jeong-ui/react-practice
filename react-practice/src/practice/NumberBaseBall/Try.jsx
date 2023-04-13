const React = require('react');
const Try = ({ tryInfo , index}) => {
    return (
        <li>
            <b>{index+1}&nbsp;회차 : </b> {tryInfo.try} &gt; {tryInfo.result}
        </li>
    )

}

module.exports = Try;