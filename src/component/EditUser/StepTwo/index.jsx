import {VALIDATION_SCHEMA_SECOND} from "../../../utils/validation_schema";
import {Form, Formik} from "formik";
import DatePicker from "../../DatePicker";
import TimePicker from "../../TimePicker";


const StepTwo = ({ step, setStep, children, setSecondValues, isEdit, data}) => {
    const handleSubmit = (values) => {
        setSecondValues(values)
        setStep(prev => prev + 1)
    }
    return <div>
        {step === 2 && <Formik
            initialValues={{
                start_contract: isEdit ? data?.start_contract : '',
                end_contract: isEdit ? data?.end_contract : '',
                start_day_hour: isEdit ? data?.start_day_hour :'',
                start_day_minute: isEdit ? data?.start_day_minute : '',
            }}
            validationSchema={VALIDATION_SCHEMA_SECOND}
            onSubmit={handleSubmit}
        >
            {({values}) => (
                <Form>
                    <DatePicker name='start_contract' label="Start Contract" />
                    <DatePicker name='end_contract' label="End Contract" />
                    <TimePicker values={values} nameHour="start_day_hour" nameMinute="start_day_minute" />
                    {children}
                </Form>
            )}
        </Formik>}
    </div>
}

export default StepTwo;