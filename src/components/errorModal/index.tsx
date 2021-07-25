import React from 'react';
import "./style.css";
import Button from '../buttton';

import { useError } from '../../contexts/errorContext/errorContext';






const ErrorModal = () => {
    const { errorState, errorDispatch } = useError();
    return (
        <div className={errorState ? "errorModal-container" : `hide-errorModal`}>
            
            <div className="errorModal">
                <p>Oops , An error Occured</p>
                <Button text="Reload the Page" clickFunction={() => { window.location.reload(); errorDispatch("RESOLVE"); }} />
            </div>
        </div>
    );
};

export default ErrorModal;