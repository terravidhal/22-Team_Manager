import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import {Link} from 'react-router-dom'





const Nav = (props) => {
  const { managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive } =
    props;

  const [managePlayerTabStyle, setManagePlayerTabStyle] = useState({});
  const [managePlayerStatusTabStyle, setManagePlayerStatusTabStyle] = useState(
    {}
  );
  
  const styleObjBold = {
    fontWeight: "800",
  };

  useEffect(() => {
    if (managePlayerStatusTabIsActive) {
      setManagePlayerStatusTabStyle(styleObjBold);
      setManagePlayerTabStyle({});
    } else {
      setManagePlayerStatusTabStyle({});
      setManagePlayerTabStyle(styleObjBold);
    }
  }, [managePlayerStatusTabIsActive]);

  
  return (
    <div className="Nav">
      <span style={managePlayerTabStyle} className="global-nav-text">
        <Link to="/players/list">Manage Players | </Link>
      </span>
      <span className="global-nav-text" style={managePlayerStatusTabStyle}>
        <Link to="/status/game/1">Manage Player Status</Link>
      </span>
    </div>
  );
};


Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
