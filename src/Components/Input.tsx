import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'

export type InputPropsType = {
    title: string
    value: number
    onChange: () => void
}

export const Input = (props: InputPropsType) => {

    return (
        <div className={styles.inputContainer}>
            <b>{props.title}</b>
            <input type='number' value={props.value} onChange={()=>{}}/>
        </div>

    );
};

