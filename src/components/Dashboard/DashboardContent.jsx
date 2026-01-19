import React from 'react'
import dashboardRoutes from '../Routes/DashboardRoutes';
import { Route, Routes } from 'react-router-dom'

const DashboardContent = () => {
    return (
        <div>
            <Routes>
                {dashboardRoutes.map(({ path, index, Component }) => (
                    <Route
                        key={path || index}
                        path={path}
                        index={index}
                        element={
                            <Component />
                        }
                    />
                ))}
            </Routes>
        </div>
    )
}

export default DashboardContent