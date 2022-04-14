import React from 'react';
import Button from "react-tinder-card";
import { useState } from 'react';
import './../../components/css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function Menu() {

    // Button data (image and name)
    const [kart] = useState([{name: "Kart", url: "http://cs.txstate.edu/~rge15/raceCarGame.png"}, ]);
    const [snake] = useState([{name: "Snake", url: "http://cs.txstate.edu/~rge15/snakeyGame.png"}, ]);
    const [ticTacToe] = useState([{name: "Tic-Tac-Toe", url: "http://cs.txstate.edu/~rge15/TicTacToeGame.png"}, ]);

    // Mapping button data to Buttons
    return (
        <div> 
            <div className="gameContainer">
                {/* Kart Game Button */}
                {kart.map(button => (
                    <Link to="/game-pages/Karts">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Snake Game Button */}
                {snake.map(button => (
                    <Link to="/game-pages/Snake">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Tic-Tac-Toe Game Button */}
                {ticTacToe.map(button => (
                    <Link to="/game-pages/TicTacToe">
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