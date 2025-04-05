import {FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Box, IconButton, Typography,  Badge, Grid, Tooltip, Avatar } from '@mui/material';
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './Header.css';
import CustomSearchBar from '../CustomComponents/CustomSearchBar';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../storage/CartProvider';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const { favorites } = useCart();
  const { cart } = useCart();




  const handleClick = () => {
    navigate('/layout/shoppingCart');
  };


  return (
    <Grid container >

      {/* Main Header */}
      <AppBar
        position="fixed"
        sx={{
          background: "#333",
          color: "white",
          width: '100%',
          height: '60px'
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 }, // Adjust gap on small screens
          }}
        >
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              fontFamily: "Poppins",
              color: "white",
              letterSpacing: "1px",
              textTransform: "none",
              flexShrink: 0,
            }}
          >
            Anon
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              flexGrow: 1,
              mx: 2,
              display: { xs: "none", sm: "flex" }, // Hide search bar on small screens
              justifyContent: "center",
            }}
          >
            <CustomSearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", gap: { xs: 1, sm: 0.5 }, flexShrink: 0 }}>
            <IconButton color='inherit' onClick={() => navigate("/layout/mainPage")}>
              <HomeIcon fontSize="medium" />
            </IconButton>

            <IconButton color='inherit' onClick={() => navigate("/layout/like-page")}>
              <Badge badgeContent={favorites.length} color="error">
                <FavoriteBorder />
              </Badge>
            </IconButton>

            <IconButton color='inherit' onClick={handleClick}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <Tooltip title="Profile">
              <IconButton>
                <Avatar sx={{height:'30px',width:'30px'}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid >

  )
}

export default Header;

