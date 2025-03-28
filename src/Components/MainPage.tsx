
import { Grid } from '@mui/material';
import Product from './Product';
import Home from './Home';


const MainPage = () => {
    return (
        <div>
            <Grid container >
                <Grid item >
                    <Home />
                    <Product />
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage;