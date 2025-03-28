import {  Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {


    return (
            <Grid container>
                <Grid item xs={12} >
                    <Header />
                </Grid>
                <Grid item xs={12} >
                   <Outlet/>
                </Grid>
                <Grid item xs={12} >
                    <Footer />
                </Grid>
            </Grid>
    );
}

export default MainLayout;