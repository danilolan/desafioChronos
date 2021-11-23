import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import './hobbiesselect.scss'

import plus from '../../assets/plus.png'
import minor from '../../assets/minor.png'

const maxNumHobbies = 3

const optionsInitialState = [
    { value: 'Instrumento', label: 'Instrumento' },
    { value: 'Arte', label: 'Arte' },
    { value: 'Esporte', label: 'Esporte' }
]

function HobbiesSelect(props) {
    const [options, setOptions] = useState(optionsInitialState);
    const [numHobbies, setNumHobbies] = useState([]);
    const [optionsHobbies, setOptionsHobbies] = useState(['']);

    const getHobbies = props.getHobbies
    let hobbies = props.setHobbies

    useEffect(() => {
        getHobbies(optionsHobbies)

    }, [optionsHobbies]); 

    useEffect(() => {
        if(hobbies){
            let arr = []
            hobbies.map ( hobbie => {
                if(hobbie !== ''){
                    arr.push(true)
                }
            })
            setNumHobbies(arr)
            setOptionsHobbies(hobbies)
        }
    }, [hobbies]);

    useEffect(() => {
        if(props.reset){
            setNumHobbies([])
            setOptionsHobbies([''])
        }
    }, [props.reset]);
    function renderHobbie(option,index){

        function changeHandler(e){
            var arr = [...optionsHobbies]
            arr[index] = e.value
            arr = [...new Set(arr)]
            setOptionsHobbies(arr)
        }

        return (
            <div key={index} className="select">
                <Select                  
                    options={options}
                    value={optionsHobbies[index] ? options.find(item => item.value === option) : ''}
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
        let arr = [...optionsHobbies]
        arr.pop()
        setOptionsHobbies(arr)
    }

    return ( 
        <div className="hobbiesselect">
            <label>Hobbie(s):</label>
                    {numHobbies.map((_, index) => (
                        renderHobbie(optionsHobbies[index], index)
                    ))}
                    <img src={plus} alt='loading...' onClick={e => addOption()}></img>
                    <img src={minor} alt='loading...' onClick={e => subOption()}></img>
        </div>
     );
}

export default HobbiesSelect;