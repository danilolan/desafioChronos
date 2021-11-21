import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import axios from 'axios'
import api from '../../api/api';
import './editclient.scss'

import plus from '../../assets/plus.png'
import minor from '../../assets/minor.png'

function initialState(){
    return {nome: '', email: '',estado: '', cidade: ''}
}

const options = [
    { value: 'instrumento', label: 'Instrumento' },
    { value: 'arte', label: 'Arte' },
    { value: 'esporte', label: 'Esporte' }
]

function EditClient(props) {
    const [values, setValues] = useState(initialState);
    const [numHobbies, setNumHobbies] = useState([true]);
    const [optionStates, setOptionStates] = useState(['']);

    useEffect(() => {
        api.get(`/client?id=${props.id}`).then(resp => {
            setValues(resp.data[0])
            try{
                setOptionStates(resp.data[0].hobbie.toLowerCase().split(' '))
            }
            catch{
                setOptionStates([''])
            }
        })
    }, [props.id]);

    useEffect(() => {
        let arr = []
        optionStates.map( option => {
            if(option !== '') arr.push(true)
            return option
        })
        setNumHobbies(arr)
    }, [optionStates]);

    const maxNumHobbies = 3

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
        data = {id: props.id, ...values, hobbie: optionStates.join(' ')}
        console.log(data)  
        // ENVIAR REQUISIÇÃO
        axios.put('http://localhost:3001/client', data).then( resp => {
            console.log(resp.data)
            props.clientUpdated()
        })


        setValues(initialState)
        setNumHobbies([true])
    }

    function renderHobbie(option,index){

        function changeHandler(e){
            var arr = [...optionStates]
            arr[index] = e.value
            setOptionStates(arr)
            console.log(optionStates)
        }

        return (
            <div key={index} className="select">
                <Select                  
                    options={options}
                    value={options.find(item => item.value === option)}
                    onChange={changeHandler}                  
                />
            </div>
        )
        
    }

    function addOption(){
        if(numHobbies.length === maxNumHobbies) return
        else setNumHobbies([...numHobbies, true])
    }
    function subOption(){
        setNumHobbies(numHobbies.slice(0,-1))
        setOptionStates(optionStates.slice(0,-1))
        console.log(optionStates)   
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
                    <div className="estado">
                        <label>Estado:</label>
                        <input 
                            type="text" 
                            name="estado"
                            value={values.estado}
                            onChange={onChange}
                        />
                    </div>
                    <div className="cidade">
                        <label>Cidade:</label>
                        <input 
                            type="text" 
                            name="cidade"
                            value={values.cidade}
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="row hobbie">
                    <label>Hobbie(s):</label>
                    {numHobbies.map((_, index) => (
                        renderHobbie(optionStates[index], index)
                    ))}
                    <img src={plus} alt='loading...' onClick={e => addOption()}></img>
                    <img src={minor} alt='loading...' onClick={e => subOption()}></img>
                </div>

                <button onClick={onSubmit} >Enviar</button>

            </form>
        </div>
     );
}

export default EditClient;