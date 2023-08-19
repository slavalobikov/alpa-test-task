import classes from './style.module.scss';
import magnifying_glass from './../../assets/svg/magnifying_glass.svg';
import Button from "../Button";

const UserCard = ({name, img, openModal, setPhotoModal}) => {

    const callOpenModal = () => {
        openModal();
        setPhotoModal(img);
    }


    return <>

        <div className={classes.card}>
        <div className={classes.avatar}>
            <div onClick={callOpenModal} className={classes.overlay} >
                <img className={classes.glass} src={magnifying_glass} alt="glass"/>
            </div>
            <img className={classes.img} src={img} alt={name}/>
        </div>
        <Button className={classes.editButton} text="edit" onclick={callOpenModal} />
    </div></>
}

export default UserCard;