import {VALIDATION_SCHEMA_THIRD} from "../../../utils/validation_schema";
import {Form, Formik} from "formik";
import Input from "../../Input";
import classes from './style.module.scss';
import {usePostUserApiMutation, usePutUserApiMutation} from "../../../redux/reducers/users/usersApi";
import {useEffect} from "react";
import Loader from "../../Loader";

const StepThree = ({step, setStep, children, setThirdValues, isEdit, firstValues, secondValues, onClose, data}) => {
    const [createUser, {isLoading: isPostLoading, isSuccess: isPostSuccess}] = usePostUserApiMutation();
    const [
        editUser,
        {isLoading: isPutLoading, isSuccess: isPutSuccess},
    ] = usePutUserApiMutation();

    const handleSubmit = (values) => {
        setThirdValues(values);
        isEdit
            ? editUser({id: data?.id, ...firstValues,...secondValues,...values})
            : createUser({...firstValues,...secondValues,...values})
        console.log('values', values)
    }

    useEffect(() => {
        if (isPutSuccess || isPostSuccess) {
            onClose()
        }
    }, [isPutSuccess, isPostSuccess])

    if (isPostLoading || isPutLoading) {
        return <div className={classes.loaderWrapper}><Loader/></div>
    }

    return <div>
        {step === 3 && <Formik
            initialValues={{
                job_title: isEdit ? data?.job_title :'',
                bio: isEdit ? data?.bio : '',
            }}
            validationSchema={VALIDATION_SCHEMA_THIRD}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <Input className={classes.textarea} name='job_title' label="Job Title" as="textarea" />
                    <Input className={classes.textarea} name='bio' label="bio" as="textarea" />
                    {children}
                </Form>
            )}
        </Formik>}
    </div>
}

export default StepThree;