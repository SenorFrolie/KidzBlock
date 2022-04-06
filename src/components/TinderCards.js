import React from 'react';
import TinderCard from "react-tinder-card";
import {useEffect, useState} from 'react';
//import database from "./firebase";
import './TinderCards.css';
import { IconButton } from '@mui/material';
import { Route, Link} from "react-router-dom"


// An array of what is in the containers

function TinderCards() {

    const [people1, setPeople1] = useState([
        {
            name: "Puzzles",
            url: 
                "http://cs.txstate.edu/~rge15/puzzle.png"
                
        },
    ]);

    const [people2, setPeople2] = useState([
        {
        
            name: "Letters & Numbers",
            url: 
                "http://cs.txstate.edu/~rge15/letters&numbers.png"
        
        },
 
    ]);

    const [people3, setPeople3] = useState([
        {
            name: "Action Adventure",
            url:
                "http://cs.txstate.edu/~rge15/actionAdventure.png"
        },
    ]);


    // The card Containers itself
  return (
      
    <div> 
        
        <div className="tinderCards__cardContainer">
     
        {people1.map(person => (
            <Link to="/Puzzles">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </IconButton>
            </Link>
        ))}

        {people2.map(person => (
            <Link to="/LettersNumbers">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </IconButton>
            </Link>
        ))}
                {people3.map(person => (
            <Link to="/ActionAdventure">
            <IconButton>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down','left','right']}
            >
                <div 
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
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