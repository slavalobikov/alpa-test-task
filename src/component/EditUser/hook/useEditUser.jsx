import {
    useGetUserApiQuery,
    usePostUserApiMutation,
    usePutUserApiMutation
} from "../../../redux/reducers/users/usersApi";
import {useCallback, useEffect, useMemo, useRef} from "react";
import {MODAL_MODE} from "../../../utils/constants";
import {useFormik} from "formik";
import VALIDATION_SCHEMA from "../../../utils/validation_schema";

const useEditUser = (userId, modalMode, onClose) => {
    const {data, isLoading} = useGetUserApiQuery(userId);
    const inputFileRef = useRef();
    const isEdit = modalMode === MODAL_MODE.EDIT;

    const [
        editUser,
        {isLoading: isPutLoading, isSuccess: isPutSuccess},
    ] = usePutUserApiMutation();

    const [createUser, {isLoading: isPostLoading, isSuccess: isPostSuccess}] = usePostUserApiMutation()

    useEffect(() => {
        if (isPutSuccess || isPostSuccess) {
            onClose()
        }
    }, [isPutSuccess, isPostSuccess])

    const formik = useFormik({
        enableReinitialize: false,
        validateOnChange: true,
        validationSchema: VALIDATION_SCHEMA,
        initialValues: isEdit ? {...data} : {
            age: '',
            bio: '',
            job_title: '',
            name: '',
            photo: '',
        },
        onSubmit: useCallback((values) => {
            isEdit ? editUser(values) : createUser(values)
        }, [isEdit, editUser, createUser]),
    })

    useEffect(() => {
        if (data?.length != 0 && isEdit) {
            formik.setValues(data)
        }
    }, [data, isEdit])

    const getValue = (name) => {
        return formik.values?.[name]
    }

    const setValue = (name, e) => {
        return formik.setFieldValue(name, e.currentTarget.value)
    }

    const handleImageUpload = useCallback((event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            formik.setFieldValue('photo', reader.result)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }, [formik.setFieldValue]);

    const isPostPutLoading = useMemo(() => (isPutLoading || isPostLoading), [isPutLoading, isPostLoading]);

    const config = useMemo(() => ([
        {id: 1, name: 'name', label: 'Name*',},
        {id: 2, name: 'age', label: 'Age'},
        {id: 3, name: 'job_title', label: 'Job Title'},
        {id: 4, name: 'bio', label: 'bio'}
    ]), []);

    return {
        isLoading,
        formik,
        isEdit,
        config,
        getValue,
        setValue,
        inputFileRef,
        handleImageUpload,
        isPostPutLoading,
    }
}

export default useEditUser;