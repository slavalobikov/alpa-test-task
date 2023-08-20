import classes from './style.module.scss';

const Input = ({value = '', onChange = () => {}, error, label}) => {

    return <label className={classes.label}>
        <div className={classes.wrapper}>
            <div className={classes.label_name}>{label}</div>
            <input data-error={!!error} className={classes.input} value={value} onChange={onChange} type="text"/>
        </div>
        {error && <div className={classes.error}>{error}</div>}
    </label>
}

export default Input;