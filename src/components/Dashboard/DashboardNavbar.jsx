import React, { useState } from 'react'
import styles from '../Dashboard/DashboardNavbar.module.css'
// import navbarLogo from '../../assets/images/landing-page/main-logo.png'
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';

const DashboardNavbar = ({ toggleSidebar }) => {

    const navigate = useNavigate()

    const [isUserOptionVisible, setUserOptionVisible] = useState(false);

    const toggleDropdown = () => {
        setUserOptionVisible(!isUserOptionVisible);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("userData")
        navigate('/')
        setUserOptionVisible(false);

    }

    return (
        <div className={`${styles.navbar_container}`}>
            <div className={styles.navbar_logo}>
                <button className={`${styles.hamburger_btn}`} onClick={toggleSidebar} >
                    <HiMiniBars3BottomLeft />
                </button>
                {/* <p>asd</p> */}
            </div>

            <div className={styles.action_section}>

                <div className={styles.profile_btn} onClick={toggleDropdown}>
                    <FaUser />
                </div>

                {isUserOptionVisible && (
                    <>
                        <ul className={styles.admin_dropdown_content} onClick={handleLogout}>
                            <li>Logout</li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}

export default DashboardNavbar