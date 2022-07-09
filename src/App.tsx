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
            setValuesToLocalStorage()
        }
    }

    const resetFunc = () => {
        setCount(start)
    }

    const changeStartValue = (value: number) => {
        setStartValue(value)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const setStartAndMax = () => {
        setStart(startValue)
        setMax(maxValue)
        setCount(startValue)
        setValuesToLocalStorage()
    }

    const setValuesToLocalStorage = () => {
        localStorage.setItem('currentValue', JSON.stringify(count))
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }

    const getCurrentFromLocalStorage = () => {
        let currentFromLocal = localStorage.getItem('currentValue')
        if (currentFromLocal) {
            setCount(JSON.parse(currentFromLocal))
        }
    }

    const getStartFromLocalStorage = () => {
        let startFromLocal = localStorage.getItem('startValue')
        if (startFromLocal) {
            setStart(JSON.parse(startFromLocal))
        }
    }

    const getMaxFromLocalStorage = () => {
        let maxFromLocal = localStorage.getItem('maxValue')
        if (maxFromLocal) {
            setMax(JSON.parse(maxFromLocal))
        }
    }

    return (
        <div className="Parent">
            <div className="App">
                <div className="container">
                    <Input title={'Start value: '} value={startValue} onChange={changeStartValue}/>
                    <Input title={'Max value: '} value={maxValue} onChange={changeMaxValue}/>
                </div>
                <Button disabled={startValue >= maxValue || startValue < 0 || (startValue === start && maxValue === max)} name={'Set'} callback={setStartAndMax}/>
            </div>
            <div className="App">
                {(startValue < maxValue && startValue >= 0) ? <Counter max={max} count={count}/> :
                    (startValue < maxValue && startValue < 0) ?
                        <div className={'likeACounter'}>Start value must be positive or equal to 0!</div> :
                        <div className={'likeACounter'}>Start value must be less then max value!</div>}
                <div className="container">
                    <Button disabled={count === max} name={'Increase'} callback={increaseFunc}/>
                    <Button disabled={count === start} name={'Reset'} callback={resetFunc}/>
                </div>
            </div>
        </div>
    );
}

export default App;
