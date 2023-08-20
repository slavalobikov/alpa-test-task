import classes from './style.module.scss';
import classNames from 'classnames';

const Button = ({text, onclick, className = '', type = 'button', disabled = false}) => {
    return <button
        disabled={disabled}
        type={type}
        className={classNames(classes.btn, className)}
        onClick={onclick}>
            {text}
    </button>
}

export default Button;