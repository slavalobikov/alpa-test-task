import classes from './style.module.scss';
import magnifying_glass from './../../assets/svg/magnifying_glass.svg';
import Button from "../Button";
import DeleteIcon from "../DeleteIcon";
import HorizontalLoader from "../HorizontalLoader";
import useUserCard from "./hook/useUserCard";

const UserCard = ({name, img, openModal, id, setUserId, age, job_title, bio, setModalMod}) => {
    const {
        isHide,
        isSuccess,
        isLoading,
        callOpenModal,
        deleteUser,
    } = useUserCard(id,openModal, setUserId, setModalMod)

    return <>
        <div
            className={classes.card}
            data-hide={isHide}
            data-animation={isSuccess}
        >
            {isLoading && <div className={classes.loader}><HorizontalLoader /></div>}
            <div className={classes.avatar}>
                <div onClick={callOpenModal} className={classes.overlay}>
                    <img className={classes.glass} src={magnifying_glass} alt="glass"/>
                </div>
                <img className={classes.img} src={img} alt={name}/>
            </div>
            <div className={classes.title}>{name} {age ? `, ${age} years old` : ''} </div>
            <div className={classes.mb}>
                {job_title && <div className={classes.info}><span>Job title:</span> {job_title}</div>}
                {bio && <div className={classes.info}><span>bio:</span> {bio}</div>}
            </div>
            <DeleteIcon onClick={() => deleteUser(id)} className={classes.deleteIcon} />
            <Button className={classes.editButton} text="edit" onclick={callOpenModal}/>
        </div>
    </>
}

export default UserCard;