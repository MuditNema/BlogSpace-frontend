import React from 'react'
import AlertContext from './Alertcontext'
import { useState } from 'react'
const Alertstate = (props) => {
    const [AlertDisp, setAlertDisp] = useState(false)
    const [AlertMsg, setAlertMsg] = useState('');
    const [AlertType, setAlertType] = useState('success');
    const ShowAlert = (type,message) => {
        setAlertMsg(message);
        setAlertType(type);
        setAlertDisp(true);
        setTimeout(()=>{
            setAlertMsg('');
            setAlertType('success');
            setAlertDisp(false);
        },3000)
    }
    return (
        <AlertContext.Provider value={{ShowAlert,AlertDisp,AlertMsg,AlertType}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default Alertstate
