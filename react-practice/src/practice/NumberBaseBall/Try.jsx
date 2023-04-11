import React, { Component } from 'react';
class Try extends Component {
    render() {
        const props = this.props;
        return (
            <li key={props.value}>
                <b>{props.index+1}&nbsp;회차 : </b> {props.value.try} &gt; {props.value.result}
            </li>
        )
    }
}

export default Try;