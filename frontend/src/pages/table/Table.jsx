import React, {useState, useEffect} from 'react';
import api from '../../api/api'
import EditModal from '../../components/modal/editModal';
import EditClient from '../edit/EditClient';
import './table.scss'

import editImg from '../../assets/edit.png'
import deleteImg from '../../assets/delete.png'

function initialState(){
    return [{id: 14,nome: '',email: '',estado: '',cidade: '',hobbie: null}]
}

const numItemsPages = 5

function Table(props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState(initialState)
    const [numPages, setNumPages] = useState(1)

    const [editModalIsOpen, setEditModalIsOpen] = useState(false)
    const [editId, setEditId] = useState(0)

    useEffect(() => {
        api.get('clients').then(resp => {
            setData(resp.data)
        })
    }, []);
    
    useEffect(() => {
        setNumPages(Math.ceil(data.length / numItemsPages))
    }, [data]);
    
    function addCurrentPage(){
        if(currentPage === numPages) return      
        else setCurrentPage(currentPage + 1)
    }

    function subCurrentPage(){
        if(currentPage === 1 ) return
        else setCurrentPage(currentPage - 1)
    }

    function openEditModal(id){
        setEditId(id)
        setEditModalIsOpen(true)
    }

    function closeEditModal(){
        setEditModalIsOpen(false)
    }

    function deleteClient(id){
        console.log('Deletado')
        api.delete(`/client?id=${id}`)
        api.get('clients').then(resp => {
            setData(resp.data)
        })   
    }

    function clientUpdated(){
        console.log('fechou')
        api.get('clients').then(resp => {
            setData(resp.data)
        }) 
        setEditModalIsOpen(false)
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
                    <td className='hobbie'>{client.hobbie ? client.hobbie : '-------'}</td>
                    <td className='action'>  
                        <div onClick={e=>{openEditModal(client.id)}} className="edit"><img src={editImg} alt="loading..." /></div> 
                        <div onClick={e=>{deleteClient(client.id)}} className="delete"> <img src={deleteImg} alt="loading..." /> </div>            
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

            <EditModal
                isOpen = {editModalIsOpen}
                click = {e => closeEditModal()}
            >
                <EditClient id={editId} clientUpdated={e => clientUpdated()}/>
            </EditModal>
        </div>
     );
}

export default Table;