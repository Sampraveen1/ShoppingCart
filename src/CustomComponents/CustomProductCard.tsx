import { Avatar, Box, Grid, Link, Paper, Typography } from '@mui/material';
import React from 'react'


interface ProductCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    rate: number;
    delete1: number

}



const CustomProductCard: React.FC<ProductCardProps> = ({ icon, title, text, rate, delete1 }) => {
    return (
        <div>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 1,
                    borderRadius: 3,
                    boxShadow: 0,
                    border:'1px solid #ddd',
                    textAlign: 'left',
                    width: '100%',
                    height: 80,
                    margin:2
                }}
            >
                <Avatar
                    variant='square'
                    sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 1,
                        mr: 2
                    }}
                >
                    {icon}
                </Avatar>

                <Grid container sx={{ display: 'flex' }} >
                    <Grid item>
                        <Link href="#"  color="text.secondary" sx={{ mt: 1, cursor: 'pointer', display: 'block',textDecoration:'none',color:'black',fontSize:'bold',fontFamily:'Poppins, sans-serif' }}>
                            {text}
                        </Link>
                        <Link href="#" color="text.secondary" sx={{ mt: 1, cursor: 'pointer', display: 'block',textDecoration:'none',fontFamily:'Poppins, sans-serif' }}>
                            {title}
                        </Link>
                        <Box  sx={{display:'flex',gap:1,p:1}}>
                        <Typography variant="body2" color="red"  >
                            ${rate}  
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{textDecoration:'line-through'}} >
                            ${delete1}  
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default CustomProductCard;