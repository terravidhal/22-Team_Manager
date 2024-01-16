import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailsPlayer.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



const DetailsPlayer = (props) => {

  const [onePlayer, setOnePlayer] = useState({})
  const {id} = useParams(); 
 

  useEffect(() => {
      axios.get("http://localhost:8000/api/player/" + id)
          .then( res => {
              setOnePlayer(res.data);
          })
          .catch( err => console.log(err) );
  }, [id]); 
  

  return (
      <div className="DetailsPlayer">
        <h1>Page details :</h1>
        <div className="fields">
            <p><span className='infos'>name:</span> {onePlayer.name}</p>
            <p><span className='infos'>preferredPosition:</span> {!onePlayer.preferredPosition ? "none" : onePlayer.preferredPosition}</p>
            <p><span className='infos'>gameOneStatus:</span> {onePlayer.gameOneStatus}</p>
            <p><span className='infos'>gameTwoStatus:</span> {onePlayer.gameTwoStatus}</p>
            <p><span className='infos'>gameThreeStatus:</span> {onePlayer.gameThreeStatus}</p>
        </div>
        <Link to="/"> 
              Return Home Page! 
        </Link>
      </div>
  );
}



DetailsPlayer.propTypes = {};

DetailsPlayer.defaultProps = {};

export default DetailsPlayer;
