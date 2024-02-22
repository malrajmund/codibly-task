import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { closeModal } from "../../../redux/reducers/modalReducer/modalReducer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const CustomModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector<AppState>((state) => state.modal) as ModalState;

  return (
    <Modal
      open={modalData.isActive}
      onClose={() => dispatch(closeModal())}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      disableEnforceFocus
      disableAutoFocus
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Data of item
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          ID: {modalData.data.id}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Name: {modalData.data.name}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Color: {modalData.data.color}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Year: {modalData.data.year}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Pantone value: {modalData.data.pantone_value}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
