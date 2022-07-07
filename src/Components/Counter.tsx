import React from 'react';
import styles from './Counter.module.css'

export type CounterPropsType = {
    count: number
    max: number
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={`${styles.counter} ${props.count === props.max && styles.red}`}>
            {props.count}
        </div>
    );
};

export default Counter;