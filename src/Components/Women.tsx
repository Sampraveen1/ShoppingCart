import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import NewProduct from '../CustomComponents/NewProduct';
import w1 from '../assets/w1.jpeg';
import w2 from '../assets/w2.jpeg';
import w3 from '../assets/w3.jpeg';
import w4 from '../assets/w4.jpeg';
import w5 from '../assets/w5.jpeg';
import w6 from '../assets/w6.jpeg';
import w7 from '../assets/w7.jpeg';
import w8 from '../assets/w8.jpeg';
import w9 from '../assets/w9.jpeg';
import w10 from '../assets/w10.jpeg';
import w11 from '../assets/w11.jpeg';
import w12 from '../assets/w12.jpeg';
import w13 from '../assets/w13.jpeg';
import w14 from '../assets/w14.jpeg';
import w15 from '../assets/w15.jpeg';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





const womenCollection = [
    { id: 1, icons: w1, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 48.00, delete: 75.00 },
    { id: 2, icons: w2, name: 'SHIRT', text: 'Pure Garment Dyed Cotton Shirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 45.00, delete: 56.00 },
    { id: 3, icons: w3, name: 'JACKET', text: 'Mens Yarn Fleece Full-Zip Jacket Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 65.00 },
    { id: 4, icons: w4, name: 'SKIRT', text: 'Black Floral Wrap Midi Skirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 25.00, delete: 35.00 },
    { id: 5, icons: w5, name: 'CASUAL', text: 'Casual Mens Browns Shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 99.00, delete: 105.00 },
    { id: 6, icons: w6, name: 'WATCHES', text: 'Pocket Watch Leather Pouch Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 150.00, delete: 170.00 },
    { id: 7, icons: w7, name: 'WATCHES', text: 'Smart Watches Vital Plus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 100.00, delete: 120.00 },
    { id: 8, icons: w8, name: 'PARTY WEAR', text: 'Womens Party Wear Shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 25.00, delete: 30.00 },
    { id: 9, icons: w9, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 48.00, delete: 75.00 },
    { id: 10, icons: w10, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 64.00 },
    { id: 11, icons: w11, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 12, icons: w12, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 13, icons: w13, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 64.00 },
    { id: 14, icons: w14, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 15, icons: w15, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 16, icons: w15, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
]

const navItems = [
    { label: "HOME", path: "/layout/mainPage" },
    { label: "MEN'S", path: "/layout/man" },
    { label: "WOMEN'S", path: "/layout/women" },
    { label: "KIDS", path: "/layout/kids" },
    { label: "GLASSESS", path: "/layout/glassess" },
];




const Women = () => {

    const navigate = useNavigate();

    return (
        <div style={{marginTop:'60px'}}>
            <Grid
                container
                alignItems="center"  // Align items vertically in the center
                justifyContent="space-between" // Space between buttons & navbar
            // sx={{ padding: "5px 20px" }} // Add padding for better spacing
            >
                {/* Back & Forward Buttons */}
                <Grid item >
                    <Button sx={{ color: "black", marginRight: "-10px" }} onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} />
                    <Button sx={{ color: "black", marginLeft: "-10px" }} onClick={() => navigate(1)} startIcon={<ArrowForwardIcon />} />
                </Grid>

                {/* Centered Navigation Items */}
                <Grid item xs sx={{ mr: 12 }}>
                    <AppBar
                        position="static"
                        sx={{
                            background: "white",
                            color: "black",
                            boxShadow: "none"
                        }}
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
                                            textDecoration: "underline"
                                        }
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Grid container gap={3} sx={{ display: 'flex', p: 5, justifyContent: 'center' }}>
                {womenCollection.map((item, index) => (
                    <NewProduct key={index} image={item.icons} title={item.name} text={item.text} rate={item.rate} del={item.delete} />
                ))}
            </Grid>
        
        </div>
    )
}

export default Women;