import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import s from './CounterSettings.module.css'
import {SettingsInput} from "../SettingsInput/SettingsInput";

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
    const red = message === 'error value' ? {border: 'red 2px solid'} : {border: ''}
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.currentTarget.value
        setMaxValue(newMaxValue)
        setMessage('enter value')
        if (+newMaxValue<= 0||+minValue>=+newMaxValue) {
            setMessage('error value')
        }
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = e.currentTarget.value
        setMinValue(newMinValue)
        setMessage('enter value')
        if (+newMinValue< 0||+newMinValue>=+maxValue) {
            setMessage('error value')
        }
    }
    return (
        <div className={s.counterSettings}>
            <div className={s.settingsWrapper}>
                <SettingsInput inputTitle={'max value:'} value={maxValue} onChange={onChangeMaxValueHandler} style={red}/>
                <SettingsInput inputTitle={'min value:'} value={minValue} onChange={onChangeMinValueHandler} style={red}/>
            </div>
            <div className={s.buttonWrapper}>
                <Button title={'set'} callback={setButton} disabled={disable}/>
            </div>

        </div>
    );
};

