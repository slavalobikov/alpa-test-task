import {useCallback, useEffect, useState} from "react";
import {useDeleteUserApiMutation} from "../../../redux/reducers/users/usersApi";
import {MODAL_MODE} from "../../../utils/constants";

const useUserCard = (id, openModal, setUserId, setModalMod,) => {
    const [isHide, setIsHide] = useState(false);
    const [deleteUser, {isLoading, isSuccess}] = useDeleteUserApiMutation();

    const callOpenModal = useCallback(() => {
        openModal();
        setUserId(id);
        setModalMod(MODAL_MODE.EDIT);
    }, [openModal, setModalMod, setUserId, id]);

    useEffect(() => {
        if (isSuccess) {
            const hideTimeout = setTimeout(() => {
                setIsHide(true);
            }, 500);

            return () => {
                clearInterval(hideTimeout);
            };
        }
    }, [isSuccess])

    return {
        isHide,
        isSuccess,
        isLoading,
        callOpenModal,
        deleteUser,
    }
}

export default useUserCard;