import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {
    let [count, setCount] = useState(0)
    let [message, setMessage] = useState<string>('')
    let [maxValue,setMaxValue] = useState('5')
    let [minValue, setMinValue] = useState('0')

    useEffect(()=> {
        let maxValueAsString = localStorage.getItem('maxValue')
        let minValueAsString = localStorage.getItem('minValue')
        if (maxValueAsString && minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
            setMinValue(newMinValue)
            setCount(+newMinValue)
        }
    },[])


    let inc = () => {
        let increment = count + 1
        setCount(increment)
    }
    let reset = () => {
        setCount(+minValue)
    }
    let setButton = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        setCount(+minValue)
        setMessage('')
    }
    return (
        <div className="App">
            <div className='wrapper'>
                <CounterSettings  setMaxValue={setMaxValue}
                                  maxValue={maxValue}
                                  minValue={minValue}
                                  setMinValue={setMinValue}
                                  setButton={setButton}
                                  message={message}
                                  setMessage={setMessage}

                />
                <Counter count={count}
                         inc={inc}
                         reset={reset}
                         maxValue={maxValue}
                         minValue={minValue}
                         message={message}
                         setMessage={setMessage}

                />
            </div>
        </div>
    );
}

export default App;
