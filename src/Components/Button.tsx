import React from 'react';
import styles from './Button.module.css'

export type ButtonPropsType = {
    name: string;
    callback: () => void
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabled}
                className={props.disabled ? styles.disabledButton : styles.button}
                onClick={props.callback}>{props.name}</button>
    );
};

export default Button;