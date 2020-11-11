import Snackbar from "@material-ui/core/Snackbar";

const MySnackbar = ({ message, open, onClose }) => {
    return <Snackbar open={open} autoHideDuration={2000} onClose={onClose} message={message}></Snackbar>;
};
export default MySnackbar;
