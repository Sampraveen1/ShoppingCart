import { Grid, Card, CardMedia, CardContent, Stack, Typography, Box, IconButton, Button, ButtonGroup } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useCart } from '../storage/CartProvider';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const CustomShoppingCart = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const { image, title, text, rate, del } = location.state || {};
    // const { cart, removeFromCart } = useCart();


    // const [quantity, setQuantity] = useState(0);

    // const increaseQuantity = () => setQuantity((prev) => prev + 1);
    // const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const { cart, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({}); // Track each item's quantity by id

    const increaseQuantity = (id: number) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decreaseQuantity = (id: number) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    };
      


    return (
        <div>
            <Box sx={{ width: '80%', borderBottom: '2px solid #ddd', marginTop: '60px', position: 'relative', top: 20, left: 50 }}>
                <Typography variant='h5' fontWeight='600'>
                    Shopping Cart
                </Typography>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",  // ✅ Moves second Grid to the right
                    alignItems: "start",  // ✅ Aligns both at the top
                    paddingTop: 5,

                }}
            >
                {/* 🛒 Left Side: Cart Items */}
                <Grid container justifyContent="center" alignItems="center">
                    {cart.length === 0 ? (
                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Typography variant="h6" color="textSecondary" textAlign="center">
                                Your cart is empty
                            </Typography>
                        </Grid>
                    ) : (
                        cart.map((item:any) => (
                            <Grid item xs={12} display="flex" justifyContent="center" key={item.id}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            gap: 2,
                                            width: "80%",
                                            p: 2,
                                            boxShadow: 1,
                                            alignItems: "center",
                                            position: "relative",
                                            height: "170px"
                                        }}
                                    >
                                        {/* Product Image */}
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{ width: 100, height: 100, objectFit: "contain", borderRadius: 2 }}
                                        />

                                        {/* Product Details */}
                                        <CardContent sx={{ flex: 1, padding: "8px" }}>
                                            <Stack spacing={1}>
                                                <Typography variant="h6" fontWeight="bold" sx={{ borderBottom: "1px solid #ddd", fontSize: "14px" }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
                                                    {item.text}
                                                </Typography>
                                                <Typography variant="h6" color="error" fontWeight="bold" sx={{ fontSize: "14px" }}>
                                                    ₹{item.rate} <del style={{ color: "black", fontSize: "12px" }}>₹{item.del}</del>
                                                </Typography>

                                                {/* Quantity Selector */}
                                                <ButtonGroup size="small" sx={{ alignSelf: "start" }}>
                                                    <Button onClick={() => decreaseQuantity(item.id)} sx={{ minWidth: "20px", fontSize: "16px" }}>-</Button>
                                                    <Typography variant="body1" sx={{ minWidth: "30px", textAlign: "center", lineHeight: "32px" }}>
                                                        {quantity[item.id] || 1}
                                                    </Typography>
                                                    <Button onClick={() => increaseQuantity(item.id)} sx={{ minWidth: "20px", fontSize: "16px" }}>+</Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </CardContent>

                                        {/* Remove Item Button */}
                                        <IconButton sx={{ padding: "4px" }} onClick={() => removeFromCart(item.id)}>
                                            <CloseIcon sx={{ color: "grey" }} />
                                        </IconButton>
                                    </Card>
                                
                            </Grid>
                        ))
                    )}
                </Grid>




            </Grid>


        </div>
    )
}

export default CustomShoppingCart;