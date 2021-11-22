import React, {useState} from 'react';

import api from '../../api/api';
import './add.scss'

import LocalizationSelect from '../../components/localizationselect/LocalizationSelect';
import HobbiesSelect from '../../components/hobbiesselect/HobbiesSelect';

function initialState(){
    return {nome: '', email: '',estado: '', cidade: ''}
}

function Add() {
    const [values, setValues] = useState(initialState);
    const [reset, setReset] = useState(false)

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
        console.log(data)  
        api.post('/client', data).then( resp => {
            console.log(resp.data)
        })
        setValues(initialState)
        setReset(true)
    }

    function getHobbies(hobbies){
        setValues({...values, hobbie: hobbies.join(' ')})
    }

    function getLocation(estado, cidade){
        setValues({...values, estado: estado, cidade: cidade})
    }

    return ( 
        <div className="add">
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