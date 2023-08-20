import './App.module.scss'
import Modal from "./component/Modal";
import classes from './App.module.scss'
import EditUser from "./component/EditUser";
import Loader from "./component/Loader";
import {MODAL_MODE} from "./utils/constants";
import Button from "./component/Button";
import useApp from "./useApp";

function App() {

    const {
        userCards,
        isLoading,
        closeModal,
        modalMode,
        userId,
        isAnimated,
        isModalOpen,
        openModal,
        setModalMod,
        setIsAnimated,
    } = useApp();

    if (isLoading) {
        return <div className={classes.wrapperForLoader}><Loader/></div>
    }

    return (
        <>
            {isModalOpen && (
                <Modal isAnimated={isAnimated} closeModal={closeModal}>
                    <div className={classes.modal} data-animation={isAnimated}>
                        <EditUser modalMode={modalMode} onClose={() => setIsAnimated(true)} userId={userId}/>
                    </div>
                </Modal>
            )}
            <Button
                className={classes.createBtn}
                text="Create user"
                onclick={() => {
                    openModal();
                    setModalMod(MODAL_MODE.CREATE)
                }}
            />
            <div className={classes.card_wrapper}>
                {userCards}
            </div>
            <div id="modal-root" />
        </>
    )
}

export default App
