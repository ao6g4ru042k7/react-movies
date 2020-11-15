import { renderRoutes } from "react-router-config";
import Navigation from "../components/navigation/navigation";
import WithErrorHandler from '../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../store/actions'
// import {useDispatch} from 'react-redux'
// import {useEffect} from 'react'

function App(props) {
    // const dispatch =  useDispatch()
    // useEffect(()=>{
    //   dispatch(actions.setErrorMes("ASDFAZSDF"))
    // },[dispatch])
    console.log('app',props)
    return (
        <div className="App">
            <Navigation {...props}/>
            {renderRoutes(props.route.routes)}
        </div>
    );
}

export default WithErrorHandler(App);
