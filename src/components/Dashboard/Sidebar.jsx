import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import navbarLogo from '../../assets/main-logo.png'
import dashboardRoutes from '../Routes/DashboardRoutes';
import { IoClose } from "react-icons/io5";

const Sidebar = ( { isOpen, closeSidebar }) => {

    const navigate = useNavigate()

    return (
        <div>
            <div className={`${styles.sidebar_container} ${isOpen ? styles.active : ''}`}>
                <div className={styles.sidebar_top_section}>
                    <span></span>
                    <button onClick={closeSidebar}><IoClose /></button>
                </div>
                <div className={styles.sidebar_options_container}>
                    <div className={styles.navbar_logo}>
                        <img src={navbarLogo} alt="" />
                    </div>
                    {dashboardRoutes.map(({ path, name }) => (
                        <div className={styles.sidebar_option_wrapper} key={path} onClick={() => navigate(`/${path}`)}>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar