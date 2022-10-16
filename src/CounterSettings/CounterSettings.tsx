import React, {ChangeEvent, useEffect} from 'react';
import {Button} from "../Button/Button";
import s from './CounterSettings.module.css'

type CounterSettingsType = {
    setMaxValue: (m: string) => void
    maxValue: string
    minValue: string
    setMinValue: (m: string) => void
    setButton: () => void
    message:string|null
    setMessage:(s:string)=>void
}

export const CounterSettings: React.FC<CounterSettingsType> = ({
                                                                   setMaxValue,
                                                                   maxValue,
                                                                   minValue,
                                                                   setMinValue,
                                                                   setButton,
    setMessage,
    message
                                                               }) => {
    let disable = message !== 'enter value'
    const red = +minValue > +maxValue || +maxValue <= 0 || +minValue < 0 || +minValue === +maxValue ? {border: 'red 2px solid'} : {border: ''}
    return (
        <div className={s.counterSettings}>
            <div className={s.settingsWrapper}>
                <div className={s.setting}>
                    <p>max value:</p>
                    <input style={red} value={maxValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        let newMaxValue = e.currentTarget.value
                        setMaxValue(newMaxValue)
                        setMessage('enter value')
                        if (+newMaxValue<= 0||+minValue>=+newMaxValue) {
                            setMessage('error value')
                        }
                    }} type="number"/>
                </div>
                <div className={s.setting}>
                    <p>min value:</p>
                    <input style={red} value={minValue} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        let newMinValue = e.currentTarget.value
                        setMinValue(newMinValue)
                        setMessage('enter value')
                        if (+newMinValue< 0||+newMinValue>=+maxValue) {
                            setMessage('error value')
                        }
                    }} type="number"/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button title={'set'} callback={setButton} disabled={disable}/>
            </div>

        </div>
    );
};

