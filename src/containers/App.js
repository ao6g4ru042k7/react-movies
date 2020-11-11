import { renderRoutes } from "react-router-config";
import Navigation from "../components/navigation/navigation";
import WithErrorHandler from '../hoc/withErrorHandler/withErrorHandler'
// import * as actions from '../store/actions'
// import {useDispatch} from 'react-redux'
// import {useEffect} from 'react'

function App({ route }) {
    // const dispatch =  useDispatch()
    // useEffect(()=>{
    //   dispatch(actions.setErrorMes("ASDFAZSDF"))
    // },[dispatch])

    return (
        <div className="App">
            <Navigation />
            {renderRoutes(route.routes)}
        </div>
    );
}

export default WithErrorHandler(App);
