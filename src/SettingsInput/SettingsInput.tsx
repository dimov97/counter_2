import React, {ChangeEvent} from 'react';
import s from './SettingsInput.module.css';


type SettingsInputType = {
    inputTitle:string
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    value:string
    style: { border: string; }

}

export const SettingsInput:React.FC<SettingsInputType> = ({inputTitle,value,onChange,style}) => {
    return (
        <div className={s.setting}>
            <p>{inputTitle}</p>
            <input style={style} value={value} onChange={onChange} type="number"/>
        </div>
    );
};

