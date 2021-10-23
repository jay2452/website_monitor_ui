import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useDispatch } from 'react-redux';

const style = {
  position: "fixed",
  bottom: 16,
  right: 16,
  zIndex: 1
};

const AddURLButton = (props) => {
    const dispatch = useDispatch();
  const handleCreate = () => {};

  return (
    <Fab color="primary" aria-label="add" sx={style} onClick={handleCreate}>
      <AddIcon />
    </Fab>
  );
};

export default AddURLButton;
