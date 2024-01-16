import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './AddPlayer.css';
import { useNavigate } from "react-router-dom";
import SubNav1 from '../../components/SubNav1/SubNav1';
import axios from 'axios';




const AddPlayer = (props) => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  const {
    listPageIsActive,
    setListPageIsActive,
    setManagePlayerStatusTabIsActive,
  } = props;
  const [errors, setErrors] = useState({});
  const [activeButton, setActiveButton] = useState(false);


  useEffect(() => {
    setListPageIsActive(false);
    setManagePlayerStatusTabIsActive(false);
  });


  const submitHandler = (e) => { 
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/player", { name, preferredPosition })
      .then((response) => {
        console.log(response.data);
        navigate("/players/list");
      })
      .catch(err=>{
        //console.log("err//////", err)
        const errorResponse = err.response.data.errors; 
        // Set Errors
        setErrors(errorResponse);
      }) 
  };


  const handleNameErrors = (e) =>{ 
    setName(e.target.value);
    if (e.target.value.length < 2) {
       setErrors({name:{ message: "Player Name must be at least 2 characters" }});
       setActiveButton(false);
    } 
    else {
       setErrors({name:{ message: "" }});
       setActiveButton(true);
    }
  }



  return (
    <div className="AddPlayer">
      <SubNav1
        listPageIsActive={listPageIsActive}
        setListPageIsActive={setListPageIsActive}
      />
      <form onSubmit={(e) => submitHandler(e)}>
        <div className='field'>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            onChange={(e) => handleNameErrors(e)}
            value={name}
          />
          { errors.name ? 
              <p style={{color:"red"}}>{errors.name.message}</p>
              : null
          }
        </div>
        <div className='field'>
          <label htmlFor="preferredPosition">Preferred Position : </label>
          <input
            type="text"
            id="preferredPosition"
            value={preferredPosition}
            onChange={(e) => setPreferredPosition(e.target.value)}
          />
        </div>
        <div className="btn_psubmit_player">
          <button disabled={ activeButton === false ? true : false} className={activeButton === false ? "btn-disabled": "btn-actived"} type="submit">
            Add
          </button>
        </div>

      </form>
    </div>
  );
};










AddPlayer.propTypes = {};

AddPlayer.defaultProps = {};

export default AddPlayer;
