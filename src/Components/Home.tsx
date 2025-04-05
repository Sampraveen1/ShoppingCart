import { Box, Grid, Typography, Button, AppBar, Toolbar, MobileStepper, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';

import './Home.css';
import CustomCard from '../CustomComponents/CustomCard';
import { useNavigate } from 'react-router-dom';
import men from '../assets/men.jpeg';
import women from '../assets/women.png';
import Kids from '../assets/kid.png';
import HomeImage from '../assets/home.avif';
import FemaleImage from '../assets/female-logo.jpg';
import kidImage from '../assets/k.jpeg';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';





const pageCategories = {
    Mens: {
        items: ["Shirt", "Trowser", "Pants", "T-shirt", "Cap"],
        image: men
    },
    Womens: {
        items: ["Shirt", "Trowser", "Pants", "T-shirt", "Cap"],
        image: women
    },
    Kids: {
        items: ["Shirt", "Trowser", "Pants", "T-shirt", "Cap"],
        image: Kids  // Add image inside the Kids category
    }
};

const categories = [
    { title: 'DRESS & FROCK', count: 53, icon: '👗' },
    { title: 'WINTER WEAR', count: 58, icon: '🧥' },
    { title: 'GLASSES & LENS', count: 68, icon: '🕶️' },
    { title: 'SHORTS & JEANS', count: 84, icon: '👖' }
];

const navItems = [
    { label: "HOME", path: "/layout/mainPage" },
    { label: "CATEGORIES", path: "#" },
    { label: "MEN'S", path: "/layout/man" },
    { label: "WOMEN'S", path: "/layout/women" },
    { label: "KIDS", path: "/layout/kids" },
    { label: "GLASSESS", path: "/layout/glassess" }
];

const images = [
    { title: HomeImage, heading: 'Trending Item', text: 'WOMEN LATEST FASHION SALES', rate: '20.00' },
    { title: FemaleImage, heading: 'Trending Accessories', text: 'MODERN SUNGLASSES', rate: '15.00' },
    { title: kidImage, heading: 'Sale Offer', text: 'NEW FASHION SUMMER SALE', rate: '29.99' }
];



const Home = () => {

    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
    const handleBack = () => setActiveStep((prevStep) => prevStep - 1);
    const [showCategories, setShowCategories] = useState(false);



    return (
        <div style={{ paddingLeft: "50px", paddingRight: "50px",marginTop:'60px' }}>
            <Box sx={{ position: "relative" }} onMouseLeave={() => setShowCategories(false)}>
          
                <AppBar position="static" sx={{ background: "white", color: "black", boxShadow: "none" }}>
                    <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
                        {navItems.map((item, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                onClick={() => navigate(item.path)}
                                onMouseEnter={() => item.label === "CATEGORIES" && setShowCategories(true)}
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    color: "#000",
                                    cursor: "pointer",
                                    "&:hover": { color: "#1976D2", textDecoration: "underline" },
                                }}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Toolbar>
                </AppBar>

                {/* Dropdown Menu (Visible on Hover) */}
                {showCategories && (
                    <Box sx={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
                        <Paper
                            elevation={3}
                            sx={{
                                width: 600,
                                border: "1px solid #ddd",
                                padding: 2,
                                display: "flex",
                                justifyContent: "space-between",
                                px: 8,
                                background: "white",
                            }}
                        >
                            {Object.entries(pageCategories).map(([category, { items }]) => (
                                <Box key={category} sx={{ position: "relative" }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ borderBottom: "1px solid #ddd" }} gutterBottom>
                                        {category}
                                    </Typography>

                                    <List disablePadding>
                                        {items.map((item, index) => (
                                            <ListItem key={index} sx={{ paddingY: 0 }}>
                                                <ListItemText primary={item} sx={{ color: "#555", fontSize: "14px" }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </Paper>
                    </Box>
                )}
            </Box>

            <Box sx={{ Width: '20px', margin: 'auto', position: 'relative' }}>
                <SwipeableViews
                    index={activeStep}
                    onChangeIndex={setActiveStep}
                    enableMouseEvents
                >
                    {images.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                height: { sm: '400px' }, // Responsive height
                                backgroundImage: `url(${item.title})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'contain',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: 2,
                                overflow: 'hidden'
                            }}
                        >
                            {/* Overlay for readability */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Darker overlay
                                }}
                            />

                            {/* Text Content */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '30%',
                                    left: '70%',
                                    transform: 'translateX(-50%)',
                                    color: '#fff',
                                    textAlign: 'center',
                                    zIndex: 1
                                }}
                            >
                                <Typography variant="h5" fontWeight="bold" sx={{ color: '#FF7F7F' }}>
                                    {item.heading}
                                </Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ color: 'black' }}>{item.text}</Typography>
                                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: 'grey' }}>
                                    starting at ${item.rate}
                                </Typography>
                                <Button variant='contained' sx={{ color: 'white', background: 'red', mt: 2 }}>
                                    Shop Now
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </SwipeableViews>

                {/* Stepper for Navigation */}
                <MobileStepper
                    steps={images.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ backgroundColor: 'transparent' }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === images.length - 1}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </Box>

            {/* Collection */}
            <Grid container sx={{ justifyContent: 'space-between' }}>
                {categories.map((category, index) => (
                    <Grid item key={index}>
                        <CustomCard
                            icon={category.icon}
                            title={category.title}
                            count={category.count}
                        />
                    </Grid>
                ))}
            </Grid>


       
        </div>
    )
}

export default Home;