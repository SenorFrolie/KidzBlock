import React from 'react';
import TinderCard from "react-tinder-card";
import {useEffect, useState} from 'react';
//import database from "./firebase";
import './../../components/TinderCards.css';
import { IconButton } from '@mui/material';
import { Route, Link} from "react-router-dom"

// An array of what is in the containers

function TinderCards() {

    const [people1, setPeople1] = useState([
        {
            name: "Letters",
            url: 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcMcZkB-rKi9x9_S6jhSDLPQb8H81j4B66g&usqp=CAU"
                
        },
    ]);

    const [people2, setPeople2] = useState([
        {
        
            name: "Numbers",
            url: 
                "https://as2.ftcdn.net/v2/jpg/01/12/40/89/1000_F_112408906_RalYyQ3bYdVtrQD9cVN2h0TuvM9CT9Zk.jpg"
        
        },
 
    ]);

    const [people3, setPeople3] = useState([
        {
            name: "Spelling",
            url:
                "https://knowtechie.com/wp-content/uploads/2021/03/dogecoin-meme-1000x600.jpg"
        },
    ]);


    // The card Containers itself
  return (
      
    <div> 
        
        <div className="gameContainer">
     
        {people1.map(person => (
            <Link to="/game-pages/GamePage">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="gameCard"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </IconButton>
            </Link>
        ))}

        {people2.map(person => (
            <Link to="/game-pages/GamePage">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="gameCard"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </IconButton>
            </Link>
        ))}
                {people3.map(person => (
            <Link to="/game-pages/Spelling">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="gameCard"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </IconButton>
            </Link>
        ))}
        </div>  
    </div> 
  );
}

export default TinderCards