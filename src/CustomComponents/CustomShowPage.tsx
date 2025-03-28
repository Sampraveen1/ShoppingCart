import { Card, CardMedia, CardContent, Typography, Stack, Grid, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../storage/CartProvider';



const CustomShowPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image, title, text, rate, del } = location.state || {};
    const { addToCart } = useCart();

    const handleClick = () => {
        addToCart({ image, title, text, rate, del });
    };


    return (
        <div>
            <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Card
                    sx={{
                        display: "flex",
                        gap: 5,
                        maxWidth: '60%',
                        p: 5,
                        boxShadow: 'none',
                        border: '2px solid #ddd',
                        alignItems: 'center',
                        position: "relative" // Ensures the CloseIcon is positioned within the card
                    }}
                >
                    {/* Close Icon */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            cursor: "pointer",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                            boxShadow: 'none',
                            color: 'black'
                        }}
                        onClick={() => navigate(-1)}
                    >
                        <CloseIcon />
                    </Box>

                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{ width: 300, height: 300, objectFit: "contain", borderRadius: 2 }}
                    />

                    <CardContent sx={{ flex: 1 }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" fontWeight="bold" sx={{ borderBottom: '1px solid #ddd' }}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {text}
                            </Typography>
                            <Typography variant="h6" color="error" fontWeight="bold">
                                ₹{rate} <del style={{ color: "gray", fontSize: "14px" }}> ₹{del} </del>
                            </Typography>

                            <Grid container display="flex" alignItems="center">
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#FFA500",
                                            color: "white",
                                            fontWeight: "bold",
                                            textTransform: "uppercase",
                                            "&:hover": { backgroundColor: "#e69500" },
                                        }}
                                        startIcon={<ShoppingCartIcon />}
                                        onClick={handleClick}
                                    >
                                        Add to Cart
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#FF6600",
                                            color: "white",
                                            fontWeight: "bold",
                                            textTransform: "uppercase",
                                            "&:hover": { backgroundColor: "#e65c00" },
                                        }}
                                        startIcon={<FlashOnIcon />}
                                    >
                                        Buy Now
                                    </Button>
                                </Stack>
                            </Grid>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </div>

    );
};

export default CustomShowPage;
