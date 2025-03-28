import { Grid, Card, CardMedia, CardContent, Stack, Typography, Box, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useCart } from '../storage/CartProvider';
import DeleteIcon from '@mui/icons-material/Delete';


const CustomShoppingCart = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const { image, title, text, rate, del } = location.state || {};
    const { cart, setCart } = useCart();

    const handleRemove = (indexToRemove: number) => {
        setCart((prevCart:any) => {
            const updatedCart = prevCart.filter(( index:any) => index !== indexToRemove);
            console.log("Updated Cart:", updatedCart);
            return [...updatedCart]; // Ensure new reference for state update
        });
    };
    

    return (
        <div>
            <Box sx={{ width: '80%', borderBottom: '2px solid #ddd', pl: 4, pt: 4, ml: 10 }}>
                <Typography variant='h5' fontWeight='600'>
                    Shopping Cart
                </Typography>
            </Box>

            <Grid
                container
                spacing={2}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 30 }}
            >


                {cart.length === 0 ? <p>Your cart is empty</p> : cart.map((item: any, index: any) => (
                    <Grid item xs={8}>
                        <Card
                            sx={{
                                display: "flex",
                                gap: 5,
                                width: '100%',
                                p: 5,
                                boxShadow: 'none',
                                border: "1px solid #ddd",
                                alignItems: 'center',
                                position: "relative"
                            }}
                            key={index}
                        >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{ width: 150, height: 150, objectFit: "contain", borderRadius: 2 }}
                            />

                            <CardContent sx={{ flex: 1 }}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ borderBottom: '1px solid #ddd' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.text}
                                    </Typography>
                                    <Typography variant="h6" color="error" fontWeight="bold">
                                        ₹{item.rate} <del style={{ color: "gray", fontSize: "14px" }}> ₹{item.del} </del>
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <IconButton onClick={() => handleRemove(index)}>
                                <DeleteIcon color='error' />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default CustomShoppingCart;