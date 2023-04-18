import React, { PureComponent } from 'react';
class Try_class extends PureComponent {
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