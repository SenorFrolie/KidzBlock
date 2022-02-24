import React from 'react';
import TinderCard from "react-tinder-card";
import {useEffect, useState} from 'react';
//import database from "./firebase";
import './TinderCards.css';
import { IconButton } from '@mui/material';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "1st and 2nd Grade",
            url: 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcMcZkB-rKi9x9_S6jhSDLPQb8H81j4B66g&usqp=CAU"
        },
        {
            name: "3rd and 4th Grade",
            url: 
                "https://as2.ftcdn.net/v2/jpg/01/12/40/89/1000_F_112408906_RalYyQ3bYdVtrQD9cVN2h0TuvM9CT9Zk.jpg"
        },
        {
            name: "5th and 6th Grade",
            url:
                "https://knowtechie.com/wp-content/uploads/2021/03/dogecoin-meme-1000x600.jpg"
        },
    ]);
/*
    useEffect(() => {
        database.collection('users').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        //this will run ONCE when the component loads, and never again
    }, []);
*/


  return (
    <div> 
        <div className="tinderCards__cardContainer">
    
        {people.map(person => (
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
        ))}
        </div>
    </div>
    
  );
}

export default TinderCards