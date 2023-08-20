import * as Yup from 'yup';

const VALIDATION_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .min(2, 'This field must contain at least 2 characters')
        .max(20, 'This field must not exceed 20 characters')
        .required('This field is required'),
    age: Yup.string()
        .min(1, 'This field must contain at least 1 characters')
        .max(2, 'This field must not exceed 2 characters')
        .matches(/^\d+$/, 'This field must contain only digits')
});

export default VALIDATION_SCHEMA;