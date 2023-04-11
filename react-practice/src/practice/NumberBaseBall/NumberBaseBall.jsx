import React, { Component } from 'react';
import Try from './Try';

function getNumber() {
    return Math.ceil(Math.ceil(Math.random() * 9))
}
function getUniqueNumberList() {
    const length = 3;
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
        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '정답',
                //push를 쓰면 render가 일어나지 않아서 새롭게  배열에 넣어줘야함
                tries: [...this.state.tries, { try: this.state.value, result: '정답!' }]
            });
        }
        else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
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
                answerArray.forEach((value, index) => {
                    console.log(this.state.answer[index] + ' - ' + answerArray[index]); 
                    //strike
                    if (answerArray[index] === this.state.answer[index]) {
                        strike += 1;
                    }
                    //ball
                    // else(){

                    // }
                })
                this.setState({
                    tries: [...this.state.tries, { try: this.state.value , result: `${strike}S ${ball}B` }],
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