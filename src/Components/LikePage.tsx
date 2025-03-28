import { Favorite } from '@mui/icons-material';
import { Card, CardMedia, CardContent, Typography, Rating, Box, IconButton, Grid, AppBar, Toolbar, Button } from '@mui/material';
import { useCart } from '../storage/CartProvider';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    const location = useLocation();
    const navigate = useNavigate();
    const { image, title, text, rate, del } = location.state || {};
    const { cart } = useCart();
    const [showConfetti, setShowConfetti] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const [liked, setLiked] = useState(false);
    const { addToCart } = useCart();

    const handleFavoriteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        addToCart({ image, title, text, rate, del });
        setLiked(!liked); // Toggle favorite state

        if (!liked) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 1500); // Hide confetti after 1.5 seconds
        }
    };

    const handleClick = () => {
        navigate('/layout/product-details', { state: { image, title, text, rate, del } });
    };


    return (
        <Grid  spacing={2}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                {/* Navigation Buttons */}
                <Grid item >
                    <Button sx={{ color: "black", marginRight: "-10px" }} onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} />
                    <Button sx={{ color: "black", marginLeft: "-10px" }} onClick={() => navigate(1)} startIcon={<ArrowForwardIcon />} />
                </Grid>

                {/* Navigation Bar */}
                <Grid item xs sx={{ flexGrow: 1 }}>
                    <AppBar
                        position="static"
                        sx={{ background: "white", color: "black", boxShadow: "none" }}
                    >
                        <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
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

            {/* Title */}
            <Grid item xs={12} sx={{ textAlign: "center", my: 2}}>
                <Typography variant="h5" fontWeight="500">
                    Recently Liked Items
                </Typography>
            </Grid>

            {/* Cart Items */}
            {cart.length === 0 ? (
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography>Your cart is empty</Typography>
                </Grid>
            ) : (
                <Grid container gap={3} sx={{ display: "flex", p: 5, justifyContent: "center" }}>
                    {cart.map((item:any, index:any) => (
                        <NewProduct
                            key={index}
                            image={item.image}
                            title={item.name}
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

