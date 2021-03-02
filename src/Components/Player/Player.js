import React, { useState } from 'react';
import Club from '../Club/Club';
import playerData from '../FakeData/PlayerData';
import Players from '../Players/Players';
import './player.css'

const Player = () => {   
    const first13 = playerData.slice(0, 13);
    const [players, setPlayers] = useState(first13);
    const [club, setClub] =useState([]);
    
    const handlePlayer =(player) =>{
        const newClub = [...club,player];
        setClub(newClub);
    }
    

    return (
        <div className="player-container">
            <div className="khelowar-container">
                {
                    players.map(plr => <Players handlePlayer={handlePlayer} player={plr} handlePlayer={handlePlayer}></Players>)
                }
            </div>
            <div className="club-container">
                <Club club={club}></Club>
            </div>
        </div>

    );
};

export default Player;



