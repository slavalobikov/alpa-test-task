import classes from './style.module.scss';
import classNames from 'classnames';

const Button = ({text, onclick, className = ''}) => {
    return <button className={classNames(classes.btn, className)} onClick={onclick}>{text}</button>
}

export default Button;