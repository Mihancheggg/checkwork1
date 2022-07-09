import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'

export type InputPropsType = {
    title: string
    value: number
    onChange: (value: number) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
    }

    return (
        <div className={styles.inputContainer}>
            <b>{props.title}</b>
            <input type='number' value={props.value} onChange={onChangeHandler}/>
        </div>

    );
};

