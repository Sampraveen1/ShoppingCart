import { Share, Favorite, ShoppingCart } from '@mui/icons-material';
import { Card, CardMedia, CardContent, Typography, Rating, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../storage/CartProvider';
import ConfettiExplosion from 'react-confetti-explosion';

interface NewProductProps {
    image: string;
    title: string;
    text: string;
    rate: number;
    del: number;
}

const NewProduct: React.FC<NewProductProps> = ({ image, title, text, rate, del }) => {
    // const [showIcons, setShowIcons] = useState(true);
    const [liked, setLiked] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleFavorite } = useCart();
    // const [favorites, setFavorites] = useState([]);


    const handleFavoriteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setLiked(!liked); // Toggle favorite state
        toggleFavorite({ image, title, text, rate, del });

        if (!liked) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 1500); // Hide confetti after 1.5 seconds
        }
    };


    const handleShoppingCart = (event: React.MouseEvent) => {
        event.stopPropagation();  // Prevent card click
        addToCart({ image, title, text, rate, del });
    };


    const handleShareClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    const handleClick = () => {
        navigate('/layout/product-details', { state: { image, title, text, rate, del } });
    };

    return (
        <Card
            sx={{ maxWidth: 270, borderRadius: 3, boxShadow: 2, p: 1, position: "relative", cursor: "pointer", transition: "box-shadow 0.3s ease-in-out", "&:hover": { boxShadow: 5, } }}
            onClick={handleClick}
            
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width: '100%',
                    height: 180,
                    objectFit: 'contain',
                    background: 'liteGrey',
                    transition: 'transform 0.3s ease-in-out',
                    "&:hover": {
                        transform: "scale(1.2)",
                        cursor: 'pointer'
                    }
                }}
            />
            
                <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 8, flexDirection: 'column' }}>
                    <div style={{ position: "relative" }}>
                        {showConfetti && (
                            <div style={{ position: "absolute", left: "5px", top: "-10px" }}>
                                <ConfettiExplosion
                                    force={0.3}
                                    duration={1200}
                                    particleCount={15}
                                    width={200}
                                />
                            </div>
                        )}
                        <IconButton
                            size="small"
                            sx={{ bgcolor: "transparent", ":hover": { bgcolor: "grey.200" } }}
                            onClick={handleFavoriteClick}
                        >
                            <Favorite sx={{ color: liked ? "red" : "inherit" }} />
                        </IconButton>
                    </div>

                    <IconButton
                        size="small"
                        sx={{ bgcolor: "transparent", ":hover": { bgcolor: "grey.200" } }}
                        onClick={handleShoppingCart}
                    >
                        <ShoppingCart />
                    </IconButton>

                    <IconButton
                        size="small"
                        sx={{ bgcolor: "transparent", ":hover": { bgcolor: "grey.200" } }}
                        onClick={handleShareClick}
                    >
                        <Share />
                    </IconButton>
                </div>
           







            <CardContent>
                <Typography variant="body2" color="error" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5, fontSize: "0.9rem" }}>
                    {text}
                </Typography>
                <Rating value={3} precision={0.5} readOnly size="small" sx={{ my: 0.5 }} />
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "0.9rem" }}>
                        ${rate}
                    </Typography>
                    <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray", fontSize: "0.8rem" }}>
                        ${del}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewProduct;
