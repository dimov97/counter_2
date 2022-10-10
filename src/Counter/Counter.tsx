import React, {useEffect} from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterType = {
    count: number
    inc: () => void
    reset: () => void
    maxValue:string
    minValue:string
    error:string|null
    setError:(s:string)=>void
}

export const Counter: React.FC<CounterType> = ({count, inc, reset,maxValue,minValue,error,setError}) => {
    useEffect(()=>{
        if (+maxValue<= 0||+minValue<0||+minValue===+maxValue||+maxValue<+minValue) {
            setError('error')
        } else {
            setError('')
        }

    },[maxValue,minValue])

    const disableInc = count === +maxValue||+maxValue<= 0||+minValue<0||+minValue===+maxValue
    const disableReset = count === +minValue||+maxValue<= 0||+minValue<0||+minValue===+maxValue
    const red = count === +maxValue||+maxValue<= 0||+minValue<0||+minValue===+maxValue||+maxValue<+minValue ? {color: 'red'} : {color: ''}
    return (
        <div className={s.counter}>
            <div style={red} className={s.screen}>{error ||count}</div>

            <div className={s.buttonWrapper}>
                <Button title={'inc'} callback={inc} disabled={disableInc}/>
                <Button title={'reset'} callback={reset} disabled={disableReset}/>
            </div>

        </div>
    );
};

