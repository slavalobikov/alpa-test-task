import {useEffect, useRef, useState} from 'react'
import './App.module.scss'
import {useGetUsersApiQuery} from "./redux/reducers/users/usersApi";
import UserCard from "./component/UserCard";
import Modal from "./component/Modal";
import classes from './App.module.scss'
import EditUser from "./component/EditUser";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [photoModal, setPhotoModal] = useState(null);
    console.log('photoModal', photoModal)

    const openModal = (photo) => {
        setIsModalOpen(true);
        setIsAnimated(false)
        setPhotoModal(photo)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const date = useGetUsersApiQuery();
    console.log('date', date)



    return (
        <>
            {isModalOpen && (
                <Modal isAnimated={isAnimated} closeModal={closeModal}>
                    <div className={classes.modal} data-animation={isAnimated}>
                        <EditUser />
                        <button onClick={() => setIsAnimated(true)}>Закрыть</button>
                    </div>
                </Modal>
            )}
            <UserCard setPhotoModal={setPhotoModal} openModal={openModal}
                      img="https://this-person-does-not-exist.com/img/avatar-gen110f53dfaa484596823b430168fdfa67.jpg"
                      name="Doe, John"/>
            <div id="modal-root"></div>
        </>
    )
}

export default App
