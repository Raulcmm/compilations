import { Box } from '@mui/material'
import React from 'react'
import Headers from '../../global/components/Headers'

const Dashboard = () => {
    return (
        <Box m={"20px"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Headers  title={"DASHBOARD"}  subtitle="Welcome to your dashboard"/>
            </Box>
        </Box>
    )
}

export default Dashboard