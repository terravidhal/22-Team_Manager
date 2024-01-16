import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SubNav1.css';
import { Link } from "react-router-dom";






const SubNav1 = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  const [listTabStyle, setListTabStyle] = useState({});
  const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});

  
  const styleObjBold = {
    fontWeight: "800",
  };

  useEffect(() => {
    if (listPageIsActive) {
      setListTabStyle(styleObjBold);
      setAddPlayerTabStyle({});
    } else {
      setListTabStyle({});
      setAddPlayerTabStyle(styleObjBold);
    }
  }, [listPageIsActive]);

  
  return (
    <div className="SubNav1">
      <span style={{ ...listTabStyle }} className="sub-nav-text">
        <Link to="/players/list">List | </Link>
      </span>
      <span style={{ ...addPlayerTabStyle }} className="sub-nav-text">
        <Link to="/players/addplayer">Add Player</Link>
      </span>
    </div>
  );
};




SubNav1.propTypes = {};

SubNav1.defaultProps = {};

export default SubNav1;
