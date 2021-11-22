import React, {useState, useEffect} from 'react';
import Select from 'react-select'
import './hobbiesselect.scss'

import plus from '../../assets/plus.png'
import minor from '../../assets/minor.png'

const options = [
    { value: 'instrumento', label: 'Instrumento' },
    { value: 'arte', label: 'Arte' },
    { value: 'esporte', label: 'Esporte' }
]

const maxNumHobbies = 3

function HobbiesSelect(props) {
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
            setOptionsHobbies(arr)
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
        let arr = [...optionsHobbies]
        arr.pop()
        console.log(arr)
        setOptionsHobbies(arr)
        console.log(optionsHobbies)
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