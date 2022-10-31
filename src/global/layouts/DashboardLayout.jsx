import { Box } from "@mui/material";

import { Outlet } from 'react-router-dom';
import { Sidebar, TopBar } from '../components';

const DashboardLayout = () => {
    return (
        <div className='app'>
            <Sidebar/>
            <main className='content'>
                <TopBar/>
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout