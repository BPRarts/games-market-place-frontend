import linkadd from './images/linkaddupdate.png'
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import mariobros from './images/mariobros.webp'
import smashbros from './images/smashbros.jpg'
import marioady from './images/marioady.webp'


const SwitchHome = (props) => {
    const [allGames, setAllGames] = useState([])
    const switchGames = allGames.filter((game) =>
    game.gameType ==="Switch")
    


    




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
    <div className='container-3'>
        <div className='intro'>
            <h1 className='title1'>DISCOVER</h1>
            <h2>YOUR NEXT GAME</h2>
            <img className = "link-add" src ={linkadd} alt = ''/>
        </div>
        
        <Link className='addgamebtn1' to ={'/createGame/form'}>Add Game</Link>
        <h2 className='choose'>Choose Your Game</h2>


 

        <div className='displays'>

             {/* <div className='gamesdisplay'>
             <img className = "mariobros" src={mariobros} alt= ''/>
             <p className='displaytitle'>Super Mario Bros Deluxe</p>
             <p className='displaytitle'>Price: $60</p>
              </div>

             <div className='gamesdisplay'>
             <img className='smashbros' src = {smashbros} alt />
              <p className='displaytitle'>Super Smash Bros Ultimate</p>
            <p className='displaytitle'>Price: $60</p>
            </div>

            <div className='gamesdisplay'>
            <img className = "marioady" src={marioady} alt= ''/>
            <p className='displaytitle'>Super Mario Adyssey</p>
            <p className='displaytitle'>Price: $60</p>
           </div> */}


         </div>

        



    













        <div className='box'>   
            {switchGames.map((game) => (
                <div className='game-list' key={game._id}>
                <h2>{game.gameTitle}</h2>
                <h2>Price:{game.gamePrice}</h2>
               
    
               <Link className='links' to ={`/oneGame/${game._id}`}>Details</Link>
               <br></br>
               <Link className='links' to ={`/updateGame/${game._id}`}>Edit</Link>
               </div>
        ))}
    </div>
        


        
    </div>
    );
}

export default SwitchHome;




