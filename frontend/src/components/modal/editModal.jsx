import React from 'react';
import ReactDOM from 'react-dom';
import './editmodal.scss'
import closeImg from '../../assets/close.png'

const portalRoot = document.getElementById('portal-root')

const EditModal = ({isOpen,children,click}) => {
    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="uimodaloverlay">
            <div className="uimodal">
                <button type="button" className="button" onClick={click}>
                    <img src={closeImg} alt="loading..." />
                </button>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default EditModal;