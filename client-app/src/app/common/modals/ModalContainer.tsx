import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import { Modal, Box } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',

    border: '2px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
};

export default observer(function ModalContainer() {
    const { modalStore } = useStore();

    return (
        <Modal
            open={modalStore.modal.open}
            onClose={modalStore.closeModal}
        >
            <Box sx={style}>
                {modalStore.modal.body}
            </Box>
        </Modal>
    )
})