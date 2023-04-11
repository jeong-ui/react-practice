import React, { Component } from 'react';
import Try from './Try';
const length = 3;

function getNumber() {
    return Math.ceil(Math.ceil(Math.random() * 9))
}
function getUniqueNumberList() {
    const list = new Set();
    while (length > list.size) {
        list.add(getNumber());
    }
    //return [...list].sort((a, b) => a - b);
    return [...list];
}

class NumberBaseBall extends Component {
    state = {
        result: '숫자게임 시작',
        value: '',
        answer: getUniqueNumberList(),
        tries: []
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(length);
        if(!this.state.value || length < 3) {
            alert('값을 입력해주세요');
            return;
        }
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                value : '',
                result: '정답',
                tries: []                
            });
            alert('정답입니다.');
        }
        else {
            const valueArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            let out = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `실패!  정답 : ${this.state.answer.join(',')}`,
                });
                alert('다시 시작합니다');
                this.setState({
                    value: '',
                    answer: getUniqueNumberList(),
                    tries: []
                });
            } else {
                console.log('오답');
                valueArray.forEach((value, index) => {
                    console.log(this.state.answer[index] + ' - ' + value); 
                    //strike
                    if (this.state.answer[index] === value) {
                        strike += 1;
                    }
                    //ball
                    else if(this.state.answer.includes(value)){
                        ball += 1;
                    }
                    else{
                        out += 1;
                    }
                })
                this.setState({
                    //push를 쓰면 render가 일어나지 않아서 새롭게  배열에 넣어줘야함
                    tries: [...this.state.tries, { try: this.state.value , result: `${strike}S ${ball}B ${out}O` }],
                    value : '',
                })

                // this.setState({
                //     result : '다시!',
                //     tries : [...this.state.tries, { try : this.state.value, result : '다시!'}]    
                // })
            }
        }

    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={3} value={this.state.value} onChange={this.onChangeInput}></input>
                    <button>submit</button>
                </form>
                <div> 시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) =>
                        <Try key={v + i} value={v} index={i} />
                    )
                    }
                </ul>
            </>
        )
    }
}
export const hello = 'hello';
export default NumberBaseBall;