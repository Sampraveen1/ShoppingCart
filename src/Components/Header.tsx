import { Facebook, Twitter, Instagram, LinkedIn, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Box, IconButton, Typography, Select, MenuItem, Badge, Grid } from '@mui/material';
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './Header.css';
import CustomSearchBar from '../CustomComponents/CustomSearchBar';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from "@mui/icons-material/Logout";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }


  const handleClick = () => {
    navigate('/layout/shoppingCart');
  };


  return (
    <div >
      <Grid container>
        {/* Top Bar */}
        <AppBar
          position="static"
          sx={{
            background: "white",
            color: "black",
            boxShadow: "none",
            borderBottom: "1px solid #e0e0e0",
            height: { xs: 40, sm: 30 },
          }}
        >
          <Toolbar
            sx={{
              minHeight: "30px !important",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {/* Social Media Icons */}
            <Box sx={{ display: "flex" }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton key={index} size="small">
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Box>

            {/* Announcement */}
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#777",
                flexGrow: { xs: 1, md: 0 },
                fontSize: { xs: "10px", sm: "12px" },
              }}
            >
              FREE SHIPPING THIS WEEK ORDER OVER - $55
            </Typography>

            {/* Currency & Language Select */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Select defaultValue="USD" size="small"
                sx={{
                  fontSize: "0.8rem", // Smaller font size
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Removes border
                }}
              >
                <MenuItem value="USD">USD $</MenuItem>
                <MenuItem value="ENR">ENR $</MenuItem>
              </Select>

              <Select
                defaultValue="EN"
                size="small"
                sx={{
                  fontSize: "0.8rem", // Smaller font size
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Removes border
                }}
              >
                <MenuItem value="EN">ENGLISH</MenuItem>
                <MenuItem value="FR">FRENCH</MenuItem>
              </Select>

              <IconButton sx={{ color: "Dark" }} onClick={handleLogout} size='small' >
                <LogoutIcon sx={{ fontSize: "1.3rem" }} />
              </IconButton>

            </Box>


          </Toolbar>
        </AppBar>

        {/* Main Header */}
        <AppBar position="static" sx={{ background: "white", color: "black", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
            {/* Logo */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "28px", sm: "32px", md: "40px" },
                fontFamily: "Poppins",
                color: "#212121",
                letterSpacing: "1px",
                textTransform: "none",
                flexShrink: 0,
              }}
            >
              Anon
            </Typography>

            {/* Search Bar */}
            <Box sx={{ flexGrow: 1, mx: 2, display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
              <CustomSearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </Box>

            {/* Icons */}
            <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
              <IconButton onClick={() => navigate("/layout/mainPage")}>
                <HomeIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <Badge badgeContent={2} color="error" onClick={() => navigate("/layout/like-page")}>
                  <FavoriteBorder />
                </Badge>
              </IconButton>
              <IconButton onClick={handleClick}>
                <Badge badgeContent={2} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>




    </div>
  )
}

export default Header;

