import * as Yup from 'yup';

export const VALIDATION_SCHEMA_FIRST = Yup.object().shape({
    name: Yup.string()
        .min(2, 'This field must contain at least 2 characters')
        .max(20, 'This field must not exceed 20 characters')
        .required('This field is required'),
    age: Yup.string()
        .min(1, 'This field must contain at least 1 characters')
        .max(2, 'This field must not exceed 2 characters')
        .matches(/^\d+$/, 'This field must contain only digits')
        .required('This field is required'),
});

export const VALIDATION_SCHEMA_SECOND = Yup.object().shape({
    start_contract: Yup.string()
        .required('This field is required')
        .test('startContractBeforeEndContract', 'Start date must be before end date', function (value) {
            const { end_contract } = this.parent;
            if (value && end_contract) {
                return new Date(value) < new Date(end_contract);
            }
            return true;
        }),
    end_contract: Yup.string()
        .test('endContractAfterStartContract', 'End date must be after start date', function (value) {
            const { start_contract } = this.parent;
            if (value && start_contract) {
                return new Date(value) > new Date(start_contract);
            }
            return true;
        })
        .nullable(),
    start_day_hour: Yup.string()
        .required('This field is required'),
    start_day_minute: Yup.string()
        .required('This field is required'),


});

export const VALIDATION_SCHEMA_THIRD = Yup.object().shape({
    job_title: Yup.string()
        .required('This field is required'),
    bio: Yup.string()
        .required('This field is required')
})
