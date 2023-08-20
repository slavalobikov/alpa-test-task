import {useCallback, useMemo, useState} from "react";
import {useGetUsersApiQuery} from "./redux/reducers/users/usersApi";
import UserCard from "./component/UserCard";
import no_avatar from "./assets/img/no_avatar.png";

const useApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [modalMode, setModalMod] = useState('');

    const openModal = useCallback(() => {
        setIsModalOpen(true);
        setIsAnimated(false);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const {data: users, isLoading} = useGetUsersApiQuery();

    const userCards = useMemo(() => {
        return users?.map((el, index) => (
            <UserCard
                key={index}
                setUserId={setUserId}
                id={el.id}
                age={el.age}
                bio={el.bio}
                setModalMod={setModalMod}
                openModal={openModal}
                job_title={el.job_title}
                img={el.photo || no_avatar}
                name={el.name}
            />
        ));
    }, [users, setUserId, setModalMod, openModal]);

    return {
        userCards,
        isLoading,
        closeModal,
        modalMode,
        userId,
        isAnimated,
        isModalOpen,
        openModal,
        setModalMod,
        setIsAnimated
    }
}
export default useApp;