import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title:string
    callback?:()=>void
    disabled?:boolean
}

export const Button:React.FC<ButtonType> = ({title,callback,disabled}) => {
    const disable = disabled?{opacity:0.5}:{opacity: 1}
    return (
        <div>
            <button style={disable} className={s.button} onClick={callback} disabled={disabled}>{title}</button>
        </div>
    );
};

