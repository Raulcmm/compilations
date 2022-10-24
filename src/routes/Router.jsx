import { CssBaseline, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorModeContext, useMode } from '../config/theme'
import { DashboardLayout } from '../global/layouts'
import { Bar, Calendar, Contacts, Dashboard, Faq, Form, Geography, Invoices, Line, Pie, Team } from '../pages'

export const ROUTES = createBrowserRouter( [
    {
        path:'/',
        element:<DashboardLayout/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/contacts',
                element:<Contacts/>
            },
            {
                path:'/invoices',
                element:<Invoices/>
            },
            {
                path:'/form',
                element:<Form/>
            },
            {
                path:'/bar',
                element:<Bar/>
            },
            {
                path:'/pie',
                element:<Pie/>
            },
            {
                path:'/line',
                element:<Line/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/geography',
                element:<Geography/>
            },
            {
                path:'/calendar',
                element:<Calendar/>
            },
        ]
    }
])


const Router = () => {
    const [theme,colorMode]=useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={ROUTES}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Router