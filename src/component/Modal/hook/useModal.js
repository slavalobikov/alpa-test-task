import {useEffect} from "react";

const useModal = (isAnimated, closeModal) => {
    useEffect(() => {
        if (isAnimated) {
            const hideTimeout = setTimeout(() => {
                closeModal()
            }, 500)
            return () => clearTimeout(hideTimeout);
        }
    }, [isAnimated])
}

export default useModal;