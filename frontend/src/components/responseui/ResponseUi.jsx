import React from 'react';
import './responseui.scss'

function ResponseUi(props) {
    const text = props.data.msg
    const isRendered = props.isRendered
    let isValid = true
    const code = props.data.code

    if(code !== 100) {
        isValid = false
    }

    return (
        <div className='responseuicontainer'>
            {
                isRendered &&
                <div className="responseui" style={isValid ? {background:'#43B05C'} : {background:'#E04F5F'}}>
                    {text}
                    <div className="loadingbar"></div>
                </div>
            }
        </div>
    );
}

export default ResponseUi;