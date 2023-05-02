import React , {Component} from 'react';
import './RSP.css';

const scores = {
    rock : 0,
    scissor : 1,
    paper : -1
};

// // 가위
// 가위 무  1-1 =0  
// 바위 패  1-0 =1
// 보  승  1-(-1)= 2

// // 바위
// 가위 승 0-1 =  -1
// 바위 무 0-0=   0
// 보  패 0-(-1) = 1 

// // 보 
// 가위 패 -1 -1 = -2
// 바위 승 -1 -0 = -1
// 보  무 -1 -(-1) = 0

// => 무 0
// 승 2 -1 
// 패 1 -2

class RSP_class extends Component{
    state = {
        result : '',
        imgCoord : 'rock',
        score : 0,
    };

    
    onClickBtn = (e)=>{        
        clearInterval(this.interval);
        const { imgCoord } = this.state
        const myChoice = scores[e];
        const computerChoice = scores[(imgCoord)];
        const diff = myChoice - computerChoice;
        if(diff === 0){
            this.setState({
                result : '무승부'
            });
        }else if([-1,2].includes(diff)){
            this.setState( (prevState) => {
                return{
                    result : '승리',
                    score : prevState.score +1
                }
            });
        }else if([1,-2].includes(diff)){
            this.setState( (prevState) => {
                return{
                    result : '패배',
                    score : prevState.score -1
                }
            });
        }else{
            this.setState({
                result : 'Error'
            })
        }     
        
        this.interval = setInterval( this.changeHand,1000)   
    }

    changeHand = () => {
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
    }

    interval;
    //component 첫 render 될때  => 비동기 요청 
    componentDidMount(){
        console.log('componentDidMount');
        
        this.interval = setInterval( this.changeHand,1000)
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
                    <button onClick={ ()=>clearInterval(this.interval)} > 정지! </button>
                <div>{result}</div>
                <div>{score}</div>
            </>
        )
    }
}

export default RSP_class