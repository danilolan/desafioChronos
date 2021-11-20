import React, {useState} from 'react';
import Select from 'react-select'
import './add.scss'

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

function Add() {
    const [values, setValues] = useState(initialState);
    const [numHobbies, setNumHobbies] = useState([true]);
    const [optionStates, setOptionStates] = useState(['']);

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
        data = {...values, hobbies: optionStates}
        console.log(data)  // ENVIAR REQUISIÇÃO

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
        setNumHobbies([...numHobbies, true])
    }
    function subOption(){
        setNumHobbies(numHobbies.slice(0,-1))
        optionStates.pop()
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

export default Add;