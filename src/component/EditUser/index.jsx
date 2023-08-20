import Input from "../Input";
import Loader from "../Loader";
import classes from './style.module.scss';
import Button from "../Button";
import HorizontalLoader from "../HorizontalLoader";
import no_avatar from "../../assets/img/no_avatar.png";
import edit from './../../assets/svg/edit.svg';
import useEditUser from "./hook/useEditUser";

const EditUser = ({userId, onClose, modalMode}) => {

    const {
        isLoading,
        formik,
        isEdit,
        config,
        getValue,
        setValue,
        inputFileRef,
        handleImageUpload,
        isPostPutLoading
    } = useEditUser(userId, modalMode, onClose)

    if (isLoading) {
        return <div className={classes.loaderWrapper}><Loader/></div>
    }

    return <form className={classes.form} onSubmit={formik.handleSubmit}>
        {isEdit ? 'Edit' : 'Create'} user
        {config.map(el => <Input
            key={el.id}
            error={formik.errors?.[el.name]}
            label={el.label} value={getValue(el.name)}
            onChange={(e) => setValue(el.name, e)}
        />)}
        <input
            className={classes.hide}
            ref={inputFileRef}
            type="file"
            onChange={handleImageUpload}
        />
        <div onClick={() => inputFileRef.current?.click()} className={classes.ava_wrapper}>
            <div className={classes.overlay} >
                <img src={edit} alt="edit"/>
            </div>
            <img
                className={classes.ava} src={formik.values?.photo || no_avatar}
                alt={formik.values?.name}
            />
        </div>
        <div className={classes.btn_wrapper}>
            <Button onclick={onClose} className={classes.cancel_btn} text="Cancel" />
            <Button disabled={isPostPutLoading} type="submit" text="Save"/>
        </div>
        {isPostPutLoading && <HorizontalLoader/>}
    </form>
}

export default EditUser;