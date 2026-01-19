import React, { useState } from 'react'
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import styles from "../Dashboard/DashboardHome.module.css";
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const DashboardHome = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <div className={styles.main_wrapper}>
                <div className={styles.dashboard_header}>
                    <DashboardNavbar toggleSidebar={toggleSidebar} />
                    {/* <AdminBreadcrumb routes={adminRoutes} /> */}
                </div>
                <div className={styles.dashboard_content_wrapper}>
                    <DashboardContent />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome