import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.png';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';
import g10 from '../assets/g10.jpeg';
import g11 from '../assets/g11.jpeg';
import g12 from '../assets/g12.jpeg';
import g13 from '../assets/g13.jpeg';
import g14 from '../assets/g14.jpeg';
import g15 from '../assets/g15.jpeg';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import NewProduct from '../CustomComponents/NewProduct';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';




const glassesCollection = [
    { id: 1, icons: g1, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 48.00, delete: 75.00 },
    { id: 2, icons: g2, name: 'SHIRT', text: 'Pure Garment Dyed Cotton Shirt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 45.00, delete: 56.00 },
    { id: 3, icons: g3, name: 'JACKET', text: 'Mens Yarn Fleece Full-Zip Jacket Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 58.00, delete: 65.00 },
    { id: 4, icons: g4, name: 'SKIRT', text: 'Black Floral Wrap Midi Skirt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 25.00, delete: 35.00 },
    { id: 5, icons: g5, name: 'CASUAL', text: 'Casual Mens Browns Shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 99.00, delete: 105.00 },
    { id: 6, icons: g6, name: 'WATCHES', text: 'Pocket Watch Leather Pouch Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 150.00, delete: 170.00 },
    { id: 7, icons: g7, name: 'WATCHES', text: 'Smart Watches Vital Plus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 100.00, delete: 120.00 },
    { id: 8, icons: g8, name: 'PARTY WEAR', text: 'Womens Party Wear Shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 25.00, delete: 30.00 },
    { id: 9, icons: g9, name: 'JACKET', text: 'Mens Winter Leathers Jackets Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 48.00, delete: 75.00 },
    { id: 10, icons: g10, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 58.00, delete: 64.00 },
    { id: 11, icons: g11, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 50.00, delete: 65.00 },
    { id: 12, icons: g12, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 50.00, delete: 65.00 },
    { id: 13, icons: g13, name: 'SPORTS', text: 'Trekking & Running Shoes - Black Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 58.00, delete: 64.00 },
    { id: 14, icons: g14, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 50.00, delete: 65.00 },
    { id: 15, icons: g15, name: 'FORMAL', text: 'Mens Leathers Formal Wear shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fuga illo repellat.', rate: 50.00, delete: 65.00 },
]


const navItems = [
    { label: "HOME", path: "/layout/mainPage" },
    
    { label: "MEN'S", path: "/layout/man" },
    { label: "WOMEN'S", path: "/layout/women" },
    { label: "KIDS", path: "/layout/kids" },
    { label: "GLASSESS", path: "/layout/glassess" },
];






const Glassess = () => {

    const navigate = useNavigate();

    return (
        <div>
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
                <Grid item xs sx={{mr:12}}>
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
                {glassesCollection.map((item, index) => (
                    <NewProduct key={index} image={item.icons} title={item.name} text={item.text} rate={item.rate} del={item.delete} />
                ))}
            </Grid>

        </div>
    )
}

export default Glassess;