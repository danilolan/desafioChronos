import React, {useState, useEffect} from 'react';
import './table.scss'

import editImg from '../../assets/edit.png'
import deleteImg from '../../assets/delete.png'

const data = [
    {id: 1, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 2, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 3, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 4, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 5, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 6, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 7, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 8, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 9, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 10, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 12, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 13, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 14, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 15, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 16, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 17, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 18, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'},
    {id: 19, nome: 'danilo', email: 'didohreculano@gmail.com', estado: 'Paraiva', cidade: 'Campina grande', hobbie: 'Musico'}
]

function Table(props) {
    const numItemsPages = 5
    const numPages = Math.ceil(data.length / numItemsPages)

    const [currentPage, setCurrentPage] = useState(1)
    
    function addCurrentPage(){
        if(currentPage === numPages) return      
        else setCurrentPage(currentPage + 1)
    }

    function subCurrentPage(){
        if(currentPage === 1 ) return
        else setCurrentPage(currentPage - 1)
    }


    function renderRows(){   
        const array = data.slice((currentPage * numItemsPages) - numItemsPages, (numItemsPages * currentPage))     
        var rowSwitch = true

        return array.map( client => { 
            rowSwitch =! rowSwitch
            return (
                <tr key={client.id} style={rowSwitch ? {background:'#FFFFFF'} : {background:'#EEEEEE'}}>
                    <td>{client.id}</td>
                    <td>{client.nome}</td>
                    <td>{client.email}</td>
                    <td>{client.estado}</td>
                    <td>{client.cidade}</td>
                    <td>{client.hobbie}</td>
                    <td className='action'>  
                        <div className="edit"><img src={editImg} alt="loading..." /></div> 
                        <div className="delete"> <img src={deleteImg} alt="loading..." /> </div>            
                    </td>
                </tr>
            )
        })
    }

    return ( 
        <div className="table">
            <table border="1" cellSpacing="0" rules="none">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Estado</td>
                        <td>Cidade</td>
                        <td>Hobbie(s)</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            <div className="pageButtonContainer">
                <button className='back' onClick={e => subCurrentPage()}> ➜ </button>
                <label> {currentPage} - {numPages} </label>
                <button className='next' onClick={e => addCurrentPage()}> ➜ </button>       
            </div>
        </div>
     );
}

export default Table;