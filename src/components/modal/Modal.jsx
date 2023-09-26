import React, { useEffect, useState } from "react";
import style from './Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import axios from "axios";
export function Modal({ isOpen, setIsOpenModal, getName}) {

    //https://api.github.com/users/${name}

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [imageProfile, setImageProfile] = useState('');

    async function getData() {
        try {
            const response = await axios.get(`https://api.github.com/users/${getName}`)
            setData(response.data);
            setImageProfile(response.data.avatar_url)
            console.log(data)
        } catch (error) {
            setError('algo deu errado')
        }
    }
    useEffect(() => {
     getData();   
    },[data])

    if(isOpen) {
        return(
            <div className={style.background}>
               <div className={style.modal}>
                <button onClick={() => {setIsOpenModal(!isOpen)}}><AiOutlineClose /></button>
                    {data.length > 0 && (
                        <>
                        {data.map((item) => (
                            <>
                            <img src={imageProfile} alt={data.login} />
                            <p>Repositorios:</p>
                              <ul>
                                {}
                              </ul>
                            </>
                        ))}
                        </>
                    )}
                    {error && (
                        <div>{error}</div>
                    )}
               </div>
            </div>
        );
    }
}