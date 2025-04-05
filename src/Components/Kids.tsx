import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import NewProduct from '../CustomComponents/NewProduct';
import k1 from '../assets/k1.jpeg';
import k2 from '../assets/k2.jpeg';
import k3 from '../assets/k3.jpeg';
import k4 from '../assets/k4.jpeg';
import k5 from '../assets/k5.jpeg';
import k6 from '../assets/k6.jpeg';
import k7 from '../assets/k7.jpeg';
import k8 from '../assets/k8.jpeg';
import k9 from '../assets/k9.jpeg';
import k10 from '../assets/k10.jpeg';
import k11 from '../assets/k11.jpeg';
import k12 from '../assets/k12.jpeg';
import k13 from '../assets/k13.jpeg';
import k14 from '../assets/k14.jpeg';
import k15 from '../assets/k15.jpeg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const kidsCollection = [
    { id: 1, icons: k1, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 48.00, delete: 75.00 },
    { id: 2, icons: k2, name: 'SHIRT', text: 'Pure Garment Dyed Cotton Shirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 45.00, delete: 56.00 },
    { id: 3, icons: k3, name: 'JACKET', text: 'Mens Yarn Fleece Full-Zip Jacket Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 65.00 },
    { id: 4, icons: k4, name: 'SKIRT', text: 'Black Floral Wrap Midi Skirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 25.00, delete: 35.00 },
    { id: 5, icons: k5, name: 'CASUAL', text: 'Casual Mens Browns Shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 99.00, delete: 105.00 },
    { id: 6, icons: k6, name: 'WATCHES', text: 'Pocket Watch Leather Pouch Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 150.00, delete: 170.00 },
    { id: 7, icons: k7, name: 'WATCHES', text: 'Smart Watches Vital Plus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 100.00, delete: 120.00 },
    { id: 8, icons: k8, name: 'PARTY WEAR', text: 'Womens Party Wear Shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 25.00, delete: 30.00 },
    { id: 9, icons: k9, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 48.00, delete: 75.00 },
    { id: 10, icons: k10, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 64.00 },
    { id: 11, icons: k11, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 12, icons: k12, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 13, icons: k13, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 58.00, delete: 64.00 },
    { id: 14, icons: k14, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 15, icons: k15, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
    { id: 16, icons: k15, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure harum quo!', rate: 50.00, delete: 65.00 },
]


const navItems = [
    { label: "HOME", path: "/layout/mainPage" },
    { label: "MEN'S", path: "/layout/man" },
    { label: "WOMEN'S", path: "/layout/women" },
    { label: "KIDS", path: "/layout/kids" },
    { label: "GLASSESS", path: "/layout/glassess" },
];




const Kids = () => {


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
                {kidsCollection.map((item, index) => (
                    <NewProduct key={index} image={item.icons} title={item.name} text={item.text} rate={item.rate} del={item.delete} />
                ))}
            </Grid>
       
        </div >
    )
}

export default Kids;