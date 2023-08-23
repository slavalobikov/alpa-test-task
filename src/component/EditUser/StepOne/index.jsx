import {Form, Formik} from "formik";
import classes from "./style.module.scss";
import Input from "../../Input";
import edit from "../../../assets/svg/edit.svg";
import no_avatar from "../../../assets/img/no_avatar.png";
import {useRef} from "react";
import {VALIDATION_SCHEMA_FIRST} from "../../../utils/validation_schema";

const StepOne = ({setStep, children, step, setFirstValues, isEdit, data}) => {
    const inputFileRef = useRef();

    const handleSubmit = (values) => {
        setFirstValues(values)
        setStep(prev => prev + 1)
    };

    const handleImageUpload = (event, setFieldValue) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFieldValue('photo', reader.result)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return <div className={classes.formik}>

        {step === 1 && <Formik
            initialValues={{
                name: isEdit ? data?.name :'',
                age: isEdit ? data?.age : '',
                photo: isEdit ? data?.photo : '',
            }}
            validationSchema={VALIDATION_SCHEMA_FIRST}
            onSubmit={handleSubmit}
        >
            {({values, setFieldValue}) => (
                <Form>
                    <Input name="name" label="Name"/>
                    <Input name='age' label="Age"/>

                    <input
                        className={classes.hide}
                        ref={inputFileRef}
                        type="file"
                        onChange={(event) => handleImageUpload(event, setFieldValue)}
                    />
                    <div onClick={() => inputFileRef.current?.click()} className={classes.ava_wrapper}>
                        <div className={classes.overlay}>
                            <img src={edit} alt="edit"/>
                        </div>
                        <img
                            className={classes.ava} src={values?.photo || no_avatar}
                            alt={values?.name}
                        />
                    </div>
                    {children}
                </Form>
            )}
        </Formik>}
    </div>
}

export default StepOne;