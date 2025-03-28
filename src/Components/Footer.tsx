import { Box, Container, Typography, Grid } from '@mui/material';
import logo1 from '../assets/logo1.png';
import './Footer.css';
import { LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <div>

      <Box sx={{ bgcolor: "#212121", color: "#fff", py: 5, fontSize: "14px", mt: 5 }}>
        {/* Brand Directory */}
        <Container>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ff8f9c", mb: 2 }}>
            BRAND DIRECTORY
          </Typography>
          <Grid container spacing={2}>
            {[
              { title: "FASHION", items: ["T-Shirt", "Shirts", "Shorts & Jeans", "Jacket", "Dress & Frock", "Innerwear", "Hosiery"] },
              { title: "FOOTWEAR", items: ["Sport", "Formal", "Boots", "Casual", "Cowboy Shoes", "Branded", "Long Shoes"] },
              { title: "JEWELLERY", items: ["Necklace", "Earrings", "Couple Rings", "Bracelets", "Nosepin", "Chain"] },
              { title: "COSMETICS", items: ["Shampoo", "Bodywash", "Facewash", "Makeup Kit", "Lipstick", "Perfume"] },
            ].map((category, index) => (
              <Grid item xs={12} key={index} sx={{ display: "flex", gap: 2 }}>
                <Typography sx={{ fontWeight: "bold", color: "#ddd" }}>
                  {category.title} :
                </Typography>
                <Typography sx={{ color: "#bbb" }}>{category.items.join(" | ")}</Typography>
              </Grid>
            ))}
          </Grid>



          {/* Footer Sections */}
          <Box sx={{ width: "100%", borderTop: "1px solid #444", mt: 5, pt: 4 }}>
            <Grid container spacing={3} sx={{ gap: 3 }}>
              {[
                { title: "POPULAR ", links: ["Fashion", "Electronic", "Cosmetic", "Health", "Watches"] },
                { title: "PRODUCTS", links: ["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"] },
                { title: "OUR COMPANY", links: ["Delivery", "Legal Notice", "Terms & Conditions", "About Us", "Secure Payment"] },
                { title: "SERVICES", links: ["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"] },
              ].map((section, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                  <Typography sx={{ fontWeight: "bold", borderBottom: "2px solid #ff8f9c", pb: 1, mb: 2 }}>
                    {section.title}
                  </Typography>
                  {section.links.map((link, i) => (
                    <Typography key={i} sx={{ color: "#bbb", mb: 1, cursor: "pointer", "&:hover": { color: "white" } }}>
                      {link}
                    </Typography>
                  ))}
                </Grid>
              ))}

              {/* Contact Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ fontWeight: "bold", borderBottom: "2px solid #ff8f9c", pb: 1, mb: 2 }}>
                  CONTACT
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography sx={{ color: "#bbb", pt: 2 }}>419 State 414,<Box>Beaver Dams, NY, USA</Box></Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone sx={{ mr: 1 }} />
                  <Typography sx={{ color: "#bbb" }}>(607) 936-8058</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email sx={{ mr: 1 }} />
                  <Typography sx={{ color: "#bbb" }}>Example@gmail.com</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </Box>


      <Grid >
        <Box sx={{ bgcolor: "#212121", color: "#bbb", textAlign: "center", py: 3, borderTop: "1px solid #444" }}>
          <Container>
            {/* Payment Icons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
              <img src={logo1} style={{ height: 30, borderRadius: 5, background: "#fff", padding: "5px" }} />
            </Box>

            {/* Copyright Text */}
            <Typography variant="body2">Copyright © Anon All Rights Reserved.</Typography>
          </Container>
        </Box>
      </Grid>

    </div>
  )
}

export default Footer;