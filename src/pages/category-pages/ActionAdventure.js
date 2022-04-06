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
            name: "Kart",
            url: 
                "http://cs.txstate.edu/~rge15/raceCarGame.png"
                
        },
    ]);

    const [people2, setPeople2] = useState([
        {
        
            name: "Snake",
            url: 
                "http://cs.txstate.edu/~rge15/snakeyGame.png"
        
        },
 
    ]);

    const [people3, setPeople3] = useState([
        {
            name: "Tic-Tac-Toe",
            url:
                "http://cs.txstate.edu/~rge15/TicTacToeGame.png"
        },
    ]);


    // The card Containers itself
  return (
      
    <div> 
        
        <div className="gameContainer">
     
        {people1.map(person => (
            <Link to="/game-pages/Karts">
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
            <Link to="/game-pages/Snake">
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
            <Link to="/game-pages/TicTacToe">
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