import React from 'react';
import Player from '../Player/Player';
import './Club.css'

const Club = (props) => {
    const club = props.club;
    console.log(club);

  let totalSalary = 0;
  for (let i = 0; i< club.length; i++) {
      const element = club[i];
      console.log(element.Salary);
      totalSalary= element.Salary + totalSalary;  
 }

    return (
        <div className="club-container">
            <h2>Player who Added to Team </h2>
            <h3>Total Selected Player: {club.length}</h3>
            {
                club.map(player => <li>{player.Name} {player.Salary}</li>)
            }
            <h3> Grand Total Salary:{totalSalary}</h3>
        </div>
    );
};

export default Club;