import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { tokens } from '../../config/theme'
import { mockDataContacts } from '../../data/mockData'
import Headers from '../../global/components/Headers'

const Contacts = () => {
	const theme = useTheme()
  	const colors = tokens(theme.palette.mode)

  	const columns =[
		{field:"id", headerName:"ID" },
		{field:"registrarId", headerName:"Registrar ID" },
		{field:"name", headerName:"Name", flex:1, cellClassName:"name-column--cell" },
		{field:"email", headerName:"Email", flex:1, cellClassName:"name-column--cell" },
		{field:"age", headerName:"Age", flex:1, type:"number", headerAlign:"left", align:"left", cellClassName:"name-column--cell" },
		{field:"phone", headerName:"Phone", flex:1},
		{field:"address", headerName:"Address", flex:1},
		{field:"city", headerName:"City", flex:1},
		{field:"zipCode", headerName:"ZipCode", flex:1},
		// {field:"access", headerName:"AccessLevel", flex:1, renderCell:({row:{access}})=>{

		// return(
		// 	<Box
		// 	width={"60%"}
		// 	m={"0 auto"}
		// 	p={"5px"}
		// 	display={"flex"}
		// 	justifyContent={"center"}
		// 	backgroundColor={
		// 		access==="admin"
		// 		? colors.greenAccent[600]
		// 		: colors.greenAccent[700]
		// 	}
		// 	borderRadius={"4px"}
		// 	>
		// 	{/* {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
		// 	{access === "manager" && <SecurityOutlinedIcon />}
		// 	{access === "user" && <LockOpenOutlinedIcon />} */}
		// 	<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
		// 		{access}
		// 	</Typography>

		// 	</Box>
		// )
		// }},
	]
	
	return (
		<Box m={"20px"}>
			<Headers title={"CONTACS"} subtitle={"Manage the Team members"}/>
			<Box
				m={"40px 0 0 0"}
				height={"75vh"}
				sx={{
				"& .MuiDataGrid-root": {
					border: "none",
				},
				"& .MuiDataGrid-cell": {
					borderBottom: "none",
				},
				"& .name-column--cell": {
					color: colors.greenAccent[300],
				},
				"& .MuiDataGrid-columnHeaders": {
					backgroundColor: colors.blueAccent[700],
					borderBottom: "none",
				},
				"& .MuiDataGrid-virtualScroller": {
					backgroundColor: colors.primary[400],
				},
				"& .MuiDataGrid-footerContainer": {
					borderTop: "none",
					backgroundColor: colors.blueAccent[700],
				},
				"& .MuiCheckbox-root": {
					color: `${colors.greenAccent[200]} !important`,
				},
				"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
					color: `${colors.grey[100]} !important`,
				},

				}}
			>
				<DataGrid 
					rows={mockDataContacts}
					columns={ columns}
					components={{Toolbar: GridToolbar}}
				/>
			</Box>s
		</Box>
	)
}

export default Contacts