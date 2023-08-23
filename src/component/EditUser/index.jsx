import classes from './style.module.scss';
import {useEffect, useState} from "react";
import StepOne from "./StepOne";
import Step from "../Step";
import Button from "../Button";
import {useLazyGetUserApiQuery} from "../../redux/reducers/users/usersApi";
import {MODAL_MODE} from "../../utils/constants";
import Loader from "../Loader";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


const EditUser = ({onClose, modalMode, userId}) => {
    const [step, setStep] = useState(1);
    const [firstValues, setFirstValues] = useState(null);
    const [secondValues, setSecondValues] = useState(null);
    const [thirdValues, setThirdValues] = useState(null);
    const [getUser, {data, isFetching}] = useLazyGetUserApiQuery();
    const isEdit = modalMode === MODAL_MODE.EDIT
    useEffect(() => {
        if (modalMode === MODAL_MODE.EDIT) {
            getUser(userId)
        }
    }, [])
    const Buttons = () => {
        return <div className={classes.btn_wrapper}>
            <Button className={classes.cancel_btn} onclick={onClose} text="Cancel" />
            <Button type="submit" text='Next' />
        </div>
    }

    if (isFetching) {
        return <div className={classes.loaderWrapper}><Loader/></div>
    }

    return  <div className={classes.modal_wrapper}>
        <Step maxStep={3} currentStep={step} />
        <StepOne isEdit={isEdit} data={data} setFirstValues={setFirstValues} step={step} setStep={setStep} children={<Buttons />} />
        <StepTwo isEdit={isEdit} data={data} setSecondValues={setSecondValues} step={step} setStep={setStep} children={<Buttons />} />
        <StepThree
            data={data}
            isEdit={isEdit}
            firstValues={firstValues}
            secondValues={secondValues}
            thirdValues={thirdValues}
            setThirdValues={setThirdValues}
            step={step} setStep={setStep}
            onClose={onClose}
            children={<Buttons />}
        />
    </div>
}

export default EditUser;