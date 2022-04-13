import React from 'react';
import Button from "react-tinder-card";
import { useState } from 'react';
import './../../components/css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function Menu() {

    // Button data (image and name)
    const [letters] = useState([{name: "Letters", url: "http://cs.txstate.edu/~rge15/alphabetGame.png"},]);
    const [numbers] = useState([{name: "Numbers", url: "http://cs.txstate.edu/~rge15/numberGame.png"},]);
    const [spelling] = useState([{name: "Spelling", url: "http://cs.txstate.edu/~rge15/spellingGame.png"},]);

    // Mapping button data to Buttons
    return (
        <div> 
            <div className="gameContainer">
                {/* Letters Game Button */}
                {letters.map(button => (
                    <Link to="/game-pages/Letters">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Numbers Game Button */}
                {numbers.map(button => (
                    <Link to="/game-pages/numbers">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="gameCard">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Spelling Game Button */}
                {spelling.map(button => (
                    <Link to="/game-pages/spelling">
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