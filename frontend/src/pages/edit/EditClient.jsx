import React, {useState, useEffect} from 'react';
import axios from 'axios'
import api from '../../api/api';
import LocalizationSelect from '../../components/localizationselect/LocalizationSelect';
import HobbiesSelect from '../../components/hobbiesselect/HobbiesSelect';
import './editclient.scss'

function initialState(){
    return {nome: '', email: '',estado: '', cidade: ''}
}

function EditClient(props) {
    const [values, setValues] = useState(initialState);
    const [hobbies, setHobbies] = useState(['']);
    const [location, setLocation] = useState({})
    

    useEffect(() => {
        api.get(`/client?id=${props.id}`).then(resp => {
            setValues(resp.data[0])
            try{
                setHobbies(resp.data[0].hobbie.split(', '))
                setLocation({estado: resp.data[0].estado, cidade: resp.data[0].cidade})
            }
            catch{
                setHobbies([''])
                setLocation({})
            }
        })
    }, [props.id]);

    useEffect(() => {
        let arr = []
        hobbies.map( option => {
            if(option !== '') arr.push(true)
            return option
        })
    }, [hobbies]);

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
        data = {id: props.id, ...values} 
        // ENVIAR REQUISIÇÃO
        axios.put('http://localhost:3001/client', data).then( resp => {
            props.clientUpdated()
        })


        setValues(initialState)
    }

    function getHobbies(hobbies){
        setValues({...values, hobbie: hobbies.join(', ')})
    }

    function getLocation(estado, cidade){
        setValues({...values, estado: estado, cidade: cidade})
    }

    return ( 
        <div className="editclient">
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
                        setLocation={location}
                    />
                </div>

                <div className="row hobbie">
                    <HobbiesSelect 
                        getHobbies={(hobbies) => getHobbies(hobbies)}
                        setHobbies={hobbies}
                    />
                </div>

                <button onClick={onSubmit} >Enviar</button>

            </form>
        </div>
     );
}

export default EditClient;