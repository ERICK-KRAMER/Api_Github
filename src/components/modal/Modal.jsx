import React, { useEffect, useState } from "react";
import style from './Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import axios from "axios";

export function Modal({ isOpen, setIsOpenModal, getName }) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [imageProfile, setImageProfile] = useState('');
    const [repos, setRepos] = useState([])

    async function getData() {
        try {
            const response = await axios.get(`https://api.github.com/users/${getName}`);
            setData(response.data);
            setImageProfile(response.data.avatar_url);
            setRepos(response.data.repos_url)
            // console.log(repos)
            // console.log(data);
            // console.log(imageProfile);
        } catch (error) {
            setError('Algo deu errado');
        }
    }

    useEffect(() => {
        if (isOpen && getName) {
            getData();
        }
    }, [isOpen, getName]);

    if (isOpen) {
        return (
            <div className={style.background}>
                <div className={style.modal}>
                    <button onClick={() => { setIsOpenModal(!isOpen) }}><AiOutlineClose /></button>
                    {data.login && (
                        <div className={style.profile}>
                            <img src={imageProfile} alt={data.name} />
                            <span>{data.login}</span>
                            <ul>
                                {/* {repos.map((item)=>(
                                    <li key={item.id}>{item.full_name}</li>
                                ))} */}
                            </ul>
                        </div>
                    )}

                    {error && (
                        <div>{error}</div>
                    )}
                </div>
            </div>
        );
    } else {
        return null;
    }
}
