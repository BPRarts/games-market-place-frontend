import React,{useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


const CreateGame = (props) => {
    const [game,setGame] = useState({
        gameTitle:'',
        gamePrice:'',
        gameDescription:'',
        gameType:''
    })



    const [errors, setErrors] = useState({})


    const changeHandler = (e) => {
        setGame({...game,[e.target.name]: e.target.value})
    }

    

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newGame', game)
             .then((res) => {
                console.log(res);
             })
             .catch((err) =>{
                console.log("this is axios error",err);
                setErrors(err.response.data.errors)
             })
    }

    return (
    <div className='creategame'>
          
        

        <div className='form'> 
            
            <h2 className='sell'>What are You Selling?</h2>
           
            <form onSubmit={submitHandler}>

                <div className='input-container'>
                    <label>Game Title:</label>
                    <input type="text" name='gameTitle' onChange={changeHandler} value={game.gameTitle}/>
                    {
                        errors.gameTitle?
                        <p className='text-danger'>{errors.gameTitle.message}</p>:
                        null
                    }
                    </div>
                    <div className='input-container'>
                    <label>Price:</label>
                    <input type="text" name='gamePrice' onChange={changeHandler} value={game.gamePrice}/>
                    {
                        errors.gamePrice?
                        <p className='text-danger'>{errors.gamePrice.message}</p>:
                        null
                    }
                    </div>
                    <div className='input-container'>
                    <label>Description:</label>
                    <input type="text" name='gameDescription' onChange={changeHandler} value={game.gameDescription}/>
                    {
                        errors.gameDescription?
                        <p className='text-danger'>{errors.gameDescription.message}</p>:
                        null
                    }
                    <br></br>
                    <div className='input-container'>
                    <label>Type:</label>
                    <select className='form-label' name = 'gameType' onChange={changeHandler} value={game.gameType}>
                            <option value= 'Playstation'>Playstation</option>
                            <option value= 'Xbox'>Xbox</option>
                            <option value= 'Switch'>Switch</option>

                    </select>
                    <br></br>
                    </div>
                    
                    <button className='addgame' >Add Game</button>
                </div>
            </form>



        </div>
    </div>
    );
}

export default CreateGame;
