import { useState } from "react";

export default function Player({initalName,symbol,isActive,onChangeName}){

    const [playerName,setPlayerName]=useState(initalName);

    const [isEditing, setIsEditing ]= useState(false);

    function handleClick(){
        setIsEditing(editing=>!editing); 
        if(isEditing){
            onChangeName(symbol,playerName);
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editplayerName= <span className="player-name">{playerName}</span>;
    let btnCaption='Edit';

    if(isEditing){
        editplayerName= (
        <input type="text" required value={playerName} onChange={handleChange}/>
        );
        btnCaption="Save";
    }
    return(
        <li className={isActive?'active': undefined}>
          <span className="player">
          
          {editplayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick}>{btnCaption}</button>
          </li>
    );
}

// add a function that's triggered when the ,button> is clicked
// change isEditing to true in the functionshow the <span className="player-name"> only when the isediting is false
// show an <input> element(which does not need to work) is isEditing is true