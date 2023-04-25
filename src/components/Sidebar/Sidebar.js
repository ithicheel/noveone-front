import React from 'react'
import css from "./style.module.css";
import {FaUserAstronaut} from "react-icons/fa";
import {ImBook} from "react-icons/im";
import {IoSpeedometerOutline} from "react-icons/io5";
import {FiSettings} from "react-icons/fi";
import {BiExit} from "react-icons/bi";
function Sidebar(props) {
  return (
    <div>
        <nav className={css.sidebar}>
            <div>
                <h1>NOVEONE</h1>
            </div>
            <ul>
                <li className={props.active === "home" && css.active}>
                    <FaUserAstronaut />
                    <h3>Profile</h3>
                </li>
                <li className={props.active === "novels" && css.active} >
                    <ImBook />
                    <h3>Novels</h3>
                </li>
                <li className={props.active === "analyst" && css.active} >
                    <IoSpeedometerOutline />
                    <h3>Analyst</h3>
                </li>
                <li className={props.active === "settings" && css.active} >
                    <FiSettings />
                    <h3>Settings</h3>
                </li>
                <li className={props.active === "exit" && css.active} >
                    <BiExit />
                    <h3>Exit</h3>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar