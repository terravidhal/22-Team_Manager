import React from 'react';
import PropTypes from 'prop-types';
import './PopupDelete.css';
import Overlay from '../Overlay/Overlay';



const PopupDelete = (props) => {
   const { playerObj, handleDeletePlayer, setShowPopup} = props;

   const cancelDelete = () =>{
     setShowPopup(false);
   }
   
   const validDelete = () =>{
    handleDeletePlayer(playerObj._id);
    setShowPopup(false);
   }

   

  return(
    <>
    <Overlay />
    <div className="PopupDelete">
    <div className="title">Warning!!</div>
    <div className="message_confirm">
       Are you sure you want to remove "{playerObj.name}"
    </div>
    <div className="btn_del_confirm">
      <button className='bt_confirm' onClick={() => validDelete()}>Ok</button>
      <button className='bt_delete' onClick={() => cancelDelete()}>Cancel</button>
    </div>
    </div>
    </>
  );
};

PopupDelete.propTypes = {};

PopupDelete.defaultProps = {};

export default PopupDelete;
