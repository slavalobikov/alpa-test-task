import {useState} from "react";
import classes from './style.module.scss';

const Input = ({value = '', onChange = () => {}}) => {

    const [v, setV] = useState('')

    return <input className={classes.input} value={v} onChange={(e) => setV(e.currentTarget.value)} type="text"/>
}

export default Input;