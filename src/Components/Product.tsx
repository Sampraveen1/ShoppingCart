import { AppBar, Avatar, Box, Button, Card, CardContent, CardMedia, Grid, LinearProgress, Rating,  Typography } from '@mui/material';
// import React from 'react'
import CustomProductCard from '../CustomComponents/CustomProductCard';
import l1 from '../assets/l1.svg';
import l2 from '../assets/l2.svg';
import l3 from '../assets/l3.svg';
import l4 from '../assets/l4.svg';
import l5 from '../assets/l5.svg';
import l6 from '../assets/l6.svg';
import l7 from '../assets/l7.svg';
import shampoo from '../assets/shampoo.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import NewProduct from '../CustomComponents/NewProduct';
import a1 from '../assets/a10.jpg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import a4 from '../assets/a4.jpg';
import a5 from '../assets/a5.jpg';
import a6 from '../assets/a6.jpg';
import a7 from '../assets/a7.jpg';
import a8 from '../assets/a8.jpg';
import a9 from '../assets/a9.jpg';
import a10 from '../assets/a10.jpg';
import a11 from '../assets/a11.jpg';
import a12 from '../assets/a7.jpg';






// const newProduct = [
//   { id:1,icons:a1, name:'JACKET', text:'Mens Winter Leathers Jackets',rate:48.00,delete:75.00},
//   { id:2,icons:a2, name:'SHIRT', text:'Pure Garment Dyed Cotton Shirt',rate:45.00,delete:56.00},
//   { id:3,icons:a3, name:'JACKET', text:'Mens Yarn Fleece Full-Zip Jacket',rate:58.00,delete:65.00},
//   { id:4,icons:a4, name:'SKIRT', text:'Black Floral Wrap Midi Skirt',rate:25.00,delete:35.00},
//   { id:5,icons:a5, name:'CASUAL', text:'Casual Mens Browns Shoes',rate:99.00,delete:105.00},
//   { id:6,icons:a6, name:'WATCHES', text:'Pocket Watch Leather Pouch',rate:150.00,delete:170.00},
//   { id:7,icons:a7, name:'WATCHES', text:'Smart Watches Vital Plus',rate:100.00,delete:120.00},
//   { id:8,icons:a8, name:'PARTY WEAR', text:'Womens Party Wear Shoes',rate:25.00,delete:30.00},
//   { id:9,icons:a9, name:'JACKET', text:'Mens Winter Leathers Jackets',rate:48.00,delete:75.00},
//   { id:10,icons:a10, name:'SPORTS', text:'Trekking & Running Shoes - Black',rate:58.00,delete:64.00},
//   { id:11,icons:a11, name:'FORMAL', text:'Mens Leathers Formal Wear shoes',rate:50.00,delete:65.00},
//   { id:12,icons:a12, name:'FORMAL', text:'Mens Leathers Formal Wear shoes',rate:50.00,delete:65.00},
// ]


const products = [
  {
    id: 1,
    name: "Baby Fabric Shoes",
    image: b1, // Replace with actual image URL
    rating: 5,
    originalPrice: "$5.00",
    discountedPrice: "$4.00",
  },
  {
    id: 2,
    name: "Men's Hoodies T-Shirt",
    image: b2, // Replace with actual image URL
    rating: 4.5,
    originalPrice: "$17.00",
    discountedPrice: "$7.00",
  },
  {
    id: 3,
    name: "Girls T-Shirt",
    image: b3, // Replace with actual image URL
    rating: 5,
    originalPrice: "$5.00",
    discountedPrice: "$3.00",
  },
  {
    id: 4,
    name: "Woolen Hat For Men",
    image: b4, // Replace with actual image URL
    rating: 5,
    originalPrice: "$15.00",
    discountedPrice: "$12.00",
  },
];



const newArrivals = [
  { icon:a1, title: 'Clothes', text: "Relaxed Short Full", rate: 45.00, delete: 12.00 },
  { icon:a2,title: 'Clothes', text: "Girls Pnk Embro Dell", rate: 61.00, delete: 9.00 },
  { icon:a8,title: 'Clothes', text: "Black Floral Wrap", rate: 76.00, delete: 25.00 },
  { icon:a4,title: 'Mens Fashion', text: "Pure Garment Dye", rate: 68.00, delete: 31.00 },
  // { icon:a1,title: 'Winter Wear', text:"MEN Yarn Fleece Fluid", rate: 61.00, delete:11.00},
  // { icon:a1,title: 'Winter Wear', text:"Mens Winter Leather", rate: 32.00, delete:20.00},
  // { icon:a1,title: 'Jackets', text:"Mens Winter Leather", rate: 50.00, delete:25.00},
  // { icon:a1,title: 'Shorts', text:"Better Basics French", rate: 20.00, delete:10.00},
];


const categories = [
  { icon: <img src={l1} alt="Profile" width="24" height="24" />, title: 'Clothes' },
  { icon: <img src={l2} alt="Profile" width="24" height="24" />, title: 'Footwear' },
  { icon: <img src={l3} alt="Profile" width="24" height="24" />, title: 'Jewelry' },
  { icon: <img src={l4} alt="Profile" width="24" height="24" />, title: 'Perfume' },
  { icon: <img src={l5} alt="Profile" width="24" height="24" />, title: 'Cosmetics' },
  { icon: <img src={l6} alt="Profile" width="24" height="24" />, title: 'Glasses' },
  { icon: <img src={l7} alt="Profile" width="24" height="24" />, title: 'Bags' },
]




const Product = () => {


  return (
    <div>
      <Grid container sx={{ mt: 7, gap: 6,pl:5,pr:5 }}>



        <Grid item xs={3}>
          <Grid item sx={{ border: '1px solid #ddd', borderRadius: 2, height: 400 }}>
            <Typography variant="h6" sx={{ p: 3, letterSpacing: '2px', fontSize: '18px', fontWeight: 'bold' }}>
              CATEGORY
            </Typography>

            <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
              {categories.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center', // Aligns items vertically
                    justifyContent: 'space-between', // Distributes content evenly
                    px: 2, // Adds padding for spacing
                    py: 1 // Adds vertical padding
                  }}
                >
                  {/* Icon and Title Section */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#787880' }}>
                    <Avatar sx={{ height: 30, width: 30, background: 'white' }}>
                      {item.icon}
                    </Avatar>
                    <Typography>{item.title}</Typography>
                  </Box>

                  {/* "+" Symbol */}
                  <Typography sx={{ fontWeight: 'bold' }}>+</Typography>
                </Box>
              ))}
            </Grid>

          </Grid>

          <Grid item sx={{ mt: 5, borderRadius: 2 }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold', pl: 3, letterSpacing: '2px', color: '#787880' }}>
              BEST SELLERS
            </Typography>
            <Box>
              <Grid container direction="column" spacing={2} sx={{pt:2}}>
                {products.map((product) => (
                  <Grid item key={product.id}>
                    <Card sx={{ display: "flex", alignItems: "center", p: 0, boxShadow: 0 }}>
                      <CardMedia component="img" image={product.image}  alt={product.name} sx={{ width: 80, height: 80, borderRadius: 2 }} />
                      <CardContent sx={{ flex: 1 }}>
                        <Typography variant="body1" fontWeight="bold">{product.name}</Typography>
                        <Rating value={product.rating} precision={0.5} readOnly size="small" />
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
                            {product.originalPrice}
                          </Typography>
                          <Typography variant="h6" color="primary" fontWeight="bold">
                            {product.discountedPrice}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

          </Grid>
        </Grid>


        <Grid item xs={8}  >
          <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: 5 }} >

            <Grid container xs={12} >
              <AppBar position='static' sx={{ background: 'white', boxShadow: 'none', color: 'black', borderBottom: '1px solid #ddd' }}>
                <Typography sx={{ mb: 1, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 17 }}>
                  New Arrivals
                </Typography>
              </AppBar>
              <Grid item sx={{ mt: 2 }}>
                {newArrivals.map((item, index) => (
                  <Box key={index}>
                    <CustomProductCard
                     icon={<img src={item.icon} alt={item.title} style={{ width: 40, height: 40 }} />}
                      title={item.title}
                      text={item.text}
                      rate={item.rate}
                      delete1={item.delete}  
                     />
                  </Box>
                ))}
              </Grid>
            </Grid>

            <Grid container xs={12}>
              <AppBar position='static' sx={{ background: 'white', boxShadow: 'none', color: 'black', borderBottom: '1px solid #ddd' }}>
                <Typography sx={{ mb: 1, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 17 }}>
                  Trending
                </Typography>
              </AppBar>
              <Grid item sx={{ mt: 2 }}>
                {newArrivals.map((item, index) => (
                  <Box key={index}>
                    <CustomProductCard
                      title={item.title}
                      text={item.text}
                      rate={item.rate}
                      delete1={item.delete} 
                      icon={<img src={item.icon} alt={item.title} style={{ width: 40, height: 40 }} />}
                     />
                  </Box>
                ))}
              </Grid>
            </Grid>

            <Grid container xs={12}>
              <AppBar position='static' sx={{ background: 'white', boxShadow: 'none', color: 'black', borderBottom: '1px solid #ddd' }}>
                <Typography sx={{ mb: 1, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 17 }}>
                  Top Rated
                </Typography>
              </AppBar>
              <Grid item sx={{ mt: 2 }}>
                {newArrivals.map((item, index) => (
                  <Box key={index}>
                    <CustomProductCard
                      title={item.title}
                      text={item.text}
                      rate={item.rate}
                      delete1={item.delete} 
                      icon={<img src={item.icon} alt={item.title} style={{ width: 40, height: 40 }} />}
                       />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={24} sx={{ mt: 3 }}>
            <Typography sx={{ borderBottom: '1px solid #ddd', width: '100%', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 17, pb: 0.5 }}>
              Deal Of The Day
            </Typography>

            <Card sx={{ width: '100%', boxShadow: 0, border: '1px solid #ddd', borderRadius: 3, mt: 2, display: 'flex', p:2 }}>
              <CardMedia component="img" width='200'  height="300" image={shampoo} alt="Product" sx={{ p: 2 }} />
              <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                  <Rating value={3} readOnly size="small" />
                  <Typography variant="body2" color="textSecondary">(3.0)</Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  SHAMPOO, CONDITIONER & FACEWASH PACKS
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                </Typography>
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <Typography variant="h5" color="error" fontWeight="bold">$150.00</Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ textDecoration: "line-through" }}>$200.00</Typography>
                </Box>
                <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#ff4081", "&:hover": { backgroundColor: "#d81b60" } }}>
                  ADD TO CART
                </Button>
                <Box mt={2}>
                  <Typography variant="body2">ALREADY SOLD: 20 | AVAILABLE: 40</Typography>
                  <LinearProgress variant="determinate" value={(20 / 40) * 100} sx={{ height: 8, borderRadius: 5, mt: 1 }} />
                </Box>
                <Box mt={2} textAlign="center">
                  <Typography variant="body2" fontWeight="bold" color="error">HURRY UP! OFFER ENDS.</Typography>
                  <Box display="flex" justifyContent="center" gap={2} mt={1}>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>




    </div>
  )
}

export default Product;



