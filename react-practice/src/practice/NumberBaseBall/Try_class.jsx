import React, { Component } from 'react';
class Try_class extends Component {
    render() {
        const {tryInfo , index}  = this.props;
        return (
            <li>
                <b>{index+1}&nbsp;회차 : </b> {tryInfo.try} &gt; {tryInfo.result}
            </li>
        )
    }
}

export default Try_class;