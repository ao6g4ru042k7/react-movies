import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
const MySnackbar = ({ message, open, onClose }) => {
    // return <Snackbar open={open} autoHideDuration={2000} onClose={onClose} message={message}></Snackbar>;
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
            message={message}
        >
            <Alert elevation={6} variant="filled" severity="error">
                {message}
            </Alert>
        </Snackbar>
    );
};
export default MySnackbar;
