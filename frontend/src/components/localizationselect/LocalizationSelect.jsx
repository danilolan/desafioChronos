import React, {useState, useEffect} from 'react';
import api from '../../api/api';
import Select from 'react-select'

import './localizationselect.scss'

function LocalizationSelect(props) {
    const [optionsEstados, setOptionsEstados] = useState([])
    const [selectedEstado, setSelectedEstado] = useState('')
    const [optionsCidades, setOptionsCidades] = useState([])
    const [selectedCidade, setSelectedCidade] = useState('')

    const [cidadeSelectDisable, setCidadeSelectDisable] = useState(true)

    let setLocation =  props.setLocation

    useEffect(() => {
        api.get('./estados').then( resp =>{
            const estados = resp.data.map( row => {
                return {value: row.nome, label: row.nome, id: row.id}
            })
            setOptionsEstados(estados)
        })
        
    }, [])

    useEffect(() => {
        if(props.setLocation){
            setSelectedEstado(props.setLocation.estado)
            setSelectedCidade(props.setLocation.cidade)
        }
    }, [props.setLocation]);

    useEffect(() => {
        if(selectedEstado) {
            setCidadeSelectDisable(false)
            const estado = optionsEstados.find(item => item.value === selectedEstado)
            api.get(`/cidades?id=${estado.id}`).then( resp =>{
                const cidades = resp.data.map( row => {
                    return {value: row.nome, label: row.nome, id: row.id}
                })
                setOptionsCidades(cidades)
                if(!setLocation) setSelectedCidade('')
                else setLocation = false

            })
        }
    }, [selectedEstado]);

    useEffect(() => {
        if(props.reset){
            setSelectedEstado('')
            setSelectedCidade('')
        }
    }, [props.reset]);

    function changeHandlerEstado(e){
        setSelectedEstado(e.value)
    }

    function changeHandlerCidade(e){
        setSelectedCidade(e.value)
    }

    useEffect(() => {
        props.getLocation(selectedEstado, selectedCidade)
    }, [selectedCidade]);

    return ( 
        <div className="localizationselect">
            <div className="estado">
                <label>Estado:</label>
                <Select                  
                    options={optionsEstados}
                    value={selectedEstado ? optionsEstados.find(item => item.value === selectedEstado) : ''}
                    onChange={changeHandlerEstado}                  
                />
            </div>
            <div className="cidade">
                <label>Cidade:</label>
                <Select                  
                    options={optionsCidades}
                    value={selectedCidade ? optionsCidades.find(item => item.value === selectedCidade) : ''}
                    onChange={changeHandlerCidade}  
                    isDisabled={cidadeSelectDisable}                
                />
             </div>
        </div>
     );
}

export default LocalizationSelect;