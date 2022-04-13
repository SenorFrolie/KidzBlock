import React from 'react';
import Button from "react-tinder-card";
import {useState } from 'react';
import './css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function Menu() {
    
    // Button data (image and name)
    const [puzzles] = useState([{name: "Puzzles", url: "http://cs.txstate.edu/~rge15/puzzle.png"},]);
    const [lettersNumbers] = useState([{name: "Letters & Numbers", url: "http://cs.txstate.edu/~rge15/letters&numbers.png"},]);
    const [actionAdventure] = useState([{name: "Action Adventure", url:"http://cs.txstate.edu/~rge15/actionAdventure.png"},]);

    // Mapping button data to Buttons
    return (
        <div> 
            <div className="Menu__cardContainer">
                {/* Puzzles Category Button */}
                {puzzles.map(button => (
                    <Link to="/Puzzles">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="card">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Letters & Numbers Category Button */}
                {lettersNumbers.map(button => (
                    <Link to="/LettersNumbers">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="card">
                                    <h3>{button.name}</h3>
                                </div>
                            </Button>
                        </IconButton>
                    </Link>
                ))}
                {/* Action Adventure Category Button */}
                {actionAdventure.map(button => (
                    <Link to="/ActionAdventure">
                        <IconButton>
                            <Button className="swipe" key={button.name} preventSwipe={['up','down','left','right']}>
                                <div style={{ backgroundImage: `url(${button.url})` }} className="card">
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