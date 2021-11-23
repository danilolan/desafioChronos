import React, {useState} from 'react';

import api from '../../api/api';
import './add.scss'

import LocalizationSelect from '../../components/localizationselect/LocalizationSelect';
import HobbiesSelect from '../../components/hobbiesselect/HobbiesSelect';
import ResponseUi from '../../components/responseui/ResponseUi';


function initialState(){
    return {nome: '', email: '',estado: '', cidade: ''}
}

function Add() {
    const [values, setValues] = useState(initialState);
    const [reset, setReset] = useState(false)

    const [responseUiRendered, setResponseUiRendered] = useState(false);
    const [responseUiData, setResponseUiData] = useState('');

    function callResponseUi(){
        setResponseUiRendered(true)
        setTimeout(() => {
            setResponseUiRendered(false);
        }, 5000);     
    }

    function onChange(event){
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(event){       
        event.preventDefault()

        var data = {}
        data = {...values} 
        api.post('/client', data).then( resp => {  
            console.log(resp)
            try {setResponseUiData(resp.data)}
            catch {setResponseUiData('Tente novamente')}
        })
        setValues(initialState)
        setReset(true)
        callResponseUi()
    }

    function getHobbies(hobbies){
        setValues({...values, hobbie: hobbies.join(', ')})
    }

    function getLocation(estado, cidade){
        setValues({...values, estado: estado, cidade: cidade})
    }

    return ( 
        <div className="add">
            <ResponseUi isRendered={responseUiRendered} data={responseUiData}/>
            <form>
                <div className="row">
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        name="nome"
                        value={values.nome}
                        onChange={onChange}
                    />
                </div>
                
                <div className="row">
                    <label>Email:</label>
                    <input 
                        type="text" 
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </div>

                <div className="row location">
                    <LocalizationSelect 
                        getLocation={(estado,cidade) => getLocation(estado,cidade)}
                        reset={reset}
                    />
                </div>

                <div className="row hobbie">
                    <HobbiesSelect 
                        getHobbies={(hobbies) => getHobbies(hobbies)}
                        reset={reset}
                    />
                </div>

                <button onClick={onSubmit} >Enviar</button>

            </form>
        </div>
     );
}

export default Add;