import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const EditGame = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [game, setGame] = useState({
        gameTitle: '',
        gamePrice: '',
        gameDescription: ''
})



    const [errors, setErrors] = useState({})


    const changeHandler = (e) => {
        setGame({...game, [e.target.name]: e.target.value})
      }



    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGame/${id}`)
            .then((res) => {
                console.log(res);
                setGame(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])




    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateGame/${id}`, game)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }



    return (
        <div className='creategame'>
           <div className='form'>
            <h2 className='edit-title'>Edit About: {game.gameTitle}</h2>
    
            
            <div>
                <div className='edit'>
            <form className='' onSubmit={submitHandler}>
                <label className='form-label'>Title:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={game.gameTitle} name='gameTitle'/>
                {
                    errors.gameTitle?
                    <p className='text-danger'>{errors.gameTitle.message}</p>:
                    null
                }
                <br></br>

                <label className='form-label' >Price:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={game.gamePrice} name='gamePrice'/>
                {
                    errors.gamePrice?
                    <p className='text-danger'>{errors.gamePrice.message}</p>:
                    null
                }
                <br></br>
                <label className='form-label'>Description:</label>
                <input className='form-control' type="text" onChange={changeHandler} value={game.gameDescription} name='gameDescription'/>
                {
                    errors.gameDescription?
                    <p className='text-danger'>{errors.gameDescription.message}</p>:
                    null
                }
                <br></br>
                 <label>Type:</label>
                    <select className='form-label' name = 'type' onChange={changeHandler} value={game.gameType}>
                            <option value= 'Playstaion'>Playstaion</option>
                            <option value= 'Xbox'>Xbox</option>
                            <option value= 'Switch'>Switch</option>
                    </select>
                
                <br/>
                <button className='addgame'>Finish Edit</button>
            </form>
            </div>
            </div>
            </div>  
        </div>
    );
}

export default EditGame;
