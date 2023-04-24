import React , {Component} from 'react';
import './RSP.css';

const scores = {
    rock : 1,
    scissor : 0,
    paper : -1
};

class RSP_class extends Component{
    state = {
        result : '',
        imgCoord : 'rock',
        score : 0,
    };

    onClickBtn = (e)=>{
        console.log(e);
        console.log(this.state)
    }

    interval;
    //component 첫 render 될때  => 비동기 요청 
    componentDidMount(){
        console.log('componentDidMount');
        
        this.interval = setInterval(()=>{
            const {imgCoord} = this.state;
            //주먹가위보 순서대로 interval 하여 이미지 좌표값 변경            
            if(imgCoord === 'rock'){
                this.setState({
                    imgCoord : 'scissor',
                });
            }
            else if(imgCoord === 'scissor'){
                this.setState({
                    imgCoord : 'paper',
                });
            }
            else if(imgCoord === 'paper'){
                this.setState({
                    imgCoord : 'rock',
                });
            }

        },300)
    }
    // 리렌더링 후 실행
    componentDidUpdate(){
        //console.log('componentDidUpdate');
    }

    //component 제거되기 직전   => 비동기 요청 정리
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.interval);
    }

    render(){
        const {result , score , imgCoord } = this.state;    
        return (
            <>
                <div id="computer" className={imgCoord}></div>
                <div>
                    <button id="scissor" className='btn' onClick={() => this.onClickBtn('scissor')}>가위</button>
                    <button id="rock" className='btn' onClick={() => this.onClickBtn('rock')}>바위</button>
                    <button id="paper" className='btn' onClick={() => this.onClickBtn('paper')}>보</button>
                </div>
                    <button onClick={ ()=>clearInterval(this.interval)} > 정지 </button>
                <div>{result}</div>
                <div>{score}</div>
            </>
        )
    }
}

export default RSP_class