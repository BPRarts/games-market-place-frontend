import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const OneGame = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneGame, setOneGame] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGame/${id}`)
            .then((res) => {
                console.log(res);
                setOneGame(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteGame/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }





    return (
     <div className='creategame'>
         <div className='form'>
            <div className='onegame'>
            <h3 className='about'>Details About: {(oneGame.gameTitle)}</h3>
            <h2>Price:{oneGame.gamePrice}</h2>
            <h2>Description:{oneGame.gameDescription}</h2>
            <h2>Platform:{oneGame.gameType}</h2>


            <button className='delete' onClick={() => deleteHandler(oneGame._id)}>BUY</button>
            
           
            </div>
           

        </div>
    </div>
    );
}

export default OneGame;
