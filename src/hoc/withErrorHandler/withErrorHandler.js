import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../../components/UI/snackbar/snackbar";
import * as actions from "../../store/actions";

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        const message = useSelector((state) => state.errorHandler.message);
        const open = useSelector((state) => state.errorHandler.open);
        const dispatch = useDispatch();
        return (
            <>
                <WrappedComponent {...props} />
                <Snackbar
                    open={open}
                    message={message}
                    onClose={() => {
                        dispatch(actions.removeErrorMes());
                    }}
                />
            </>
        );
    };
};

export default withErrorHandler;
