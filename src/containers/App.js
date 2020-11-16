import { renderRoutes } from "react-router-config";
import Navigation from "../components/navigation/navigation";
import WithErrorHandler from '../hoc/withErrorHandler/withErrorHandler'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import * as actions from '../store/actions'

function App(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(actions.authCheckState())
    },[])
    return (
        <div className="App">
            <Navigation {...props}/>
            {renderRoutes(props.route.routes)}
        </div>
    );
}

export default WithErrorHandler(App);
