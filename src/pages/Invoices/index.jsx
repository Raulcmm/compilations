import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { tokens } from '../../config/theme'
import { mockDataInvoices } from '../../data/mockData'
import Headers from '../../global/components/Headers'

const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns =[
  {field:"id", headerName:"ID" },
  {field:"name", headerName:"Name", flex:1, cellClassName:"name-column--cell" },
  {field:"email", headerName:"Email", flex:1, cellClassName:"name-column--cell" },
  {field:"cost", headerName:"Cost", flex:1, type:"number",
    headerAlign:"left", align:"left",
    cellClassName:"name-column--cell",
    renderCell:(params)=>(
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    )
  },
  {field:"phone", headerName:"Phone", flex:1},
  {field:"date", headerName:"Date", flex:1}
]

return (
  <Box m={"20px"}>
    <Headers title={"INVOICES"} subtitle={"Invoices"}/>
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
      "& .MuiCheckBox-roow ": {
        color: `${colors.greenAccent[200]} !important`,
      },

      }}
    >
      <DataGrid
        checkboxSelection
        rows={mockDataInvoices}
        columns={ columns}
        components={{Toolbar: GridToolbar}}
        onSelectionModelChange={itm => console.log(itm)}
      />
    </Box>s
  </Box>
)
}

export default Invoices