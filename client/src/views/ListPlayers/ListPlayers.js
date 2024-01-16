import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ListPlayers.css';
import SubNav1 from '../../components/SubNav1/SubNav1';
import axios from 'axios';
import PopupDelete from '../../components/PopupDelete/PopupDelete';
import { Link } from 'react-router-dom';





const ListPlayers = (props) => {
  const [playerData, setPlayerData] = useState([]);
  const {
    listPageIsActive,
    setListPageIsActive,
    setManagePlayerStatusTabIsActive,
  } = props;

  const [showPopup, setShowPopup] = useState(false);
  const [playerObj, setPlayerObj] = useState("");


  useEffect(() => {
    setListPageIsActive(true);
    setManagePlayerStatusTabIsActive(false);
  });



  useEffect(() => {
    axios
      .get("http://localhost:8000/api/player")
      .then((response) => {
        console.log(response.data);
        setPlayerData(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []); 



   const showPopupDelete = (obj) =>{
     setShowPopup(true);
     setPlayerObj(obj);
   }



  const handleDeletePlayer = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/player/${idFromBelow}`)
      .then((response) => {
       // console.log(response.data);
        const newList = playerData.filter(
          (player, index) => player._id !== idFromBelow
        ); 
        setPlayerData(newList); 
      })
      .catch((err) => console.log(err.response));
  };



  return (
    <div className="ListPlayers">
      {
        showPopup === true ?
        <PopupDelete playerObj={playerObj} 
        handleDeletePlayer={handleDeletePlayer}
        setShowPopup={setShowPopup} />
        : null
      }
      <SubNav1
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
      />
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player, index) => {
            return (
              <tr key={index}>
                <td className='player_name'>{player.name}</td>
                <td className='player_position'>{player.preferredPosition}</td>
                <td>
                  <button
                    onClick={() => showPopupDelete(player)}
                    className="btn btn-danger red-not-playing-btn"
                  >
                    DELETE
                  </button>
                </td>
                <td className='player_status'>
                   <Link to={`/players/${player._id}`}>
                    status
                   </Link>
                   </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};





ListPlayers.propTypes = {};

ListPlayers.defaultProps = {};

export default ListPlayers;
