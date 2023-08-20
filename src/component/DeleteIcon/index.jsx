import classes from './style.module.scss';
import delete_icon from './../../assets/svg/delete.svg';


const DeleteIcon = ({className, onClick}) => {
    return (
        <div onClick={onClick} className={className}>
            <div className={classes.icon_container}>
                <div className={classes.icon}>
                    <img src={delete_icon} alt="Icon" />
                </div>
            </div>
        </div>
)
}

export default DeleteIcon;