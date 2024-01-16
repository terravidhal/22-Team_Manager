import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerStatus.css';
import SubNav2 from '../../components/SubNav2/SubNav2';
import axios from 'axios';
import { useParams } from 'react-router-dom';






const PlayerStatus = (props) => {
  const { setManagePlayerStatusTabIsActive} = props;
  const [playerData, setPlayerData] = useState([]);
  const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] =
    useState(false);
  const {gameId} = useParams(); 


  useEffect(() => {
    setManagePlayerStatusTabIsActive(true);
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/player")
      .then((response) => {
       // console.log("response.data+++++++++++++", response.data);
        setPlayerData(response.data);
      })
      .catch((err) => console.log(err.response));
  }, [triggerGetAllRequestDummy]);  



  const handleChangeGameStatus = (idFromBelow, newStatus) => {
    let putData = {};
    if (gameId === "1") {
      putData.gameOneStatus = newStatus; 
    } else if (gameId === "2") {
      putData.gameTwoStatus = newStatus;
    } else {
      putData.gameThreeStatus = newStatus;
    }


    axios  
      .patch(`http://localhost:8000/api/player/${idFromBelow}`, putData) 
      .then((response) => {
        console.log(`game${idFromBelow}++++++++++++++`,response.data);
        console.log(`putData++++++++++++++`,putData);
        setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy); 
      })
      .catch((err) => console.log(err.response));
  };



  return (
    <div className="PlayerStatus">
      <SubNav2 gameId={gameId} />
      <h1>Player Status - Game {gameId}</h1>
      <table>
        <thead>
          <tr>
           <th>Player Name</th>
           <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* CONDITION RENDER FOR GAMESTATUS === 1 */}
          {gameId === "1" ? (
            playerData.map((player, index) => {
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>
                    <button  
                      className={`${
                        player.gameOneStatus === "Playing" 
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameOneStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameOneStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
          {/* CONDITION RENDER FOR GAMESTATUS === 2 */}
          {gameId === "2" ? (
            playerData.map((player, index) => {
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className={`${
                        player.gameTwoStatus === "Playing"
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameTwoStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameTwoStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
          {/* CONDITION RENDER FOR GAMESTATUS === 3 */}
          {gameId === "3" ? (
            playerData.map((player, index) => {
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>
                    <button
                      className={`${
                        player.gameThreeStatus === "Playing"
                          ? "green-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Playing")
                      }
                    >
                      Playing
                    </button>
                    <button
                      className={`${
                        player.gameThreeStatus === "Not Playing"
                          ? "red-not-playing-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Not Playing")
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      className={`${
                        player.gameThreeStatus === "Undecided"
                          ? "yellow-undecided-btn"
                          : ""
                      }`}
                      onClick={() =>
                        handleChangeGameStatus(player._id, "Undecided")
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

PlayerStatus.propTypes = {};

PlayerStatus.defaultProps = {};

export default PlayerStatus;
