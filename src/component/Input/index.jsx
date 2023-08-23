import classes from './style.module.scss';
import classNames from "classnames";
import {ErrorMessage, Field} from "formik";

const Input = ({
                   value = '', onChange = () => {
    }, error, label, type = 'text', className, name, as = "input"
               }) => {


    return <label className={classNames(classes.label, className)}>
        <div className={classes.wrapper}>
            <div className={classes.label_name}>{label}</div>
            <Field className={classNames(classes.input, className)} type={type} id={name} name={name} as={as} />
        </div>
        <ErrorMessage className={classes.error} name={name} component="div"/>
    </label>

}

export default Input;