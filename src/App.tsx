import React, {useState} from 'react';
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';
import {Input} from './Components/Input';

function App() {

    const [start, setStart] = useState<number>(0);
    const [max, setMax] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(start)
    const [maxValue, setMaxValue] = useState<number>(max)

    const [count, setCount] = useState<number>(start)

    const increaseFunc = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const resetFunc = () => {
        setCount(start)
    }

    const changeStartValue = () => {

    }

    const changeStartAndMax = () => {
        setStart(startValue)
        setMax(maxValue)
    }

    return (
        <div className="Parent">
            <div className="App">
                <div className="container">
                    <Input title={'Start value: '} value={startValue} onChange={()=>{}}/>
                    <Input title={'Max value: '} value={maxValue} onChange={()=> {}}/>
                </div>
                <Button disabled={count === max} name={'Set'} callback={changeStartAndMax}/>
            </div>
            <div className="App">
                <Counter max={max} count={count}/>
                <div className="container">
                    <Button disabled={count === max} name={'Increase'} callback={increaseFunc}/>
                    <Button disabled={count === start} name={'Reset'} callback={resetFunc}/>
                </div>
            </div>
        </div>

    );
}

export default App;
