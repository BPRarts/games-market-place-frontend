import haloadd from './images/haloadd.png';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import gears5 from './images/gears5.jpg'
import halo5 from './images/halo5.webp'
import forza5 from './images/forza5.webp'



const XboxHome = (props) => {
    const [allGames, setAllGames] = useState([])
    const xboxGames = allGames.filter((game) =>
    game.gameType ==="Xbox")





    useEffect (() => {
        axios.get('http://localhost:8000/api/allGames')
            .then((res) => {
                console.log(res);
                setAllGames(res.data)
            })
            .catch((err) => {
                console.log(err);
             })
    },[])





    return (
        <div className='container-2'>
            <div className='intro'>
                 <h1 className='title1'>DISCOVER</h1>
                 <h2>YOUR NEXT GAME!</h2>
                 <img className ="halo-add" src = {haloadd} alt =''/>
            </div>
                 <Link className='addgamebtn1' to ={'/createGame/form'}>Add Game</Link>
                <h2 className='choose'>Choose Your Game</h2>

                

            <div className='displays'>

                  {/* <div className='gamesdisplay'>
                  <img className = "gears5" src={gears5} alt= ''/>
                  <p className='displaytitle'>Gears 5</p>
                  <p className='displaytitle'>Price:$60</p>
                 </div>

                 <div className='gamesdisplay'>
                 <img className='halo5' src = {halo5} alt ='' />
                 <p className='displaytitle'>Halo 5</p>
                 <p className='displaytitle'>Price:60</p>
                 </div>

                <div className='gamesdisplay'>
                <img className = "forza5" src={forza5} alt= ''/>
                <p className='displaytitle'>Forza Horizon 5</p>
                 <p className='displaytitle'>Price:$60</p>
                </div> */}


            </div>












            <div className='box'>
                {xboxGames.map((game) => (
                   <div className='game-list' key={game._id}>

                   


                        <h2>{game.gameTitle}</h2>
                        <h2>Price: {game.gamePrice}</h2> 
               
     
                        <Link className='links' to ={`/oneGame/${game._id}`}>Details</Link>
                        <br></br>
                        <Link className='links' to ={`/updateGame/${game._id}`}>Edit</Link>
                     </div>
                         ))
                         }
            </div>

        </div>
    );
}

export default XboxHome;
