import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ListPlayers from "./views/ListPlayers/ListPlayers";
import AddPlayer from "./views/AddPlayer/AddPlayer";
import PlayerStatus from "./views/PlayerStatus/PlayerStatus";
import Nav from "./components/Nav/Nav";
import DetailsPlayer from "./views/DetailsPlayer/DetailsPlayer";
//import 'bootstrap/dist/css/bootstrap.min.css';









function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] =
    useState(false);


  return (
    <div className="App">
       <BrowserRouter>
           <Nav
           managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
           setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
         />
         <Routes>
           <Route path="/" element={<Navigate replace to="/players/list"  />} />  {/* redirection */}
           <Route path="/players/list" element={
              <ListPlayers
              listPageIsActive={listPageIsActive}
              setListPageIsActive={setListPageIsActive}
              setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive} />
           } />
           <Route path="/players/addplayer" element={
                <AddPlayer
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
                setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>
           } />
           <Route path="/status/game/:gameId" element={
                  <PlayerStatus
                  setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>
           }/>
           <Route path="/players/:id" element={<DetailsPlayer />}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
