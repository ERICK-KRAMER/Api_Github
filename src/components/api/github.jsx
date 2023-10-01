import React, { useState } from "react";
import axios from "axios";
import style from './github.module.css'
import { FaSearch } from 'react-icons/fa'
import { Modal } from "../modal/Modal";

export function Github(){
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [getName, setGetName] = useState('');

    const getData = async() => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${name}`);
            setData(response.data.items);
            setError(null);
        } catch (error) {
            setError('Algo deu errado. Tente Novamente!!');
        }
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        getData();
        setName('');
    }

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <div className={style.search}>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit" onClick={handleClick}><FaSearch /></button>
            </div>
            {data.length > 0 && (
                <>
                    <h3>Clique no usuario para ver os repositórios</h3> <br/>
                    <ul className={style.list}>
                        {data.map((item) => (
                            <li key={item.id} onClick={() => { setIsOpenModal(true); setGetName(item.login); }} >{item.login}</li>
                        ))}
                    </ul>
                </>
            )}
            {error && (
                <span style={{color:'red'}}>{error}</span>
            )}
            <Modal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} getName={getName} />
        </>
    );
}
