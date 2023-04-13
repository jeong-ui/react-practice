import React, { Component } from 'react';
import Try from './Try_class';
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

class NumberBaseBall_class extends Component {
    state = {
        result: '숫자게임 시작',
        value: '',
        answer: getUniqueNumberList(),
        tries: []
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const {value ,tries ,answer } = this.state;
        if(!value || value.length < 3) {
            alert('값을 입력해주세요');
            return;
        }
        if (value === answer.join('')) {
            this.setState({
                value : '',
                answer: getUniqueNumberList(),
                result: '정답요',
                tries: []                
            });
            alert('정답입니다.');
        }
        else {
            const valueArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            let out = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `실패!  정답 : ${answer.join(',')} `,                
                });
                alert('다시 시작합니다');
                this.setState({
                    value: '',
                    answer: getUniqueNumberList(),
                    tries: []
                });
            } else {
                valueArray.forEach((value, index) => {
                    if (answer[index] === value) {
                        strike += 1;
                    }
                    else if(answer.includes(value)){
                        ball += 1;
                    }
                    else{
                        out += 1;
                    }
                })
                this.setState((prevState)=>{
                    return{
                        //push를 쓰면 render가 일어나지 않아서 새롭게  배열에 넣어줘야함
                        tries: [...prevState.tries, { try: value , result: `${strike}S ${ball}B ${out}O` }],
                        value : '',
                    }
                })
            }
        }

    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        const {result ,value ,tries } = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={3} value={value} onChange={this.onChangeInput}></input>
                    <button>submit</button>
                </form>
                <div> 시도 : {tries.length}</div>
                <ul>
                    {tries.map((v, i) =>
                        <Try key={`${i}차`} tryInfo={v} index={i} />
                    )
                    }
                </ul>
            </>
        )
    }
}
export const hello = 'hello';
export default NumberBaseBall_class;