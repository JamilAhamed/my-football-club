import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css'


const Players = (props) => {
    const {image,Name, Salary} = props.player;
    return (
        <div className="player">
            <div> 
              <img src={image} alt=""/>  
            </div>
            <div>
                <h4 className="player-name">{Name}</h4>
                <br/>
                <h3>Salary: {Salary}</h3>
                <button onClick={() =>props.handlePlayer(props.player)} className="main-button"><FontAwesomeIcon icon={faUserPlus} /> Add to Club</button>

            </div>
        </div>
    );
};

export default Players;