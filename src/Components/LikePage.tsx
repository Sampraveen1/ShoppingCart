import { Typography, Grid, AppBar, Toolbar, Button } from '@mui/material';
import { useCart } from '../storage/CartProvider';
import { useNavigate } from 'react-router-dom';
import NewProduct from '../CustomComponents/NewProduct';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const navItems = [
    { label: "HOME", path: "/layout/mainPage" },
    { label: "MEN'S", path: "/layout/man" },
    { label: "WOMEN'S", path: "/layout/women" },
    { label: "KIDS", path: "/layout/kids" },
    { label: "GLASSESS", path: "/layout/glassess" },
];

const LikePage = () => {
    const navigate = useNavigate();
    const { favorites } = useCart();

    return (
        <Grid spacing={2} sx={{ marginTop: '60px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Button sx={{ color: "black", marginRight: "-10px" }} onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} />
                    <Button sx={{ color: "black", marginLeft: "-10px" }} onClick={() => navigate(1)} startIcon={<ArrowForwardIcon />} />
                </Grid>

                <Grid item xs sx={{ flexGrow: 1 }}>
                    <AppBar
                        position="static"
                        sx={{ background: "white", color: "black", boxShadow: "none" }}
                    >
                        <Toolbar
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 4
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        color: "#000",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#1976D2",
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center", my: 2 }}>
                <Typography variant="h5" fontWeight="500">
                    Recently Liked Items
                </Typography>
            </Grid>

            {favorites.length === 0 ? (
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography>No favorites yet</Typography>
                </Grid>
            ) : (
                <Grid container gap={3} sx={{ display: "flex", p: 5, justifyContent: "center" }}>
                    {favorites.map((item: any, index: number) => (
                        <NewProduct
                            key={index}
                            image={item.image}
                            title={item.title}
                            text={item.text}
                            rate={item.rate}
                            del={item.del}
                        />
                    ))}
                </Grid>
            )}
        </Grid>
    );
};

export default LikePage;
