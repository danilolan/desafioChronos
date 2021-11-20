import React from 'react';
import './header.scss'

import addImg from '../../assets/add.png'
import tableImg from '../../assets/table.png'

function Header(props) {
    return ( 
        <div className="header">
            <a
                href="/add"
                >Adicionar &nbsp; <img src={addImg} alt="loading..." />
            </a>
            <a
                href="/table"
                >Tabela &nbsp; <img src={tableImg} alt="loading..." />
            </a>
        </div>
     );
}

export default Header;