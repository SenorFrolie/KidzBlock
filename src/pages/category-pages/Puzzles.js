import React from 'react';
import Button from "react-tinder-card";
import {useState } from 'react';
import './../../components/css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function Menu() {

    // Button data (image and name)
    const [matching] = useState([{name: "Matching", url: "http://cs.txstate.edu/~rge15/matchingGame.png"},]);
    const [sliding] = useState([{name: "Sliding Puzzle", url: "http://cs.txstate.edu/~rge15/puzzleGame.png"},]);
    const [my2048] = useState([{name: "2048", url: "http://cs.txstate.edu/~rge15/2048Game.png"},]);

    // Mapping button data to Buttons
    return (
        <div> 
            <h1> Puzzle </h1>
            <div className="gameContainer">
                {/* Matching Game Button */}
                {matching.map(button => (
                    <Link to="/game-pages/Matching">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Sliding Game Button */}
                {sliding.map(button => (
                    <Link to="/game-pages/Sliding">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* 2048 Game Button */}
                {my2048.map(button => (
                    <Link to="/game-pages/My2048">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
            </div>  
        </div> 
    );
}



export default Menu